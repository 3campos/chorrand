import * as React from 'react';
import {TextField} from '@mui/material'
import DogTaskDescription from '../DogTaskDescription'
import Card from '@mui/material/Card'
import { yellow, blueGrey, lightBlue, teal } from '@mui/material/colors';
import TaskContext from '../../context/TaskContext'
import { useContext } from 'react'
import { Button } from '@mui/material';

export default function WalkDog(){

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    const {task} = useContext(TaskContext)

    return(
        <Card
        key={'WalkDogKey'}
        sx={{flexDirection: 'reverse', alignItems: 'center', width: '100%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black', borderRadius: 2, border: 2, '&:hover':{backgroundColor:teal[200], borderColor:'black'} }}
        align='center'>
            <div
            align='center'
            >
                Walk Dog
            </div>
            <div>
            <TextField
                    id="standard-textarea"
                    label={"Time Spent:"}
                    placeholder=". . ."
                    multiline
                    variant="standard"
                    sx={{width: '75%', color: 'black', m: 1}}
                    color = 'primary'
                  />
            </div>
            <div>
            <TextField
                    id="standard-textarea"
                    label={"Potty?:"}
                    placeholder=". . ."
                    multiline
                    variant="standard"
                    sx={{width: '75%', color: 'black', m: 1}}
                    color = 'primary'
                  />
            </div>
            <div>
                <DogTaskDescription/>
            </div>
            <Button 
                variant="outlined"
                display='inline-flex'
                sx={{width: '33%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900], fontWeight: 'bold', mt: 1.5, '&:hover':{backgroundColor:yellow[200], borderColor:'black'} 
                }}
                // onClick={addTask}
            >
                Log Task
            </Button>
        </Card>
    )
}