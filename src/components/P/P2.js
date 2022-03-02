import React from "react";

import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";

import cookies from "js-cookie";
import jail from "../../images/jail.png";
import penalty from "../../images/penalty.png";
import cross from "../../images/cross.png";
import paper from "../../images/paper.png";
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
          <PHeading>{t("appeal_intro1")}</PHeading>
          <PHeading> {t("appeal_intro2")}</PHeading>
          <PContainer>
            <PCardInfo>
              <PCardIcon>
                <img src={jail} width={40} height={40} />
              </PCardIcon>
              <PCardPlan>{t("col1")}</PCardPlan>
            </PCardInfo>

            <PCardInfo>
              <PCardIcon>
                <img src={penalty} width={40} height={40} />
              </PCardIcon>
              <PCardPlan>{t("col2")}</PCardPlan>
            </PCardInfo>

            <PCardInfo>
              <PCardIcon>
                <img src={cross} width={40} height={40} />
              </PCardIcon>
              <PCardPlan>{t("col3")}</PCardPlan>
            </PCardInfo>

            <PCardInfo>
              <PCardIcon>
                <img src={paper} width={40} height={40} />
              </PCardIcon>
              <PCardPlan>{t("col4")}</PCardPlan>
            </PCardInfo>
          </PContainer>
          <PHeading>{t("appeal_info1")}</PHeading>
          <PHeading>{t("appeal_info2")}</PHeading>
        </PWrapper>
      </PSection>
    </IconContext.Provider>
  );
}
export default P;
