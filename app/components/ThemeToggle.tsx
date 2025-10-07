"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // evita erro de hidratação
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-lg border bg-white/10 dark:bg-black/10"
    >
      {theme === "dark" ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
}