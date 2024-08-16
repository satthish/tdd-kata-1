import { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { add } from '@/utils/stringCalculator';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setResult(add(input));
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
    setError(null);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 300, margin: '0 auto', textAlign: 'center' }} className="border bg-white">
      <Typography variant="h4" gutterBottom>
        String Calculator
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
        sx={{ mb: 2 }}
      />
      <Grid container spacing={1} sx={{ mb: 2 }}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '\n'].map((char) => (
          <Grid item xs={4} key={char}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => handleButtonClick(char)}
              sx={{ height: 60, fontSize: '18px' }}
            >
              {char === '\n' ? '\\n' : char}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="outlined" onClick={handleClear} sx={{ px: 3 }}>
          Clear
        </Button>
        <Button variant="contained" onClick={handleCalculate} sx={{ px: 3 }}>
          Calculate
        </Button>
      </Box>
      {result !== null && (
        <Typography variant="h6" color="primary">
          Result: {result}
        </Typography>
      )}
      {error && (
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
}

export default Calculator;