import { Grid } from '@material-ui/core'
import React from 'react'
import Hall from './components/Hall'
import ThemePicker from './components/themePicker/ThemePicker'

const App = () => {
    return (

        <Grid container spacing={3}>
        <Grid item xs={7}>
        <Hall/>
        </Grid>
     
        <Grid item xs={5}>
        <ThemePicker/>
        </Grid>
        
       
</Grid>
 
    )
}

export default App
