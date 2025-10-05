import { useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`ToggleMain ${mode}`}>
      <p>Light</p>
      <div
        className={`TogglePill ${mode}`}
        onClick={toggleMode}
        aria-label="Toggle theme"
      >
        <span
          className={`toggleCircle ${mode}`}
          style={{
            transform: mode === "light" ? "translateX(0)" : "translateX(150px)",
          }}
        ></span>
      </div>
      <p>Dark</p>
    </div>
  );
}
