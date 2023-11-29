import { Button, Input,Card } from './ui'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Button label={'Button Default'} />
      <Button primary={true} label={'Button Primary'} />
      <Card hasButton={true} imageUrl="https://via.placeholder.com/300" buttonText="Click me">
  <div> Necesito pagar esto </div>
</Card>
      <Input label={'Default Input'} state={'default'} />
    </div>
  )
}

export default App
