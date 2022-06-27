import React from "react";
import { Link } from "react-router-dom";

interface MainHeaderProps {}

const MainHeader: React.FC<MainHeaderProps> = () => {
  return (
    <header id="masthead" className="site-header" role="banner">
      <div className="header-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-8 col-xs-12">
              <Link to="/" title="Resume">
                <img
                  width="150"
                  height="44"
                  className="site-logo"
                  src="./assets/Freelance.webp"
                  alt="Resume"
                />
              </Link>
            </div>
            <div className="col-md-8 col-sm-4 col-xs-12">
              <div className="btn-menu" aria-expanded="false">
                <i className="sydney-svg-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                  </svg>
                </i>
              </div>
              <nav id="mainnav" className="mainnav" role="navigation">
                <div className="menu-menu-1-container">
                  <ul id="menu-menu-1" className="menu">
                    <li
                      id="menu-item-16"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-16"
                    >
                      <Link to="/" aria-current="page">
                        My front page
                      </Link>
                    </li>
                    {/* <li
                      id="menu-item-17"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17"
                    >
                      <Link to="/about">
                        About
                      </Link>
                    </li>
                    <li
                      id="menu-item-18"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"
                    >
                      <Link to="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li
                      id="menu-item-19"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-19"
                    >
                      <Link to="/blog">
                        My blog page
                      </Link>
                    </li>
                     */}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
