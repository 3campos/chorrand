import * as React from 'react';
import {Typography, TextField, MenuItem} from '@mui/material'
import DogTaskDescription from '../DogTaskDescription'
import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import Grow from '@mui/material/Grow';

export default function FeedDog(){

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return(
        <Card
        sx={{flexDirection: 'reverse', alignItems: 'center', width: '100%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900], borderRadius: 2, border: 2, '&:hover':{backgroundColor:teal[200], borderColor:'black', color: '#3e2723'} }}>
            <div
            sx={{ml: 4}}
            >
                Feed Dog
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
        </Card>
    )
}