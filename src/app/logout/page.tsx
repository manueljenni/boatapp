"use client";
import { logout } from "@/dataController";

export default function page() {
  logout();
  window.location.href = "/login";
  return <>Logging out...</>;
}
