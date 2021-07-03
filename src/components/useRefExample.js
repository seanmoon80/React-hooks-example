import React, { useRef } from 'react';

const UseRefDom = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
};

const UseRefVariable = () => {
  const id = useRef(1);
  const setId = (e) => {
    id.current = e.target.value;
  };

  const printId = e => {
    console.log("Current ID value: ", id.current);
  }

  return (
    <>
      <div>
        <input type="text" onChange={setId} />
        <button onClick={printId}>Show ID</button>
      </div>
    </>
  );
};

export { UseRefDom, UseRefVariable }
