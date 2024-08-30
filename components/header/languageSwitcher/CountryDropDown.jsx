import React, { useContext, useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./dropdown.module.scss";
import { LanguageContext } from "../../contexts/LanguageContext";

const countries = [
  {
    name: "Česká republika",
    flag: "https://www.zanapo.cz/resources/shared/flags/4x3/cs.svg",
    locale: "cz",
  },
  {
    name: "Slovensko",
    flag: "https://www.zanapo.cz/resources/shared/flags/4x3/sk.svg",
    locale: "sk",
  },
];

const CountryDropDown = () => {
  const { switchLanguage } = useContext(LanguageContext);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
    switchLanguage(country.locale);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        className={styles["selected-flag"]}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <Image
          src={selectedCountry.flag}
          width={32}
          height={24}
          alt={`${selectedCountry.name} flag`}
        />
        <div className={styles.arrow}></div>
      </div>
      {showDropdown && (
        <div className={styles.dropdown}>
          {countries.map((c) => (
            <div
              key={c.name}
              onClick={() => handleCountrySelect(c)}
              className={styles["dropdown-item"]}
            >
              <Image
                src={c.flag}
                width={32}
                height={24}
                alt={`${c.name} flag`}
              />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDropDown;
