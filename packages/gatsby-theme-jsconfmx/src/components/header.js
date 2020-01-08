import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useThemeUI } from "theme-ui";
import cx from "classnames";
import { TiThMenuOutline } from "react-icons/ti";
/** @jsx jsx */
import { jsx } from "theme-ui";
// shadow fixed w-full z-30 h-nabvar top-0 text-white bg-white
function Header({ scrolled, children }) {
  const { theme } = useThemeUI();

  return (
    <nav
      id="header"
      className={cx(`fixed w-full z-30 h-nabvar top-0 text-white bg-white`, {
        'shadow-lg': scrolled
      })}
      sx={{
        transition: theme.transitions.shadow
      }}
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 p-3 lg:p-0 ">
        {children}
      </div>
    </nav>
  );
}

Header.Branding = props => {
  return (
      <Link
        className="flex items-center text-primary no-underline hover:no-underline font-bold text-2xl lg:text-3xl text-gray-800 py-2"
        to="/"
      >
        {props.children}
      </Link>
  );
};

Header.Navbar = ({ handleShowSidebar, children, align }) => {
  return (
    <>
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block bg-white text-black z-20"
        id="nav-content"
      >
        <ul className={cx("list-reset lg:flex  flex-1 items-center p-0 m-0", {
          'justify-end': !align||align==='right',
          'justify-start': align==='left',
        })}>
          {children}
        </ul>
      </div>
      <div className="block lg:hidden flex-shrink ">
        <button onClick={handleShowSidebar}>
          <TiThMenuOutline className="text-5xl text-darkShade p-1 rounded " />
        </button>
      </div>
    </>
  );
};

// font-bold text-secondary border-secondary text-black border-transparent
Header.MenuItem = ({ children, to, active, index }) => {
  const { theme } = useThemeUI();
  return (
    <li className=" list-none  h-navbar py-2">
      <Link
        className={cx(
          "flex items-center uppercase no-underline hover:text-secondary font-light border-l-2 border-primary hover:border-secondary py-1 text-center px-3",
          {
            "text-secondary border-primary": active,
            "text-primary border-transparent": !active
          }
        )}
        to={to}
        sx={{
          transition: theme.transitions.color
        }}
      >
        {children}
      </Link>
    </li>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  handleShowSidebar: PropTypes.func,
  navegation: PropTypes.array,
  branding: PropTypes.element
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
