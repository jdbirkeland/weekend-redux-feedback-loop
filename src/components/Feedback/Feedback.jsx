import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

function Feedback() {
    const feeling = useSelector((store) => store.feeling);

    const history = useHistory();
    const dispatch = useDispatch();

    const [currentFeedback, setCurrentFeedback] = useState({
        feelings: feeling.feelings,
    });

    console.log('currentFeedback', currentFeedback);

    return (
        <>
            <h1>Review Your Feedback</h1>
            <div className="feedback">
                <h2 className="feedbackData">
               

                <div>
                Feelings: {currentFeedback.feelings}
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