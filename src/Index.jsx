import { useState } from "react";
import Clock from "../pages/Clock/Clock";

function Index() {
  const [time, setTime] = useState(0);

  return (
    <div className="Index">
      <Clock />
    </div>
  );
}

export default Index;
