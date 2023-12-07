/*import React, { useState } from 'react';
import './App1.css';
import { AppBar, Toolbar, Typography, Container, TextField, Button, Card, CardContent } from '@material-ui/core';
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
  });
  const itemobj={
    value1:'Home',
    value2:'About us',
    value3:'Services',
    value4:'contact'
  }
    const [displayData, setDisplayData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      formData.name.trim() === '' ||
      !/^[a-zA-Z ]+$/.test(formData.name) ||
      formData.contact.trim() === '' ||
      !/^\d{10}$/.test(formData.contact) ||
      formData.email.trim() === '' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ||
      formData.dob.trim() === '' ||
      new Date(formData.dob) > new Date()
    ) {
      alert('Invalid input. Please check your data and try again.');
      return;
    }

    // Display data
    setDisplayData(formData);
  };

  return (
    
    <div className='margin'>
       
    <div className='nav' style={color='white'}>
    <a href="#">
    {itemobj.value1}
  </a>
  <a href="#">
    {itemobj.value2}
  </a>
  <a href="#">
    {itemobj.value3}
  </a>
  <a href="#">
    {itemobj.value4}
  </a>

    </div>
  

       
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Navbar</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Contact Number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Tell me about yourself"
            name="about"
            multiline
            rows={4}
            value={formData.about}
            onChange={handleChange}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>

        {displayData && (
          <Card style={{ marginTop: '20px' }}>
            <CardContent>
              <Typography variant="h5">User Information</Typography>
              <p>Name: {displayData.name}</p>
              <p>Date of Birth: {displayData.dob}</p>
              <p>Email: {displayData.email}</p>
              <p>Contact Number: {displayData.contact}</p>
              <p>About: {displayData.about}</p>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default App;*/
import React,{useState} from 'react';
import { card,cardcontent,Typography} from '@mui/material';
import Navbar from './components/Navbar';
import Form from './components/Form';

const App = () => {
  const [submittedData,setSubmittedData]=useState(null);
  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div>
      <Navbar />
      <Form onSubmit={handleSubmit} />
      {submittedData &&(
          <card>
            <cardcontent>
              {/*Display submiited data in the card*/}
              <Typography variant='h6'>Submitted Data:</Typography>
              <Typography>Name:{submittedData.name}</Typography>
              {/*include other fields as needed*/}
              <Typography>dob:{submittedData.dob}</Typography>
              <Typography>email:{submittedData.email}</Typography>
              <Typography>contact:{submittedData.contact}</Typography>
              <Typography>about:{submittedData.about}</Typography>
            </cardcontent>
          </card>
        )
      }
    </div>
  );
};
export default App;
