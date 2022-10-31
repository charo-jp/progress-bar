import React, {useState, useEffect} from 'react';
import "./App.css";

function App() {
  const body = document.body;
  const html = document.documentElement;
  const [status, setStatus] = useState(0);
  const [height, setHeight] = useState(Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight ) - window.innerHeight);
  
    useEffect (() => {
    window.addEventListener("scroll", handleStatus, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleStatus);
    }
  }, [])

  useEffect(() => {
    document.getElementById("status").style.width =  status / height * 100+ "%";
  }, [status])

  useEffect(() => {
    setHeight(Math.max( body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight ) - window.innerHeight);
  } , [window.innerHeight])

  const handleStatus = () => {
    const positionY = window.pageYOffset;
    setStatus(positionY);
  }
  return (
    <div className="App">
      <div class ="progress-bar">
        <div className="status" id = "status">{Math.round(status / height * 100)}</div>
      </div>
      <div className="pages">
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
        <div className="page4"></div>
      </div>
      
    </div>
  );
}

export default App;
