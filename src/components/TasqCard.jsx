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
    {
      value: 'Mail',
      label: '📦'
    }
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
                <TextField
                // variant="outlined"
                select
                label= "Tasq"
                defaultValue="🤔"
                color = 'secondary'
                
                sx={{width: '15%'}}>
                    {tasqOptions.map((option) => (
            <MenuItem 
            key={option.value} 
            value={option.value}
            sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
              {option.label}
            </MenuItem>
          ))}
                </TextField>
                </div>
                </Typography>
                <Typography variant="h5" sx={{pt: 5, pb: 5}}>
                  <TextField
                    id="standard-textarea"
                    label="Tasq Description"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                    sx={{width: '75%', color: 'black'}}
                    color = 'secondary'
                  />
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
                Log Tasq
            </Button>
        </Card>
        </ThemeProvider>
    </div>
    )
}