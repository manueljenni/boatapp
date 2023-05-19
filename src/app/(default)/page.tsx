"use client";
import BoatsGrid from "@/components/BoatsGrid";
import { getAccessToken, getMe, getMyBoats } from "@/dataController";
import { Boat, Me } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);
  const [me, setMe] = useState<Me | null>(null);
  const [boats, setBoats] = useState<Boat[] | null>(null);

  // Try to get user data (also verifies that user is logged in)
  // If failed, redirect to login page
  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(false);
      const fetchMe = await getMe(getAccessToken());
      if (fetchMe.ok) {
        setMe(fetchMe.value);
      } else {
        window.location.href = "/login";
      }
      const fetchBoats = await getMyBoats(getAccessToken());
      if (fetchBoats.ok) {
        setBoats(fetchBoats.value.boats);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="w-full h-full mt-12">
      <h1 className="text-3xl font-medium mb-8">Welcome!</h1>
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg">My boats</h3>
            <Link href="boats/add">
              <p className="text-md text-primary">+ Add</p>
            </Link>
          </div>
          <BoatsGrid boats={boats ?? []} />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg">Boats for rent</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
        </div>
      </div>
    </div>
  );
}
