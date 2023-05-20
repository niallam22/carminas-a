import React from 'react';

function MemorisedErrorBox({ errorMessages }) {
  console.log(errorMessages);

  return (
    <div>
      {errorMessages.map((errorMessage, index) => (
        <div key={index}>{errorMessage}</div>
      ))}
    </div>
  );
}

export default React.memo(MemorisedErrorBox);