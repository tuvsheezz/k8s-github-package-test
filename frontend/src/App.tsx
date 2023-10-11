import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState<string | null>(null);

  const BASE_URL = 'http://k8s-github-package-test-backend-service.default.svc.cluster.local:8000'
  // const BASE_URL = 'http://localhost:8000'

  useEffect(() => {
    axios.get(`${BASE_URL}/api/hello`).then((response) => setText(response.data.data));
  }, []);

  return (
    <p>{text ? text : "Loading..."}</p>
  )
}

export default App
