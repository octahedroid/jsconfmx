import React from "react";
import ImageProvider from "./fluid-image-provider";
/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";

const Speaker = props => {
  return (
    <div
    className="w-1/3 mb-4 relative min-h-full h-speaker card-container">
      <div className="card">
      {props.children}
      </div>
    </div>
  );
};
Speaker.Back = () => (
  <div className="back absolute t-0 l-0 w-full p-2 " >
    <ImageProvider
      src="carta_posterior.jpg"
      className="border-2 border-darkPrimary rounded-lg h-speaker"
    />
  </div>
);
Speaker.Front = props => (
  <div className="front p-2 bg-white absolute w-full " >
    <div className="p-4 rounded-lg h-speaker border-2 border-darkPrimary">
      <div className="border-2 border-success p-2 rounded-lg">
        {props.children}
      </div>
    </div>
  </div>
);
Speaker.Image = props => (
  <ImageProvider {...props} className="rounded-lg h-66" />
);

Speaker.Info = props => {
  const { theme } = useThemeUI();
  return (
    <div
      className="w-full bg-success"
      sx={{
        borderRadius: "0px 0px 0.5rem 0.5rem",
        minHeight: "80px",
        textAlign: "center",
        "::before": {
          content: '""',
          display: "block",
          background: theme.colors.success,
          position: "relative",
          width: "100%",
          borderRadius: "70% 70% 0 0",
          height: "15px",
          marginTop: "-15px"
        }
      }}
    >
      {props.children}
    </div>
  );
};

Speaker.Group = props => (
  <div className="flex flex-wrap w-full clearfix">{props.children}</div>
);

export default Speaker;
