import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import i18next from "i18next";
import cookies from "js-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const releaseDate = new Date("2021-03-07");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {languages.map(({ code, name, country_code }) => (
              <Dropdown.Item
                key={country_code}
                onClick={() => i18next.changeLanguage(code)}
                disabled={currentLanguageCode === code}
              >
                <span
                  className={`flag-icon flag-icon-${country_code} mx-2`}
                  style={{
                    opacity: currentLanguageCode === code ? 0.5 : 1,
                  }}
                ></span>

                {name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        {/*    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/list" element={<Listing />} />
      </Routes>
    </BrowserRouter> */}
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3"> {t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
