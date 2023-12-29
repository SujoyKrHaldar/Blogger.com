/* eslint-disable react/prop-types */
function SkeletonCard({ height = "h-[400px]" }) {
  return (
    <div
      className={`rounded-xl w-full ${height} duration-300 animate-pulse bg-gray-200`}
    ></div>
  );
}

export default SkeletonCard;
