import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button, FormControlLabel } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'
import WalkDog from './dogTasks/WalkDog';
import {ListComponent} from './ListComponent';
import {useState} from 'react';
import React from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WaterIcon from '@mui/icons-material/Water';
import MedicationIcon from '@mui/icons-material/Medication';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

let theme = createTheme();
theme=responsiveFontSizes(theme);

const taskOptions = [
    {
      id: 0,
      label: '🦮',
      task: 'Walk',
      distance: 'Miles'
    },
    {
      id: 1,
      label: '✨',
      task: 'Wipe Paws'
    },
    {
      id: 2,
      label: '🍽️',
      task: 'Feed'
    },
    {
     id: 3,
     label: '🚰',
     task: 'Refill Water', 
    },
    {
      id: 4,
      label: '💊',
      task: 'Give Medication',
      doses: '#'
    },
    {
      id: 5,
      label: '🧠',
      task: 'Stimulating Activity',
      types: ['Sniff Mat', 'Treat Puzzle', 'Lick Mat']
    },
    {
      id: 6,
      label: '🎮',
      task: 'Play',
      types: ['Tug', 'Ball Toss']
    }
  ];

// let testStore = '';

export default function AddTaskCard({children}){ 

    const [showTask, setShowTask] = useState(['']);

    function showDogTask(event) {
      const clickedIcon = event.target.dataset.testid
      if (showTask.length === 1 && clickedIcon === 'DirectionsRunIcon'){
      setShowTask([...showTask, <WalkDog/>])
      } else {
        setShowTask([...showTask.slice(0, -1)])
      }
      // event.preventDefault()
    }

    // function cardDropDown() {
      
    // }

    //tinker with above function. maybe I can use the icon clicked on to drop down the correct dogTask

    return(
        <div>
        <ThemeProvider theme={theme}>
        <Card 
            className='card' 
            variant='outlined'
            sx={
                {display: 'flex',
                flexDirection: 'column',
                // flexWrap: 'wrap',
                backgroundColor: lightBlue[200], borderColor:'black', color: 'white','&:hover':{backgroundColor:cyan[600], borderColor:'black', color: 'white'} 
            }}>
            <div
            sx={{alignContent: 'space-around'}}
            component="form"
            noValidate
            autoComplete="off"
            >
                <Typography variant="h3">
                <div>
                {/* <TextField
                // variant="outlined"
                select
                label= "Task"
                defaultValue="🤔"
                color = 'secondary'
                sx={{width: '15%'}}> */}
                    {/* {taskOptions.map((option, id) => ( */}
                    <Stack direction="row" spacing={1} sx={{wrap: 'wrap', ml: 12.5}}>
                        <IconButton 
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        // onClick = { () => showDogTask() }
                        >
                          <DirectionsRunIcon fontSize="large"/>
                          {/* ^here's the icon I can use to feed into the showWalkTask function, which I'll also have to rename */}
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <RestaurantIcon fontSize="large"/>
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <WaterIcon fontSize="large"/>
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <MedicationIcon fontSize="large"/>
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <AutoAwesomeIcon fontSize="large"/>
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <PsychologyIcon fontSize="large"/>
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <SportsEsportsIcon fontSize="large"/>
                        </IconButton>
                      </Stack>
                      {/* put this back after the arrow function and before the empty parens on the onclick function on line 98: {if (showTask.length > 0) {console.log (showWalkTask())} else {console.log ('null')} } */}
                    {/* ))} */}
                {/* </TextField> */}
                    {showTask.map((item, i)=>(<ListComponent text={item}/>))}
                </div>
                </Typography>
                
            </div>
            {/* {children} */}
            <Button 
                variant="outlined"
                display='inline-flex'
                sx={{width: '33%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} 
                }}
                
                //an alternative way to code styling: 
                    //color="primary"
            >
                Log Task
            </Button>
        </Card>
        </ThemeProvider>
    </div>
    )
}