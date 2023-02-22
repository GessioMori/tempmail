import { ArrowRight } from "phosphor-react";
import { useInboxStore, useEmailStore } from "../store";

export const EmailDetailsContainer = () => {
  const toggleInbox = useInboxStore((state) => state.toggleInbox);
  const selectedMail = useEmailStore((state) => state.selectedEmail);

  return (
    <main
      className="flex max-h-fit w-full flex-auto flex-col bg-zinc-100 py-[0.125rem] 
    dark:bg-zinc-700 sm:ml-64 md:ml-80"
    >
      <div className="block h-[3.5rem] w-full  bg-[#f8f8f8] px-1 py-2 dark:bg-neutral-800 sm:hidden">
        <button
          onClick={() => toggleInbox()}
          aria-controls="default-sidebar"
          type="button"
          className="block items-center rounded-lg p-2 
        text-sm text-gray-500 hover:bg-gray-100 focus:outline-none 
        focus:ring-2 focus:ring-gray-200 dark:hover:bg-neutral-700 sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <ArrowRight size={24} />
        </button>
      </div>
      {selectedMail ? (
        <div className="flex flex-1 flex-col overflow-y-auto bg-[#f8f8f8] p-2 dark:bg-neutral-800">
          <h2 className="mb-1 ml-4 max-w-sm break-words text-2xl font-bold text-gray-800 dark:text-zinc-300">
            {selectedMail.headerSubject}
          </h2>
          <p className="mb-1 ml-4 max-w-sm break-words text-base font-light text-gray-800 dark:text-zinc-300">
            {`<${selectedMail.fromAddr}>`}
          </p>
          <div className="flex-1 rounded-md border-[2px] border-zinc-100 bg-white p-2">
            <div
              dangerouslySetInnerHTML={{ __html: selectedMail.html }}
              className="overflow-x-auto text-zinc-700"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-4 text-2xl font-bold">No mail selected</h1>
        </div>
      )}
    </main>
  );
};
