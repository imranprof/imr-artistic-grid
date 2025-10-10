'use client'
import { getAllPost } from "@/lib/api";
import Image from "next/image"
import { useEffect, useState } from "react";
import { GallerySkeletonLoader } from "./GallerySkeletonLoader";

// type Props = {
//   galleryData: {
//     id: number;
//     path: string;
//     title: string;
//     description: string;
//     hashtags: string[];
//   }[]
// }

type Post = {
  id: number;
  title: string;
  description: string;
  tags?: string[];
  image_url: string;
  user: number;
};

const HomeArtGallery = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data: Post[] = await getAllPost();
        setPosts(data);
        console.log(posts)
      } catch (err) {
        console.log("Error fatching post.", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [])


  if (loading) {
    return <div className="p-4">
      <GallerySkeletonLoader />
    </div>
  }

  if (posts.length === 0) {
    return <p>No Posts Found</p>
  }

  return (
    <div className="p-4">
      <div className="gallery_wrapper columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {posts.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col cursor-pointer mb-6 break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                alt={item.title}
                src={item.image_url}
                width={400}
                height={0}
                className="w-full h-auto   group-hover:scale-105 transition-all duration-300"
                style={{
                  objectFit: "cover",
                  display: "block"
                }}
                priority
              />
              <div className="absolute rounded-xl w-full h-full bg-black opacity-0 group-hover:opacity-20 transition-all duration-300 top-0" />
            </div>

            <div className="p-3">
              <h3 className="font-medium text-sm truncate">{item.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.description}</p>
              {/* <div className="flex flex-wrap gap-1 mt-2">
                {item.hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeArtGallery