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
      className="border border-black rounded-xl text-white overflow-hidden flex flex-col gap-0
      w-full h-[400px] hover:scale-95 duration-300 group"
    >
      <div className="w-full h-1/2 overflow-hidden group-hover:scale-110 duration-300 bg-white">
        <Image src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      {data.user && (
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full border-2 border-white overflow-hidden">
          <Image src={imgSrc} alt={data.user.name} />
        </div>
      )}

      <div
        className="p-6 w-full flex-1 flex flex-col justify-between text-black gap-4
        border-t bg-white border-black"
      >
        <div className="space-y-2">
          <p className="font-bold text-xl first-letter:uppercase">
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
            {data.description.slice(0, 100)} ...
          </p>
        </div>

        <Link
          to={`/post/${data.slug}`}
          className="flex items-center justify-between"
        >
          <p className="font-medium">Read Article</p>
          <div className="text-2xl">
            <IconArrowLeft />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ArticleCard;
