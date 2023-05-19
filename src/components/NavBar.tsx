"use client";
import Button from "./Button";

export default function NavBar() {
  return (
    <div className="flex justify-between mt-12">
      <h1 className="text-2xl font-medium">Boat App</h1>
      <div className="max-w-fit">
        <Button text="Logout" onClick={() => (window.location.href = "/logout")}></Button>
      </div>
    </div>
  );
}
