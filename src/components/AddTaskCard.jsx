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
      // else if (event === 'MedicationClick'){
      //   showTaskVar.push(<FeedDog/>)
      //   setShowTask(showTaskVar)
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
                    <div>{showTask[showTask.length-1]}</div>
                </div>
                </Typography>
                
            </div>
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