import * as React from 'react';
import './style.css';

export default function App() {
  const [name, setname] = React.useState(true);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Elangovan</p>
      <h1>{name ? 'Kishore' : 'Elangovan'}</h1>
      <button
        onClick={() => {
          setname(!name);
        }}
      >
        change
      </button>
    </div>
  );
}
