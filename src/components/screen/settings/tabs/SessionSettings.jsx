import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconClose, IconSuccess } from "../../../../assets/icons";
import { SHOW_LOADING, SHOW_NOTIFICATION } from "../../../../global";
import { authService } from "../../../../service";
import SettingsTemplate from "../SettingsTemplate";

function SessionSettings() {
  const [sessionList, setSessionList] = useState();
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const getSessionList = async () => {
    try {
      const { sessions } = await authService.getAllSession();
      setSessionList(sessions.reverse());
    } finally {
      setLoading(false);
    }
  };

  const deleteSession = async (sessionId) => {
    try {
      dispatch(SHOW_LOADING({ message: "Deleting session", type: "WARNING" }));
      await authService.deleteSession(sessionId);

      dispatch(
        SHOW_NOTIFICATION({
          message: "Session deleted successfull",
          type: "SUCCESS",
        })
      );

      getSessionList();
    } catch (error) {
      dispatch(SHOW_NOTIFICATION({ message: error, type: "ERROR" }));
    }
  };

  useEffect(() => {
    getSessionList();
  }, []);

  return (
    <SettingsTemplate title="Session management">
      <div className="space-y-6">
        <p className="leading-7">
          This is a list of devices that have logged into your account.{" "}
          <span className="block">
            Revoke any sessions that you do not recognize.
          </span>
        </p>

        {loading ? (
          [...Array(4)].map((data, id) => (
            <div
              key={id}
              className="w-full h-[155px] bg-gray-200 animate-pulse"
            ></div>
          ))
        ) : (
          <div className="space-y-4">
            {sessionList.map((data) => (
              <div
                key={data.$id}
                className={`py-4 px-6 bg-gray-100 flex items-start justify-between 
                ${!data.current && "hover:border-black"} border 
                ${data.current ? "border-green-500" : "border-gray-300"}
              `}
              >
                <div className="space-y-1">
                  <p className="font-semibold text-xl">{data.ip}</p>
                  <p className="text-sm">
                    {data.clientName} ({data.clientType}) on {data.osName}
                  </p>
                  <p className="text-sm">Country: {data.countryName}</p>
                  <p className="text-sm">Auth Provider: {data.provider}</p>
                  <p className="text-sm">
                    Signed in: {new Date(data.$createdAt).toDateString()}
                  </p>
                </div>
                {data.current ? (
                  <div className="bg-green-500 text-white rounded-full flex items-center gap-1 pr-4 pl-2 py-2">
                    <IconSuccess />
                    <p className="text-xs italic">Current Session</p>
                  </div>
                ) : (
                  <div
                    onClick={() => deleteSession(data.$id)}
                    className=" cursor-pointer"
                  >
                    <IconClose />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </SettingsTemplate>
  );
}

export default SessionSettings;
