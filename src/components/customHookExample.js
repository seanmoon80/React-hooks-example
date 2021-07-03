import React from 'react';
import { UserInputs } from '../custom_hooks/userInputs';

const CustomHookInfo = () => {
  const [state, onChange] = UserInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

  return (
    <>
      <input name='name' value={name} onChange={onChange} />
      <input name='nickname' value={nickname} onChange={onChange} />
    </>
  );
}

export { CustomHookInfo }
