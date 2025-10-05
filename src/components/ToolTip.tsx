import {useState} from "react";
export default function ToolTip () {
    const [showText , setShowText] = useState<boolean>(false);
    return <div>
        <div className="tooltipMain">
            <div className="centeringTooltip">
            <p onMouseOver={() => setShowText(true)} onMouseOut={() => setShowText(false)}><svg  width="20"
    height="20"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path></svg></p>
            {showText && <div className="textToShowToolTip"><p>Delete</p></div>}
            </div>
        </div>
    </div>
}