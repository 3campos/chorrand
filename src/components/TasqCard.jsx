import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider} from '@mui/material/styles';
import {Typography} from '@mui/material'

let theme = createTheme();
theme=responsiveFontSizes(theme);

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
            sx={{alignContent: 'space-around'}}>
                <Typography variant="h3">
                Tasq Name
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