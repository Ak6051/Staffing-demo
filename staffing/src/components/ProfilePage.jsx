import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Avatar, Divider, MenuItem, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const ProfilePage = () => {
    const [emailModalOpen, setEmailModalOpen] = useState(false);
    const [mobileModalOpen, setMobileModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    return (
        <Box>
        <RecruiterDashNav/>
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: 3, gap: 3, backgroundColor: '#f8f9fa' }}>

            <Box sx={{
                width: '30%',
                backgroundColor: '#fff',
                padding: 3,
                boxShadow: 2,
                borderRadius: 2,
                height: 'auto' // Auto adjust height
            }}>
                <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }} />
                <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', mt: 1 }}>
                    Sahil Sharma
                </Typography>
                <Typography textAlign="center" color="text.secondary">
                    SA TECH
                </Typography>
                <Divider sx={{ my: 2 }} />

                {/* Profile Content - Auto Adjust */}
                <Box sx={{ fontSize: '14px', color: '#333', overflowWrap: 'break-word' }}>
                    <Typography><b>Email:</b> sahil42740@gmail.com</Typography>
                    <Typography><b>Mobile:</b> +91-9265875135</Typography>
                    <Typography><b>Address:</b> Godadara, Surat, Gujarat (India)</Typography>
                    <Typography sx={{ mt: 1 }}>
                        <b>Additional Info:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula erat nec metus bibendum tincidunt.
                    </Typography>
                </Box>
            </Box>


            {/* Right Editable Form */}
            <Box sx={{ flexGrow: 1, backgroundColor: '#fff', padding: 3, boxShadow: 2, borderRadius: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, borderBottom: '2px solid #007bff', display: 'inline-block', pb: 0.5 }}>My Profile</Typography>

                <TextField label="Your Name" fullWidth sx={{ my: 1 }} defaultValue="Sahil Sharma" />
                <TextField label="Street Address" fullWidth sx={{ my: 1 }} placeholder="Enter Address" />

                {/* Country & State Dropdown */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <TextField select label="Select Your Country" fullWidth defaultValue="India" sx={{ my: 1 }}>
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="UK">UK</MenuItem>
                    </TextField>
                    <TextField label="State" fullWidth sx={{ my: 1 }} defaultValue="Gujarat" />
                </Box>

                <TextField label="City / Sub City / Locality" fullWidth sx={{ my: 1 }} defaultValue="Godadara, Surat" />

                {/* Email & Verification */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
                    <TextField label="Email ID" fullWidth defaultValue="sahil42740@gmail.com" disabled />
                    <Typography sx={{ color: 'red', fontWeight: 'bold' }}>❌ Non Verified</Typography>
                    <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>Verify</Typography>
                </Box>

                {/* Mobile Number */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
                    <TextField label="Mobile No 1" fullWidth defaultValue="+91-9265875135" disabled />
                    <Typography sx={{ color: 'green', fontWeight: 'bold' }}>✅ Verified</Typography>
                    <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>Change</Typography>
                </Box>

                {/* Add Alternate Email & Mobile */}
                <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold', my: 1 }} onClick={() => setEmailModalOpen(true)}>
                    Add Email ID
                </Typography>
                <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold', my: 1 }} onClick={() => setMobileModalOpen(true)}>
                    Add Mobile No
                </Typography>

                {/* Update Button */}
                <Button variant="contained" sx={{ mt: 2, backgroundColor: '#dc3545', color: '#fff', '&:hover': { backgroundColor: '#c82333' } }}>
                    Update Profile
                </Button>
            </Box>

            {/* Email Modal */}
            <Dialog open={emailModalOpen} onClose={() => setEmailModalOpen(false)}>
                <DialogTitle sx={{ backgroundColor: '#007bff', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                    Add Alternate Email ID & Verify it
                    <IconButton onClick={() => setEmailModalOpen(false)} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ padding: 3 }}>
                    <Typography>Email ID:</Typography>
                    <TextField fullWidth placeholder="Enter Email ID" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ my: 1 }} />
                    <Typography fontSize="12px" color="gray">Note: To edit & save your email ID you need to verify it.</Typography>
                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#dc3545', '&:hover': { backgroundColor: '#c82333' } }}>
                        Save & Verify
                    </Button>
                </DialogContent>
            </Dialog>

            {/* Mobile Modal */}
            <Dialog open={mobileModalOpen} onClose={() => setMobileModalOpen(false)}>
                <DialogTitle sx={{ backgroundColor: '#007bff', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
                    Add Alternate Mobile Number & Verify it
                    <IconButton onClick={() => setMobileModalOpen(false)} sx={{ color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ padding: 3 }}>
                    <Typography>Mobile Number:</Typography>
                    <TextField fullWidth placeholder="Enter Mobile No" value={mobile} onChange={(e) => setMobile(e.target.value)} sx={{ my: 1 }} />
                    <Typography fontSize="12px" color="gray">Note: To edit & save your mobile number you need to verify it.</Typography>
                    <Button variant="contained" sx={{ mt: 2, backgroundColor: '#dc3545', '&:hover': { backgroundColor: '#c82333' } }}>
                        Save & Verify
                    </Button>
                </DialogContent>
            </Dialog>

        </Box>
        </Box>
    );
};

export default ProfilePage;
