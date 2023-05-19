export default function BoatSkeleton() {
  return (
    <div className="box rounded-lg w-full h-64 bg-neutral-100 shadow-sm border border-neutral-200 flex flex-col justify-end animate-pulse">
      <div className="px-4 py-4">
        <h1 className="text-lg font-medium bg-neutral-200 h-6 w-2/3 mb-2"></h1>
        <p className="bg-neutral-200 h-4 w-1/2 mb-2"></p>
        <p className="text-primary text-xs pt-1 bg-neutral-200 h-3 w-1/3"></p>
      </div>
    </div>
  );
}
