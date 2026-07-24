import { Zap } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">
          Our Services
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition">

            <div className="flex items-center gap-3">
              <Zap size={32} className="text-blue-700" />

              <h3 className="text-2xl font-bold text-blue-700">
                Electrical Engineering
              </h3>
            </div>

            <p className="mt-4 text-gray-600">
              Panel listrik, UPS, distribusi daya,
              MCC, MDB, dan preventive maintenance.
            </p>

          </div>
          <div className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition">

  <div className="flex items-center gap-3">
    <h3 className="text-2xl font-bold text-blue-700">
      ❄ HVAC Systems
    </h3>
  </div>

  <p className="mt-4 text-gray-600">
    Chiller, AHU, FCU, VRF/VRV,
    preventive maintenance HVAC.
  </p>

</div>
        </div>

      </div>
    </section>
  );
}
