
import React, { useState } from 'react';

const XSpellCheck = () => {
  const [inputText, setInputText] = useState('');
  const [correctionSuggestion, setCorrectionSuggestion] = useState('');

  const customDictionary = {
    teh: 'the',
    wrok: 'work',
    fot: 'for',
    exampl: 'example',
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    checkSpelling(text);
  };

  const checkSpelling = (text) => {
    const words = text.toLowerCase().split(' ');

    for (const word of words) {
      if (customDictionary[word]) {
        setCorrectionSuggestion(`Did you mean: ${customDictionary[word]}?`);
        return;
      }
    }

    setCorrectionSuggestion('');
  };

  return (
    <div>
      <textarea
        placeholder="Type your text here"
        value={inputText}
        onChange={handleInputChange}
      ></textarea>

      {correctionSuggestion && <p>{correctionSuggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
