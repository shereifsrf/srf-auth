import type { Story } from "@ladle/react";
import React from "react";
import PasswordInput, {
  PasswordInput as HeadlessPasswordInput,
} from "./PasswordInput";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <PasswordInput placeholder="Enter password..." />
    </div>
    <div>
      <h3>With Strength</h3>
      <PasswordInput placeholder="Enter password..." showStrength />
    </div>
    <div>
      <h3>Without Toggle</h3>
      <PasswordInput placeholder="Enter password..." showToggle={false} />
    </div>
    <div>
      <h3>Error</h3>
      <PasswordInput placeholder="Enter password..." hasError />
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessPasswordInput placeholder="Headless password" />
    </div>
  </div>
);
