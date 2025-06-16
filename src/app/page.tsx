import Image from "next/image";

export default function Home() {
  return (
    <div className="w-100% h-screen">
      <main className="w-[100%] h-[100%] bag_full flex items-center justify-center">
        <div
          className=" pad flex flex-col items-center gap-6 bg-black text-cyan-100 border
        "
        >
          <h1>
            DEb Gry&apos;s <br />
          </h1>
          <span>servicing center</span>

          <address className="flex flex-col items-center">
            <strong>
              we are located at <br />
            </strong>
            <span>134 main street, califonia, USA. </span>
          </address>

          <p>number: (123) 456-7890</p>
          <p>
            email : <strong>info@debgry.com</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
