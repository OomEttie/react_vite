import React from 'react';

export const Params = () => {
  const [inputText, setInputText] = React.useState('');

  return (
    <div>
      <h1>Hello to Params</h1>
      {inputText}
      <ParamsChild1 setinputstate={setInputText} somethingelsetopassdown={'test'} />
    </div>
  );
};

const ParamsChild1 = (params: any) => {
  return (
    <div>
      <h1>Hello to ParamsChild1</h1>
      <ParamsChild2 setinputstate={params.setinputstate} />
    </div>
  );
};

// alternative signature
// const ParamsChild2 = ({ setinputstate }: any) => {
const ParamsChild2 = (params: any) => {
  const { setinputstate } = params; // alternative this would not be needed
  return (
    <div>
      <h1>Hello to ParamsChild2</h1>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setinputstate(e.target.value);
        }}
      />
    </div>
  );
};
