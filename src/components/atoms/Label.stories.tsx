import type { Story } from "@ladle/react";
import React from "react";
import Label, { Label as HeadlessLabel } from "./Label";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <Label>Label Text</Label>
    </div>
    <div>
      <h3>Required</h3>
      <Label required>Required Label</Label>
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessLabel>Headless Label</HeadlessLabel>
    </div>
  </div>
);
