/* eslint-disable react/prop-types */
import Image from "../../shared/Image";

function ProfileHeader({ profile }) {
  return (
    <section className="min-h-full pb-4">
      <div className="w-full h-[250px] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>

      <div className="container -mt-20">
        <div className="text-center space-y-3">
          <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden p-2 bg-white">
            <Image
              className="rounded-full"
              src="/default-avatar.png"
              // src="https://plus.unsplash.com/premium_photo-1675034393381-7e246fc40755?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
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
