import React, { useEffect, useState } from "react";
import "./styles.css";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import COLORS from "../../../../config/color";
import { useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import COLOR from "../../../../config/color";
import { database } from "../../../../firebase";
import { get, child, ref } from "firebase/database";

export default function BlogPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    getDataOfBlog();
  }, []);

  const getDataOfBlog = async () => {
    setIsLoading(true);
    const dbRef = ref(database, "blogs");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      setBlogData(Object.values(snapshot.val()));
      setIsLoading(false);
      console.log(snapshot.val());
    } else {
      setIsLoading(false);
      setBlogData([]);
      alert("No Data Found");
    }
  };

  return (
    <div className="blogPageBaseContainer">
      <div className="blogPageContentContainer">
        {isLoading ? (
          <RotatingLines
            strokeWidth="2"
            width="50"
            strokeColor={COLOR.blackColor}
          />
        ) : (
          <div className="blogPageContentBaseContainer">
            {blogData.length == 0 ? (
              <p>No Data Found</p>
            ) : (
              blogData.map((item) => {
                return (
                  <div className="blogPageItemBaseContainer">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
      <div className="blogPageAddButtonContainer">
        <CustomButton
          backgroundColor={COLORS.baseColorDark}
          title={"Add Blog"}
          color={COLORS.whiteColor}
          onClick={() => navigate("/new-blog")}
        />
      </div>
    </div>
  );
}
