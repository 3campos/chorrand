import * as React from 'react';
import {Typography, TextField, MenuItem} from '@mui/material'
import DogTaskDescription from '../DogTaskDescription'
import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import Grow from '@mui/material/Grow';

export default function MedicateDog(){

    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    return(
        <Card
        key={'MedicateDogKey'}
        sx={{flexDirection: 'reverse', alignItems: 'center', width: '100%', alignSelf: 'center', backgroundColor: lightBlue[200], borderColor:'black', color: 'black', borderRadius: 2, border: 2, '&:hover':{backgroundColor:teal[200], borderColor:'black'} }}
        align='center'>
            <div
            align='center'
            >
                Give Medication To Dog
            </div>
            <div>
            <TextField
                    id="standard-textarea"
                    label={"Medication Name?:"}
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
                    label={"Dosage Given:"}
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
                    label={"Date Given:"}
                    placeholder=". . ."
                    multiline
                    variant="standard"
                    sx={{width: '75%', color: 'black', m: 1}}
                    color = 'primary'
                  />
            </div><div>
            <TextField
                    id="standard-textarea"
                    label={"Time Given:"}
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