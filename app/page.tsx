import Image from "next/image";
import CircularChart from "./circular_chart";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Finance Tracker</h1>
      <CircularChart id="helloworld" />
    </div>
  );
}
