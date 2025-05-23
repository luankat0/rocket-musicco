import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import Header from './components/Header'

const App: React.FC  = () => {
  	return (
		<Router>
			<Header onCartClick={() => window.location.href = "/carrinho"}/>
			<main style={{ padding: '2rem'}}>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/produto/:id" element={<ProductPage />} />
					<Route path="/carrinho" element={<CartPage />} />
				</Routes>
			</main>
		</Router>
  	)
}

export default App
