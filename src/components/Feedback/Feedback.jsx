import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { tableBodyClasses } from '@mui/material';
import Button from '@mui/material/Button';

function Feedback() {
    const feedback = useSelector((store) => store.formReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeedback = () => {

        axios.post('/api/feedback', feedback)
        .then(response => {
            console.log('POSTED');
            dispatch({type:'CLEAR_FEEDBACK'});
            history.push('/')
        }).catch(err => {
            console.log('error in POST');
        })
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div className="feedback">
                <h2 className="feedbackData">


                    <div>
                        <p>Feelings: {feedback.feelings}</p>
                        <p>Understanding: {feedback.understanding}</p>
                        <p>Support: {feedback.support}</p>
                        <p>Comments: {feedback.comments}</p>
                    </div>


                </h2>

                <div>
                    <Button onClick={() => history.push(`/LastPage`)} type="submit" variant="contained">Submit</Button>
                </div>

            </div>
        </>
    );
}

export default Feedback;

