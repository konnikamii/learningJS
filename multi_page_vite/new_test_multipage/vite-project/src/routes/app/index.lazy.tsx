import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/app/")({
  component: App,
});

function App() {
  return (
    <div className="p-2">
      <h3>Welcome App!</h3>
    </div>
  );
}
