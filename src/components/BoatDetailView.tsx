import { Boat } from "@/types";

export default function BoatDetailView(props: { boat: Boat }) {
  const boat = props.boat;
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium">{boat.name}</h1>
        <p className="text-lg text-primary">{boat.description}</p>
      </div>
      <p>Daily price: {boat.dailyPrice}</p>
    </div>
  );
}
