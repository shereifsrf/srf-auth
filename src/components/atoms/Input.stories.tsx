import type { Story } from "@ladle/react";
import React from "react";
import Input, { Input as HeadlessInput } from "./Input";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <Input placeholder="Enter text..." />
    </div>
    <div>
      <h3>Email</h3>
      <Input type="email" placeholder="email@example.com" />
    </div>
    <div>
      <h3>Number</h3>
      <Input type="number" placeholder="Enter number" />
    </div>
    <div>
      <h3>Disabled</h3>
      <Input placeholder="Disabled" disabled />
    </div>
    <div>
      <h3>Error</h3>
      <Input placeholder="Error state" hasError />
    </div>
    <div>
      <h3>Full Width</h3>
      <Input placeholder="Full width" fullWidth />
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessInput placeholder="Headless input" />
    </div>
  </div>
);

export const Styled: Story = () => (
  <div>
    <div>
      <h3>Basic Input</h3>
      <Input placeholder="Enter text..." />
    </div>

    <div>
      <h3>Different Inputs</h3>
      <Input placeholder="Standard input" />
      <Input placeholder="With default value" defaultValue="Some text" />
      <Input placeholder="Read-only" readOnly defaultValue="Read-only value" />
    </div>

    <div>
      <h3>Types</h3>
      <Input type="email" placeholder="Email" />
      <Input type="number" placeholder="Number" />
      <Input type="tel" placeholder="Phone" />
      <Input type="url" placeholder="URL" />
    </div>

    <div>
      <h3>States</h3>
      <Input placeholder="Normal" />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Error state" hasError />
      <Input placeholder="Full width" fullWidth />
    </div>

    <div>
      <h3>With Value</h3>
      <Input defaultValue="Default value" />
    </div>
  </div>
);

export const Headless: Story = () => (
  <div>
    <h3>Headless Input (No Styles)</h3>
    <p>Headless input without styling - apply your own custom styles.</p>
    <HeadlessInput placeholder="Custom styled input" />
  </div>
);

export const Controlled: Story = () => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <h3>Controlled Input</h3>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <div>
        <strong>Value:</strong> {value || "(empty)"}
      </div>
      <div>
        <strong>Length:</strong> {value.length} characters
      </div>
    </div>
  );
};
