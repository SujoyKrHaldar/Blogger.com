/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IconArrowLeft } from "../../assets/icons";
import { assetService } from "../../service";
import Image from "./Image";

function ArticleCard({ data }) {
  const imgSrc = data?.user?.profilePicId
    ? assetService.getAssetPreview(data.user.profilePicId)
    : "/default-avatar.png";

  return (
    <div
      className="border border-black rounded-xl overflow-hidden flex flex-col gap-4 justify-between
      w-full h-auto hover:scale-95 duration-300 group"
    >
      {data.user && (
        <div className="absolute z-10 top-4 right-4 w-10 h-10 rounded-full border-4 border-white overflow-hidden">
          <Image src={imgSrc} alt={data.user.name} />
        </div>
      )}

      <div>
        <div className="w-full h-[180px] overflow-hidden group-hover:scale-110 duration-300 bg-white">
          <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>

        <div className="px-5 pt-5 border-t border-black w-full bg-white">
          <div className="space-y-2">
            <p className="text-xs text-gray-500">
              {new Date(data.$createdAt).toDateString()}
            </p>
            <p className="font-bold text-lg leading-6 first-letter:uppercase">
              {data.title}
            </p>
            {data.user && (
              <p className="text-sm">
                by{" "}
                <Link
                  to={`/author/${data.user.username}`}
                  className="font-semibold text-green-600"
                >
                  {data.user.name}
                </Link>
              </p>
            )}
            <p className="text-sm first-letter:uppercase">
              {data.description.slice(0, 80)} ...
            </p>
          </div>
        </div>
      </div>

      <Link
        to={`/post/${data.slug}`}
        className="flex items-center justify-between px-5 pb-5"
      >
        <p className="font-medium">Read Article</p>
        <div className="text-2xl">
          <IconArrowLeft />
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
