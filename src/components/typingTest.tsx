{/*import useTypingTest from "../hooks/useTypingtest";
import TestContainer from "./typingTest/TestContainer";
import StatsDisplay from "./typingTest/StatsDisplayProps";
import ControlPanel from "./typingTest/ControlPanel";
const TypingTest: React.FC = () => {
  const { originalText, userInput, wpm, accuracy, timer, loading, errors, handleKeyDown, restartTest } = useTypingTest();

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-800">Typing Test</h1>
          <p className="text-gray-500">Test your typing speed and accuracy.</p>
        </div>

        <div className="flex flex-col space-y-6">
          <TestContainer
            loading={loading}
            originalText={originalText}
            userInput={userInput}
            handleKeyDown={handleKeyDown}
          />
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <StatsDisplay wpm={wpm} accuracy={accuracy} timer={timer} errors={errors} />
            <ControlPanel onRestart={restartTest} disabled={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingTest;*/}

import React, { useState, useEffect, useRef, type KeyboardEvent } from 'react';

// ============================================================================
// File: src/hooks/useTypingTest.ts
// A custom hook to encapsulate all typing test logic and state.
// ============================================================================
interface TypingTestHook {
  originalText: string;
  userInput: string;
  wpm: number;
  accuracy: number;
  timer: number;
  loading: boolean;
  testActive: boolean;
  errors: number;
  handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  restartTest: () => void;
}

const useTypingTest = (): TypingTestHook => {
  const [originalText, setOriginalText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [wpm, setWpm] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);
  const [timer, setTimer] = useState<number>(120); // 2 minutes in seconds
  const [testActive, setTestActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<number>(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const fetchRandomText = async (): Promise<void> => {
    setLoading(true);
    setOriginalText('');
    setUserInput('');
    setTimer(120);
    setWpm(0);
    setAccuracy(0);
    setErrors(0);
    if (timerRef.current) {
        clearInterval(timerRef.current);
    }

    const prompt = "Generate a random, short, interesting, non-fiction paragraph of at least 150 words about a topic like technology, space exploration, history, or nature. Do not include any titles or headings. Provide only the paragraph text.";
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    };
    const apiKey = "AIzaSyBJmav3zASHaRWQNFeKAKsf4T5f0MZjXrA";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const maxRetries = 5;
    let currentRetry = 0;
    let response;

    while (currentRetry < maxRetries) {
      try {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (response.status === 429) {
          const delay = Math.pow(2, currentRetry) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          currentRetry++;
          continue;
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        break;
      } catch (error) {
        if (currentRetry === maxRetries - 1) {
          console.error('Failed to fetch after multiple retries:', error);
          setOriginalText('Failed to load text. Please try again later.');
          setLoading(false);
          return;
        }
        currentRetry++;
      }
    }

    // Check if the response is defined before trying to parse it
    if (response) {
      try {
        const result = await response.json();
        if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
          setOriginalText(result.candidates[0].content.parts[0].text.trim());
        } else {
          setOriginalText('Failed to load text. Please try again.');
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        setOriginalText('Failed to load text due to an unexpected API response. Please try again.');
      }
    } else {
      // Handle the case where the fetch loop failed entirely
      setOriginalText('Failed to load text after multiple attempts. Please check your network connection.');
    }
    setLoading(false);
  };

  const finishTest = (): void => {
    setTestActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    // Prevent any key that is not a printable character or backspace
    if (e.ctrlKey || e.altKey || e.metaKey || (e.key.length > 1 && e.key !== 'Backspace' && e.key !== ' ' && e.key !== 'Enter')) {
      return;
    }

    if (!testActive && !loading) {
      setTestActive(true);
      timerRef.current = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 1) {
            finishTest();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    
    if (e.key === 'Backspace') {
      setUserInput(prev => prev.slice(0, -1));
    } else if (e.key === 'Enter') {
      // In a typing test, Enter key can be a part of the text.
      // We will handle it as a space.
      const newChar = originalText[userInput.length];
      if (newChar === '\n' || newChar === ' ') {
          setUserInput(prev => prev + ' ');
      }
    } else if (userInput.length < originalText.length) {
      setUserInput(prev => prev + e.key);
    }

    // Stop the test if the user has typed all characters correctly
    if (userInput.length + 1 === originalText.length && (e.key === originalText[userInput.length])) {
      finishTest();
    }
  };

  const restartTest = (): void => {
    setTestActive(false);
    setTimer(120);
    setWpm(0);
    setAccuracy(0);
    setErrors(0);
    setUserInput('');
    fetchRandomText();
  };

  useEffect(() => {
    fetchRandomText();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (testActive) {
      // Calculate WPM
      const wordCount = userInput.split(/\s+/).filter(word => word.length > 0).length;
      const minutes = (120 - timer) / 60;
      const calculatedWpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;
      setWpm(calculatedWpm);

      // Calculate accuracy and errors
      let correctChars = 0;
      let incorrectChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === originalText[i]) {
          correctChars++;
        } else {
          incorrectChars++;
        }
      }
      const calculatedAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 0;
      setAccuracy(calculatedAccuracy);
      setErrors(incorrectChars);
    }
  }, [userInput, timer, testActive, originalText]);

  return { originalText, userInput, wpm, accuracy, timer, loading, testActive, errors, handleKeyDown, restartTest };
};

// ============================================================================
// File: src/components/StatsDisplay.tsx
// A reusable component to display the typing test statistics.
// ============================================================================
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
        <span id="wpm-display" className="text-4xl font-extrabold text-blue-600">{wpm}</span>
        <span className="text-sm font-semibold text-gray-500">WPM</span>
      </div>
      <div className="flex flex-col items-center">
        <span id="accuracy-display" className="text-4xl font-extrabold text-green-600">{accuracy}%</span>
        <span className="text-sm font-semibold text-gray-500">Accuracy</span>
      </div>
      <div className="flex flex-col items-center">
        <span id="timer-display" className="text-4xl font-extrabold text-red-600">{timer}s</span>
        <span className="text-sm font-semibold text-gray-500">Time</span>
      </div>
      <div className="flex flex-col items-center">
        <span id="errors-display" className="text-4xl font-extrabold text-yellow-600">{errors}</span>
        <span className="text-sm font-semibold text-gray-500">Errors</span>
      </div>
    </div>
  );
};

