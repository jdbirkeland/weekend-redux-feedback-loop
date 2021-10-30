import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Comments() {
    const [newComments, setNewComments] = useState({
        feelings: '',
    });

    // const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENTS',
            payload: newComments,
        });

        setNewComments({
            comments: '',
        });

        history.push(`/feedback`);
    };

    console.log('newComments', newComments);

    return (
        <div>
        <h2>Any comments you want to leave?</h2>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <Button variant="contained">Next</Button>
        </div>
    );
}


export default Comments;