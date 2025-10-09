"use client";

import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { createPost } from "@/lib/api";

type FormValues = {
  title: string;
  description: string;
  tags: string;
  image: FileList | null;
};

export default function CreatePostPage() {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      // formData.append("tags", data.tags);   //it will skip for now
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      // post using api
      createPost(formData);


      reset();
      setPreview(null);
    } catch (err) {
      console.error(err);
      alert("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full border rounded px-3 py-2"
            type="text"
            placeholder="Enter post title"
          />
          {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description")}
            className="w-full border rounded px-3 py-2"
            rows={4}
            placeholder="Enter post description"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block mb-1 font-medium">Tags (comma-separated)</label>
          <input
            {...register("tags")}
            className="w-full border rounded px-3 py-2"
            type="text"
            placeholder="tag1, tag2"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">Image</label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    field.onChange(e.target.files);
                    if (e.target.files && e.target.files.length > 0) {
                      setPreview(URL.createObjectURL(e.target.files[0]));
                    } else {
                      setPreview(null);
                    }
                  }}
                  className="w-full"
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 w-full max-h-64 object-contain rounded border"
                  />
                )}
              </>
            )}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
