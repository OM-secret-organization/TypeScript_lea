import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import axios from 'axios';

const todoIdState = atom({
  key: 'idState/uuid()',
  default: 1,
});

const todoItemQuery = selector({
  key: 'itemQuery',
  get: async ({ get }) => {
    const id = get(todoIdState);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  },
});

function App() {
  const data = useRecoilValue(todoItemQuery);
  console.log('data', data);
  return <div>{data.title}</div>;
}

export default App;
