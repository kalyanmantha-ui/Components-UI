import {useState} from "react";

export default function Accordin () {
    const [currOpen , setcurrOpen] = useState<boolean[]>([false,false,false]);
    const [opened ,setOpened] = useState<number>();
    const [multi,setMulti] = useState<boolean>(false);

    function open(i:number){
        const curr:boolean[] = [...currOpen];
        if(!multi){
            if(opened ==1 || opened==2 || opened==0){
                curr[opened] = false;
                setOpened(-1);
            }
            curr[i] = !currOpen[i];
            if(curr[i] === true){
                setOpened(i);
            }
            setcurrOpen(curr);
        }
        else{
            curr[i] = !currOpen[i];
            setcurrOpen(curr);
        }
    }
    return <div className="accordinContainer">
        <div><input type="checkbox" onChange={(e) => {if(e.target.checked){
            setMulti(true)
        }else {setMulti(false)
            setcurrOpen([false,false,false])
        }}} />Mulitple</div>
        <div className="accordinItem" onClick={() => open(0)}>
            <h5  className="title">HTML</h5>
            {currOpen[0] && <div><p>This is the content for html when expanded</p></div>}
        </div>
        <div className="accordinItem" onClick={() => open(1)}>
            <h5  className="title">CSS</h5>
            {currOpen[1] && <div><p>This is the content for CSS when expanded</p></div>}
        </div>
        <div className="accordinItem" onClick={() => open(2)}>
            <h5  className="title">Javascript</h5>
            {currOpen[2] && <div><p>This is the content for Javascript when expanded</p></div>}
        </div>
    </div>
}