# Forms in React

- In React, form data is handled by **components**.

- Instead of relying on the default HTML form behavior, React uses **state to control the form elements**.

- This approach is called Controlled Components.

## Controlled Components

- In a controlled component, form data is handled by the **component's state**.

- Each input field has its value bound to a state variable.

- Updates are handled through **onChange events**, which update the state.

## Example - Form with all inputs

```js
import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    mobile: "",
    country: "",
    gender: "",
    hobbies: [],
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "hobbies") {
      const newHobbies = checked
        ? [...form.hobbies, value]
        : form.hobbies.filter((hobby) => hobby !== value);

      setForm({ ...form, hobbies: newHobbies });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!form.agree) {
      alert("You must agree to the terms and conditions");
      return;
    }

    console.log("Form submitted:", form);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Mobile Number:
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Country:
        <select
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Country --</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </label>
      <br />

      <label>Gender:</label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender === "Male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender === "Female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={form.gender === "Other"}
          onChange={handleChange}
        />{" "}
        Other
      </label>
      <br />

      <label>Hobbies:</label>
      <label>
        <input
          type="checkbox"
          name="hobbies"
          value="Reading"
          onChange={handleChange}
          checked={form.hobbies.includes("Reading")}
        />{" "}
        Reading
      </label>
      <label>
        <input
          type="checkbox"
          name="hobbies"
          value="Travelling"
          onChange={handleChange}
          checked={form.hobbies.includes("Travelling")}
        />{" "}
        Travelling
      </label>
      <label>
        <input
          type="checkbox"
          name="hobbies"
          value="Coding"
          onChange={handleChange}
          checked={form.hobbies.includes("Coding")}
        />{" "}
        Coding
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
        />
        I agree to the terms and conditions
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
```
