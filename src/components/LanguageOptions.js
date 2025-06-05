import React from "react";
import "../CSS/LanguageOptions.css";

const LanguageOptions = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    "हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்",
    "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ"
  ];

  const filteredLanguages =
    selectedLanguage === "English"
      ? languages
      : languages.filter((lang) => lang !== selectedLanguage);

  return (
    <div className="languages">
      Google offered in:{" "}
        <span className="lang-links">
            {selectedLanguage !== "English" && (
                <span
                    className="lang"
                    onClick={() => onLanguageChange("English")}
                >
                    English
                </span>
            )}
            {filteredLanguages.map((lang, idx) => (
                <span
                    key={idx}
                    className="lang"
                    onClick={() => onLanguageChange(lang)}
                >
                    {lang}
                </span>
            ))}
        </span>
    </div>
  );
};

export default LanguageOptions;