import React from 'react'
import Image from '../components/images/index.js';
import ReactDOM from "react-dom";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './images.css';
import Item from '../components/images/styles/images.js';
import MetaTags from 'react-meta-tags';


export function ImageContainer() {
    return (
        <Image>
            <MetaTags>     
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </MetaTags>
            <Image.Wrapper>
            <Image.Images><div className="pics"></div> </Image.Images>
            </Image.Wrapper>
        </Image>
    );
}