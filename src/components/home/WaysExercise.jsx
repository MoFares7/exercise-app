import React from 'react'
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import WaysImage from '../../assets/images/ex.webp';
import { useState } from 'react';
import { Card, CardContent, Collapse } from '@mui/material';


const WaysExercise = () => {

        const [expandedSection, setExpandedSection] = useState(null);

        const handleSectionClick = (sectionNumber) => {
                if (expandedSection === sectionNumber) {
                        // If the clicked section is already expanded, close it
                        setExpandedSection(null);
                } else {
                        // Otherwise, expand the clicked section
                        setExpandedSection(sectionNumber);
                }
        };

        return (
                <Box
                        display={{
                                lg: 'flex', md: 'flex', sm: 'flex', xs: 'block'
                        }}
                        sx={{ mt: { lg: '40px', xs: '40px' }, ml: { sm: '50px' } }} position="relative" p="20px"
                        padding='20px'
                >
                        <img src={WaysImage} className='ways-image' />

                        <Box
                                display={{
                                        lg: 'block', md: 'block', sm: 'block', xs: 'block'
                                }}
                                position='relative'
                        >   <Typography fontSize='20px' fontWeight='bold' textAlign='center' pb='10px' >
                                        Ways to use ExerciseDB
                                </Typography>
                                {/* Section 1 */}
                                <Card onClick={() => handleSectionClick(1)}>
                                        <CardContent>
                                                <Typography fontSize='18px' variant="h5">Mobile App</Typography>
                                        </CardContent>
                                </Card>
                                {/* Description for Section 1 */}
                                <Collapse in={expandedSection === 1}>
                                        <Card>
                                                <CardContent>
                                                        <Typography fontSize='14px'>Adding ExerciseDB to a mobile app would be the best use. The simple structure of the data allows usage on low resource devices without extra fluff to discard during render events.</Typography>
                                                </CardContent>
                                        </Card>
                                </Collapse>

                                {/* Section 2 */}
                                <Card onClick={() => handleSectionClick(2)}>
                                        <CardContent>
                                                <Typography fontSize='18px' variant="h5">Web App</Typography>
                                        </CardContent>
                                </Card>
                                {/* Description for Section 2 */}
                                <Collapse in={expandedSection === 2}>
                                        <Card>
                                                <CardContent>
                                                        <Typography fontSize='14px'>Maybe a pure mobile app just won't cut it. Not to worry, just use ExerciseDB with a fully responsive PWA or simple SPA to enjoy ultimate platform flexibility.</Typography>
                                                </CardContent>
                                        </Card>
                                </Collapse>

                                {/* Section 3 */}
                                <Card onClick={() => handleSectionClick(3)}>
                                        <CardContent>
                                                <Typography fontSize='18px' variant="h5">Private Medical Application</Typography>
                                        </CardContent>
                                </Card>
                                {/* Description for Section 3 */}
                                <Collapse in={expandedSection === 3}>
                                        <Card>
                                                <CardContent>
                                                        <Typography fontSize='14px'>Although this is an exercise database the medical industry can benefit by integrating into a therapy or recovery type of system. A lot of what we've implemented into ExerciseDB can easily translate into a rehabilitation focused platform.*</Typography>
                                                </CardContent>
                                        </Card>
                                </Collapse>
                        </Box>

                </Box >
        )
}

export default WaysExercise
