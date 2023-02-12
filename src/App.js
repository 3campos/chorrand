import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowContainerTasq from './components/ShowContainerTasq'
import {TasqProvider} from './context/TasqContext.js'
import {createTheme, ThemeProvider} from '@mui/material'

function App() {
    return(
        <TasqProvider>
            <Router>
              <div className='container'>
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
              </div>
            </Router>
        </TasqProvider>
    )
}

export default App;
