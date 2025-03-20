import React, { useEffect, useState } from "react";
import "./styles.css";
import { RotatingLines } from "react-loader-spinner";
import COLOR from "../../../../config/color";

export default function ProductPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isStatusLoading, setIsStatusLoading] = useState(true);
  const [chatData, setChatData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    if (chatData.length != 0) {
      getStatus();
    }
  }, [chatData]);

  const getChats = () => {
    setIsLoading(true);
    setTimeout(() => {
      setChatData(["Moksh Saini", "Malkeet Singh", "Raghav", "Chahat"]);
      setIsLoading(false);
    }, 5000);
  };

  const getStatus = () => {
    setIsStatusLoading(true);
    setTimeout(() => {
      // setStatusData([
      //   "Moksh Status",
      //   "Malkeet Singh Status",
      //   "Raghav Status",
      //   "Chahat Status",
      // ]);
      setStatusData([]);
      setIsStatusLoading(false);
    }, 5000);
  };

  return (
    <div className="productPageBaseContainer">
      {isLoading ? (
        <RotatingLines strokeColor={COLOR.blackColor} />
      ) : (
        <div className="productPageChatBaseContainer">
          <div className="productChatContainer">
            {chatData.length == 0 ? (
              <p>No Data Found</p>
            ) : (
              <div>
                {chatData.map((item) => {
                  return <p>{item}</p>;
                })}
              </div>
            )}
          </div>
          <hr />
          <div className="productStatusContainer">
            {isStatusLoading ? (
              <RotatingLines strokeColor={COLOR.baseColor} />
            ) : (
              <div>
                {statusData.length == 0 ? (
                  <p>No Data Found</p>
                ) : (
                  <div>
                    {statusData.map((item) => {
                      return <p>{item}</p>;
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
