import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "react-query";
import axios from "axios";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const mutation = useMutation(() =>
    axios
      .post("/about")
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      })
  );
  console.log(mutation);
  return (
    <>
      <div className="p-2">Hello from About!</div>
      <button onClick={() => mutation.mutate()}>Make POST request</button>
    </>
  );
}
