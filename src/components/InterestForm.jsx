// InterestForm.jsx
// 
// Main form component for the Spidr Air Fryer landing page embed.
// Includes all the required fields, styled to match Spidr's brand.
// Handles submission by printing the form data to the console.
//
// Author: Manav Shah
// Date: 2025-07-14

import FormInput from "./FormInput";
import SpidrPinInput from "./SpidrPinInput";

export default function InterestForm() {
  // Handle form submit by preventing default behavior and logging the form data.
  // This is all they asked for—just a simple console printout.
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Air Fryer Interest Form</h2>

      {/* Basic contact info fields */}
      <FormInput label="First Name" name="firstName" required />
      <FormInput label="Last Name" name="lastName" required />
      <FormInput label="Phone Number" name="phone" type="tel" inputMode="tel" required />
      <FormInput label="Email Address" name="email" type="email" required />
      <FormInput label="Guess the Air Fryer's Cost ($)" name="guessCost" type="number" inputMode="numeric" required />

      {/* Custom Spidr PIN input with auto-formatting */}
      <SpidrPinInput
        label="Very, Very Secret 16-Digit Spidr PIN"
        name="spidrPin"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
