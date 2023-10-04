import React, { useState } from 'react'
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from './../components/home/HeroBanner';
import ExerciseDB from './../components/home/ExerciseDB';
import SearchExercises from './../components/home/SearchExercises';
import WaysExercise from '../components/home/WaysExercise';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <ExerciseDB />
      <WaysExercise />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
