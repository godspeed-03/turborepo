import Image from "next/image";
import { Button } from "@repo/ui/Button";

export default function Home() {
  return (
<div className=" w-screen h-screen flex items-center justify-center bg-slate-900 text-gray-800 ">
  <Button className="p-28 border-white shadow-lg border-2 rounded-md bg-white">DOCS</Button>
</div>
  );
}
