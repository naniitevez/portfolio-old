import React from "react";

interface ResumeImageProps {}

const ResumeImage: React.FC<ResumeImageProps> = () => {
  return (
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5e72abb"
      data-id="5e72abb"
      data-element_type="column"
    >
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-e6896b6 elementor-widget elementor-widget-image"
            data-id="e6896b6"
            data-element_type="widget"
            data-widget_type="image.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-image">
                <img
                  width="600"
                  height="600"
                  src="./images/profile-image.jpg"
                  className="attachment-full size-full"
                  alt=""
                  loading="lazy"
                  // srcSet="
                  //                       https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5.png         600w,
                  //                       https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-300x300.png 300w,
                  //                       https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-150x150.png 150w,
                  //                       https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-230x230.png 230w,
                  //                       https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-350x350.png 350w,
                  //                       https://demo.athemes.com/sp-resume/wp-content/uploads/sites/106/2020/01/Mask-Group-5-480x480.png 480w
                  //                     "
                  sizes="(max-width: 600px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeImage;
