import { Button, Input } from './ui'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Button label={'Button Default'} />
      <Button primary={true} label={'Button Primary'} />
      <Input label={'Default Input'} state={'default'} />
    </div>
  )
}

export default App
