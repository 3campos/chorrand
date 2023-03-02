import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography, TextField, MenuItem} from '@mui/material'

let theme = createTheme();
theme=responsiveFontSizes(theme);

const tasqOptions = [
    {
      value: 'Pet',
      label: '🐕',
    },
    {
      value: 'To Do',
      label: '📝',
    },
    {
      value: 'Shop',
      label: '🛍️',
    },
    {
      value: 'Cook',
      label: '🧑‍🍳',
    },
  ];

export default function TasqCard({children}){
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
                backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:cyan[600], borderColor:'black', color: 'white'} 
            }}>
            <div
            sx={{alignContent: 'space-around'}}
            component="form"
            noValidate
            autoComplete="off"
            >
                <Typography variant="h3">
                <div>
                <TextField
                // variant="outlined"
                select
                label= "Tasq"
                defaultValue="🤔"
                sx={{width: '75%'}}>
                    {tasqOptions.map((option) => (
            <MenuItem 
            key={option.value} 
            value={option.value} 
            >
              {option.label}
            </MenuItem>
          ))}
                </TextField>
                </div>
                </Typography>
                <Typography variant="h5">
                Tasq Description
                </Typography>
            </div>
            {/* {children} */}
            <Button 
                variant="outlined"
                sx={
                    {width: '50%', 
                    alignSelf: 'center',backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:teal[600], borderColor:'black', color: 'white'} 
                }}
                //an alternative way to code styling: 
                    //color="primary"
            >
                Press Here
            </Button>
        </Card>
        </ThemeProvider>
    </div>
    )
}