// ============================================================================
// File: src/components/TestContainer.tsx
// A reusable component for the main test area, including text and input.
// ============================================================================
interface TestContainerProps {
  loading: boolean;
  originalText: string;
  userInput: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const TestContainer: React.FC<TestContainerProps> = ({ loading, originalText, userInput, handleKeyDown }) => {
  return (
    <div className="space-y-6">
      {/* Loading Indicator */}
      {loading && (
        <div id="loading-container" className="flex flex-col justify-center items-center h-48">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          <p className="text-gray-500 mt-4">Generating a new test paragraph...</p>
        </div>
      )}

      {/* Text Display Area */}
      {!loading && (
        <div id="text-display" className="bg-gray-50 rounded-2xl shadow-inner p-6 text-2xl font-bold text-gray-700 leading-relaxed overflow-y-auto scrolling-text max-h-48 cursor-text">
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

      {/* User Input Area */}
      <textarea
        id="user-input"
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

// ============================================================================
// File: src/components/ControlPanel.tsx
// A reusable component for the control button.
// ============================================================================
interface ControlPanelProps {
  onRestart: () => void;
  disabled: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onRestart, disabled }) => {
  return (
    <button
      id="restart-button"
      onClick={onRestart}
      disabled={disabled}
      className="bg-blue-600 disabled:bg-gray-400 hover:bg-blue-700 disabled:hover:bg-gray-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Restart Test
    </button>
  );
};

// ============================================================================
// File: src/App.tsx
// The main application component that assembles the others.
// ============================================================================
const App: React.FC = () => {
  const { originalText, userInput, wpm, accuracy, timer, loading, errors, handleKeyDown, restartTest } = useTypingTest();

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto space-y-8 transition-all duration-300 ease-in-out">
        {/* Application Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-gray-800">Typing Test</h1>
          <p className="text-gray-500">Test your typing speed and accuracy.</p>
        </div>

        {/* Main Test Container */}
        <div className="flex flex-col space-y-6">
          <TestContainer
            loading={loading}
            originalText={originalText}
            userInput={userInput}
            handleKeyDown={handleKeyDown}
          />
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <StatsDisplay wpm={wpm} accuracy={accuracy} timer={timer} errors={errors} />
            <ControlPanel onRestart={restartTest} disabled={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

