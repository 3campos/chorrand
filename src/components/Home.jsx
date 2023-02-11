import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowContainerTasq from './ShowContainerTasq'

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