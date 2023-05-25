"use client";
import { deleteBoat, getAccessToken } from "@/DataController";
import BoatDetailView from "@/components/BoatDetailView";
import Button from "@/components/Button";
import DeleteButton from "@/components/DeleteButton";
import { Boat } from "@/types";
import { useState } from "react";
import UpdateForm from "./UpdateForm";

export default function BoatDetailAndUpdateView(props: { boat: Boat }) {
  const [showEditView, setShowEditView] = useState(false);
  function toggleEditView(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setShowEditView((prevShowEditView) => !prevShowEditView);
  }
  async function handleBoatDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const isDeleted = await deleteBoat(props.boat.id, getAccessToken());
    if (isDeleted.ok) {
      window.location.href = "/";
    }
  }

  return (
    <div className="mt-12">
      {!showEditView && (
        <div className="flex flex-col space-y-12">
          <BoatDetailView boat={props.boat} />
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6 justify-center">
            <span>
              <Button text={"Edit this boat"} onClick={toggleEditView} />
            </span>
            <span>
              <DeleteButton text={"Delete this boat"} onClick={handleBoatDelete} />
            </span>
          </div>
        </div>
      )}
      {showEditView && (
        <div className="h-full flex flex-col justify-center space-y-4">
          <UpdateForm boat={props.boat} />
          <button onClick={toggleEditView}>
            <p className="text-center text-primary underline undelrine-primary underline-offset-4">
              Exit
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
