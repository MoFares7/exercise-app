import React from 'react';
import { Box, } from '@mui/material';
import CardExerciseDB from './CardExerciseDB'; // Import your CardExerciseDB component

const ExerciseDB = () => {
        return (
                <Box
                        display={{ lg: 'flex', md: 'flex', sm: 'flex', xs: 'block' }}
                        justifyContent="center"
                        flexWrap="wrap"
                // width={{ lg: '1500px', xs: '1800px', sm: '800px' }}
                >
                        <CardExerciseDB
                                color="#1976D2"
                                borderColor="#1976D2"
                                headerText="ANIMATED GIFS"
                                bodyText="Each animated exercise image demonstrates the form and technique as well as highlights the muscles worked."
                        />
                        <CardExerciseDB
                                color="#E64A19"
                                borderColor="#E64A19"
                                headerText="VARIETY"
                                bodyText="An incredible amount of exercises to build all types of workout programs from weight lifting, cardio, boxing, and much more."
                        />
                        <CardExerciseDB
                                color="#7B1FA2"
                                borderColor="#7B1FA2"
                                headerText="EQUIPMENT TYPES"
                                bodyText="Allow your users to build workout plans around the equipment they have available. There's no shortage of options."
                        />
                        <CardExerciseDB
                                color="#FFC107"
                                borderColor="#FFC107"
                                headerText="JSON STRUCTURE"
                                bodyText="Keeping with the simple philosophy we've enabled easy querying of the data and grouping by each available property."
                        />
                </Box>
        );
}

export default ExerciseDB;
