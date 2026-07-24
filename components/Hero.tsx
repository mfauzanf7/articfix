import Image from "next/image";
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[5px] text-blue-400 font-semibold">
            Trusted Engineering Partner
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
            Engineering Beyond
            <br />
            Maintenance
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            Professional Electrical, HVAC, Mechanical,
            Plumbing, Building Maintenance and Facility
            Management Services.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition">
              <a
  href="#contact"
  className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
>
  Request Consultation
</a>
            </button>

            <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              <a
  href="#services"
  className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
>
  Explore Services
</a>
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

  <Image
    src="/images/hero-building.jpg"
    alt="Modern Building"
    width={520}
    height={520}
    className="rounded-3xl shadow-2xl object-cover"
    priority
  />

</div>

      </div>
    </section>
  );
}