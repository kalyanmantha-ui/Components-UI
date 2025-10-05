import { useState } from "react";

export default function FormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = { name: "", email: "", password: "" };

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Enter a valid email address.";
    }

    if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((e) => e !== "");


  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      alert("✅ Form submitted successfully!");
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="formContainer">
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit} className="formBox">
        <label>
          Name:
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          Password:
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
