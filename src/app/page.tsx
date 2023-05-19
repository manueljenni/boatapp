"use client";
import { getAccessToken, getMe } from "@/dataController";
import { Me } from "@/types";
import { useEffect, useState } from "react";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);
  const [me, setMe] = useState<Me | null>(null);

  // Try to get user data (also verifies that user is logged in)
  // If failed, redirect to login page
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(false);
      const fetchMe = await getMe(getAccessToken());
      if (fetchMe.ok) {
        setMe(fetchMe.value);
        console.log(me);
      } else {
        // window.location.href = "/login";
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      {isLoading && <p>Is loading!</p>}
      {me && <p>hi, {me.email}</p>}
    </>
  );
}
