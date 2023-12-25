/* eslint-disable react/prop-types */
import { useState } from "react";
import { useSelector } from "react-redux";
import { IconClose } from "../../assets/icons";
import Image from "./Image";

function UploadProfilePhoto({ passFile = null, passError = null }) {
  const [data, setData] = useState();
  const [src, setSrc] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { userData } = useSelector((state) => state.auth);

  const previewCapturedImage = (e) => {
    setError();
    setSrc();
    setData();
    passFile();
    passError(false);

    const fileData = e.target.files[0];
    setData(fileData);

    if (fileData) {
      if (fileData.size > 5242880) {
        setError("Selected image is larger than 5MB. Try smaller one.");
        passError(true);
        return;
      }

      passFile(fileData);

      const reader = new FileReader();

      reader.readAsDataURL(fileData);
      reader.onloadstart = () => setLoading(true);
      reader.onload = () => {
        setSrc(reader.result);
      };
      reader.onloadend = () => setLoading(false);
    }
  };

  return (
    <div className="text-center space-y-4">
      <div
        className={`bg-white border-4   ${
          error ? "border-red-600" : "border-green-700"
        }  w-32 h-32 mx-auto rounded-full overflow-hidden p-1`}
      >
        <div
          className={`bg-green-700 duration-500 rounded-full ease-in-out w-full h-full 
          absolute inset-0 z-10 flex items-center justify-center
            ${loading ? "opacity-100 animate-pulse" : "opacity-0"}`}
        ></div>

        <Image
          src={src || "/default-avatar.png"}
          alt={userData?.name || "Avatar"}
          className="rounded-full"
        />
      </div>

      <div className="space-y-2">
        {data && (
          <div
            className={`flex items-center gap-2 justify-center ${
              error ? "text-red-600" : "text-green-500"
            }`}
          >
            <p className="text-sm">{data?.name}</p>

            <div
              onClick={() => {
                setSrc();
                setError();
                setData();
                passFile();
                passError(false);
              }}
              className=" cursor-pointer text-lg"
            >
              <IconClose />
            </div>
          </div>
        )}

        {error && (
          <p className="w-fit text-red-600 text-sm font-medium mx-auto">
            {error}
          </p>
        )}

        <label
          className=" cursor-pointer w-fit mx-auto block"
          htmlFor="choose-profile-pic"
        >
          <p className="font-semibold">Choose a new one</p>
        </label>

        <input
          className="hidden"
          id="choose-profile-pic"
          type="file"
          onChange={previewCapturedImage}
        />
      </div>
    </div>
  );
}

export default UploadProfilePhoto;
