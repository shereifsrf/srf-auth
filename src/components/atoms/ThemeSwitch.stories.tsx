import type { Story } from "@ladle/react";
import React from "react";
import ThemeSwitch, { ThemeSwitch as HeadlessThemeSwitch } from "./ThemeSwitch";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Default</h3>
      <ThemeSwitch />
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessThemeSwitch />
    </div>
  </div>
);
