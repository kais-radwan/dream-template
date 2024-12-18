import { useState } from "react";
import { Features } from "./components/features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full z-0 inset-0 textureBg opacity-10"></div>
        <Features />
      </div>
    </>
  );
}

export default App;
