"use client";
import * as Jordle from "@/projects/jordle";
import { useEffect, useRef, useState } from "react";

export default function JordlePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <JordleRenderer />
    </div>
  );
}

// the render fn
function JordleRenderer() {
  const jordle = useJordle();

  console.log("renderer", jordle);

  return <div>{jordle.jord}</div>;
}

// state management (in react)
function useJordle() {
  const { current: jordle } = useRef<Jordle.JordleState>(Jordle.create());
  const [state, setState] = useState<Jordle.JordleState>(jordle);
  
  useEffect(() => {
    Jordle.init(jordle);
    // setState(jordle); // react sucks lmao
    setState({...jordle});
  }, []);

  return state;
}
