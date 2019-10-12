import { combineReducers} from 'redux'; // export can be default vs named (here)

const songsReducer = () => {
    return [
        {title: 'The Way You Look Tonight', duration: '3:22'},
        {title: 'Welcome to My World', duration: '2:22'},
        {title: 'Fly Me To The Moon', duration: '2:27'},
        {title: 'The Glory of Love', duration: '2:49'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});