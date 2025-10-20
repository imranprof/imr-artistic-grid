"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import axios from "@/lib/axios";
import HomeArtGallery from "@/components/gallery/HomeArtGallery";

interface UserProfile {
  id: number;
  username: string;
  profile: {
    about: string;
    avatar_url?: string;
    name: string;
  }
}

export default function ProfilePage() {
  const { username } = useParams();
  console.log("params  ", username)
  const [userProfile, setuserProfile] = useState<UserProfile | null>(null);
  const [isOwner, setIsOwner] = useState(false);
  const { user, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    // fetch profile data by username
    const fetchProfile = async () => {
      const res = await axios.get(`/api/users/${username}`);
      console.log(res.data)
      setuserProfile(res.data);
    };

    fetchProfile();
  }, [username]);

  useEffect(() => {
    if (userProfile && user) {
      setIsOwner(userProfile?.id === user.id);
    }
  }, [userProfile, user]);

  if (!userProfile) return <div className="flex justify-center mt-20 text-gray-500">Loading...</div>;

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative w-32 h-32">
          <Image
            src={userProfile.profile.avatar_url || "/assets/imgs/gallery/img-4.jpg"}
            alt={userProfile.username}
            fill
            className="rounded-full object-cover border"
          />
        </div>
        <h2 className="text-2xl font-semibold">{userProfile.profile.name || userProfile.username}</h2>
        <p className="text-gray-500">@{userProfile.username}</p>
        {userProfile.profile.about && <p className="max-w-md text-gray-600">{userProfile.profile.about}</p>}

        <div className="flex gap-3 mt-4">
          {isOwner ? (
            <>
              <Button variant="outline">Share</Button>
              <Button>Edit Profile</Button>
            </>
          ) : (
            <>
              <Button variant="outline">Share</Button>
              <Button>Follow</Button>
              <Button variant="secondary">Message</Button>
            </>
          )}
        </div>
      </div>

      {/* Posts Section */}
      <div className="container mt-10">
        <div className=" text-[18px] font-medium mb-5 flex justify-center gap-5">
          <span className="cursor-pointer border-b-[2px] border-black">Created</span>
          <span className="cursor-pointer">Saved</span>
        </div>
        <HomeArtGallery />
      </div>
    </div>
  );
}
