import { Graph } from "./components/Graph.jsx";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <main className="App bg-crema h-screen flex flex-col justify-items-center align-middle w-screen p-6 md:justify-center md:items-center">
      <Header></Header>
      <Graph></Graph>
      <div className="attribution w-5/6 mx-auto p-0">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  );
}

export default App;
