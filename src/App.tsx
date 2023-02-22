import { useEffect, useState } from "react";
import { ControlPanel } from "./components/ControlPanel";
import { EmailDetailsContainer } from "./components/EmailDetailsContainer";
import { Header } from "./components/Header";
import { InboxContainer } from "./components/InboxContainer";
import {
  Mail,
  useGetEmailsLazyQuery,
  useGetSessionMutation,
} from "./graphql/generated/graphql";
import { useEmailStore } from "./store";
import { getLocalStorageData, setLocalStorageData } from "./utils/localStorage";
import { showNotification } from "./utils/showNotification";

function App() {
  const [emailAddress, setEmailAddress] = useState(
    window.localStorage.getItem("emailAddress")
  );

  const [getEmails, { data: emailsData, refetch: refetchEmails }] =
    useGetEmailsLazyQuery();

  const [getSessionMutation] = useGetSessionMutation();

  const { lastEmailReceived, setLastEmailReceived } = useEmailStore(
    (state) => state
  );

  const createSession = async () => {
    getSessionMutation().then((response) => {
      const sessionId = response.data?.introduceSession?.id;
      const emailAddress =
        (response.data?.introduceSession?.addresses &&
          response.data?.introduceSession?.addresses?.length > 0 &&
          response.data?.introduceSession?.addresses[0]?.address) ||
        null;
      if (sessionId && emailAddress) {
        setLocalStorageData({ emailAddress, sessionId });
        setEmailAddress(() => emailAddress);
        getEmails({ variables: { id: sessionId } }).then((response) => {
          const lastEmailId =
            (response.data?.session?.mails &&
              response.data?.session?.mails[0]?.id) ||
            null;
          setLastEmailReceived(lastEmailId);
        });
      } else {
        setEmailAddress(() => "Error, please refresh the page.");
      }
    });
  };

  const handleRefetchEmails = async () => {
    const localSessionId = window.localStorage.getItem("sessionId");
    if (localSessionId) {
      refetchEmails({ id: localSessionId }).then((response) => {
        if (
          response.data.session?.mails &&
          response.data.session.mails[0]?.id &&
          response.data.session.mails[0]?.id !== lastEmailReceived
        ) {
          const title =
            response.data.session.mails[0].headerSubject || "New email";
          const body = response.data.session.mails[0]?.fromAddr;
          showNotification(title, body);
          setLastEmailReceived(response.data.session.mails[0].id);
        }
      });
    } else {
      createSession();
    }
  };

  const filteredEmails = emailsData?.session?.mails
    ? (emailsData.session.mails.filter(Boolean) as Mail[])
    : [];

  useEffect(() => {
    const localStorageData = getLocalStorageData();

    if (!localStorageData) {
      createSession();
    } else {
      getEmails({ variables: { id: localStorageData.localSessionId } }).then(
        (response) => {
          if (response.error) {
            setEmailAddress(() => "Error, please reload the page.");
          } else if (!response.data?.session) {
            createSession();
          } else {
            const lastEmailId =
              (response.data?.session?.mails &&
                response.data?.session?.mails[0]?.id) ||
              null;
            setLastEmailReceived(lastEmailId);
          }
        }
      );
    }
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <ControlPanel address={emailAddress} getEmailsFn={handleRefetchEmails} />
      <div className="relative flex max-h-[calc(100%-15.125rem)] flex-1">
        <InboxContainer emails={filteredEmails} />
        <EmailDetailsContainer />
      </div>
    </div>
  );
}

export default App;
