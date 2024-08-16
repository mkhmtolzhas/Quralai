import Consultation from "@/components/component/Consultation";
import ForWho from "@/components/component/ForWho";
import Landing from "@/components/component/Landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <ForWho />
      <Consultation />
    </main>
  );
}
