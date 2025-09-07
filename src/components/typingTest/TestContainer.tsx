interface TestContainerProps {
  loading: boolean;
  originalText: string;
  userInput: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const TestContainer: React.FC<TestContainerProps> = ({ loading, originalText, userInput, handleKeyDown }) => {
  return (
    <div className="space-y-6">
      {loading && (
        <div className="flex flex-col justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-gray-500 mt-4">Generating a new test paragraph...</p>
        </div>
      )}
      {!loading && (
        <div className="bg-gray-50 rounded-2xl shadow-inner p-6 text-2xl font-bold text-gray-700 leading-relaxed overflow-y-auto max-h-48 cursor-text">
          <p>
            {originalText.split('').map((char, index) => {
              let color = '';
              if (index < userInput.length) {
                color = userInput[index] === char ? 'text-green-600' : 'text-red-600';
              }
              return <span key={index} className={color}>{char}</span>;
            })}
          </p>
        </div>
      )}
      <textarea
        className="w-full h-40 p-6 text-2xl font-bold text-gray-800 bg-gray-100 rounded-2xl border-2 border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-none"
        placeholder="Start typing here..."
        value={userInput}
        onKeyDown={handleKeyDown}
        onPaste={(e) => e.preventDefault()}
        readOnly
        autoFocus
      ></textarea>
    </div>
  );
};

export default TestContainer;
