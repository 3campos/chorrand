import Card from '@mui/material/Card'
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import { Button } from '@mui/material';


export default function TasqCard({children}){
    return(
        <div>
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
                <div>
                from tasqcard component
                </div>
                <div>
                second div
                </div>
                <div>
                third div
                </div>
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
        
    </div>
    )
}