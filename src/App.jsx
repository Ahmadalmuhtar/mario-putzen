import React from "react";
import WelcomeBanner from "./components/WelcomeBanner";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import PhotoGallery from "./components/PhotoGallery";

const App = () => {
  return (
    <div>
      <WelcomeBanner />
      <Header />
      <NavigationMenu />
      <PhotoGallery />
    </div>
  );
};

export default App;
