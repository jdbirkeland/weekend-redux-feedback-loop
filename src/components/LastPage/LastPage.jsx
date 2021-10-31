import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './LastPage.css';
import { textAlign } from '@mui/system';

function LastPage() {

    const history = useHistory();

    return (
        <>

        <div className="avatar" style={{
    height: '450px',
    paddingLeft: '640px',
    paddingTop: '50px'
    
   }}>
            <Avatar
                alt="Jacob Birkeland"
                src="/images/avatar/jacobpic.jpg"
                sx={{ width: 246, height: 396 }}
            />
            </div>

            <h1>Thank You!</h1>

            <Button onClick={() => history.push(`/`)} type="submit" variant="contained">Leave New Feedback</Button>
        </>
    );
}


export default LastPage;