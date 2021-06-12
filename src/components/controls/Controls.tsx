import React from 'react'
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Paper, Button } from '@material-ui/core';
import { LabelledSlider } from '../';
import './Controls.scss';

export default function Counter() {

    return (
        <Paper className="controls" elevation={3}>
            <LabelledSlider 
                id="verticies"
                label="Verticies"
            />
            <LabelledSlider 
                id="distance"
                label="Distance"
            />
            <LabelledSlider 
                id="speed"
                label="Speed"
            />
            <Button variant="contained" color="primary">
                Start
            </Button>
        </Paper>
    )
}