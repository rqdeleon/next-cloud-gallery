import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";

export default async function Home() {

  return (
    <main className="">
      <Navbar />
      <Hero />
      <h3 className="px-10 text-3xl mt-10 font-semibold">Photo Tour</h3>
      <Separator className="my-10"/>
      <Gallery />
    </main>
  );
}
