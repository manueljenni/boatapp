"use client";
import BoatDetailView from "@/components/BoatDetailView";
import Button from "@/components/Button";
import { Boat } from "@/types";
import { useState } from "react";
import UpdateForm from "./UpdateForm";

export default function BoatDetailAndUpdateView(props: { boat: Boat }) {
  const [showEditView, setShowEditView] = useState(false);
  function toggleEditView(e: any) {
    e.preventDefault();
    setShowEditView((prevShowEditView) => !prevShowEditView);
  }
  return (
    <div className="mt-12">
      {!showEditView && (
        <div className="flex justify-between h-screen">
          <BoatDetailView boat={props.boat} />
          <div>
            <Button text={"Edit this boat"} onClick={toggleEditView} />
          </div>
        </div>
      )}
      {showEditView && (
        <div className="h-full">
          <UpdateForm boat={props.boat} />
        </div>
      )}
    </div>
  );
}
