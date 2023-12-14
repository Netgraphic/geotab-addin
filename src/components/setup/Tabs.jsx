import { useState } from "react";

import TabGeotab from "./TabGeotab";
import TabSurfsight from "./TabSurfsight";
import TabContact from "./TabContact";
import TabGeneralSettings from "./TabGeneralSettings";

const Tabs = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="tabs">
      <ul id="tabs-nav">
        <li
          className={`tabs-4 ${tab === 1 && "active"}`}
          onClick={() => setTab(1)}
        >
          Datos Geotab
        </li>
        <li
          className={`tabs-4 ${tab === 2 && "active"}`}
          onClick={() => setTab(2)}
        >
          Datos Surfsight
        </li>
        <li
          className={`tabs-4 ${tab === 3 && "active"}`}
          onClick={() => setTab(3)}
        >
          Datos Contacto
        </li>
        <li
          className={`tabs-4 ${tab === 4 && "active"}`}
          onClick={() => setTab(4)}
        >
          Datos Funcionamiento general
        </li>
      </ul>
      <div className="tabs-content">
        <TabGeotab tab={tab} />

        <TabSurfsight tab={tab} />

        <TabContact tab={tab} />

        <TabGeneralSettings tab={tab} />
      </div>
    </div>
  );
};

export default Tabs;
