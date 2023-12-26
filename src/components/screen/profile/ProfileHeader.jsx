/* eslint-disable react/prop-types */
import { IconSuccess } from "../../../assets/icons";
import { assetService } from "../../../service";
import Image from "../../shared/Image";

function ProfileHeader({ profile }) {
  const imgSrc = profile?.profilePicId
    ? assetService.getAssetPreview(profile.profilePicId)
    : "/default-avatar.png";

  return (
    <section className="min-h-full pb-4">
      <div className="w-full h-[250px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="container -mt-20">
        <div className="text-center space-y-3">
          <div className="w-[150px] h-[150px] mx-auto rounded-full p-1 bg-white">
            {profile.isEmailVerified && (
              <div
                title="User is verified"
                className=" bg-green-600 text-white rounded-full p-1 text-xl border-4 border-white
                absolute z-10 bottom-2 right-2"
              >
                <IconSuccess />
              </div>
            )}
            <Image className="rounded-full" src={imgSrc} />
          </div>
          <p className=" text-green-600">@{profile?.username}</p>
          <h1 className="text-4xl font-semibold">{profile?.name}</h1>
          <p className="max-w-xl mx-auto">{profile?.bio}</p>

          <p className="font-bold">33.5K Posts</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileHeader;
