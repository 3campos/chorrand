import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button, FormControlLabel } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'
import WalkDog from './dogTasks/WalkDog';
import FeedDog from './dogTasks/FeedDog';
import HydrateDog from './dogTasks/HydrateDog';
import {ListComponent} from './ListComponent';
import {useState, useEffect} from 'react';
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



export default function AddTaskCard({children}){ 

    const [showTask, setShowTask] = useState(['']);

    const [cardStatus, setCardStatus] = useState(true);
    // let testVar = 'newark'
    // console.log('74: pre-pre', cardStatus)
    // console.log('75:showTask', showTask)

    function showDogTask(event) {
      
      let testStore = [...showTask];

      if (event === 'DirectionsRunClick'){
        testStore.push(<WalkDog/>)
        setShowTask(testStore)
      } 
      else if (event === 'RestaurantClick') {
        testStore.push(<FeedDog/>)
        setShowTask(testStore)
      } else if (event === 'WaterClick'){
        testStore.push(<HydrateDog/>)
        setShowTask(testStore)
      } 
      // else if (event === 'MedicationClick'){
      //   testStore.push(<FeedDog/>)
      //   setShowTask(testStore)



      
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
                        key='DirectionsRunButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = {()=>showDogTask('DirectionsRunClick')}
                        >
                          <DirectionsRunIcon fontSize="large" key='DirectionsRunIcon'/>
                        </IconButton>
                        <IconButton 
                        key='RestaurantIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = {()=>showDogTask('RestaurantClick')}
                        >
                          <RestaurantIcon fontSize="large"
                            key='RestaurantIcon'
                          />
                        </IconButton>
                        <IconButton 
                        key="WaterIconButton"
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = {()=>showDogTask('WaterClick')}
                        >
                          <WaterIcon fontSize="large"
                          key="WaterIcon"
                          />
                        </IconButton>
                        <IconButton 
                        key='MedicationIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = {()=>showDogTask('MedicationClick')}
                        >
                          <MedicationIcon fontSize="large"
                          key="MedicationIcon"
                          />
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        key="AutoAwesomeIconButton"
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <AutoAwesomeIcon fontSize="large"
                          key="AutoAwesomeIcon"
                          />
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        key='PsychologyIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <PsychologyIcon fontSize="large"
                          key="PsychologyIcon"
                          />
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        key='SportsEsportsIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <SportsEsportsIcon fontSize="large"
                          key="SportsEsportsIcon"
                          />
                        </IconButton>
                      </Stack>
                      {/* put this back after the arrow function and before the empty parens on the onclick function on line 98: {if (showTask.length > 0) {console.log (showWalkTask())} else {console.log ('null')} } */}
                    {/* ))} */}
                {/* </TextField> */}
                    {/* {showTask.map((item)=>(<ListComponent key={item.name} text={item}/>))} */}
                    <div>{showTask[showTask.length-1]}</div>
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