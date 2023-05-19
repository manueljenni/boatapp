import Image from "next/image";

export default function BoatPreview() {
  return (
    <div className="box rounded-lg w-full h-full bg-neutral-100 shadow-sm border border-neutral-200">
      <div>
        <Image
          src={"/img/Azzam.jpg"}
          alt="Azzam yacht"
          width={100}
          height={50}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="px-4 py-4">
        <h1 className="text-lg font-medium">Azzam</h1>
        <p>A beautiful yacht, very very beautiful.</p>
        <p className="text-primary text-xs pt-1">$12K | Abu Dhabi, UAE </p>
      </div>
    </div>
  );
}
