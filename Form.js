import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    email: '',
    contact: '',
    about: '',
  });

  const isAlphabetic = (input) => /^[a-zA-Z]+$/.test(input);
  const isNumeric = (input) => /^\d+$/.test(input);
  const isValidEmail = (input) => /^[^\s@]+@gmail\.com$/.test(input);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate alphabets for the 'Name' field
    if (name === 'name' && value.trim() !== '' && !isAlphabetic(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name should contain only alphabets',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '',
      }));
    }

    // Validate numbers for the 'Date of Birth' field
    if (name === 'dob' && value.trim() !== '' && !isNumeric(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: 'Date of Birth should contain only numbers',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dob: '',
      }));
    }

    // Validate email for the 'Email' field
    if (name === 'email' && value.trim() !== '' && !isValidEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Invalid email. It should end with "@gmail.com"',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }

    // Validate numbers for the 'Contact' field
    if (name === 'contact' && value.trim() !== '' && !isNumeric(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: 'Contact should contain only numbers',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: '',
      }));
    }

    // No specific validation for 'About Us' field
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Validate data
    const validationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === '') {
        validationErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // If there are validation errors, update the state and don't submit
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // Pass data to parent component (onSubmit)
    onSubmit(formData);
  };

  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />
      <TextField
        label="Date of Birth"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        error={Boolean(errors.dob)}
        helperText={errors.dob}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        label="Contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        error={Boolean(errors.contact)}
        helperText={errors.contact}
      />
      <TextField
        label="About Us"
        name="about"
        value={formData.about}
        onChange={handleChange}
        error={Boolean(errors.about)}
        helperText={errors.about}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default Form;