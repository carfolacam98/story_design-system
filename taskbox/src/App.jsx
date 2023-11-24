import { Button } from './ui'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Button label={'Button Default'} />
      <Button primary={true} label={'Button Primary'} />
    </div>
  )
}

export default App
