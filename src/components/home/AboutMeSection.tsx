import React from "react";
import Presentation from "./components/Presentation";

interface AboutMeSectionProps {}

const AboutMeSection: React.FC<AboutMeSectionProps> = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-08ef5dd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="08ef5dd"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <Presentation description="😍️ Amante del verano, la hamburguesa 🍔 con papas fritas 🍟 y una buena cerveza fría 🍻." />
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-d9dd441"
            data-id="d9dd441"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-ac669ac elementor-widget elementor-widget-text-editor"
                  data-id="ac669ac"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        Comencé a estudiar programación 🤓️ durante la pandemia,
                        dejando mi carrera (psicología) de lado cuando mi vida y
                        la vida de todos estaban cambiando, y ni siquiera
                        imaginé que iba a encontrar algo que me guste hacer
                        tanto como crear cosas y verlas crecer 👐🏻️.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-b80f425"
            data-id="b80f425"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-b2f188a elementor-widget elementor-widget-text-editor"
                  data-id="b2f188a"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-text-editor elementor-clearfix">
                      <p>
                        Me gustan mucho los perritos 🐕️💕️ tengo 3 Pitbulls que
                        viven con mis padres, me gusta ver peliculas 🍿️ y
                        series, y tengo la costumbre de poner vídeos para que
                        hagan ruido de fondo👀️.
                      </p>
                      <p>
                        Y hace poco me sume a la organización de la comunidad de
                        React Buenos Aires 💪🏻️.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
