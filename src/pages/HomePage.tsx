import React from "react";
import AboutMeSection from "../components/home/AboutMeSection";
import BannerSection from "../components/home/BannerSection";
import KnowledgeSection from "../components/home/KnowledgeSection";
import MyWorksSection from "../components/home/MyWorksSection";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div id="content" className="page-wrap">
      <div className="content-wrapper container">
        <div className="row">
          <div id="primary" className="fp-content-area">
            <main id="main" className="site-main" role="main">
              <div className="entry-content">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="6"
                  className="elementor elementor-6"
                >
                  <div className="elementor-inner">
                    <div className="elementor-section-wrap">
                      
                      <BannerSection/> 

                      <AboutMeSection/>

                      <MyWorksSection/> 

                      <KnowledgeSection/>
                      
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
