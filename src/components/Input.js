import React from 'react';

export default function Input({
  isFetchingWeatherData,
  loader,
  validationError,
  inputHandler,
  inputText,
  handleKeyDown,
}) {
  return (
    <div className="input-block">
      <span style={{ marginRight: 20 }}>Add note...</span>
      <img
        style={{ width: 30, visibility: isFetchingWeatherData ? 'visible' : 'hidden' }}
        src={loader}
        alt="loader.."
      />
      <span style={{ marginLeft: 20, color: 'red' }}>{validationError}</span>
      <input
        style={{ borderColor: validationError && 'red' }}
        disabled={isFetchingWeatherData}
        onChange={inputHandler}
        value={inputText}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
