import { Mail } from "../graphql/generated/graphql";
import { useInboxStore, useEmailStore } from "../store";

interface EmailPreviewProps {
  mail: Mail;
}

export const EmailPreview: React.FC<EmailPreviewProps> = ({ mail }) => {
  const { fromAddr, headerSubject, text } = mail;
  const toggleInbox = useInboxStore((state) => state.toggleInbox);
  const setSelectedMail = useEmailStore((state) => state.setSelectedEmail);
  return (
    <li
      className="flex cursor-pointer flex-col bg-white px-2 hover:bg-zinc-100
       dark:bg-neutral-800 dark:hover:bg-neutral-700"
      onClick={() => {
        setSelectedMail(mail);
        toggleInbox();
      }}
    >
      <p className="my-0 truncate font-bold">{fromAddr}</p>
      <p className="my-0 truncate font-bold text-[#1e83db]">{headerSubject}</p>
      <p className="my-0 truncate text-zinc-500">{text}</p>
    </li>
  );
};
