import { useRef } from "react";

const Child = ({ name, send , update }) => {
  const meessageRef = useRef("");
  const nameRef = useRef("")

  function pressBotton() {

    const text = meessageRef.current.value;
    alert(`Text in input ${text}`);
  }

  function pressBottonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitForm(e) {
    e.preventDefault();
    update(nameRef.current.value)   
  }

  return (
    <div>
      <p onMouseOver={() => console.log("On mouse Over")}>{`Children component, hello ${name}`}</p>
      <button onClick={() => console.log("Pressed Button 1")}>Button 1</button>
      <button onClick={pressBotton}>Button2</button>
      <button onClick={() => pressBottonParams("Hello Brahian")}>
        Button3
      </button>
      <input
        placeholder="Insert a text"
        onFocus={() => console.log("Input Focused")}
        onChange={(e) => console.log("Input chanched", e.target.value)}
        ref={meessageRef}
      ></input>
      <button onClick={() => send(meessageRef.current.value)}>Send Message</button>
     <div style={{marginTop : '20px'}}>
        <form onSubmit={submitForm}>
            <input ref={nameRef} placeholder="New Name"></input>
            <button type="submit">Upadate name</button>
        </form>        
     </div>
    </div>
  );
};

export default Child;
