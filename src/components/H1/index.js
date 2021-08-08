import { useContext, useRef } from "react";
import { Context } from "../CreateContetext";

export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
      <br/>
      <button>acrescentar +</button>
      <button>decrescemte -</button>

    </>

  );
}
