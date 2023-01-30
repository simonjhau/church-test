import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`/`);
    console.log({ data });
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
