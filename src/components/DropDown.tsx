import { useState } from "react";

export default function DropDown() {
  const [show, setShow] = useState(false);

  return (
    <div className="DropdownMain">
      <div className="Dropdownbutton" onClick={() => setShow(!show)}>
        <p>
          DropDown Button{" "}
          <span
            className={`arrowDropdown ${show ? "rotateDown" : "rotateRight"}`}
          >
            {">"}
          </span>
        </p>
      </div>

      <div className={`Dropdowncontent ${show ? "active" : ""}`}>
        <p>Dashboard</p>
        <p>Settings</p>
        <p>Earnings</p>
        <p>Sign Out</p>
      </div>
    </div>
  );
}
