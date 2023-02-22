import { EnvelopeOpen } from "phosphor-react";
import { ThemeSwitch } from "./ThemeSwitch";

export const Header = () => {
  return (
    <header
      className="flex items-center justify-between border-b-2 border-zinc-100 bg-white
     px-4 py-2 dark:border-zinc-700 dark:bg-neutral-800"
    >
      <div className="flex items-center gap-2">
        <EnvelopeOpen size={24} weight="fill" className="text-zinc-500" />
        <h1 className="text-xl font-bold">TempMail</h1>
      </div>
      <ThemeSwitch />
    </header>
  );
};
