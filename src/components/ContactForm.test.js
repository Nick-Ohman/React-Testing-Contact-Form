import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm';

test('renders without errors', async() => {
   const {getByLabelText, getByPlaceholderText, getByDisplayValue, getByRole, getByTestId} = render(<ContactForm />);

    const first = getByPlaceholderText(/edd/i);
    const last = getByPlaceholderText(/burke/i)
    const email = getByLabelText(/email/i)
    const message = getByTestId(/message/i)

    fireEvent.change(first, {target: {value: 'nic'}});
    fireEvent.change(last, {target: {value: 'ohman'}});
    fireEvent.change(email, {target: {value: 'fred@aol.com'}});
    fireEvent.change(message, {target: {value: 'hello'}})

    const submitBtn = getByRole('button', {name: /submit/i})
    fireEvent.click(submitBtn);

    const firstName = getByDisplayValue(/nic/i);
    expect(firstName).toBeInTheDocument();
    const lastName = getByDisplayValue(/ohman/i);
    expect(lastName).toBeInTheDocument();
    const emaill = getByDisplayValue(/fred@aol.com/i);
    expect(emaill).toBeInTheDocument();
    const message1 = getByDisplayValue(/hello/i)
    expect(message1).toBeInTheDocument();
})