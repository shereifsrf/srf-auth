import type { Story } from "@ladle/react";
import React from "react";
import Button, { Button as HeadlessButton } from "./Button";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <Button variant="primary">Primary Button</Button>
    </div>
    <div>
      <Button variant="secondary">Secondary Button</Button>
    </div>
    <div>
      <Button variant="outline">Outline Button</Button>
    </div>
    <div>
      <Button variant="ghost">Ghost Button</Button>
    </div>
    <div>
      <Button variant="danger">Danger Button</Button>
    </div>
    <div>
      <Button size="sm">Small</Button>
    </div>
    <div>
      <Button size="lg">Large</Button>
    </div>
    <div>
      <Button isLoading>Loading...</Button>
    </div>
    <div>
      <Button disabled>Disabled</Button>
    </div>
    <div>
      <Button fullWidth>Full Width</Button>
    </div>
    <div>
      <Button startIcon="🚀">Start Icon</Button>
    </div>
    <div>
      <Button endIcon="→">End Icon</Button>
    </div>
    <div>
      <HeadlessButton>Headless Button</HeadlessButton>
    </div>
  </div>
);
