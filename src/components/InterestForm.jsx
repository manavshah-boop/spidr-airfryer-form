import FormInput from "./FormInput";

export default function InterestForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      console.log('Form submitted:', data);
    };
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Air Fryer Interest Form</h2>

        <FormInput label="First Name" name="firstName" required />
        <FormInput label="Last Name" name="lastName" required />
        <FormInput label="Phone Number" name="phone" type="tel" inputMode="tel" required />
        <FormInput label="Email Address" name="email" type="email" required />
        <FormInput label="Guess the Air Fryer's Cost ($)" name="guessCost" type="number" inputMode="numeric" required />
        <FormInput
          label="Very, Very Secret 16-Digit Spidr PIN"
          name="spidrPin"
          placeholder="1234-5678-9012-3456"
          pattern="\d{4}-\d{4}-\d{4}-\d{4}"
          required
        />

        <button type="submit">Submit</button>
      </form>

    );
  }
  