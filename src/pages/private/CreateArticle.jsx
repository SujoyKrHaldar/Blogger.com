import { useState } from "react";
import { MetaTags, Image } from "../../components";

function CreateArticle() {
  const [currentTab, setCurrentTab] = useState("details");

  return (
    <>
      <MetaTags
        title="Create new Article • Blogger.com"
        description="manage account"
        conicalRoute="/create"
      />

      <section className="pt-32 pb-12 bg-gray-200">
        <div className="container w-full h-full space-y-8">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold">Untitled Article</h1>
              <p className="text-gray-600 text-sm">
                https://blogger.com/article/untitled-article
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="py-2 px-5 rounded-lg bg-white border border-gray-300">
                Save
              </p>
              <p className="py-2 px-5 rounded-lg bg-green-700 text-white">
                Publish
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-300">
            <div className="border-b border-gray-300 flex items-center gap-8 px-12">
              <p
                onClick={() => setCurrentTab("details")}
                className={`border-b cursor-pointer ${
                  currentTab === "details"
                    ? "border-black"
                    : "border-transparent"
                }  py-5`}
              >
                Details
              </p>
              <p
                onClick={() => setCurrentTab("content")}
                className={`border-b cursor-pointer ${
                  currentTab === "content"
                    ? "border-black"
                    : "border-transparent"
                }  py-5`}
              >
                Content
              </p>
            </div>

            {currentTab === "details" && (
              <div className="flex justify-between">
                <div className="pt-8 pb-16 px-12 space-y-8 flex-1 border-r border-gray-300">
                  <div className="space-y-3">
                    <label>Title</label>
                    <input
                      type="text"
                      className={`px-5 py-2 block w-full h-full border outline-none 
                  placeholder:font-light placeholder:text-sm font-regular
                  border-black text-black placeholder:text-gray-8002 rounded-lg
            `}
                    />
                  </div>

                  <div className="space-y-3">
                    <label>Slug</label>
                    <input
                      type="text"
                      className={`px-5 py-2 block w-full h-full border outline-none 
                  placeholder:font-light placeholder:text-sm font-regular
                  border-black text-black placeholder:text-gray-8002 rounded-lg
            `}
                    />
                  </div>

                  <div className="space-y-3">
                    <label>Description</label>
                    <textarea
                      type="text"
                      className={`px-5 py-2 block w-full h-full border outline-none 
                  placeholder:font-light placeholder:text-sm font-regular
                  border-black text-black placeholder:text-gray-8002 rounded-lg
            `}
                    />
                  </div>
                </div>

                <div className="py-8 px-12 flex-1 space-y-8">
                  <div className="space-y-3">
                    <label>Category</label>
                    <input
                      type="text"
                      className={`px-5 py-2 block w-full h-full border outline-none 
                  placeholder:font-light placeholder:text-sm font-regular
                  border-black text-black placeholder:text-gray-8002 rounded-lg
            `}
                    />
                  </div>

                  <div className="space-y-3">
                    <label>Cover Photo</label>
                    <div className="p-8 border border-gray-500 rounded-lg">
                      <div className="text-center space-y-4">
                        <div className="w-[130px] h-auto mx-auto">
                          <Image src="/upload-photo.png" />
                        </div>
                        <p className=" text-xs">
                          Click to add asset or drag and drop from your computer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateArticle;
