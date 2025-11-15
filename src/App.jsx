import { useState, useEffect } from 'react'
import './App.css'
import StockCard from './components/StockCard'
import StockTickerInput from './components/StockTickerInput'
import StockReport from './components/StockReport'

function App() {
  const dummyReportData = [
    "ITC just tripped over its own shoelaces—₹404, down 0.8%—as the market yawned and stepped sideways. The 5‑day snapshot shows a 412‑ish float slowly sinking toward the current line, and with 52‑week boundaries at 471/392, the share looks comfy in the middle, waiting for a reason to dance. Q2 tried to sparkle: net profit inched up 2–3% and FMCG‑Others posted a healthy 8% jump, but the “other” basket is still a puzzle, and the rains played spoiler for Agri. Cigarettes keep printing cash like a loyal printer, yet the headline reads “dividend buffer” not “growth rocket.” Valuation? Mid‑20s P/E with a tidy 3‑plus percent yield—more cozy cushion than spicy catalyst. Debt is whisper‑low and balance sheet is solid, but free cash flow is sulking negative. Analysts are cheerleaders (Strong Buy majority), while the headline risk‑meter flirts with “bearish.” In other words: steady‑earnings, steady‑dividends, and price doing a polite limbo under 410. Verdict: Hold. The house is well‑built; just wait for a clearer signal or a better entry under 400."
  ]

  const queryingStocksApi = "Querying Stocks API..."
  const queryingStocksApiError = "Error fetching Stock data.."
  const creatingReport = "Creating AI-powered Stock Report..."
  const creatingReportError = "Error generating Stock Report.."

  const [showReport, setShowReport] = useState(false);
  const [stockReport, setStockReport] = useState(null);
  const [placeholderMessage, setPlaceholderMessage] = useState(queryingStocksApi);

  const handleGenerateReport = async (data) => {
    fetchStockDataFromApi(data);
    setShowReport(true);
  }

  const handleTryAnotherPrediction = () => {
    setShowReport(false);
    setStockReport(null);
  }

  const fetchStockDataFromApi = async (data) => {
    try {
      //const response = await fetch(`https://dummyjson.com/${data}?delay=5000`)
      const url = `https://stock-indianapi-worker.vikrant-p-kamat.workers.dev/?name=${data}`
      const response = await fetch(url)
      const responseData = await response.text()
      const status = response.status
      if (status === 200) {
        setPlaceholderMessage(creatingReport); // Show "Creating report..." message
      // Instead of setting stock report directly, pass data to fetchReport
      await fetchReport(responseData);
      } else {
        throw new Error('Worker error:' + responseData)
      }
    } catch (error) {
      setPlaceholderMessage(queryingStocksApiError)
      console.error('error: ', error)
    }
  }

const fetchReport = async (data) => {
  const messages = [
    {
      role: 'system',
      content: 'You are a stock-market trading expert. Given data on stock prices over the past week, write a report of **up to 300 words** describing the stock\'s performance in a quirky way and then issue a final verdict: "Buy", "Hold", or "Sell". Mimic the style shown in the example (between ### symbols): lively, engaging, a bit informal, but not overly verbose or repetitive. Avoid naming the same stocks too many times. Avoid too much financial jargon and numbers. Make sure your report is a single continuous piece of text (not bullet points), and ensure it does *not* get cut off prematurely.'
    },
    {
      role: 'user',
      content: `Here is the data: ${data}
      
      ###
      OK baby, hold on tight! You are going to haate this! Over the past three days, Tesla (TSLA) shares have plummeted. The stock opened at $223.98 and closed at $202.11 on the third day, with some jumping around in the meantime. This is a great time to buy, baby! But not a great time to sell! …

      Apple (AAPL) is the supernova in the stock sky – it shot up from $150.22 to a jaw-dropping $175.36 by the close of day three. We're talking about a stock that's hotter than a pepper sprout in a chilli cook-off, and it's showing no signs of cooling down! …

      Then there's Meta (META), the heartthrob with a penchant for drama. It winked at us with an opening of $142.50, but by the end of the thrill ride, it was at $135.90, leaving us a little lovesick. …
      ###
      Use this style as inspiration: fun, energetic, and informal — but concise and coherent. Now write your report.`
    }
  ]

  try {
    const url = "https://openai-api-worker.vikrant-p-kamat.workers.dev/"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(messages)
    })
    const responseData = await response.json()
    console.log('API Response:', responseData)

    if (!response.ok) {
      throw new Error(`Worker error: ${responseData.error}`)
    }    
    // Call renderReport instead of setting stock report directly
    renderReport(responseData.content)
  } catch (err) {
    setPlaceholderMessage(creatingReportError)
    console.error('Error generating AI report:', err)
  }
}

// Add the renderReport function
const renderReport = (aiGeneratedContent) => {
  // This function puts the AI generated text into the Report Content Field
  setStockReport(aiGeneratedContent);
}

  const popularStocks = [
    { symbol: 'ASIANPAINT', name: 'Asian Paints Ltd.' },
    { symbol: 'BHARATFORG', name: 'Bharat Forge Ltd.' },
    { symbol: 'TATATECH', name: 'Tata Technologies Ltd.' },
    { symbol: 'ICICIBANK', name: 'ICICI Bank' },
    { symbol: 'ITC', name: 'ITC' },
    { symbol: 'LT', name: 'Larsen & Toubro Ltd.' },
    { symbol: 'CUMMINSIND', name: 'Cummins India Ltd.' },
    { symbol: 'TATASTEEL', name: 'Tata Steel Ltd.' },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel' },
    { symbol: 'VBL', name: 'Varun Beverages Ltd.' }
  ]

  return (
    <div className="w-full h-full -z-10 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            🐂 <span className="bg-linear-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
              Desi Dave's
            </span> 🐻
          </h1>
          <h2 className="text-4xl font-bold text-white mb-4">Stock Market Predictions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get dodgy predictions for Indian stocks with our AI-powered crystal ball!
            Remember: Past performance doesn't guarantee future results, but our predictions are guaranteed entertaining! 🎯
          </p>
        </div>

        {/* Stock Ticker Input Section */}
        <div className="mt-12">
          {
            showReport ?
              <StockReport placeholderMessage={placeholderMessage} reportData={stockReport} onTryAnother={handleTryAnotherPrediction} /> :
              <StockTickerInput onGenerate={handleGenerateReport} />
          }
        </div>

        {/* Popular Stocks Grid */}
        <div className="gap-8 mt-12">
          {/* Stock Cards Section */}
          <h3 className="text-2xl text-center font-bold text-white mb-6">🔥 Popular Indian Stocks</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {popularStocks.map((stock) => (
              <StockCard
                key={stock.symbol}
                stock={stock}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-linear-to-br from-slate-800 to-slate-900 border-red-500 border rounded-lg">
          <h3 className="text-lg text-center font-bold text-red-500 mb-2 animate-pulse">⚠️ Disclaimer</h3>
          <h2 className="text-lg text-center font-bold text-red-400 mb-2">© This is not legit financial advice!</h2>
          <p className="text-red-200 text-base text-center font-extrabold">
            This is a parody app inspired by "Dodgy Dave" for learning purposes only.
            All predictions are AI generated and should NOT be used for actual trading decisions.
            Consult qualified financial advisors for investment advice. Trade at your own risk!!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
