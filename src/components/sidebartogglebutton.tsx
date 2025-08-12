import React, { useState } from "react";
import { Button } from "./button";

// Simple dark mode detection using document.documentElement.classList
function useDarkMode() {
  if (typeof window !== "undefined") {
    return document.documentElement.classList.contains("dark");
  }
  return false;
}

export default function SidebarToggleButton() {
  const [open, setOpen] = useState(false);
  const isDark = useDarkMode();

  let iconSrc;
  if (isDark) {
    iconSrc = open ? "/sidebar2.png" : "/sidebar1.png";
  } else {
    iconSrc = open ? "/sidebar4.png" : "/sidebar3.png";
  }

  return (
    <Button variant="none" size="xl" onClick={() => setOpen(!open)}>
      <span
        style={{
          borderRadius: "0.5rem",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* If you want to use ChevronRight as a fallback if image not found */}
        {/* <ChevronRight className="w-6 h-6" /> */}
        <img
          src={iconSrc}
          alt="sidebar toggle icon"
          className="w-10 h-10"
        />
      </span>
    </Button>
  );
}