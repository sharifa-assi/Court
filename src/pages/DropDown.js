import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import i18next from "i18next";
import cookies from "js-cookie";

function DropDown() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <img src={Globe} alt="Logo" width="20" height="20" />
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
    </div>
  );
}

export default DropDown;
