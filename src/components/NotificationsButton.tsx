import { useState } from "react";

export const NotificationsButton = () => {
  const [permissionStatus, setPermissionStatus] = useState(
    Notification.permission
  );
  return (
    <>
      {permissionStatus !== "granted" && (
        <button
          onClick={() =>
            Notification.requestPermission().then((status) =>
              setPermissionStatus(status)
            )
          }
          className="hover:underline"
        >
          {permissionStatus === "default"
            ? "Enable notifications"
            : "To receive notifications, change your browser permissions"}
        </button>
      )}
    </>
  );
};
