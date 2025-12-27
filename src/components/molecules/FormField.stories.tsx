import type { Story } from "@ladle/react";
import React from "react";
import FormField, { FormField as HeadlessFormField } from "./FormField";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <FormField label="Email">
        <Input type="email" placeholder="email@example.com" />
      </FormField>
    </div>
    <div>
      <h3>Required</h3>
      <FormField label="Username" required>
        <Input placeholder="Enter username" />
      </FormField>
    </div>
    <div>
      <h3>With Helper</h3>
      <FormField label="Password" helperText="Must be at least 8 characters">
        <Input type="password" placeholder="Enter password" />
      </FormField>
    </div>
    <div>
      <h3>With Error</h3>
      <FormField label="Email" error="Please enter a valid email" required>
        <Input type="email" placeholder="email@example.com" hasError />
      </FormField>
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessFormField label="Headless Field">
        <input placeholder="Custom input" />
      </HeadlessFormField>
    </div>
  </div>
);

export const CompleteForm: Story = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h3>Complete Form Example</h3>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Email Address"
          required
          error={errors.email}
          helperText={
            !errors.email ? "We'll never share your email" : undefined
          }
        >
          <Input
            type="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            hasError={!!errors.email}
          />
        </FormField>

        <FormField
          label="Password"
          required
          error={errors.password}
          helperText={
            !errors.password ? "Must be at least 8 characters" : undefined
          }
        >
          <PasswordInput
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            hasError={!!errors.password}
            showStrength
          />
        </FormField>

        <FormField
          label="Confirm Password"
          required
          error={errors.confirmPassword}
        >
          <PasswordInput
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            hasError={!!errors.confirmPassword}
          />
        </FormField>

        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>
      </form>

      {submitted && (
        <div className="alert alert-success">
          <span>Form submitted successfully!</span>
        </div>
      )}
    </div>
  );
};
