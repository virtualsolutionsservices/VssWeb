interface StatsDisplayProps {
  wpm: number;
  accuracy: number;
  timer: number;
  errors: number;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ wpm, accuracy, timer, errors }) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-blue-600">{wpm}</span>
        <span className="text-sm font-semibold text-gray-500">WPM</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-green-600">{accuracy}%</span>
        <span className="text-sm font-semibold text-gray-500">Accuracy</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-red-600">{timer}s</span>
        <span className="text-sm font-semibold text-gray-500">Time</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold text-yellow-600">{errors}</span>
        <span className="text-sm font-semibold text-gray-500">Errors</span>
      </div>
    </div>
  );
};

export default StatsDisplay;
