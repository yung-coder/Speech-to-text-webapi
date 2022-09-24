import "./App.css";
import { useEffect, useState } from "react";
import Ui from './components/Ui';
import Area from "./components/Area";

const SpeechRecogination =
  window.speechRecognition || window.webkitSpeechRecognition;
const recogination = new SpeechRecogination();

recogination.continous = true;
recogination.interimResults = true;
recogination.lang = "en-US";
function App() {
  const [islistening, setislistening] = useState(false);
  const [note, setnote] = useState(null);

  const start = () => {
    setislistening(!islistening);
  };

  useEffect(() => {
    handleListen();
  }, [islistening]);

  const handleListen = () => {
    if (islistening) {
      recogination.start();
      recogination.onend = () => {
        console.log("continue..");
        recogination.start();
      };
    } else {
      recogination.stop();
      recogination.onend = () => {
        console.log("Stopped recogination on Click");
      };
    }
    recogination.onstart = () => {
      console.log("recoginations on");
    };

    recogination.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setnote(transcript);
      recogination.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <>
      <h1>Voice Notes</h1>
      <div className="container">
        <Ui islistening={islistening} start={start} />
        <Area note={note}/>
      </div>
    </>
  );
}

export default App;
