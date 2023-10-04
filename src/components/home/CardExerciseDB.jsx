import React from 'react';
import { Container, Typography } from '@mui/material';

const CardExerciseDB = ({ color, borderColor, headerText, bodyText }) => {
        return (
                <div style={{ padding: '10px' }} >
                        <Container
                                sx={{
                                        border: `2px solid ${borderColor || 'blue'}`,
                                        backgroundColor: color || 'blue',
                                        maxWidth: {
                                                sm: '200px',
                                                xs: '300px',
                                                lg: '400px',
                                        },
                                        maxHeight: {
                                                xs: '300px',
                                                lg: '400px',
                                        },

                                }}
                        >
                                <Typography
                                        sx={{
                                                color: '#FFFF',
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '20px',
                                                lineHeight: '35px',
                                                width: '100%',
                                        }}
                                >
                                        {headerText || 'No Title.'}
                                </Typography>
                        </Container>
                        <Container
                                sx={{
                                        border: `2px solid ${borderColor || 'blue'}`,
                                        backgroundColor: '#FFF',
                                        maxWidth: {
                                                sm: '200px',
                                                xs: '300px',
                                                lg: '400px',
                                        },

                                }}
                        >
                                <Typography
                                        sx={{
                                                color: '#757575',
                                                textAlign: 'center',
                                                paddingTop: '15px',
                                                paddingBottom: '15px',
                                                fontWeight: 'medium',
                                                fontSize: '15px',
                                                lineHeight: '25px',
                                                width: '100%',
                                        }}
                                >
                                        {bodyText || 'What ExerciseDB comes with.'}
                                </Typography>
                        </Container>
                </div>
        );
}

export default CardExerciseDB;
