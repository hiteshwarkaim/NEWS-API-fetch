import "./App.css";
import News from "./News";

function App() {
  return (
    <>
      <News pageSize={5} country="in" category="sports" />
    </>
  );
}

export default App;
