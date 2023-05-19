"use client";
import Link from "next/link";
import Button from "./Button";

export default function NavBar() {
  return (
    <div className="flex justify-between mt-12">
      <Link href="/">
        <h1 className="text-2xl font-medium">Boat App</h1>
      </Link>
      <div className="max-w-fit">
        <Button text="Logout" onClick={() => (window.location.href = "/logout")}></Button>
      </div>
    </div>
  );
}
