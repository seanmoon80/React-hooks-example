import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      Count: { state.count }
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </>
  );
}

const infoReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  };
};

const UseReducerInfo = () => {
  const [state, dispatch] = useReducer(infoReducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  
  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>Name:</b> {name}
        </div>
        <div>
          <b>nickname:</b> {nickname}
        </div>
      </div>
      
    </>
  );
}
export { UseReducerCounter, UseReducerInfo }
