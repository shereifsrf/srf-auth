import type { Story } from "@ladle/react";
import React from "react";
import OAuthButton, { OAuthButton as HeadlessOAuthButton } from "./OAuthButton";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Google</h3>
      <OAuthButton provider="google" />
    </div>
    <div>
      <h3>GitHub</h3>
      <OAuthButton provider="github" />
    </div>
    <div>
      <h3>Facebook</h3>
      <OAuthButton provider="facebook" />
    </div>
    <div>
      <h3>Apple</h3>
      <OAuthButton provider="apple" />
    </div>
    <div>
      <h3>Small</h3>
      <OAuthButton provider="google" size="sm" />
    </div>
    <div>
      <h3>Large</h3>
      <OAuthButton provider="google" size="lg" />
    </div>
    <div>
      <h3>Loading</h3>
      <OAuthButton provider="google" isLoading />
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessOAuthButton provider="google" />
    </div>
  </div>
);

export const Interactive: Story = () => {
  const [loading, setLoading] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<string>("");

  const handleOAuth = (provider: string) => {
    setLoading(provider);
    setResult(`Initiating ${provider} authentication...`);

    setTimeout(() => {
      setLoading(null);
      setResult(`Successfully signed in with ${provider}!`);
    }, 2000);
  };

  return (
    <div>
      <h3>Interactive OAuth Flow</h3>

      <div>
        <OAuthButton
          provider="google"
          fullWidth
          isLoading={loading === "google"}
          onClick={() => handleOAuth("Google")}
        />
        <OAuthButton
          provider="github"
          fullWidth
          isLoading={loading === "github"}
          onClick={() => handleOAuth("GitHub")}
        />
        <OAuthButton
          provider="facebook"
          fullWidth
          isLoading={loading === "facebook"}
          onClick={() => handleOAuth("Facebook")}
        />
      </div>

      {result && (
        <div className="alert alert-success">
          <span>{result}</span>
        </div>
      )}
    </div>
  );
};

export const InAuthForm: Story = () => (
  <div>
    <h3>In Authentication Form</h3>

    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center mb-4">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary w-full">Sign In</button>

        <div className="divider">OR</div>

        <OAuthButton provider="google" fullWidth />
        <OAuthButton provider="github" fullWidth />
      </div>
    </div>
  </div>
);
