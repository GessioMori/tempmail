import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }: { remainingTime: number }) => {
  return <div className="text-sm">{remainingTime}</div>;
};

interface CountdownProps {
  getEmailsFn: () => Promise<void>;
}

export const Countdown: React.FC<CountdownProps> = ({ getEmailsFn }) => {
  return (
    <div className="flex h-4 items-center justify-center gap-x-1">
      Autorefresh in
      <CountdownCircleTimer
        isPlaying
        duration={15}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => {
          getEmailsFn();
          return { shouldRepeat: true, delay: 1 };
        }}
        size={30}
        strokeWidth={2}
      >
        {renderTime}
      </CountdownCircleTimer>
      s
    </div>
  );
};
