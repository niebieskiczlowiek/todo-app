import { IconType } from "react-icons";
import "./IconButton.scss";

interface IconButtonProps {
    onClick: Function,
    icon: IconType
}

const IconButton = (props: IconButtonProps) => {
    const { onClick, icon: Icon } = props;
    
    return (
        <div
            className="icon-button"
            onClick={() => onClick()}
        >
            { Icon && <Icon /> }
        </div>
    )
};

export default IconButton;