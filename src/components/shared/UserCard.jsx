/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Image from "./Image";
import { assetService } from "../../service";
import { IconArrowLeft } from "../../assets/icons";

function UserCard({ user }) {
  const imgSrc = user?.profilePicId
    ? assetService.getAssetPreview(user.profilePicId)
    : "/default-avatar.png";

  return (
    <div
      key={user.$id}
      className="w-full h-[300px] border border-black flex items-end rounded-2xl overflow-hidden hover:scale-95 duration-300 group"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden group-hover:scale-110 duration-300 bg-white">
        <Image src={imgSrc} alt={user.name} />
      </div>

      <div className="bg-white w-full p-4 border-t border-black rounded-t-2xl">
        <p className="font-semibold">{user.name}</p>

        <Link
          to={`/@${user.username}`}
          className="flex items-center justify-between"
        >
          <p className="text-sm  italic cursor-pointer text-green-500">
            @{user.username}
          </p>
          <div className="text-2xl">
            <IconArrowLeft />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
