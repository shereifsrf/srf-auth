import type { Story } from "@ladle/react";
import React from "react";
import ErrorMessage, {
  ErrorMessage as HeadlessErrorMessage,
} from "./ErrorMessage";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <ErrorMessage>This field is required</ErrorMessage>
    </div>
    <div>
      <h3>Warning</h3>
      <ErrorMessage variant="warning">This is a warning</ErrorMessage>
    </div>
    <div>
      <h3>Info</h3>
      <ErrorMessage variant="info">This is an info message</ErrorMessage>
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessErrorMessage>Headless error message</HeadlessErrorMessage>
    </div>
  </div>
);

export const Styled: Story = () => (
  <div>
    <div>
      <h3>Basic Error Message</h3>
      <ErrorMessage>This field is required</ErrorMessage>
    </div>

    <div>
      <h3>Different Error Types</h3>
      <ErrorMessage>Password must be at least 8 characters</ErrorMessage>
      <ErrorMessage>Email address is invalid</ErrorMessage>
      <ErrorMessage>Username is already taken</ErrorMessage>
    </div>

    <div>
      <h3>With Form Field</h3>
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        type="email"
        className="input input-bordered input-error w-full"
        placeholder="email@example.com"
        defaultValue="invalid-email"
      />
      <ErrorMessage>Please enter a valid email address</ErrorMessage>
    </div>
  </div>
);

export const Headless: Story = () => (
  <div>
    <h3>Headless Error Message</h3>
    <p>
      Headless error message without styling - apply your own custom styles via
      className.
    </p>
    <div className="text-error p-2 border border-error rounded">
      <HeadlessErrorMessage>Custom styled error message</HeadlessErrorMessage>
    </div>
  </div>
);

export const ConditionalError: Story = () => {
  const [email, setEmail] = React.useState("");
  const [showError, setShowError] = React.useState(false);

  const validateEmail = (value: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setShowError(!isValid && value.length > 0);
  };

  return (
    <div>
      <h3>Conditional Error Display</h3>
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input
        type="email"
        className={`input input-bordered w-full ${showError ? "input-error" : ""}`}
        placeholder="email@example.com"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      {showError && (
        <ErrorMessage>Please enter a valid email address</ErrorMessage>
      )}
    </div>
  );
};
