import {Button} from './components/ui/button'
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, [])

  return (
  <div className="p-4">
    <p className="font-bold text-3xl">{message}</p>
    <Button>Click me</Button>
  </div>
  )
}

export default App
