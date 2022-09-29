import React from "react";

interface MainFooterProps {}

const MainFooter: React.FC<MainFooterProps> = () => {
  return (
    <>
      <div
        id="sidebar-footer"
        className="footer-widgets widget-area visibility-all"
      >
        <div className="container">
          <div className="footer-widgets-grid footer-layout-1 align-top">
            <div className="sidebar-column">
              <aside id="text-2" className="widget widget_text">
                <div className="textwidget">
                  <p>
                    nicole.tevez.97@gmail.com
                    <br />
                  </p>
                </div>
              </aside>
              <aside id="fp_social-2" className="widget widget_fp_social">
                <div className="social-section social-links style2">
                  <div className="menu-socials-container">
                    <ul
                      id="menu-socials"
                      className="menu social-menu-widget clearfix"
                    >
                      <li
                        id="menu-item-157"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-157"
                      >
                        <a
                          href="https://www.linkedin.com/in/nicoletevez/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/icons/icono-linkedin.png" alt="" />
                          <span className="screen-reader-text">LinkedIn</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-158"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-158"
                      >
                        <a
                          href="https://github.com/naniitevez"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/icons/icono-github.png" alt="" />

                          <span className="screen-reader-text">GitHub</span>
                        </a>
                      </li>
                      <li
                        id="menu-item-159"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-159"
                      >
                        <a
                          href="https://twitter.com/NicoleTevez1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/images/icons/icono-twitter.png" alt="" />
                          <span className="screen-reader-text">Twitter</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <footer id="colophon" className="site-footer">
        <div className="container">
          <div className="site-info">
            <div className="row">
              <div className="col-md-6">
                <div className="sydney-credits">
                  Copyright ©2022 Nicole Tevez. All rights reserved
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
