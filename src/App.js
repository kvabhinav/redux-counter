import { useSelector } from 'react-redux'
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';

function App() {

  const counter = useSelector((state) => state.counter)

  return (
    <div>
      <h1>counter : {counter}</h1>
      <IncrementButton />
      <DecrementButton />
    </div>
  );
}

export default App;
