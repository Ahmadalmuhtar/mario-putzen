import React from "react";
import WelcomeBanner from "./components/WelcomeBanner";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";

const App = () => {
  return (
    <div>
      <WelcomeBanner />
      <Header />
      <NavigationMenu />
    </div>
  );
};

export default App;
