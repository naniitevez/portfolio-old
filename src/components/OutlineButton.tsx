import React from "react";

interface OutlineButtonProps {
  hrefLink: string;
  title: string;
  githubLink: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  hrefLink,
  title,
  githubLink,
}) => {
  return (
    <div
      className="elementor-element elementor-element-c6a3d2c elementor-align-left elementor-widget elementor-widget-button"
      data-id="c6a3d2c"
      data-element_type="widget"
      data-widget_type="button.default">
      <div className="elementor-widget-container">
        <div className="elementor-button-wrapper button-link-wrapper">
          <a
            href={hrefLink}
            target="_blank"
            rel="noreferrer"
            className="elementor-button-link elementor-button elementor-size-sm"
            role="button">
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">{title}</span>
            </span>
          </a>
          {githubLink !== "private" && (
            <a className="repository-link" href={githubLink} target="_blank" rel="noreferrer">
              Repositorio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutlineButton;
