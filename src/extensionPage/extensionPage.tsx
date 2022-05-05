import React from "react";
import { createRoot } from 'react-dom/client';

function App(props :{prop: string;}){
  return (
      <div className="border-4 border-sky-500">
      React + TypeScript + ChromeExtension sample {props.prop}
      </div>);
};

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App prop={"test"} />);

console.log('log');
console.info('info');
console.warn('warn');
console.error('error');
