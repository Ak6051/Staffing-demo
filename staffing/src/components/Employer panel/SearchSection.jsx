import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, InputAdornment, Grid, Card, CardContent } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
  const [jobCount, setJobCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployerJobs();
  }, []);

  const fetchEmployerJobs = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("http://localhost:5000/api/employer/employer-jobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setJobCount(data.jobs.length); // ✅ Job count set karna
    } catch (error) {
      console.error("🚨 Error fetching jobs:", error.message);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <Box sx={{ backgroundColor: '#3f51b5', padding: 2, textAlign: 'center' }}>
        <Typography variant="h6" color="white" gutterBottom>
          Explore Jobs
        </Typography>
        <TextField
          placeholder="Search jobs by Skills, Designation"
          variant="outlined"
          sx={{ backgroundColor: 'white', borderRadius: 1, width: '50%' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* Grid Boxes */}
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={2} justifyContent="center">
          {[
            { title: 'Jobs for you', count: 1, color: '#f4c29c' },
            { title: 'Profile View', count: 0, color: '#b3e0f2' },
            { title: 'My Messages', count: 0, color: '#e5c3e8' },
            { title: '🚀 Your Posted Jobs', count: jobCount, color: '#bde0d0', route: "/employer-jobs" }
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card 
                sx={{ backgroundColor: item.color, textAlign: 'center', borderRadius: 2, cursor: item.route ? "pointer" : "default" }}
                onClick={() => item.route && navigate(item.route)} // ✅ Redirect functionality
              >
                <CardContent>
                  <Typography variant="h5">{item.count}</Typography>
                  <Typography>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SearchSection;
