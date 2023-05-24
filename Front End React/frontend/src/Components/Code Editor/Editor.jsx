import React, {useRef, useState, useEffect} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/ext-language_tools";
import axios from "axios";



const Editor = () => {
  const editorRef = useRef(null);
  const[initialValue, setInitialValue] = useState("")
  useEffect(() => {
    const texts = JSON.parse(localStorage.getItem('texts')) || [];
    const value = texts.join('\n');
    setInitialValue(value);
  }, []);
  
  // Convert array elements to a string with each element on a new line
  const executeCode = () =>{
    const code = editorRef.current.editor.getValue();
    const formData = new FormData();
    formData.append('code', code);
    axios
      .post("http://localhost/compiler.php",formData , { withCredentials: true })
      .then(function (response) {
        document.querySelector(".output").textContent = response.data;
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <AceEditor
        ref={editorRef}
        mode="python"
        theme="cobalt"
        name="code"
        fontSize={20}
        editorProps={{ $blockScrolling: true }}
        style={{ height: "500px", width: "100%" }}
        value={initialValue}
      />
      <div>
        <button onClick={() => executeCode(editorRef)}>Run</button>
      </div>
      <div className="output"></div>
    </div>
  );
};

export default Editor;
