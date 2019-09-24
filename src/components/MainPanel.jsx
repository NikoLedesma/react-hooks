import React, { useState } from "react";
import ListUserView from "./ListUserView";

const MainPanel = () => {
  const [showList, changeShowList] = useState(false);
  const handleClick = () => {
    changeShowList(!showList);
  };

  return (
    <div>
      <input
        name="showBtn"
        value={(showList ? "Hide" : "Show") + " list"}
        type="button"
        onClick={handleClick}
      />
      {showList && <ListUserView />}
    </div>
  );
};

export default MainPanel;
