import Screen from './components/screen/screen';

import useVhValue from './hooks/useVhValue';

import './app.css';

function App() {
  useVhValue();

  return (
    <div className="app">
      <Screen />
    </div>
  );
}

export default App;
