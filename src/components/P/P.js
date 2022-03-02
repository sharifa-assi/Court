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
  PSection,
  PWrapper,
  PHeading,
  PContainer,
  PCard,
  PCardInfo,
  PCardIcon,
  PCardPlan,
  PCardFeatures,
  PCardFeature,
} from "./P.elements";

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

function P() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PSection>
        <PWrapper>
          <PHeading>{t("delay_title1")}</PHeading>
          <PHeading>{t("delay_title2")}</PHeading>
          <PContainer>
            <PCard>
              <PCardInfo>
                <PCardIcon>
                  <img src={half} width={40} height={40} />
                </PCardIcon>
                <PCardPlan>{t("r1")}</PCardPlan>
                <PCardFeatures>
                  <PCardFeature>{t("r1_detail")}</PCardFeature>
                </PCardFeatures>
              </PCardInfo>
            </PCard>
            <PCard>
              <PCardInfo>
                <PCardIcon>
                  <img src={schedule} width={40} height={40} />
                </PCardIcon>
                <PCardPlan>{t("r2")}</PCardPlan>

                <PCardFeatures>
                  <PCardFeature>{t("r2_detail")}</PCardFeature>
                </PCardFeatures>
              </PCardInfo>
            </PCard>
            <PCard>
              <PCardInfo>
                <PCardIcon>
                  <img src={two} width={40} height={40} />
                </PCardIcon>
                <PCardPlan>{t("r3")}</PCardPlan>

                <PCardFeatures>
                  <PCardFeature>{t("r3_detail")}</PCardFeature>
                </PCardFeatures>
              </PCardInfo>
            </PCard>
          </PContainer>
        </PWrapper>
      </PSection>
    </IconContext.Provider>
  );
}
export default P;
