import React from "react";

interface IconComponentProps {
    logoImage: string;
    title: string;
}

const IconComponent: React.FC<IconComponentProps> = ({logoImage, title}) => {
    return (
        <div title={title} className="icon-component-container">
            <img src={logoImage} alt="" /> 
        </div>
    )
}

export default IconComponent;