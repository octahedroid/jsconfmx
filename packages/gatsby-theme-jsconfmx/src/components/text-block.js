import React from "react";
import { Styled, Container } from "theme-ui";
import cx from "classnames";
import Title from "./title";
import Paragraph from "./paragraph";

const TextBlock = ({ centered, children, bg, className, container }) => {
  return (
    <div
      className={cx("", className, {
        "flex flex-col items-center justify-start": centered,
        "container mx-auto": container,
        "px-3 pb-4 lg:py-3": !className,
        [`bg-${bg}`]: bg
      })}
    >
      <Styled.root className={`text-lg ${centered ? "text-center" : ""}`}>
        {children}
      </Styled.root>
    </div>
  );
};

TextBlock.Title = props => (
  <Title as={props.as || "h3"} className={cx("font-light", props.className)}>
    {props.children}
  </Title>
);

TextBlock.Text = props => (
  <Paragraph {...props} className={cx("mb-2", props.className)}>
    <>{props.children}</>
  </Paragraph>
);

export default TextBlock;
