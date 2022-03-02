import React from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";
import P2 from "../../components/Pricing/P2";
import Info2 from "../../components/InfoSection/Info2";
import Info3 from "../../components/InfoSection/Info3";
import Info4 from "../../components/InfoSection/Info4";

function Home() {
  return (
    <>
      <Info2 {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <P2 />
      <Info3 {...homeObjTwo} />
      <Info4 {...homeObjFour} />
      <Pricing />
    </>
  );
}

export default Home;
