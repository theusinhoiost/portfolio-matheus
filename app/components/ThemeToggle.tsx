"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" size={20} />
      ) : (
        <FaMoon className="text-slate-700" size={20} />
      )}
    </button>
  );
}
