import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button, FormControlLabel } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'
import WalkDog from './dogTasks/WalkDog';
import FeedDog from './dogTasks/FeedDog';
import HydrateDog from './dogTasks/HydrateDog';
import MedicateDog from './dogTasks/MedicateDog';
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

//<a target="_blank" href="https://icons8.com/icon/10347/hair-brush">Hair Brush</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

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
    }}

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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = {()=>showDogTask('DirectionsRunClick')}
                        >
                          <DirectionsRunIcon fontSize="large" key='DirectionsRunIcon'/>
                        </IconButton>
                        <IconButton 
                        key='RestaurantIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                        onClick = { showDogTask }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="comb"><path d="M511.026,228.359c-5.215,37.094-18.414,84.512-26.024,107.343c-4.173,12.314-16.603,10.648-17.137,10.804c-8.781,0-15.913-7.132-15.913-15.913v-70.781c0-2.927-2.342-5.269-5.269-5.269c-2.927,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.132,15.913-15.913,15.913c-8.781,0-15.912-7.132-15.912-15.913v-70.781c0-2.927-2.395-5.269-5.269-5.269c-2.927,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.132,15.913-15.912,15.913c-8.781,0-15.913-7.132-15.913-15.913v-70.781c0-2.927-2.395-5.269-5.269-5.269c-2.927,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.184,15.913-15.966,15.913c-8.728,0-15.913-7.132-15.913-15.913v-70.781c0-2.927-2.342-5.269-5.269-5.269c-2.874,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.132,15.913-15.912,15.913c-8.781,0-15.913-7.132-15.913-15.913v-70.781c0-2.927-2.341-5.269-5.269-5.269c-2.927,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.131,15.913-15.912,15.913c-8.781,0-15.913-7.132-15.913-15.913v-70.781c0-2.927-2.342-5.269-5.269-5.269c-2.927,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.132,15.913-15.913,15.913c-8.781,0-15.912-7.132-15.912-15.913v-70.781c0-2.927-2.395-5.269-5.269-5.269c-2.927,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.185,15.913-15.912,15.913c-8.781,0-15.966-7.132-15.966-15.913v-70.781c0-2.927-2.342-5.269-5.269-5.269c-2.874,0-5.269,2.342-5.269,5.269v70.781c0,8.781-7.131,15.913-15.912,15.913c-8.781,0-15.912-7.132-15.912-15.913v-70.781c0-1.596-0.639-3.034-1.863-4.045c-1.171-1.011-2.714-1.437-4.311-1.171c-2.448,0.373-4.364,2.927-4.364,5.748v70.249c0,8.781-7.132,15.913-15.912,15.913c-8.781,0-15.913-7.132-15.913-15.913v-70.781c0-1.596-0.692-3.034-1.863-4.045c-1.224-1.011-2.714-1.437-4.311-1.171c-2.448,0.373-4.364,2.927-4.364,5.748v70.249c0,8.781-7.131,15.913-15.912,15.913c-0.532-0.155-12.966,1.505-17.137-10.804c-7.61-22.831-20.809-70.249-26.024-107.343c-3.435-24.823,13.959-47.495,38.743-50.771c119.264-16.125,313.302-16.125,432.566,0C497.082,180.88,514.461,203.538,511.026,228.359z"></path></svg>
                            {/* <a href="https://iconscout.com/icons/comb" class="text-underline font-size-sm" target="_blank">comb</a> by <a href="https://iconscout.com/contributors/triangle-squad" class="text-underline font-size-sm">Triangle Squad</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
                        </IconButton>
                        <IconButton 
                        key='PsychologyIconButton'
                        size="small"
                        variant="outlined"
                        display='inline-flex'
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
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
                        sx={{borderRadius: 20, flexDirection: 'reverse', alignItems: 'center', width: '10%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black','&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
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
                sx={{width: '33%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],fontWeight: 'bold', '&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} 
                }}
            >
                Log Task
            </Button>
        </Card>
        </ThemeProvider>
    </div>
    )
}

