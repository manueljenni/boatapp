import { Boat } from "@/types";
import Link from "next/link";
import BoatPreview from "./BoatPreview";

export default function MyBoatsGrid(props: { boats: Boat[] }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {props.boats.length > 0 &&
          props.boats.map((boat: Boat) => {
            return (
              <div id={boat.id.toString()}>
                <BoatPreview
                  name={boat.name}
                  description={boat.description}
                  dailyPrice={boat.dailyPrice}
                />
              </div>
            );
          })}
      </div>
      {props.boats.length == 0 && (
        <Link href={"/boats/add"}>
          <div className="border rounded-lg w-full h-32 flex justify-center items-center">
            <div className="flex flex-col text-center space-y-2">
              <h1 className="text-xl">No boats added</h1>
              <p>Click to add one!</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
