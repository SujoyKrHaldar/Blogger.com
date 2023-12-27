import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../shared/Input";
import Textarea from "../../shared/Textarea";
import Image from "../../shared/Image";

function ArticleForm() {
  const [currentTab, setCurrentTab] = useState("details");
  const [title, setTitle] = useState();
  const [slug, setSlug] = useState();

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const generateSlugFromTitle = () => {
    const title = watch("title");
    if (!title) return;

    const generatedSlug = title
      ?.toLowerCase()
      .trim()
      .replace(/[^a-zA-Z\d\s]+/g, "-")
      .replace(/\s+/g, "-");
    setValue("slug", generatedSlug);
    setSlug(generatedSlug);
  };

  const handleSlugChange = (e) => {
    const newSlug = e.target.value.replace(/\s+/g, "-");
    setValue("slug", newSlug);
    setSlug(newSlug);
  };

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const createPost = (data) => {
    console.log(data);
  };

  return (
    <section className="pt-32 pb-12 bg-gray-200">
      <form
        onSubmit={handleSubmit(createPost)}
        className="container w-full h-full space-y-8"
      >
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">
              {title || "Untitled Article"}
            </h1>
            <p className="text-gray-600 text-sm">
              https://blogger.com/post/{slug || "untitled-article"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="py-2 px-5 rounded-lg bg-white border border-gray-300"
            >
              <p>Save</p>
            </button>
            <button
              type="submit"
              className="py-2 px-5 rounded-lg bg-green-700 text-white"
            >
              <p>Publish</p>
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-300">
          <div className="border-b border-gray-300 flex items-center gap-8 px-12">
            <p
              onClick={() => setCurrentTab("details")}
              className={`border-b cursor-pointer ${
                currentTab === "details" ? "border-black" : "border-transparent"
              }  py-5`}
            >
              Details
            </p>
            <p
              onClick={() => setCurrentTab("content")}
              className={`border-b cursor-pointer ${
                currentTab === "content" ? "border-black" : "border-transparent"
              }  py-5`}
            >
              Content
            </p>
          </div>

          {currentTab === "details" && (
            <div className="flex justify-between">
              <div className="pt-8 pb-16 px-12 space-y-8 flex-1 border-r border-gray-300">
                <Input
                  label="Title"
                  className="rounded-xl"
                  placeholder="Add a title that describes your article"
                  description="A catchy title can help you hook viewers."
                  onInput={handleTitle}
                  error={errors?.title}
                  errorMessage={errors?.title?.message}
                  {...register("title", {
                    required: "Title is required.",
                    maxLength: {
                      value: 100,
                      message: "Title must be maximum 100 characters long.",
                    },
                  })}
                />

                <div>
                  <Input
                    label="Slug"
                    className="rounded-2xl"
                    autoComplete="off"
                    placeholder="Add a slug for your article"
                    description="Type a unique slug or generate from title, it helps to find your post, https://blogger.com/post/article-unique-slug"
                    onInput={handleSlugChange}
                    error={errors?.slug}
                    errorMessage={errors?.slug?.message}
                    {...register("slug", {
                      required: "Slug is required.",
                      maxLength: {
                        value: 100,
                        message: "Slug must be maximum 20 characters long.",
                      },
                      validate: {
                        noSpaces: (value) => {
                          return (
                            !/\s/.test(value) ||
                            "Username cannot contain spaces."
                          );
                        },
                      },
                    })}
                  />
                  {title && (
                    <p
                      onClick={generateSlugFromTitle}
                      className="text-sm absolute top-1 right-0 cursor-pointer"
                    >
                      Generate from Title
                    </p>
                  )}
                </div>

                <Textarea
                  label="Description"
                  description="Writing descriptions, You can give an overview of your post."
                  placeholder="Tell your viewers about your article"
                  error={errors?.description}
                  errorMessage={errors?.description?.message}
                  {...register("description", {
                    required: "Description is required.",
                    maxLength: {
                      value: 250,
                      message:
                        "Description can have maximum 250 characters only.",
                    },
                  })}
                />
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
      </form>
    </section>
  );
}

export default ArticleForm;

// THUMBNAIL: Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.
// CATEGORY: Add your video to one or more playlists to organize your content for viewers.
// TAGS: Tags can be useful if content in your video is commonly misspelled. Otherwise, tags play a minimal role in helping viewers find your video.
