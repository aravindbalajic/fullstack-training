import { useRef,useState,useEffect} from "react";

var UseRef=()=>{
    var [text,setText]=useState("")
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text
    },[text])
    return(
        <div><center>
            <h2>This is example of useref</h2>
            <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
            <h2>My Current Render is {text}</h2>
            <h3>My Previous Render is {prevText.current}</h3></center>
        </div>
    );
}
export default UseRef;


