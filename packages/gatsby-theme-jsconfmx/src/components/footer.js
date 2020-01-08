// horizontal navbar with center , left or right align accept items and a bg color
import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import EILink from "./link-external-internal";
import Paragraph from "./paragraph";
// bg-primary bg-secondary bg-white bg-darkShade bg-lightShade bg-accent justify-center justify-start justify-end block p-1 py-2
const Footer = props => {
  return (
    <div
      className={cx("flex flex-wrap p-3", {
        [`bg-${props.bg}`]: props.bg,
        "justify-center text-center": props.center,
        "justify-start": props.left,
        "justify-end": props.right
      })}
    >
      {props.children}
    </div>
  );
};
Footer.Text = props => (
  <Paragraph
    className={cx(props.className, {
      "container mx-auto": props.container
    })}
  >
    {props.children}
  </Paragraph>
);

Footer.Navegation = ({ left, right, center, children }) => (
  <ul
    className={cx("flex flex-shrink list-reset container mx-auto m-0 p-0", {
      "justify-center": center,
      "justify-start": left,
      "justify-end": right
    })}
  >
    {children}
  </ul>
);
Footer.Item = props => <li className="px-2 list-none">{props.children}</li>;
Footer.Link = props => (
  <EILink to={props.to} className={cx("block p-1 py-2", props.className)}>
    {props.children}
  </EILink>
);

export default Footer;
