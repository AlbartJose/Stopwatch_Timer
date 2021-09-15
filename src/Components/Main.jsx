import React from "react";
import "./Main.css";
import { Counter } from "./Counter";
import { Form } from "./Forms";

function Main() {
  // const [working, setWorking] = React.useState(false);
  // const fileRef = React.useRef();

  // function handleClickDisp() {
  //   console.log(fileRef.current.files);
  // }

  return (
    <div className="mainDiv">
      {/* {!working ? <h3>Is it Working</h3> : <h3>Working</h3>}
      <button
        onClick={() => {
          setWorking(!working);
        }}
      >
        Test
      </button>
      <input type="file" ref={fileRef} />

      <button onClick={handleClickDisp}>Show File in console</button> */}

      <Counter />
      <hr />
    </div>
  );
}

export default Main;
