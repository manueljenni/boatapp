"use client";
import { logout } from "@/dataController";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    logout();
    window.location.href = "/login";
  }, []);
  return <>Logging out...</>;
}
