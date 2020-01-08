import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import cx from "classnames";
import SEO from "gatsby-theme-jsconfmx/src/components/seo";
import Header from "gatsby-theme-jsconfmx/src/components/header";
import MobileMenu from "gatsby-theme-jsconfmx/src/components/mobile-menu";
import ThemeProvider from "gatsby-theme-jsconfmx/src/components/theme-provider";
import Footer from "gatsby-theme-jsconfmx/src/components/footer";
import FluidImage from "gatsby-theme-jsconfmx/src/components/fluid-image-provider";
import theme from "../../theme";
import { FaHandsHelping } from "react-icons/fa";

// const mainMenu = null
const mainMenu = [
  {
    name: "Acerca de",
    to: "/"
  },
  {
    name: "CFP",
    to: "/"
  },
  {
    name: "Ubicación",
    to: "/"
  },
  {
    name: "Código de conducta",
    to: "/coc"
  },
  {
    name: "Patrocinadores",
    to: "/"
  }
];

// Layout example of how to combine header, footer, mobile-menu & theme-provider in one component
// and pass props to the nedded components
// You need to pass your theme file to the ThemeProvider component
function Layout({ children, title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const sitename = data.site.siteMetadata.title;

  const [scrolledMenu, setScrolledMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
  }, []);

  const handleScroll = event => {
    var target = event.target || event.srcElement;
    setScrolledMenu(target.scrollingElement.scrollTop > 30);
  };
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-3">
        <SEO title={title} />
        <Header scrolled={scrolledMenu}>
          {sitename && (
            <Header.Branding>
              <FluidImage src="logo.jpg" className="w-4" />
            </Header.Branding>
          )}
          <Header.Navbar handleShowSidebar={handleShowSidebar}>
            {mainMenu &&
              mainMenu.map(item => (
                <Header.MenuItem to={item.to} active={item.active}>
                  {item.name}
                </Header.MenuItem>
              ))}
          </Header.Navbar>
        </Header>
        <MobileMenu
          showSidebar={showSidebar}
          handleShowSidebar={handleShowSidebar}
        >
          <MobileMenu.Navegation>
            {mainMenu &&
              mainMenu.map(item => (
                <MobileMenu.Item active={item.active}>
                  <MobileMenu.Link to={item.to} active={item.active}>
                    {item.name}
                  </MobileMenu.Link>
                </MobileMenu.Item>
              ))}
          </MobileMenu.Navegation>
        </MobileMenu>
        {children}
        <Footer bg="primary" center >
          <Footer.Text container className="text-white text-sm w-full">
            <>
              Unete a la vanguardia de JS en México - © 2019 Todos los derechos
              reservados
            </>
          </Footer.Text>
          <Footer.Text container className="text-white text-sm">
            <p>Diseño: Delta Nidia</p>
          </Footer.Text>
        </Footer>
      </div>
    </ThemeProvider>
  );
}
Layout.Container = props => (
  <div
    className={cx("container mx-auto", props.className, {
      "flex flex-wrap": props.flex,
      "pt-5 pb-4": !props.padding
    })}
  >
    {props.children}
  </div>
);

Layout.Column = props => (
  <div
    className={cx(props.className, {
      [`w-${props.columns}/12`]: props.columns
    })}
  >
    {props.children}
  </div>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
