import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function LastPage() {
return(
    <>

<header>
<Avatar 
alt="Jacob Birkeland" 
src="/images/avatar/jacobpic.jpg"
sx={{ width: 246, height: 396 }}
style={{alignSelf: 'center'}}

 />
        {/* <h1>FeedBack</h1> */}
    </header>

<h1>Thank You!</h1>

<Button onClick={() => history.push(`/Feelings`)} type="submit" variant="contained">Leave New Feedback</Button>
</>
);
}


export default LastPage;