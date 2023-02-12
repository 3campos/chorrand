import Card from '@mui/material/Card'
// import Button from '@mui/material/Button'
import { cyan, blueGrey, lightBlue } from '@mui/material/colors';

function TasqCard({children}){
    return(
        <Card 
            className='card' 
            variant='outlined'
            sx={
                {backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:cyan[600], borderColor:'black', color: 'white'} 
            }}>
            'hi world'
            {children}
            {/* <Button 
                variant="outlined"
                sx={
                    {backgroundColor: lightBlue[200], borderColor:'black', color: blueGrey[900],'&:hover':{backgroundColor:cyan[600], borderColor:'black', color: 'white'} 
                }}
                //an alternative way to code styling: 
                    //color="primary"
            >
                Press Here
            </Button> */}
        </Card>
    )
}

export default TasqCard