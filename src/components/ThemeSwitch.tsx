import * as SwitchRadix from "@radix-ui/react-switch";
import { useState } from "react";
import MoonIcon from "./../assets/moon.svg";
import SunIcon from "./../assets/sun.svg";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("color-theme") ?? "light"
  );

  return (
    <SwitchRadix.Root
      className="relative inline-flex h-[32px] w-[64px] flex-shrink-0 
      cursor-pointer items-center rounded-full border-2 border-transparent 
      bg-zinc-400 transition-colors duration-200 ease-in-out"
      checked={theme === "dark"}
      name="ThemeSwitch"
      onCheckedChange={() => {
        setTheme((current) => (current === "dark" ? "light" : "dark"));
        if (theme === "dark") {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }}
    >
      <SwitchRadix.Thumb
        className="inline-block h-[20px] w-[20px] transform rounded-full 
        bg-zinc-100 transition  duration-200 ease-in-out 
        data-[state=unchecked]:translate-x-[8px] 
        data-[state=checked]:translate-x-[34px] dark:bg-zinc-800"
      />
      {theme === "dark" ? (
        <img
          src={SunIcon}
          alt="Sun icon"
          className="inline-block h-6 translate-x-[-14px]"
        />
      ) : (
        <img
          src={MoonIcon}
          alt="Moon icon"
          className="inline-block h-6 translate-x-[12px]"
        />
      )}
    </SwitchRadix.Root>
  );
};
