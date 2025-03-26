import React, { useEffect, useState } from "react";
import "./styles.css";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import COLOR from "../../../../config/color";
import { onValue, push, ref } from "firebase/database";
import { database } from "../../../../firebase";

function AboutPage() {
  const [chatData, setChatData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getChatData();
  }, []);

  const getChatData = async () => {
    const dbRef = ref(database, "chats");
    await onValue(dbRef, (snapShot) => {
      if (snapShot.exists()) {
        setChatData(Object.values(snapShot.val()));
      }
    });
  };

  const handleMessageSend = () => {
    if (message == "") {
      alert("Please enter message");
    } else {
      push(ref(database, "chats/"), {
        message: message,
      });
      setMessage("");
    }
  };

  return (
    <div className="aboutUsBaseContainer">
      <div className="aboutUsChatContainer">
        {chatData.length == 0 ? (
          <p>No Chat Available</p>
        ) : (
          <>
            {chatData.map((item) => {
              return <p>{item.message}</p>;
            })}
          </>
        )}
      </div>
      <div className="aboutUsMessageContainer">
        <CustomInput
          placeholder={"Enter Message"}
          inputValue={message}
          onChangeText={(e) => setMessage(e.target.value)}
        />
        <CustomButton
          title={"Send"}
          backgroundColor={COLOR.blackColor}
          color={COLOR.whiteColor}
          onClick={handleMessageSend}
        />
      </div>
    </div>
  );
}

export default AboutPage;
