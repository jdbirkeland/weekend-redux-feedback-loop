import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { tableBodyClasses } from '@mui/material';

function Feedback() {
    const feedback = useSelector((store) => store.formReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const [currentFeedback, setCurrentFeedback] = useState({
        feelings: feeling.feelings,
        // support: support.support,
    });

    console.log('feeling', feeling);
    console.log('currentFeedback', currentFeedback);

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
                Feelings: tbd
                <br />
                <br />
                Understanding: tdb
                <br />
                <br />
                Support: tbd
                <br />
                <br />
                Comments: tbd
                </div>


                </h2>
            </div>
        </>
    );
}

export default Feedback;