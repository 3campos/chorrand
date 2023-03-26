import {Typography, TextField, MenuItem} from '@mui/material'

export default function TaskDescription(){
    return(
        <div>
            <Typography variant="h5" sx={{pt: 5, pb: 5}}>
                  <TextField
                    id="standard-textarea"
                    label={"Notes"}
                    placeholder=". . ."
                    multiline
                    variant="standard"
                    sx={{width: '75%', color: 'black', m: 1}}
                    color = 'primary'
                  />
                </Typography>
        </div>
    )
}