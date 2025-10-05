import { useEffect, useState } from "react";

export default function Toast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 3000); // hide after 3s
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div className="toastWrapper">
      <button onClick={() => setShow(true)}>Show Toast</button>

      {show && (
        <div className="toast">
          ✅ Successfully saved!
        </div>
      )}
    </div>
  );
}
