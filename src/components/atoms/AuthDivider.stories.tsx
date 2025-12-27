import type { Story } from "@ladle/react";
import React from "react";
import AuthDivider, { AuthDivider as HeadlessAuthDivider } from "./AuthDivider";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <AuthDivider />
    </div>
    <div>
      <h3>Custom Text</h3>
      <AuthDivider>OR</AuthDivider>
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessAuthDivider>Headless Divider</HeadlessAuthDivider>
    </div>
  </div>
);
