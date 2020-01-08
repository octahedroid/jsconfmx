import React from "react";
import cx from "classnames";
import Title from "./title";
import LinkIE from "./link-external-internal";
import { IoIosSquare } from "react-icons/io";
// add cta
// add description

const List = props => {
  return <div className={cx("py-3", props.className)}>
  {props.children}
  </div>;
};

List.Title = props => (
  <Title as="h5" className="mb-3 font-brand font-medium">
    {props.children}
  </Title>
);
List.Group = props => (
  <ul className={cx("list-reset list-none flex flex-col p-0")}>{props.children}</ul>
);
List.Item = props => <li className=" list-none py-1 flex ">{props.children}</li>;
List.Text = props => <span className="w-11/12">{props.children}</span>;
List.ItemIcon = props => <IoIosSquare className={cx(props.className,"rotate-45 flex-shrink h-6 w-1/12 text-secondary pt-2 pr-1")} />;
List.Link = props => <LinkIE className="no-underline" to={props.to}>{props.children}</LinkIE>;


export default List;
