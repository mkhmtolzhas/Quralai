import Consultation from "@/components/component/Consultation";
import ForWho from "@/components/component/ForWho";
import Landing from "@/components/component/Landing";
import Reviews from "@/components/component/Reviews";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <ForWho />
      <Consultation />
      <Reviews />
    </main>
  );
}
