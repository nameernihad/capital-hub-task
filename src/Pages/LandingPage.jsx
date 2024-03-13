import { Banner } from "../Component/LandingPage/Banner";
import { Campaign } from "../Component/LandingPage/Campaign";
import { Motive } from "../Component/LandingPage/Motive";
import { Needs } from "../Component/LandingPage/Needs";
import { Progress } from "../Component/LandingPage/Progress";
import { Summary } from "../Component/LandingPage/Summary";

export const LandingPage = () => {
  return (
    <>
    <Banner/>
    <Summary/>
    <Motive/>
    <Needs/>
    <Progress/>
    <Campaign/>
    </>
  );
};
