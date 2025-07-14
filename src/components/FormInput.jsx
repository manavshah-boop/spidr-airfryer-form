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
  