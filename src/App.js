import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowContainerTask from './components/ShowContainerTask'
import {TaskProvider} from './context/TaskContext.js'
import {createTheme, ThemeProvider} from '@mui/material'

function App() {
    return(
        <TaskProvider>
            <Router>
              <div className='container'>
                <Routes>
                    <Route
                    exact path='/'
                        element={
                            <>
                            <ShowContainerTask />
                            </>
                        }
                    />
                </Routes>
              </div>
            </Router>
        </TaskProvider>
    )
}

export default App;
