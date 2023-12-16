/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";
import { HIDE_NOTIFICATION } from "../../global";
import { IoMdClose, IoIosWarning } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { MdError } from "react-icons/md";
import { useEffect } from "react";

const Notification = () => {
  const { isVisible, notification, isLoading } = useSelector(
    (state) => state.notification
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(HIDE_NOTIFICATION());
  };

  useEffect(() => {
    const closeNotification = setTimeout(() => {
      if (!isLoading) handleClose();
      return;
    }, 4000);

    return () => clearTimeout(closeNotification);
  }, [isVisible, isLoading]);

  return (
    <div
      className={`w-full z-10 overflow-hidden pointer-events-auto duration-500 ease-in-out flex items-center
      ${isVisible ? "h-[40px] py-2" : "h-0 py-0"}  
      ${notification?.type === "SUCCESS" && "bg-green-700 text-white"} 
      ${notification?.type === "ERROR" && "bg-red-500 text-white"}
      ${notification?.type === "WARNING" && "bg-yellow-600 text-white"}`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="animate-spin h-4 w-4 border-2 border-transparent border-l-white border-t-white rounded-full"></div>
          ) : (
            <>
              {notification?.type === "ERROR" && (
                <div className="text-red-300 ">
                  <MdError />
                </div>
              )}

              {notification?.type === "WARNING" && (
                <div className="text-yellow-100 pl-1">
                  <IoIosWarning />
                </div>
              )}

              {notification?.type === "SUCCESS" && (
                <div className="text-green-200 bg-green-600 rounded-full duration-200 p-[0.2rem] cursor-pointer">
                  <TiTick />
                </div>
              )}
            </>
          )}
          <p className="text-sm">{notification?.message}</p>
        </div>

        {!isLoading && (
          <div
            onClick={handleClose}
            className={`rounded-full duration-200 p-1 cursor-pointer 
                ${notification?.type === "SUCCESS" && "hover:bg-green-600"} 
                ${notification?.type === "ERROR" && "hover:bg-red-400"}
                ${notification?.type === "WARNING" && "hover:bg-yellow-500"}`}
          >
            <IoMdClose />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
