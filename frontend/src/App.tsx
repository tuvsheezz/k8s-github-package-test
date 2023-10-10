import axios from 'axios';
import { useState, useEffect } from 'react'

export default function App() {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    axios.get("k8s-github-package-test-backend-service.default.svc.cluster.local:8000/api/hello").then((response) => setText(response.data.data));
  }, []);

  return (
    <p>{text ? text : "Loading..."}</p>
  )
}
