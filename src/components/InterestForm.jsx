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
  
        <label>
          First Name
          <input name="firstName" type="text" required />
        </label>
  
        <label>
          Last Name
          <input name="lastName" type="text" required />
        </label>
  
        <label>
          Phone Number
          <input name="phone" type="tel" required />
        </label>
  
        <label>
          Email Address
          <input name="email" type="email" required />
        </label>
  
        <label>
          Guess the Air Fryer's Cost ($)
          <input name="guessCost" type="number" required />
        </label>
  
        <label>
          Very, Very Secret 16-Digit Spidr PIN
          <input name="spidrPin" type="text" pattern="\d{4}-\d{4}-\d{4}-\d{4}" required placeholder="1234-5678-9012-3456" />
        </label>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
  