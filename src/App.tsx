import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainHome from './components/MainHome/MainHome'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainHome />} />
            </Routes>
        </Router>
    )
}

export default App
