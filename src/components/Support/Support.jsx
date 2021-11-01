import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Support() {

    const [newSupport, setNewSupport] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newSupport || newSupport < 0 || newSupport > 5) {
            alert("Please select a feeling rating from 0 to 5 stars");
            setNewSupport(0);
            return false;
        }


        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport,
        });

        setNewSupport({
            support: '',
        });

        history.push(`/Understanding`);
    };

    console.log('newSupport', newSupport);

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h2>How well are you being supported?</h2>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Support?</Typography>
                    <Rating
                        name="simple-controlled"
                        type="number" require min="1"
                        value={newSupport}
                        onChange={(event) => setNewSupport(event.target.value)}
                    />
                </Box>
                <Button type="submit" variant="contained">Next</Button>
            </form>
        </div>
    );
}



export default Support;