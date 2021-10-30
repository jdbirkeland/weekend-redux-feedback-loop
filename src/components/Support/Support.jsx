import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Support() {

    const [newSupport, setNewSupport] = useState({
        support: '',
    });

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport,
        });

        setNewSupport({
            support: '',
        });

        history.push(`/feedback`);
    };

    console.log('newSupport', newSupport);

    const [value, setValue] = React.useState(2);
    return (
        <div>
        <h2>How well are you being supported?</h2>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Support?</Typography>
      <Rating
        name="simple-controlled"
        value={newSupport}
        onChange={(event, newSupport) => {
          setNewSupport(newSupport);
        }}
        />
        </Box>
        <Button variant="contained">Next</Button>
        </div>
    );
}



export default Support;