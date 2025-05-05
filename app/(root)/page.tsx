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
        
      </main>
    </>
  );
}
