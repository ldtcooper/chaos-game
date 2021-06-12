import { RootState, AppThunk } from '../app/store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ControlState {
    verticies: number,
    distance: number,
    speed: number,
}

const initialState: ControlState = {
    verticies: 3,
    distance: 0.5,
    speed: 1,
}

export const controlSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        // changeVerticies(state, value) {
        //     state.verticies = value;
        // },
        // changeDistance(state, value) {
        //     state.distance = value;
        // },
        // changeSpeed(state, value) {
        //     state.speed = value;
        // },
    }
});