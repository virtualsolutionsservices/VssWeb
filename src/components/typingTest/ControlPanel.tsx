interface ControlPanelProps {
  onRestart: () => void;
  disabled: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onRestart, disabled }) => {
  return (
    <button
      onClick={onRestart}
      disabled={disabled}
      className="bg-blue-600 disabled:bg-gray-400 hover:bg-blue-700 disabled:hover:bg-gray-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Restart Test
    </button>
  );
};

export default ControlPanel;
