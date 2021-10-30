import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { tableBodyClasses } from '@mui/material';

function Feedback() {
    const feedback = useSelector((store) => store.formReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    // console.log('currentFeedback', currentFeedback);

    // const handleFeedback = () => {
    //     const confirmation = confirm('Are you sure you want to submit?');


    //     if (confirmation) {
    //         axios({
    //             method: `POST`,
    //             url: tableBodyClasses,
    //             data: 
    //         })
    //     }
    // }

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
            </div>
        </>
    );
}

export default Feedback;