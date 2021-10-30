import Button from '@mui/material/Button';
import * as React from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Comments() {
    const [newComments, setNewComments] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENTS',
            payload: newComments,
        });

        setNewComments({
            newComments: newComments,
        });

        history.push(`/feedback`);
    };

    console.log('newComments', newComments);

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h2>Any comments you want to leave?</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Standard" variant="standard"
                        onChange={(event) => setNewComments(event.target.value)}
                    />
                </Box>
                <Button type="submit" variant="contained">Next</Button>
            </form>
        </div>
    );
}


export default Comments;