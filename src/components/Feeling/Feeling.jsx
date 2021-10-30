import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Feelings() {

    const [newFeelings, setNewFeelings] = useState({
        feelings: '',
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_FEELINGS',
            payload: newFeelings,
        });

        setNewFeelings({
            feelings: '',
        });

        history.push(`/Feedback`);
    };

    console.log('newFeelings', newFeelings);

    const [value, setValue] = React.useState(2);
    return (
        <div>
        <h2>How are you feeling today?</h2>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Feeling?</Typography>
      <Rating
        name="simple-controlled"
        value={newFeelings}
        onChange={(event, newFeelings) => {
          setNewFeelings(newFeelings);
        }}
        />
        </Box>
        <Button variant="contained">Next</Button>
        </div>
    );
}




export default Feelings;