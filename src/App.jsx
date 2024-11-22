import './App.css'
import Button from './components/Buttons/Button.jsx';

function App() {

  function textButton (text) {
    return console.log(text);
  }


  return (
      <>
      <h1>Handbags & Purses</h1>

      <nav>
        <button type="button" onClick={() => textButton("To the collection")}>To the collection</button>
        <button type="button" onClick={() => textButton("Shop all bags")}>Shop all bags</button>
        <button type="button" onClick={() => textButton("Pre-orders")} disabled = {true}>pre-orders</button>
          <Button
              type='button'
              buttontext='To the collection'
              onClick={() => textButton('To the collection')}
              ondisabled={false}
          />
          <Button
              type='button'
              buttontext='Shop all bags'
              onClick={() => textButton('Shop all bags')}
              ondisabled={false}
          />
          <Button
              type='button'
              buttontext='pre-orders'
              onClick={() => textButton('pre-orders')}
              ondisabled={true}
          />
      </nav>

      </>
  )
}

export default App
