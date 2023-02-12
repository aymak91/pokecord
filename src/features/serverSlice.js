import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    serverId: null,
    serverName: null,
    serverImage: null,
};

export const serverSlice = createSlice({
    name: "server",
    initialState,
    reducers: {
        setServerInfo: (state, action) => {
            state.serverId = action.payload.serverId;
            state.serverName = action.payload.serverName;
            state.serverImage = action.payload.serverImage;
        },
    },
});

export const {setServerInfo} = serverSlice.actions;

export const selectServerId = (state) => state.server.serverId;
export const selectServerName = (state) => state.server.serverName;
export const selectImage = (state) => state.server.serverImage;

export default serverSlice.reducer;