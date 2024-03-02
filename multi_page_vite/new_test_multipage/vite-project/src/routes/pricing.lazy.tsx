import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pricing")({
  component: Pricing,
});

function Pricing() {
  return <div className="p-2">Hello from Pricing!</div>;
}
