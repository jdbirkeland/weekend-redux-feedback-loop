import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Understanding() {
    const [value, setValue] = React.useState(2);
    return (
        <div>
        <h2>How well are you understanding the content?</h2>
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Understanding?</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        />
        </Box>
        <Button variant="contained">Next</Button>
        </div>
    );
}



export default Understanding;