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
const base1 = "/:locale(en)";

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
    </div>
  );
}

export default App;
