import React, {useState} from "react";
import "./CSS/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import Buttons from "./components/Buttons";
import LanguageOptions from "./components/LanguageOptions";
import logo from "./assests/logo.png";

const languageTranslations = {
  English: "I'm Feeling Lucky",
  हिन्दी: "मैं भाग्यशाली महसूस कर रहा हूँ",
  বাংলা: "আমি ভাগ্যবান বোধ করছি",
  తెలుగు: "నాకు అదృష్టం ఉంది అనిపిస్తుంది",
  मराठी: "मी नशिबवान वाटतो",
  தமிழ்: "நான் நற்பேறு பெறுவேன் என்று நினைக்கிறேன்",
  ગુજરાતી: "હું નસીબદાર અનુભવું છું",
  ಕನ್ನಡ: "ನಾನು ಧನ್ಯನಾಗಿ ಅನುಭವಿಸುತ್ತೇನೆ",
  മലയാളം: "എനിക്ക് ഭാഗ്യവാന്‍ എന്ന് തോന്നുന്നു",
  ਪੰਜਾਬੀ: "ਮੈਨੂੰ ਲੱਗਦਾ ਹੈ ਕਿ ਮੈਂ ਖੁਸ਼ਕਿਸਮਤ ਹਾਂ"
};

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <img src={logo} alt="Google Logo" className="logo" />
        <SearchBox />
        <Buttons feelingLucky={languageTranslations[selectedLanguage]}/>
        <LanguageOptions
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;