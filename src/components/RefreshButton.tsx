import { useEffect, useState } from "react";
import RefreshIcon from "./../assets/refresh.svg";

interface RefreshButtonProps {
  getEmailsFn: () => Promise<void>;
}

export const RefreshButton: React.FC<RefreshButtonProps> = ({
  getEmailsFn,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  return (
    <button
      className="flex items-center justify-center gap-2 hover:underline"
      onClick={() => {
        setIsRefreshing(true);
        getEmailsFn().then(() => {
          setTimeout(() => {
            setIsRefreshing(false);
          }, 1000);
        });
      }}
    >
      <img src={RefreshIcon} className="h-4 w-4" />
      <span>{isRefreshing ? "Refreshing..." : "Refresh"}</span>
    </button>
  );
};
