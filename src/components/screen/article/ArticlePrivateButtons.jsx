/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ArticlePrivateButtons({ post }) {
  const { userData } = useSelector((state) => state.auth);

  return (
    <>
      {userData && post?.user?.$id === userData.$id && (
        <div
          className="fixed bottom-0 left-0 bg-white w-full h-auto border-t border-b
         border-gray-500 py-4"
        >
          <div className="container flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">
                Post id: <span className="font-normal">{post.$id}</span>
              </p>
              <p className="font-semibold text-sm">
                Last updated:{" "}
                <span className="font-normal">
                  {new Date(post.$updatedAt).toDateString()}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <p
                className="px-6 py-2 text-sm cursor-pointer rounded-full
              hover:bg-red-600 hover:text-white duration-300"
              >
                Delete
              </p>
              <Link
                to={`/edit/${post.$id}`}
                className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-800 text-white duration-300"
              >
                <p className="text-sm">Update</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ArticlePrivateButtons;
