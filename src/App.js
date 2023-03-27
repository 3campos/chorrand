import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import ShowContainerTask from './components/ShowContainerTask'
import {TaskProvider} from './context/TaskContext.js'
import {createTheme, ThemeProvider} from '@mui/material'
import { CssBaseline} from "@mui/material"

export default function App() {
    const themeDark = createTheme({
        palette: {
          background: {
            default: "#0277bd"
          },
          text: {
            primary: "#ffffff"
          }
        },
        typography:{
          fontFamily: [
          'Montserrat', 
          'sans-serif'].join(','),
          // fontFamily: [
          // 'Mali', 
          // 'cursive'
          // ].join(','),
          // fontFamily: [
          // 'Montserrat', 'sans-serif'
          // ].join(','),
          // fontFamily: [
          // 'Share Tech Mono', 'monospace'
          // ].join(','),
        }});
      
    return(
        <ThemeProvider theme={themeDark}>
            <CssBaseline/>
        <TaskProvider>
            <Router>
              <div className='container'>
                <Routes>
                    <Route
                    exact path='/'
                        element={
                            <div>
                            <Home />
                            </div>
                        }
                    />
                    <Route
                    exact path='/newTask'
                      element={
                        <div>
                          <ShowContainerTask />
                        </div>
                      }
                    />
                </Routes>
              </div>
            </Router>
        </TaskProvider>
        </ThemeProvider>
    )
}
