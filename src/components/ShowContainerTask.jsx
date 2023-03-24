import TaskCard from "./TaskCard"
import Paper from "@mui/material/Paper";
import { cyan, blueGrey, lightBlue, teal} from '@mui/material/colors';
import {Box} from "@mui/material";
// import { Button } from '@mui/material';

export default function ShowContainerTask({children}){
    return(
    <div>
        <TaskCard/>
    </div>
    )
}