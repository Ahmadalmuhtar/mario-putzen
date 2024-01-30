import React from "react";
import WelcomeBanner from "./components/WelcomeBanner";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import PhotoGallery from "./components/PhotoGallery";
import AboutUs from "./components/AboutUs";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <>
      <WelcomeBanner />
      <Header />
      <NavigationMenu />
      <PhotoGallery />
      <AboutUs />
      <FeatureSection />
    </>
  );
};

export default App;
