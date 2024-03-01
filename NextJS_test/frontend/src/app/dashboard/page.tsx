"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [name, setName] = useState("");
  console.log("heloooooo");
  return (
    <div>
      <h1>dashboard page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>hello, {name}!</p>
      <Link href="/">home</Link>
    </div>
  );
}
