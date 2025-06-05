import React, { useState, useEffect } from 'react';
import { SkipService } from '../Services/Skips-Service';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import {
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const SelectSkip = ({ onSelectSkip }) => {
  const [skips, setSkips] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [costRange, setCostRange] = useState('');
  const [sizeRange, setSizeRange] = useState('');

  useEffect(() => {
    GetListSkips();
  }, []);

  const GetListSkips = async () => {
    try {
      const res = await SkipService.fetchSkips();
      setSkips(res.data);
    } catch (err) {
      console.error('Failed to fetch skips:', err);
    }
  };

  const handleCostFilter = (cost) => {
    if (costRange === '0-200') return cost <= 200;
    if (costRange === '200-400') return cost > 200 && cost <= 400;
    if (costRange === '400-600') return cost > 400 && cost <= 600;
    if (costRange === '600-800') return cost > 600 && cost <= 800;
    if (costRange === '800-1000') return cost > 800 && cost <= 1000;
    if (costRange === 'over1000') return cost > 1000;
    return true;
  };

  const handleSizeFilter = (size) => {
    if (sizeRange === '0-10') return size <= 10;
    if (sizeRange === '10-20') return size > 10 && size <= 20;
    if (sizeRange === '20-30') return size > 20 && size <= 30;
    if (sizeRange === '30-40') return size > 30 && size <= 40;
    if (sizeRange === 'over40') return size > 40;
    return true;
  };

  const filteredCards = skips.filter((card) => {
    const matchesName = (card.size.toString() + ' yards skip')
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCost = handleCostFilter(card.price_before_vat);
    const matchesSize = handleSizeFilter(card.size);
    return matchesName && matchesCost && matchesSize;
  });

  const handleSelectSkip = (skip, index) => {
    setSelectedIndex(index);
    if (onSelectSkip) {
      onSelectSkip(skip);
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2 className="title-select-skip text-center mb-4">Choose Your Skip Size</h2>
        <span className="text-select text-center mb-5"style={{ fontWeight: 'bold' }} >Select the skip size that best suits your needs</span>

      </div>

      {/* Container */}
      <Box
        sx={{
          maxWidth: '100%',
          overflowX: 'hidden',
          px: { xs: 2, sm: 4 },
          boxSizing: 'border-box',
        }}
      >
        {/* Filters */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mb: 3,
            flexWrap: 'wrap',
          }}
        >
          <TextField
            label="Search by name"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            sx={{ minWidth: { xs: '100%', sm: 250 }, flex: 1 }}
          />

          <FormControl fullWidth sx={{ minWidth: { xs: '100%', sm: 150 }, flex: 1 }}>
            <InputLabel>Cost</InputLabel>
            <Select
              value={costRange}
              label="Cost"
              onChange={(e) => setCostRange(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="0-200">£0 to £200</MenuItem>
              <MenuItem value="200-400">£200 to £400</MenuItem>
              <MenuItem value="400-600">£400 to £600</MenuItem>
              <MenuItem value="600-800">£600 to £800</MenuItem>
              <MenuItem value="800-1000">£800 to £1000</MenuItem>
              <MenuItem value="over1000">Over £1000</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ minWidth: { xs: '100%', sm: 150 }, flex: 1 }}>
            <InputLabel>Size</InputLabel>
            <Select
              value={sizeRange}
              label="Size"
              onChange={(e) => setSizeRange(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="0-10">0 to 10 yards</MenuItem>
              <MenuItem value="10-20">10 to 20 yards</MenuItem>
              <MenuItem value="20-30">20 to 30 yards</MenuItem>
              <MenuItem value="30-40">30 to 40 yards</MenuItem>
              <MenuItem value="over40">Over 40 yards</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Skip Cards */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'flex-start',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          {filteredCards.length > 0 ? (
            filteredCards.map((skip, ind) => {
              const isSelected = selectedIndex === ind;
              return (
                <Box
                  key={ind}
                  sx={{
                    position: 'relative',
                    width: {
                      xs: '100%',
                      sm: 'calc(50% - 1rem)',
                      md: 'calc(33.33% - 1rem)',
                      lg: 'calc(25% - 1rem)',
                    },
                  }}
                >


                  <Card
                    sx={{
                      height: '100%',
                      border: isSelected ? '2px solid blue' : '2px solid #ddd',
                      cursor: 'pointer',
                      boxSizing: 'border-box',
                    }}
                    onClick={() => handleSelectSkip(skip, ind)}
                  >
                    <Box className="text-center" sx={{ p: 1 }}>
                      <Typography level="title-lg">
                        {skip.size} yards skip
                      </Typography>
                      <Typography level="body-sm">
                        {skip.hire_period_days} day hire period
                      </Typography>
                    </Box>

                    <Box sx={{ position: 'relative' }}>
                      <AspectRatio minHeight="120px" maxHeight="200px">
                        <img
                          src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
                          loading="lazy"
                          alt={`${skip.size} yard skip`}
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                          }}
                        />
                      </AspectRatio>

                      {!skip.allowed_on_road && (
                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: 8,
                            right: '10%',
                            backgroundColor: '#d32f2f',
                            color: '#fff',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.7rem',
                            zIndex: 2,
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                          }}
                        >
                          Not allowed on street
                        </Box>
                      )}
                    </Box>


                    <CardContent
                      orientation="horizontal"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 1,
                      }}
                    >
                      <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
                        £{skip.price_before_vat}
                      </Typography>
                      <Button
                        variant="solid"
                        size="sm"
                        color="primary"
                        sx={{
                          fontWeight: 600,
                          minWidth: 100,
                          fontSize: 11,
                        }}
                      >
                        {isSelected ? 'Selected' : 'Select this skip'}
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              );
            })
          ) : (
            <Typography>No skips to show just yet.</Typography>
          )}
        </Box>

      </Box>
    </>
  );
};

export default SelectSkip;
