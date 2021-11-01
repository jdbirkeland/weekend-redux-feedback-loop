import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


function Feelings() {

    const [newFeelings, setNewFeelings] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newFeelings || newFeelings < 0 || newFeelings > 5) {
            alert("Please select a feeling rating from 0 to 5 stars");
            setNewFeelings(0);
            return false;
        }


        dispatch({
            type: 'SET_FEELINGS',
            payload: Number(newFeelings),
        });

        setNewFeelings({
            newFeelings: newFeelings,
        });

        history.push(`/Support`);

    };

    console.log('newFeelings', newFeelings);

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h2>How are you feeling today?</h2>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Feeling?</Typography>
                    <Rating
                        name="simple-controlled"
                        type="number" require min="1"
                        value={newFeelings}
                        onChange={(event) => setNewFeelings(event.target.value)}
                    />
                </Box>
                <Button type="submit" variant="contained">Next</Button>
            </form>
        </div>
    );
}




export default Feelings;