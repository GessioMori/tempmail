import { ArrowLeft } from "phosphor-react";
import { Mail } from "../graphql/generated/graphql";

import { useInboxStore } from "../store";
import { EmailPreview } from "./EmailPreview";

interface InboxContainerProps {
  emails: Mail[];
}

export const InboxContainer: React.FC<InboxContainerProps> = ({ emails }) => {
  const { isInboxActive, toggleInbox } = useInboxStore((state) => state);

  return (
    <aside
      id="default-sidebar"
      className={`absolute top-0 left-0 z-40 flex h-full w-full flex-col gap-[2px] bg-zinc-100 p-[0.125rem]
     transition-transform dark:bg-zinc-700 sm:w-64 sm:translate-x-0 md:w-80 ${
       !isInboxActive && "-translate-x-full"
     }`}
      aria-label="Sidebar"
    >
      <div
        className="flex h-[3.5rem] w-full items-center justify-between bg-white
       px-1 py-2 dark:bg-neutral-800"
      >
        <span className="ml-4 text-lg">{`Inbox ${
          emails.length > 0 ? `(${emails.length})` : ""
        }`}</span>
        <button
          onClick={() => toggleInbox()}
          aria-controls="default-sidebar"
          type="button"
          className="block items-center rounded-lg p-2 
        text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 
        focus:ring-gray-200 dark:hover:bg-neutral-700 sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <ArrowLeft size={24} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-[2px] overflow-y-auto">
        {emails.length > 0 ? (
          <ul className="flex flex-col gap-[2px] bg-zinc-100 dark:bg-zinc-700">
            {emails.map((mail) => (
              <EmailPreview mail={mail} key={mail.id} />
            ))}
          </ul>
        ) : (
          <h1 className="bg-white text-center text-zinc-500 dark:bg-neutral-800">
            You don't have emails yet.
          </h1>
        )}

        <div className="flex-1 bg-white dark:bg-neutral-800"></div>
      </div>
    </aside>
  );
};
