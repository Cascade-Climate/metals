import { Box, Typography } from '@mui/material';
import React from 'react';

interface CustomLegendProps {
  concentrations: { [key: string]: { x: number[]; y: number[] } };
  colors: string[];
}

const CustomLegend: React.FC<CustomLegendProps> = ({
  concentrations,
  colors,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: 'right', fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            Application Rate
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              justifyContent: 'flex-end',
            }}
          >
            {Object.keys(concentrations).map((rate, index) => (
              <Box
                key={rate}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <Box
                  sx={{ width: 20, height: 2, bgcolor: colors[index % 10] }}
                />
                <Typography variant="caption" whiteSpace="nowrap">
                  {rate} t/ha
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: 'right', fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            Extraction Type
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <svg width="20" height="2">
                <line
                  x1="0"
                  y1="1"
                  x2="20"
                  y2="1"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
              <Typography variant="caption">Total</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <svg width="20" height="2">
                <line
                  x1="0"
                  y1="1"
                  x2="20"
                  y2="1"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
              </svg>
              <Typography variant="caption">Aqua Regia</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <svg width="20" height="2">
                <line
                  x1="0"
                  y1="1"
                  x2="20"
                  y2="1"
                  stroke="black"
                  strokeWidth="2"
                  strokeDasharray="1,1"
                />
              </svg>
              <Typography variant="caption">
                Other (Very Strong Acid)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomLegend;
