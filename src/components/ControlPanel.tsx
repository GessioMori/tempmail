import { CheckCircle, CopySimple } from "phosphor-react";
import { useState } from "react";
import { Countdown } from "./Countdown";
import { NotificationsButton } from "./NotificationsButton";
import { RefreshButton } from "./RefreshButton";

interface ControlPanelProps {
  address: string | null;
  getEmailsFn: () => Promise<void>;
}

export const ControlPanel: React.FC<ControlPanelProps> = ({
  address,
  getEmailsFn,
}) => {
  const [wasCopied, setWasCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address || "");
    setWasCopied(true);
    setTimeout(() => {
      setWasCopied(false);
    }, 1000);
  };

  return (
    <section
      className="flex h-48 flex-shrink-0 flex-col items-center 
    justify-around border-x-2 border-zinc-100 bg-white p-2 dark:border-zinc-700 dark:bg-neutral-800"
    >
      <div className="w-full max-w-lg ">
        <span className="text-sm font-light">Your temporary email address</span>
        <div className="flex items-stretch justify-between rounded-md border-2 border-zinc-100 dark:border-zinc-700">
          <div className="p-2">
            <span className="break-all">
              {address || "Loading your email..."}
            </span>
          </div>
          <button
            className="border-l-2 border-zinc-100 text-zinc-500  hover:bg-zinc-100 dark:border-zinc-700
           dark:hover:bg-zinc-700"
            onClick={() => handleCopy()}
          >
            <div className="flex items-center gap-2 px-3 font-bold">
              {wasCopied ? <CheckCircle size={24} /> : <CopySimple size={24} />}
              Copy
            </div>
          </button>
        </div>
      </div>
      <div className="inline-grid w-full max-w-lg grid-cols-2 items-center justify-center">
        <Countdown getEmailsFn={getEmailsFn} />
        <RefreshButton getEmailsFn={getEmailsFn} />
      </div>
      <NotificationsButton />
    </section>
  );
};
