import axios from 'axios';
import { useState, useEffect } from 'react'

export default function App() {
  const baseURL = "/";

  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => 
    {
      setText(response.data.data);
    });
  }, []);

  return (
    <p>{text ? text : "Loading..."}</p>
  )
}
