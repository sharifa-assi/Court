import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";

import ScrollToTop from "./components/ScrollToTop";
import { Navbar } from "./components";

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
const base = "/:locale(en|ar)?";
const stripLocale = (pathname, locale) => {
  if (!locale) {
    return pathname;
  }

  return pathname.replace(`/${locale}`, "");
};

function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const releaseDate = new Date("2021-03-07");

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div>
      <div>
        <Router>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path={base} component={Home} />
          </Switch>
        </Router>
      </div>
      {/** <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3"> {t("app_title")}</h1>
        <p>{t("intro")}</p>
        <h1 className="font-weight-normal mb-3"> {t("except_title")}</h1>
        <p>{t("except_paragraph")}</p>
        <h4> {t("appeal_intro")}</h4>
        <p>{t("col1")}</p>
        <p>{t("col2")}</p>
        <p>{t("col3")}</p>
        <p>{t("col4")}</p>
        <h6> {t("appeal_info")}</h6>
        <h4> {t("decision")}</h4>
        <h1 className="font-weight-normal mb-3"> {t("wrt1")}</h1>
        <p> {t("wrt1_info")}</p>
        <h1 className="font-weight-normal mb-3"> {t("wrt2")}</h1>
        <p> {t("wrt2")}</p>

        <h4> {t("appeal_decision_title")}</h4>
        <p> {t("d1")}</p>
        <p> {t("d2")}</p>
        <h3> {t("delay_title1")}</h3>
        <h5> {t("delay_title2")}</h5>
        <h2>{t("r1")}</h2>
        <p>{t("r1_detail")}</p>
        <h2>{t("r2")}</h2>
        <p>{t("r2_detail")}</p>
        <h2>{t("r3")}</h2>
        <p>{t("r3_detail")}</p>
      </div>*/}
    </div>
  );
}

export default App;
