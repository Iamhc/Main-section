import "./App.css";
//import React from "react";

import {
  faFile,
  faMobileAlt,
  faRobot,
  faMoneyBill,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "./Components/Card";
import ConverterAppInfo from "./Components/Converterappinfo";

function App() {
  return (
    <div className="App">
      <Card
        prop={{
          name: "Efficient File Converters",
          description: ConverterAppInfo.efficientFileConverters.description,
        }}
        icon={faFile}
      />
      <Card
        prop={{
          name: "Smartphone Apps",
          description: `${ConverterAppInfo.smartphoneApps.android.description} ${ConverterAppInfo.smartphoneApps.ios.description}`,
        }}
        icon={faMobileAlt}
      />
      <Card
        prop={{
          name: "Browser Plugins",
          description: ConverterAppInfo.browserPlugins.description,
        }}
        icon={faGlobe}
      />
      <Card
        prop={{
          name: "GPT Integration",
          description: ConverterAppInfo.gptIntegration.description,
        }}
        icon={faRobot}
      />
      <Card
        prop={{
          name: "Currency Exchange Rate Calculator",
          description:
            ConverterAppInfo.currencyExchangeRateCalculator.description,
        }}
        icon={faMoneyBill}
      />
      <Card
        prop={{
          name: "API Access",
          description: ConverterAppInfo.apiAccess.description,
        }}
        icon={faCode}
      />
    </div>
  );
}

export default App;
