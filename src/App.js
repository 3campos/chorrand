import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Calendar from './components/Calendar.jsx'
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
                          <ShowContainerTask/>
                        </div>
                      }
                    />
                    <Route
                    exact path='/calendar'
                    element={
                      <div>
                        <Calendar/>
                      </div>
                    }
                    />
                </Routes>
              </div>
            </Router>
        </ThemeProvider>
    )
}
