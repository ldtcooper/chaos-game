import React from 'react';
import { Typography, Slider } from '@material-ui/core';

type LabelledSliderProps = {
    label: string,
    id: string,
};

export default function LabelledSlider({ label, id, ...props } : LabelledSliderProps) {
    return(
        <div className="labelledSlider">
            <Typography id={id} variant="body1" component="label">
                {label}:
            </Typography>
            <Slider aria-labelledby={id} {...props} />
        </div>
    );
};