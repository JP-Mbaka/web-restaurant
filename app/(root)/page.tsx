import AboutComponent from "@/components/aboutComponent";
import NavComponent from "@/components/navComponent";
import OfferComponents from "@/components/offerComponents";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavComponent />
      <main>
        <section>
          <OfferComponents />
        </section>
        <section>
          <AboutComponent />
        </section>
      </main>
      <footer className="py-12 px-24 bg-amber-800 h-0.5 flex items-center justify-center text-white">
        Copyright @2025 www.jetpoint.com
      </footer>
    </>
  );
}
