import React from "react";
import DrawerAppBar from "../components/homeContainer";
import AlertSnackbar from "../components/alertSnackbar";
import ImageDialog from "../components/imageDialog";

const Home = () => {
  return (
    <>
      <DrawerAppBar />
      <AlertSnackbar />
      <ImageDialog />
  
    </>
  );
};

export default Home;
