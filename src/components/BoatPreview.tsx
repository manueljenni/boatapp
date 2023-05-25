import { BoatPreviewProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function BoatPreview(props: BoatPreviewProps) {
  return (
    <Link href={"/boats/" + props.id}>
      <div className="box rounded-lg w-full h-full bg-neutral-100 shadow-sm border border-neutral-200">
        <div>
          <Image
            src={"/images/Boat.jpg"}
            alt="Boat Cover Image"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="px-4 py-4">
          <h1 className="text-lg font-medium">{props.name}</h1>
          <p>{props.description}</p>
          <p className="text-primary text-xs pt-1">
            $ {props.dailyPrice.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
