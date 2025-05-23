import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function ImageSkeleton() {
  return (
    <Skeleton
      className="absolute inset-0 w-full h-full"
      borderRadius={"14px"}
    />
  );
}
