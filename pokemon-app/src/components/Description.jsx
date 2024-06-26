import React from 'react';
import { Typography , Box } from '@mui/material';

const Description = ({heightpok, weightpok, stats  }) => {
    return(
       <Box>
        <Typography variant='body1'>
            <b> Height : </b> {heightpok * 10} cm
        </Typography>
        <Typography variant='body1'>
            <b> Weight :  </b> {weightpok * 0.1} kg
        </Typography>
        <Typography variant='h6' style={{marginTop:'10px'}}> Stats </Typography>
        {stats.map((stat,index) => (
            <Typography variant='body2' key={index}>
                <b> {stat.stat.name} : </b> {stat.base_stat}
            </Typography>
        ))}
       </Box>
    );
};

export default Description;