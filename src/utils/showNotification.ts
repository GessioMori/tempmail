export const showNotification = (title: string, body: string) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body,
    });
  }
};
