import Counter from "./components/classComponent/Counter";
import Event from "./components/events/Event";



function App() {
  return (
    <div className="App">
      <Event/>
      <Counter/>
      <Counter count={5}/>
    </div>
  );
}

export default App;
