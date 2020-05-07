import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react'
import ContactForm from './ContactForm';

test('renders without errors', () => {
    render(<ContactForm />);
})