import React, { useState, useEffect } from 'react'
import { Button, Box, Stack, Typography, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from '../../utils/fetchData';

const SearchExercises = () => {

  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  const handelSearch = async () => {
    if (search) {
      const exercisesData = await
        fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

    }
  }

  return (
    <Stack justifyContent="center" p='10px' alignItems="center" mt='40px'>
      <Typography fontWeight={700} sx={{
        fontSize: {
          lg: '44px',
          sm: '30px',
          xs: '22px',
        }
      }}
        mb="30px" textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb='32px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700px',
              border: 'none',
              borderRadius: '4px'
            },
            width: {
              lg: '1000px',
              md: '700px',
              sm: '550px',
              xs: '400px',
            }
            , background: '#fff',
            borderRadius: '40px'
          }}
          value=''
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search"
          type="text"
        />
        <Button className="search-btn" onClick={handelSearch} sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>

      </Box>
    </Stack>
  )
}

export default SearchExercises
