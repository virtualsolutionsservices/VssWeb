import { useState, useEffect, useRef, type KeyboardEvent } from 'react';

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
  const [timer, setTimer] = useState<number>(120);
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

    const prompt =
      "Generate a random, short, interesting, non-fiction paragraph of at least 150 words about a topic like technology, space exploration, history, or nature. Do not include any titles or headings. Provide only the paragraph text.";
    const payload = {
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    };
    const apiKey = ""; // 🔑 put your Gemini API key here
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const maxRetries = 5;
    let currentRetry = 0;
    let response;

    while (currentRetry < maxRetries) {
      try {
        response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (response.status === 429) {
          const delay = Math.pow(2, currentRetry) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          currentRetry++;
          continue;
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        break;
      } catch (error) {
        if (currentRetry === maxRetries - 1) {
          console.error("Failed to fetch after multiple retries:", error);
          setOriginalText("Failed to load text. Please try again later.");
          setLoading(false);
          return;
        }
        currentRetry++;
      }
    }

    if (response) {
      try {
        const result = await response.json();
        if (
          result.candidates &&
          result.candidates.length > 0 &&
          result.candidates[0].content &&
          result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0
        ) {
          setOriginalText(result.candidates[0].content.parts[0].text.trim());
        } else {
          setOriginalText("Failed to load text. Please try again.");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setOriginalText(
          "Failed to load text due to an unexpected API response. Please try again."
        );
      }
    } else {
      setOriginalText(
        "Failed to load text after multiple attempts. Please check your network connection."
      );
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
    if (
      e.ctrlKey ||
      e.altKey ||
      e.metaKey ||
      (e.key.length > 1 && e.key !== "Backspace" && e.key !== " " && e.key !== "Enter")
    ) {
      return;
    }

    if (!testActive && !loading) {
      setTestActive(true);
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            finishTest();
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    if (e.key === "Backspace") {
      setUserInput((prev) => prev.slice(0, -1));
    } else if (e.key === "Enter") {
      const newChar = originalText[userInput.length];
      if (newChar === "\n" || newChar === " ") {
        setUserInput((prev) => prev + " ");
      }
    } else if (userInput.length < originalText.length) {
      setUserInput((prev) => prev + e.key);
    }

    if (
      userInput.length + 1 === originalText.length &&
      e.key === originalText[userInput.length]
    ) {
      finishTest();
    }
  };

  const restartTest = (): void => {
    setTestActive(false);
    setTimer(120);
    setWpm(0);
    setAccuracy(0);
    setErrors(0);
    setUserInput("");
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
      const wordCount = userInput.split(/\s+/).filter((word) => word.length > 0).length;
      const minutes = (120 - timer) / 60;
      const calculatedWpm = minutes > 0 ? Math.round(wordCount / minutes) : 0;
      setWpm(calculatedWpm);

      let correctChars = 0;
      let incorrectChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === originalText[i]) {
          correctChars++;
        } else {
          incorrectChars++;
        }
      }
      const calculatedAccuracy =
        userInput.length > 0
          ? Math.round((correctChars / userInput.length) * 100)
          : 0;
      setAccuracy(calculatedAccuracy);
      setErrors(incorrectChars);
    }
  }, [userInput, timer, testActive, originalText]);

  return {
    originalText,
    userInput,
    wpm,
    accuracy,
    timer,
    loading,
    testActive,
    errors,
    handleKeyDown,
    restartTest,
  };
};

export default useTypingTest;
