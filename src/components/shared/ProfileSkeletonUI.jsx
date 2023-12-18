function ProfileSkeletonUI() {
  return (
    <section className="fixed inset-0 z-40 bg-white">
      <div className="w-full h-[250px] overflow-hidden bg-gray-300 animate-pulse"></div>

      <div className="container -mt-20">
        <div className="space-y-3">
          <div
            className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden 
          bg-gray-300 animate-pulse"
          ></div>
          <div className="max-w-[150px] h-[27px] mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="max-w-[370px] h-[42px] mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="w-[500px] h-[54px] mx-auto bg-gray-300 animate-pulse  rounded-xl"></div>
        </div>
        <div className="w-full h-[100px] mt-8 mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
      </div>
    </section>
  );
}

export default ProfileSkeletonUI;
