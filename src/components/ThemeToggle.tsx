"use client";

import { useState } from "react";

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  function toggleTheme() {
    const nextTheme = isLight ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setIsLight(!isLight);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}>
      <span aria-hidden="true">{isLight ? "☾" : "☼"}</span>
    </button>
  );
}
