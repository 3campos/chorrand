import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowContainerTasq from './components/ShowContainerTasq'
import {FeedbackProvider} from './context/FeedbackContext.js'

function App() {
    return(
        <FeedbackProvider>
            <Router>
                <Routes>
                    <Route
                    exact path='/'
                        element={
                            <>
                            <ShowContainerTasq />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </FeedbackProvider>
    )
}

export default App;
