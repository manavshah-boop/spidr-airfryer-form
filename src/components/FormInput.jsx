// FormInput.jsx
//
// Simple, reusable input component for the interest form.
// Handles rendering a label + input field with configurable props.
// Keeps our main form component clean and easy to read.
//
// Author: Manav Shah
// Date: 2025-07-14

export default function FormInput({ label, name, type = "text", placeholder, required, pattern }) {
    return (
      <label>
        {label}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
        />
      </label>
    );
  }
  