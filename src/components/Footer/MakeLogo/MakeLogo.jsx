import React from "react";

const MakeLogo = ({ pathLogo, nomLogo, logoSize }) => {
  return (
    <>
      <img
        src={pathLogo}
        alt={nomLogo}
        style={{
          width: logoSize,
        }}
      />
    </>
  );
};

export default MakeLogo;
