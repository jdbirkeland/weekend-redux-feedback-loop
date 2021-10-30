import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Understanding() {

    const [newUnderstanding, setNewUnderstanding] = useState({
        understanding: '',
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: newUnderstanding,
        });

        setNewUnderstanding({
            understanding: '',
        });

        history.push(`/feedback`);
    };

    console.log('newUnderstanding', newUnderstanding);

    return (
        <div>
        <h2>How well are you understanding the content?</h2>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Understanding?</Typography>
      <Rating
        name="simple-controlled"
        value={newUnderstanding}
        onChange={(event, newUnderstanding) => {
          setNewUnderstanding(newUnderstanding);
        }}
        />
        </Box>
        <Button variant="contained">Next</Button>
        </div>
    );
}



export default Understanding;