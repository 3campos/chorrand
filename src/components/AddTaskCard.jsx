import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button, FormControlLabel } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'
import WalkDog from './dogTasks/WalkDog';
import FeedDog from './dogTasks/FeedDog';
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
      // console.log('77: pre-', cardStatus)
      // console.log('80:', event)
      let testStore = [...showTask];
      // console.log('81:length', showTask)

      if (event === 'DirectionsRunClick'){
        // setShowTask([<WalkDog/>]);
        // setShowTask([<WalkDog/>]);
        // if(showTask.length===3){
        //   setShowTask([...showTask.slice(0, -2)])
        // }
        // setCardStatus(prevCardStatus=>!prevCardStatus)
        // console.log('87:array and og', showTask)
        // testStore.splice(0, -1)
        // setShowTask(showTask)
        testStore.push(<WalkDog/>)
        setShowTask(testStore)
        console.log(testStore[testStore.length-1])
      } 
      else if (event === 'RestaurantClick') {
        testStore.push(<FeedDog/>)
        setShowTask(testStore)
        console.log(testStore[testStore.length-1])
        // if(showTask.length===1){
        //   setShowTask([...showTask, <FeedDog/>])
        // }
        // if(showTask.length===2){
        //   setShowTask([...showTask.slice(0, -1)])
        //   setShowTask([...showTask, <FeedDog/>])
        // }
        // setShowTask([...showTask, <FeedDog/>])
        // if(showTask.length===3){
        //   setShowTask([...showTask.slice(0, -2)])
        // }
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
                        key='DirectionsRunButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = {()=>showDogTask('DirectionsRunClick')}

                        // onClick = { () => showDogTask() }
                        >
                          <DirectionsRunIcon fontSize="large" key='DirectionsRunIcon'/>
                          {/* ^here's the icon I can use to feed into the showWalkTask function, which I'll also have to rename */}
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        key='RestaurantIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        // onClick = { showDogTask }
                        onClick = {()=>showDogTask('RestaurantClick')}
                        >
                          <RestaurantIcon fontSize="large"
                            key='RestaurantIcon'
                          />
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        key="WaterIconButton"
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                          <WaterIcon fontSize="large"
                          key="WaterIcon"
                          />
                        </IconButton>
                        <IconButton 
                        // key={taskOptions.id} 
                        // value={taskOptions}
                        key='MedicationIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
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