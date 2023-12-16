/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconClose,
  IconError,
  IconSuccess,
  IconWarning,
} from "../../assets/icons";
import { HIDE_NOTIFICATION } from "../../global";

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
      ${notification?.type === "ERROR" && "bg-red-600 text-white"}
      ${notification?.type === "WARNING" && "bg-yellow-600 text-white"}`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="animate-spin h-4 w-4 border-2 border-transparent border-l-white border-t-white rounded-full"></div>
          ) : (
            <>
              {notification?.type === "ERROR" && (
                <div className="text-red-100 ">
                  <IconError />
                </div>
              )}

              {notification?.type === "WARNING" && (
                <div className="text-white pl-1">
                  <IconWarning />
                </div>
              )}

              {notification?.type === "SUCCESS" && (
                <div className="text-green-600 bg-white rounded-full duration-200 p-[0.1rem] cursor-pointer">
                  <IconSuccess />
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
                ${notification?.type === "ERROR" && "hover:bg-red-500"}
                ${notification?.type === "WARNING" && "hover:bg-yellow-500"}`}
          >
            <IconClose />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
