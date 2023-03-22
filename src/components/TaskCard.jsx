import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'
import DogWalk from './DogWalk';
import {ListComponent} from './ListComponent';
import {useState} from 'react';

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

export default function TaskCard({children}){ 

    const [showTask, setShowTask] = useState(['']);
    function showWalkTask() {
        setShowTask([...showTask,<DogWalk/>])
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
                {/* <TextField
                // variant="outlined"
                select
                label= "Task"
                defaultValue="🤔"
                color = 'secondary'
                sx={{width: '15%'}}> */}
                    {/* {taskOptions.map((option, id) => ( */}
                      <Button 
                      // key={taskOptions.id} 
                      // value={taskOptions}
                      variant="outlined"
                      display='inline-flex'
                      sx={{flexDirection: 'reverse', alignItems: 'center', width: '33%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#9d099e'} }}
                      onClick={showWalkTask}
                      >{taskOptions[0].label}
                      </Button>
                    {/* ))} */}
                {/* </TextField> */}
                {showTask.map((item, i)=>(<ListComponent text={item}/>))}
                </div>
                </Typography>
                <Typography variant="h5" sx={{pt: 5, pb: 5}}>
                  <TextField
                    id="standard-textarea"
                    label={"Task Description"}
                    placeholder=". . ."
                    multiline
                    variant="standard"
                    sx={{width: '75%', color: 'black'}}
                    color = 'secondary'
                  >
                    </TextField>
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