import { ControlPanel } from "./components/ControlPanel";
import { EmailDetailsContainer } from "./components/EmailDetailsContainer";
import { Header } from "./components/Header";
import { InboxContainer } from "./components/InboxContainer";
import { emails } from "./temp/mockEmails";

export interface Mail {
  fromAddr: string;
  headerSubject: string;
  text: string;
  id: string;
  html: string;
}

function App() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <ControlPanel address="gessio@mail.com" getEmailsFn={async () => {}} />
      <div className="relative flex max-h-[calc(100%-15.125rem)] flex-1">
        <InboxContainer emails={emails} />
        <EmailDetailsContainer />
      </div>
    </div>
  );
}

export default App;
