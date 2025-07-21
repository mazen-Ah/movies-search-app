const SkeletonCard = () => (
  <div className="flex flex-col items-center gap-2 bg-gray-100 rounded-xl shadow-md p-4 w-[220px] h-[380px] min-w-[220px] min-h-[380px] max-w-[220px] max-h-[380px] animate-pulse">
    <div className="rounded-lg bg-gray-300 w-[180px] h-[260px] mb-2" />
    <div className="h-5 w-3/4 bg-gray-300 rounded mb-1" />
    <div className="h-4 w-1/2 bg-gray-200 rounded" />
  </div>
);

export default SkeletonCard;
