import { useBoundStore } from "./stores/useBoundStore";

function App() {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addBear = useBoundStore((state) => state.addBear);
  const addBearAndFish = useBoundStore((state) => state.addBearAndFish);
  return (
    <div>
      <h2>Number of bears {bears}</h2>
      <h2>Number of fishes {fishes}</h2>
      <button onClick={() => addBearAndFish()}>Add a bear</button>
    </div>
  );
}

export default App;
