import { getAccessToken, getBoatById } from "@/DataController";
import { cookies } from "next/headers";
import BoatDetailAndUpdateView from "./BoatDetailAndUpdateView";

export default async function page({ params }: { params: { boatId: number } }) {
  var fetchBoat = await getBoatById(params.boatId, getAccessToken(cookies()));
  return (
    fetchBoat.ok && (
      <div className="h-full">
        <BoatDetailAndUpdateView boat={fetchBoat.value} />
      </div>
    )
  );
}
