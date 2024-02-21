import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal, yellow} from '@mui/material/colors';
import { Button, FormControlLabel } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'
import WalkDog from './dogTasks/WalkDog';
import FeedDog from './dogTasks/FeedDog';
import HydrateDog from './dogTasks/HydrateDog';
import MedicateDog from './dogTasks/MedicateDog';
import BrushDog from './dogTasks/BrushDog'
import TrainDog from './dogTasks/TrainDog'
import {ListComponent} from './ListComponent';
import {useState, useEffect} from 'react';
import React from 'react';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WaterIcon from '@mui/icons-material/Water';
import MedicationIcon from '@mui/icons-material/Medication';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BrushIcon from '../icons/BrushIcon';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TaskContext from '../context/TaskContext'
import { useContext } from 'react'

let theme = createTheme();
theme=responsiveFontSizes(theme);

export default function AddTaskCard({children}){

    const [showTask, setShowTask] = useState(['']);

    const [cardStatus, setCardStatus] = useState(true);

    function showDogTask(event) {
      
      let showTaskVar = [...showTask];

      if (event === 'DirectionsRunClick'){
        showTaskVar.push(<WalkDog/>)
        setShowTask(showTaskVar)
      } 
      else if (event === 'RestaurantClick') {
        showTaskVar.push(<FeedDog/>)
        setShowTask(showTaskVar)
      } else if (event === 'WaterClick'){
        showTaskVar.push(<HydrateDog/>)
        setShowTask(showTaskVar)
      } 
      else if (event === 'MedicationClick'){
        showTaskVar.push(<MedicateDog/>)
        setShowTask(showTaskVar)
      } 
      else if (event === 'BrushClick'){
        showTaskVar.push(<BrushDog/>)
        setShowTask(showTaskVar)
      } else if (event === 'TrainClick'){
        showTaskVar.push(<TrainDog/>)
        setShowTask(showTaskVar)
      }
  }

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
                backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:cyan[600], borderColor:'black', color: 'black'} 
            }}>
            <div
            sx={{alignContent: 'space-around'}}
            component="form"
            noValidate
            autoComplete="off"
            >
                <Typography variant="h3">
                <div align="center"
                >Add New Task</div>
                <div>
                    <Stack direction="row" spacing={1} sx={{wrap: 'wrap', ml: 12.5, mb: 1.5 }}>
                        <IconButton 
                        key='DirectionsRunButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
                        onClick = {()=>showDogTask('DirectionsRunClick')}
                        >
                          <DirectionsRunIcon fontSize="large" key='DirectionsRunIcon'/>
                        </IconButton>
                        <IconButton 
                        key='RestaurantIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
                        onClick = {()=>showDogTask('MedicationClick')}
                        >
                          <MedicationIcon fontSize="large"
                          key="MedicationIcon"
                          />
                        </IconButton>
                        <IconButton 
                        key="BrushIconButton"
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
                        onClick = {()=>showDogTask('BrushClick')}
                        >
                            <BrushIcon />
                        </IconButton>
                        <IconButton 
                        key='PsychologyIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
                        onClick = {()=>showDogTask('TrainClick')}
                        >
                          <PsychologyIcon fontSize="large"
                          key="PsychologyIcon"
                          />
                        </IconButton>
                        <IconButton 
                        key='SportsEsportsIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:yellow[200], borderColor:'black'} }}
                        onClick = { showDogTask }
                        >
                          <SportsEsportsIcon fontSize="large"
                          key="SportsEsportsIcon"
                          />
                        </IconButton>
                      </Stack>
                    <div>{showTask[showTask.length-1]}</div>
                </div>
                </Typography>
                
            </div>
        </Card>
        </ThemeProvider>
    </div>
    )
}