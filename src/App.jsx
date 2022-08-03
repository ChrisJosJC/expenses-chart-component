import { Bar } from "./components/Bar.jsx";

function App() {
  return (
    <main className="App bg-crema h-screen flex flex-col justify-items-center align-middle w-screen p-6 md:justify-center md:items-center">
      <div className="flex mb-1 bg-soft-red p-5 md:w-3/6 sm:w-full lg:w-2/6 rounded-lg justify-between">
        <div className=" ">
          <h2 className="font-thin text-white sm:text-2xl md:text-xs font-">My balance</h2>
          <b className="text-white text-2xl font-bold">$921.48</b>
        </div>
        <img src="/logo.svg" alt="" />
      </div>
      <div className="flex flex-col mt-1 h-3/4 bg-white pt-6 p-4 md:w-3/6 sm:w-full lg:w-2/6 rounded-lg">
        <h2 className="text-primary font-bold text-2xl">
          Spending - Last 7 days
        </h2>
      <Bar/>
      <hr className="opacity-20"/>
        
    <div className="mt-4 flex justify-between">
        <div><span className="text-secundary text-md md:text-sm">Total this month</span>
  <h2 className="text-primary font-bold text-2xl">$478.33</h2></div>
  {/* Porcentaje */}
 <div className="mt-2">
   <span className="text-primary block text-right font-bold">+2.4%</span>
  <span className="text-secundary md:text-sm">from last month</span>
 </div>
    </div>

  

        <div />
      </div>
      {/* <div className="attribution w-5/6 mx-auto p-0">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;
