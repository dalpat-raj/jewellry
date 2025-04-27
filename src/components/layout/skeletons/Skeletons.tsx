const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ImageSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden w-48 h-48`}>
      <div className="bg-gray-300 w-full h-full"></div>
    </div>
  );
}
