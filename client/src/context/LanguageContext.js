"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLang }) => {
  const [lang, setLang] = useState(initialLang || "en");

  useEffect(() => {
    Cookies.set("lang", lang, { expires: 7 });
  }, [lang]);

  const toggleLang = () => setLang(lang === "en" ? "bn" : "en");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
