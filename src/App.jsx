import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuoteBox from './Components/Quotesbox'
import quotes from "./quotes.json"
import Button from './Components/Button'

function App() {

  const cardColor = [
    '#F7EC09',
    '#3EC70B',
    '#3B44F6',
    '#A149FA',
    '#37E2D5',
    '#590696',
    '#C70A80',
    '#FBCB0A',
    '#49FF00',
    '#FBFF00',
    '#FF9300',
    '#FF0000',
    '#FF1F5A',
    '#FFD615',
    '#F9FF21',
    '#1E2A78',
    '#3EC1D3',
    '#F6F7D7',
    '#FF9A00',
    '#FF165D',
    '#006E7F',
    '#F8CB2E',
    '#EE5007',
    '#B22727',
    '#151D3B',
    '#D82148',
    '#DADBBD',
    '#6EBF8B',
    '#9EDE73',
    '#F7EA00',
    '#E48900',
    '#BE0000'
  ]

  const colorRandom = Math.floor(Math.random() * cardColor.length)

  const phraseRandom = Math.floor(Math.random() * quotes.length)

  const [indexQuote, setindexQuote] = useState(phraseRandom)

  const textColor = cardColor[colorRandom]

  const togglePhrase = () => {
    const phraseRandom = Math.floor(Math.random() * quotes.length)
    setindexQuote(phraseRandom)
  }

  document.body.style = `background: ${textColor}`;

  return (
    <div>
      <div id='quote-box' style={{ color: textColor }}>
        <QuoteBox phraseRandom={phraseRandom} />
        <Button textColor={textColor} togglePhrase={togglePhrase} />
      </div>
    </div >
  )
}

export default App
