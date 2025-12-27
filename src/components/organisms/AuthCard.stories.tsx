import type { Story } from "@ladle/react";
import React from "react";
import AuthCard, { AuthCard as HeadlessAuthCard } from "./AuthCard";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import PasswordInput from "../atoms/PasswordInput";
import OAuthButton from "../molecules/OAuthButton";
import AuthDivider from "../atoms/AuthDivider";
import FormField from "../molecules/FormField";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Sign In</h3>
      <AuthCard title="Welcome Back" subtitle="Sign in to your account">
        <Input type="email" placeholder="Email" fullWidth />
        <Input type="password" placeholder="Password" fullWidth />
        <Button variant="primary" fullWidth>
          Sign In
        </Button>
      </AuthCard>
    </div>
    <div>
      <h3>Sign Up</h3>
      <AuthCard
        title="Create Account"
        subtitle="Get started with your free account"
      >
        <Input placeholder="Full Name" fullWidth />
        <Input type="email" placeholder="Email" fullWidth />
        <Input type="password" placeholder="Password" fullWidth />
        <Button variant="primary" fullWidth>
          Create Account
        </Button>
      </AuthCard>
    </div>
    <div>
      <h3>With Footer</h3>
      <AuthCard title="Sign In" footer={<p>Don't have an account? Sign up</p>}>
        <Input type="email" placeholder="Email" fullWidth />
        <Input type="password" placeholder="Password" fullWidth />
        <Button variant="primary" fullWidth>
          Sign In
        </Button>
      </AuthCard>
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessAuthCard title="Headless Card">
        <p>Custom content</p>
      </HeadlessAuthCard>
    </div>
  </div>
);

export const WithOAuth: Story = () => (
  <div>
    <AuthCard
      title="Sign In"
      subtitle="Choose your preferred sign in method"
      footer={
        <p>
          Don't have an account?{" "}
          <a href="#" className="link link-primary">
            Sign up
          </a>
        </p>
      }
    >
      <div>
        <OAuthButton provider="google" fullWidth />
        <OAuthButton provider="github" fullWidth />
      </div>

      <AuthDivider>OR</AuthDivider>

      <Input type="email" placeholder="Email" fullWidth />
      <PasswordInput placeholder="Password" fullWidth />

      <div>
        <label>
          <input type="checkbox" className="checkbox checkbox-sm" />
          <span>Remember me</span>
        </label>
        <a href="#" className="link link-primary">
          Forgot password?
        </a>
      </div>

      <Button variant="primary" fullWidth>
        Sign In
      </Button>
    </AuthCard>
  </div>
);

export const WithFormFields: Story = () => (
  <div>
    <AuthCard
      title="Create Account"
      subtitle="Fill in your information to get started"
      footer={
        <p>
          Already have an account?{" "}
          <a href="#" className="link link-primary">
            Sign in
          </a>
        </p>
      }
    >
      <FormField label="Full Name" required>
        <Input placeholder="John Doe" fullWidth />
      </FormField>

      <FormField
        label="Email Address"
        required
        helperText="We'll never share your email"
      >
        <Input type="email" placeholder="email@example.com" fullWidth />
      </FormField>

      <FormField
        label="Password"
        required
        helperText="Must be at least 8 characters"
      >
        <PasswordInput
          placeholder="Create a strong password"
          showStrength
          fullWidth
        />
      </FormField>

      <div>
        <input type="checkbox" className="checkbox checkbox-sm mt-1" />
        <span>
          I agree to the{" "}
          <a href="#" className="link link-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="link link-primary">
            Privacy Policy
          </a>
        </span>
      </div>

      <Button variant="primary" fullWidth>
        Create Account
      </Button>
    </AuthCard>
  </div>
);

export const Headless: Story = () => (
  <div>
    <HeadlessAuthCard
      title="Custom Styled Card"
      subtitle="This is using the headless component"
      footer={<p>Custom footer content</p>}
      className="border-4 border-purple-600 rounded-2xl"
    >
      <p>Custom content with your own styling</p>
      <input
        placeholder="Custom input"
        className="input input-bordered w-full mt-4"
      />
    </HeadlessAuthCard>
  </div>
);

export const InteractiveForm: Story = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password.length >= 8) {
        setSuccess(true);
      } else {
        setError("Please check your credentials");
      }
      setLoading(false);
    }, 2000);
  };

  if (success) {
    return (
      <div>
        <AuthCard title="Success!" subtitle="You've successfully signed in">
          <div className="alert alert-success">
            <span>Welcome back! Redirecting...</span>
          </div>
        </AuthCard>
      </div>
    );
  }

  return (
    <div>
      <AuthCard
        title="Sign In"
        subtitle="Enter your credentials to continue"
        footer={
          <p>
            Don't have an account?{" "}
            <a href="#" className="link link-primary">
              Sign up
            </a>
          </p>
        }
      >
        <form onSubmit={handleSubmit}>
          <FormField
            label="Email"
            required
            error={error && !formData.email ? "Email is required" : undefined}
          >
            <Input
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              fullWidth
            />
          </FormField>

          <FormField
            label="Password"
            required
            error={
              error && formData.password.length < 8
                ? "Password must be at least 8 characters"
                : undefined
            }
          >
            <PasswordInput
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              fullWidth
            />
          </FormField>

          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          <Button type="submit" variant="primary" fullWidth isLoading={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </AuthCard>
    </div>
  );
};
