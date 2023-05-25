"use client";
import { logout } from "@/DataController";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    logout();
    window.location.href = "/login";
  }, []);
  return <>Logging out...</>;
}
