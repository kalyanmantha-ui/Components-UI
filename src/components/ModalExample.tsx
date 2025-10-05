import {useState} from "react";
export default function ModalExample() {
    const [showModal,setShowModal] = useState<boolean>(false);
    const [closing, setClosing] = useState(false);
    function handleClose() {
        setClosing(true);
        setTimeout(() => {
          setShowModal(false);
          setClosing(false);
        }, 300);
      }
    return <div className="mainModal">
        <div style={{ textAlign:"center",width:"100%" }}><button onClick={() => setShowModal(true)}>open</button></div>
        {showModal && (
                <div className={`modal ${closing ? "fade-out" : "fade-in"}`}>
                  <div className={`modalInnerModal ${closing ? "scale-out" : "scale-in"}`}>
                    <button className="close" onClick={() => handleClose()}>
                      ×
                    </button>
                    {/* Description below */}
                   
                      <p>This is Text for Modal</p>
                  </div>
                </div>
              )}
    </div>
}