import { Layout } from '@/components/Layout'
import Home from '@/pages/Home'
import AppDetails from '@/pages/AppDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/app/:id" element={<AppDetails />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
