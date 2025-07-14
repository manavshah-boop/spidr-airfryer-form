// SpidrPinInput.jsx
//
// Custom input component for the 16-digit Spidr PIN field.
// Auto-formats user input into ####-####-####-#### as they type.
// Mimics credit card-style entry UX for better usability.
// 
// Author: Manav Shah
// Date: 2025-07-14

import { useState } from 'react';

export default function SpidrPinInput({ label, name, onChange, required }) {
  const [value, setValue] = useState('');

  // Helper to remove non-digits and insert dashes every 4 digits
  const formatInput = (input) => {
    const digits = input.replace(/\D/g, '').slice(0, 16);
    return digits.match(/.{1,4}/g)?.join('-') ?? '';
  };

  // Handle user typing in the field
  // Keeps only numbers, auto-adds dashes
  const handleChange = (e) => {
    const raw = e.target.value;
    const formatted = formatInput(raw);
    setValue(formatted);
    if (onChange) onChange(formatted);
  };

  return (
    <label>
      {label}
      <input
        name={name}
        type="text"
        value={value}
        onChange={handleChange}
        required={required}
        placeholder="####-####-####-####"
        inputMode="numeric"
        pattern="\d{4}-\d{4}-\d{4}-\d{4}"
      />
    </label>
  );
}
