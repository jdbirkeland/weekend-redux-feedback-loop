import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Understanding() {

    const [newUnderstanding, setNewUnderstanding] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newUnderstanding || newUnderstanding < 0 || newUnderstanding > 5) {
            alert("Please select a feeling rating from 0 to 5 stars");
            setNewUnderstanding(0);
            return false;
        }


        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: newUnderstanding,
        });

        setNewUnderstanding({
            newUnderstanding: newUnderstanding,
        });

        history.push(`/Comments`);
    };

    console.log('newUnderstanding', newUnderstanding);

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h2>How well are you understanding the content?</h2>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Understanding?</Typography>
                    <Rating
                        name="simple-controlled"
                        type="number" require min="1"
                        value={newUnderstanding}
                        onChange={(event) => setNewUnderstanding(event.target.value)}
                    />
                </Box>
                <Button type="submit" variant="contained">Next</Button>
            </form>
        </div>
    );
}



export default Understanding;