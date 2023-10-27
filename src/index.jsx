import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import App from './App'
import Detalhe from './Detalhe/detalhe'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/App' element={<App />}></Route>
				<Route path='/detalhe/:id' element={<Detalhe />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)