import {useState} from "react";
export default function Tabs(){
    const [currOpen , setCurrOpen] = useState<boolean[]>([true,false,false])
    function handleChange(i:number){
        if(currOpen.includes(true)){
            setCurrOpen([false,false,false])
        }
        setCurrOpen(prev => {
            const curr:boolean[] = [...prev];
            curr[i] = true;
            return curr;
        })
    }
    return <div className="TabsMain"><div className="TabsContainer">
        <div className="buttonContainerTabs">
            <button className="TabButton" onClick={() => handleChange(0)}>HTML</button>
            <button className="TabButton" onClick={() => handleChange(1)}>CSS</button>
            <button className="TabButton" onClick={() => handleChange(2)}>Javascript</button>
            
        </div>
        <div className="contentContainerTabs">
            {currOpen[0] && <p>Content for HTML</p>}
            {currOpen[1] && <p>Content for CSS</p>}
            {currOpen[2] && <p>Content for Javascript</p>}
        </div>
    </div>
    </div>
}