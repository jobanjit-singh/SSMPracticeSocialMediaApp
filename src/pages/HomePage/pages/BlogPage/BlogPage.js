import React from "react";
import "./styles.css";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import COLORS from "../../../../config/color";
import { useNavigate } from "react-router-dom";

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div className="blogPageBaseContainer">
      <div className="blogPageContentContainer"> </div>
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
