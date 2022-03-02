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
import jail from "../../images/jail.png";
import penalty from "../../images/penalty.png";
import cross from "../../images/cross.png";
import paper from "../../images/paper.png";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
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
          <PricingHeading>{t("appeal_intro1")}</PricingHeading>
          <PricingHeading> {t("appeal_intro2")}</PricingHeading>
          <PricingContainer>
            <PricingCardInfo>
              <PricingCardIcon>
                <img src={jail} width={40} height={40} />
              </PricingCardIcon>
              <PricingCardPlan>{t("col1")}</PricingCardPlan>
              <PricingCardFeatures></PricingCardFeatures>
            </PricingCardInfo>

            <PricingCardInfo>
              <PricingCardIcon>
                <img src={penalty} width={40} height={40} />
              </PricingCardIcon>
              <PricingCardPlan>{t("col2")}</PricingCardPlan>
            </PricingCardInfo>

            <PricingCardInfo>
              <PricingCardIcon>
                <img src={cross} width={40} height={40} />
              </PricingCardIcon>
              <PricingCardPlan>{t("col3")}</PricingCardPlan>
            </PricingCardInfo>

            <PricingCardInfo>
              <PricingCardIcon>
                <img src={paper} width={40} height={40} />
              </PricingCardIcon>
              <PricingCardPlan>{t("col4")}</PricingCardPlan>
            </PricingCardInfo>
          </PricingContainer>
          <PricingHeading>{t("appeal_info1")}</PricingHeading>
          <PricingHeading>{t("appeal_info2")}</PricingHeading>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
