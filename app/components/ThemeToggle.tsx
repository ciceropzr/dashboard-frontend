"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita erro de hidratação
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-3 py-2 rounded-lg border bg-surface-light dark:bg-surface-dark 
                 text-text-light dark:text-text-dark hover:opacity-80 transition"
    >
      {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
    </button>
  );
}
