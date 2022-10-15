import Counter from "./components/classComponent/Counter";
import Event from "./components/events/Event";
import UseStateCounter from "./components/useStateHook/UseStateCounter";



function App() {
  return (
    <div className="App">
      <Event/>
      <Counter/>
      <Counter count={5}/>
      <UseStateCounter/>
    </div>
  );
}

export default App;
