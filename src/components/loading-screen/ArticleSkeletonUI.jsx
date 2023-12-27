function ArticleSkeletonUI() {
  return (
    <section className="py-32 space-y-14 fixed inset-0 z-40 bg-white">
      <div className="container">
        <div className="space-y-3">
          <div className="max-w-[180px] h-[25px] mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="max-w-[900px] h-[70px] mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="max-w-[1000px] h-[70px] mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
          <div className="max-w-[250px] h-[25px] mx-auto bg-gray-300 animate-pulse rounded-xl"></div>
        </div>
      </div>
      <div className="w-full h-[350px] overflow-hidden bg-gray-300 animate-pulse rounded-t-[100px]"></div>
    </section>
  );
}

export default ArticleSkeletonUI;
