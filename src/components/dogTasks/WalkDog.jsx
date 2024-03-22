import * as React from 'react';
// import DogTaskDescription from '../DogTaskDescription'
import { yellow, blueGrey, lightBlue, teal } from '@mui/material/colors';
import { useState, useContext } from 'react'
import { Button, Checkbox, FormGroup, FormControlLabel, TextField} from '@mui/material';
import TaskContext from '../../context/TaskContext'
import Card from '@mui/material/Card'

export default function WalkDog(){
    // const [input, setInput] = useState('')
    const [timeSpent, setTimeSpent] = useState('')
    const [pottyStatus, setPottyStatus] = useState('')
    
    const {addTask} = useContext(TaskContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTask = {
            title: 'Dog Walk',
            duration: timeSpent,
            potty: pottyStatus
        }
        addTask(newTask)
    }

    const handleCheckBox = (check) => {
        setPottyStatus(check ? 'Yes' : 'No')
	}

    return(
        <Card
        key={'WalkDogKey'}
        sx={{flexDirection: 'reverse', alignItems: 'center', width: '100%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black', borderRadius: 2, border: 2, '&:hover':{backgroundColor:teal[200], borderColor:'black'} }}
        align='center'>
        <form onSubmit={handleSubmit}>
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
                    value={timeSpent}
                    onInput={event=>setTimeSpent(event.target.value)}
                  />
            </div>
            <div>
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label="Potty?"
                        onInput={event=>handleCheckBox(event.target.checked)}
                        />
                </FormGroup>
            </div>
            {/* <div>
                <DogTaskDescription/>
            </div> */}
            <Button 
                type="submit"
                variant="outlined"
                display='inline-flex'
                sx={{width: '33%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900], fontWeight: 'bold', mt: -4, '&:hover':{backgroundColor:yellow[200], borderColor:'black'} 
                }}
                onClick={addTask}
            >
                Log Task
            </Button>
            </form>
        </Card>
        
    )
}