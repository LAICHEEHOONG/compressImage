import React from "react";
import { useSelector } from "react-redux";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InputFileUpload from "./uploadFile";
import LinearWithValueLabel from "./progress";

const UploadPage = () => {
  const progressOpen = useSelector((state) => state.progress.open);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <CloudUploadIcon className="mb-4 mt-12" style={{ fontSize: 300 }} />
      </div>
      {progressOpen ? <LinearWithValueLabel /> : <InputFileUpload />}
    </div>
  );
};

export default UploadPage;
