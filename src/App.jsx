import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciesDetails from './pages/ExerciesDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme();

function App() {
    return (
        <div >
            <ThemeProvider theme={theme}>
                <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/exercies/:id' element={<ExerciesDetails />} />
                    </Routes>
                    <Footer />
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;