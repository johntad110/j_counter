import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  return (
    <div className="App">
      <div className="Container">
        <TonConnectButton />

        <div className="Card">
          <div className="CardTitle">Counter Address</div>
          <div className="CardContent Hint">{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className="Card">
          <div className="CardTitle">Counter Value</div>
          <div className="CardContent">{value ?? 'Loading...'}</div>
        </div>

        <button
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => sendIncrement()}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;