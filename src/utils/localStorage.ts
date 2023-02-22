interface LocalStorageData {
  sessionId: string;
  emailAddress: string;
}

export const setLocalStorageData = (data: LocalStorageData) => {
  window.localStorage.setItem("sessionId", data.sessionId);
  window.localStorage.setItem("emailAddress", data.emailAddress);
};

export const getLocalStorageData = () => {
  const localSessionId = window.localStorage.getItem("sessionId");
  const emailAddress = window.localStorage.getItem("emailAddress");
  if (!localSessionId || !emailAddress) {
    return null;
  }
  return { localSessionId, emailAddress };
};
