import React from 'react'
import Above from '../components/above/index.js'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './above.css';
import MetaTags from 'react-meta-tags';

const useStyles = makeStyles((theme) => ({
    button: {
        palette: {
            primary: {
              main: '#fafafa',
            },
            secondary: {
                main: '#1a237e',
              },
          },
    },
  }));

export function AboveContainer() {
    const classes = useStyles();
    return (
        <Above>
            <MetaTags>     
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </MetaTags>
            <Above.Wrapper>
             <Above.Aboveft>
                 <Above.Buttn>
                     <Above.Textname>
                        WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND
                     </Above.Textname>
                     <br/> <br/>
                     <Above.Reqst>
                     <Button className="request" variant="contained" > <div className="texting" >REQUEST AN APPOINTMENT</div> </Button>
                     </Above.Reqst>
                 </Above.Buttn>
                 <Above.Hads>
                 <div className="hands"> </div>
                 </Above.Hads>
             </Above.Aboveft>
            </Above.Wrapper>
        </Above>
    )
}