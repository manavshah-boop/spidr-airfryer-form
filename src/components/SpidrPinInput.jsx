import { useState } from 'react';

export default function SpidrPinInput({ label, name, onChange, required }) {
  const [value, setValue] = useState('');

  const formatInput = (input) => {
    // Remove all non-digits
    const digits = input.replace(/\D/g, '').slice(0, 16);
    // Group into 4s
    return digits.match(/.{1,4}/g)?.join('-') ?? '';
  };

  const handleChange = (e) => {
    const raw = e.target.value;
    const formatted = formatInput(raw);
    setValue(formatted);
    onChange && onChange(formatted);
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
        placeholder="1234-5678-9012-3456"
        inputMode="numeric"
        pattern="\d{4}-\d{4}-\d{4}-\d{4}"
      />
    </label>
  );
}
