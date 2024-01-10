/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconClose } from "../../../assets/icons";
import { SHOW_NOTIFICATION } from "../../../global";
import { postService } from "../../../service";
import Image from "../../shared/Image";

function DeleteArticlePopup({ setIsOpen, isOpen, postId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const deletePost = async (id) => {
    setLoader(true);
    try {
      const status = await postService.deletePost(id);
      if (status) {
        navigate(-1);

        dispatch(
          SHOW_NOTIFICATION({
            message: "Article deleted successfully.",
            type: "SUCCESS",
          })
        );
      }
    } catch {
      () =>
        dispatch(
          SHOW_NOTIFICATION({
            message: "Unable to delete post. Please try again later.",
            type: "ERROR",
          })
        );
    } finally {
      setLoader(false);
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 w-full h-full flex items-center justify-center
    bg-[#ffffffa8] backdrop-blur-md duration-200 ease-in-out
    ${
      isOpen
        ? " opacity-100 pointer-events-auto"
        : " opacity-0 pointer-events-none"
    } `}
    >
      <div className="bg-white text-center p-8 border border-black rounded-3xl mb-32 max-w-sm">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <IconClose />
        </div>
        <div className="w-[250px] h-auto mx-auto mb-4">
          <Image src="/delete-item.png" />
        </div>
        <div className="space-y-2 mb-4">
          <p className="text-xl font-semibold">
            Are you sure you want to delete this Article?
          </p>
          <p className="text-sm">
            You will not be able to recover it afterwards.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => deletePost(postId)}
            className="py-3 px-6 rounded-full border border-red-600 bg-red-600 flex items-center justify-center gap-2 w-full"
          >
            {loader && (
              <div className="animate-spin h-4 w-4 border-2 border-red-400 border-l-white rounded-full"></div>
            )}
            <p className="text-white text-sm">
              {loader ? "Deleting" : "Yes, Delete"}
            </p>
          </button>
          {!loader && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="py-3 px-6 rounded-full border border-gray-600 w-full"
            >
              <p className="text-sm text-gray-600">No, Cancel</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeleteArticlePopup;
