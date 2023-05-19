import { Boat } from "@/types";
import BoatPreview from "./BoatPreview";

export default function BoatsGrid(props: { boats: Boat[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {props.boats.map((boat: Boat) => {
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
  );
}
