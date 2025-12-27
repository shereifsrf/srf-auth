import type { Story } from "@ladle/react";
import React from "react";
import LoadingSpinner, {
  LoadingSpinner as HeadlessLoadingSpinner,
} from "./LoadingSpinner";

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-2">
    <div>
      <h3>Small</h3>
      <LoadingSpinner size="sm" />
    </div>
    <div>
      <h3>Medium</h3>
      <LoadingSpinner size="md" />
    </div>
    <div>
      <h3>Large</h3>
      <LoadingSpinner size="lg" />
    </div>
    <div>
      <h3>Headless</h3>
      <HeadlessLoadingSpinner />
    </div>
  </div>
);
