# 🤖 Desi Dave's AI Stock Analyst

A full-stack React application featuring **agentic AI** that analyzes Indian stock market data and generates quirky, personalized investment reports in real-time. This is inspired from the sample app: https://github.com/scrimba/dogdy-dave which was used while completing the lessons of this course https://www.coursera.org/learn/deploy-ai-app-with-cloudflare

## 🎯 Project Overview

This project demonstrates modern full-stack development combined with agentic AI capabilities:
- **Frontend**: React 18 + Tailwind CSS for responsive UI
- **Backend**: Cloudflare Workers for serverless APIs  
- **AI Agent**: GPT-powered analysis with custom personality
- **Deployment**: GitHub Pages + Cloudflare Edge

## 🏗️ Architecture

```
Frontend (React) → Stock API Worker → AI Gateway Worker → OpenAI GPT → Report Generation
```

### Components Structure
```
src/
├── App.jsx                 # Main application logic
├── components/
│   ├── Navbar.jsx         # Navigation with social links
│   ├── StockTickerInput.jsx # Stock ticker input interface
│   ├── StockReport.jsx    # AI-generated report display
│   └── StockCard.jsx      # Popular stocks grid
└── assets/
    └── loader.svg         # Loading animation
```

## 🚀 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | React 18, Tailwind CSS | Interactive UI with real-time updates |
| **Build Tool** | Vite | Fast development and optimized builds |
| **Backend APIs** | Cloudflare Workers | Serverless edge computing |
| **AI Engine** | OpenAI GPT-4 via OpenRouter | Agentic stock analysis |
| **Deployment** | GitHub Pages + Cloudflare | Global CDN distribution |

## 🔧 Cloudflare Workers Setup

### 1. Stock API Worker
Created directly on Cloudflare Dashboard:
```javascript
// Deployed at: https://stock-indianapi-worker.vikrant-p-kamat.workers.dev/
// Fetches real-time Indian stock market data
```

### 2. AI Gateway Worker  
Built using Cloudflare AI Gateway + OpenRouter:
```bash
# Setup and deployment
npx wrangler init ai-worker
# Configure AI Gateway integration
npx wrangler deploy
```

```javascript
// Deployed at: https://openai-api-worker.vikrant-p-kamat.workers.dev/
// Processes stock data through agentic AI developed using Openrouter free tier models for analysis
```

## 🤖 Agentic AI Features

The AI agent follows a structured workflow:
1. **Data Ingestion**: Processes real-time stock market data
2. **Context Analysis**: Understands market trends and patterns  
3. **Personality Application**: Applies "Dodgy Dave" quirky style
4. **Report Generation**: Creates actionable buy/hold/sell recommendations

### AI Prompt Engineering
```javascript
const ExampleSystemPrompt = `You are a stock-market trading expert. 
Given data on stock prices, write a quirky report and issue 
a final verdict: "Buy", "Hold", or "Sell"...`
```

## 📱 Key Features

- **Real-time Stock Data**: Live Indian market data integration
- **AI-Powered Analysis**: Agentic AI driven investment insights  
- **Responsive Design**: Mobile-first Tailwind CSS implementation
- **Loading States**: Smooth UX with multi-stage loading
- **Error Handling**: Comprehensive error boundaries
- **Social Integration**: GitHub/LinkedIn profile links

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/vkamat93/desi-stock-market-ai.git
cd desi-stock-market-ai

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🌐 Live Demo

**[View Live Application →](https://vkamat93.github.io/desi-stock-market-ai/)**

## 🎯 Skills Demonstrated

### Frontend Development
- Modern React with hooks and functional components
- Responsive design with Tailwind CSS
- Component composition and state management
- API integration with loading states

### Backend Development  
- Serverless architecture with Cloudflare Workers
- RESTful API design and implementation
- Third-party API integration (stock data)
- Edge computing deployment

### AI/ML Engineering
- Agentic AI system design
- Prompt engineering for financial analysis  
- AI Gateway integration
- Production AI deployment

### DevOps & Deployment
- GitHub Actions workflow
- Cloudflare Workers deployment
- Environment configuration
- Performance optimization

## ⚠️ Disclaimer

This is a demonstration project for educational purposes. All stock predictions are AI-generated and should NOT be used for actual trading decisions. Always consult qualified financial advisors for investment advice.

## 👨‍💻 Developer

**Vikrant Kamat**  
Full-Stack Developer | AI Enthusiast

- **GitHub**: [vkamat93](https://github.com/vkamat93)
- **LinkedIn**: [vikrant-kamat](https://www.linkedin.com/in/vikrant-kamat-796a0165/)
- **Portfolio**: [Live Demo](https://vkamat93.github.io/desi-stock-market-ai/)

---
*Built with ❤️ using React, Cloudflare Workers, and OpenAI GPT-4*