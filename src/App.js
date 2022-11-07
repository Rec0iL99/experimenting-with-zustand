import { useBoundStore } from "./stores/useBoundStore";

function App() {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addBear = useBoundStore((state) => state.addBear);
  const customerList = useBoundStore((state) => state.customerList);
  const customList = useBoundStore((state) => state.customList);
  const addBearAndFish = useBoundStore((state) => state.addBearAndFish);
  const addCustomerList = useBoundStore((state) => state.addCustomerList);
  const addCustomList = useBoundStore((state) => state.addCustomList);
  return (
    <div>
      <h2>Number of bears {bears}</h2>
      <h2>Number of fishes {fishes}</h2>
      <button onClick={() => addBearAndFish()}>Add a bear</button>
      <button onClick={() => addCustomerList([12, 13, 14])}>Add a customer</button>
      <button onClick={() => addCustomList([45, 67, 89])}>Add a custom</button>
      <button onClick={() => console.log(customerList, customList)}>View State</button>
    </div>
  );
}

export default App;
