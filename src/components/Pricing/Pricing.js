import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import half from "../../images/half.png";
import schedule from "../../images/schedule.png";
import two from "../../images/timer.png";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
    dir: "rtl",
  },
];

function Pricing() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();


  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{t("delay_title1")}</PricingHeading>
          <PricingHeading>{t("delay_title2")}</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <img src={half} width={40} height={40}/>
                </PricingCardIcon>
                <PricingCardPlan>
                {t("r1")}
                </PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature>
                  {t("r1_detail")}
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                <img src={schedule} width={40} height={40}/>
                </PricingCardIcon>
                <PricingCardPlan>
                {t("r2")}
                </PricingCardPlan>
            

                <PricingCardFeatures>
                  <PricingCardFeature>
                  {t("r2_detail")}
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                <img src={two} width={40} height={40}/>
                </PricingCardIcon>
                <PricingCardPlan>
                {t("r3")}
                </PricingCardPlan>
            
                <PricingCardFeatures>
                  <PricingCardFeature>
                  {t("r3_detail")}
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
