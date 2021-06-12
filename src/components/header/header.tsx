import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import './header.scss';

export default function Header() {
    return (
        <AppBar position="static" className="header">
            <Typography variant="h6">Chaos Game</Typography>
        </AppBar>
    );
}