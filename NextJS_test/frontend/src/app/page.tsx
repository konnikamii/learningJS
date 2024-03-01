import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/about" className="m-2 p-2 rounded-full bg-slate-500">
        About
      </Link>
      <Link href="/dashboard" className="m-2 p-2 rounded-full bg-slate-500">
        Dashboard
      </Link>
      <Link href="/users" className="m-2 p-2 rounded-full bg-slate-500">
        Users
      </Link>
    </>
  );
}
