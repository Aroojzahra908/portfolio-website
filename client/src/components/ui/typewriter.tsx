import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterWord?: number;
  className?: string;
}

export function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterWord = 1500,
  className = "",
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const handleTyping = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (isDeleting) {
        // Deleting text
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        }
      } else {
        // Typing text
        const nextChar = currentText.substring(displayText.length, displayText.length + 1);
        
        if (displayText.length === currentText.length) {
          // Finished typing
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
            handleTyping();
          }, delayAfterWord);
        } else {
          // Continue typing
          setDisplayText((prev) => prev + nextChar);
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentTextIndex, displayText, isDeleting, texts, typingSpeed, deletingSpeed, delayAfterWord]);

  return (
    <span className={`${className} relative`}>
      {displayText}
      <span className="animate-[blink_1s_step-end_infinite]">|</span>
    </span>
  );
}
