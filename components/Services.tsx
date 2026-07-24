import { Droplets } from "lucide-react";
import { Wrench } from "lucide-react";
import { Zap } from "lucide-react";
import { Building2 } from "lucide-react";
import { MonitorCog } from "lucide-react";


export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
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
<div className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition">

  <div className="flex items-center gap-3">
    <Wrench size={32} className="text-blue-700" />

    <h3 className="text-2xl font-bold text-blue-700">
      Mechanical Systems
    </h3>
  </div>

  <p className="mt-4 text-gray-600">
    Pump, motor, compressor, conveyor,
    rotating equipment dan preventive maintenance.
  </p>

</div>
<div className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition">

  <div className="flex items-center gap-3">
    <Droplets size={32} className="text-blue-700" />

    <h3 className="text-2xl font-bold text-blue-700">
      Plumbing Systems
    </h3>
  </div>

  <p className="mt-4 text-gray-600">
    Water supply, drainage,
    sanitary system dan preventive inspection.
  </p>

</div>
<div className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition">

  <div className="flex items-center gap-3">
    <Building2 size={32} className="text-blue-700" />

    <h3 className="text-2xl font-bold text-blue-700">
      Facility Management
    </h3>
  </div>

  <p className="mt-4 text-gray-600">
    Integrated operation,
    maintenance dan asset management.
  </p>

</div>
<div className="rounded-2xl border p-8 shadow-md hover:shadow-xl transition">

  <div className="flex items-center gap-3">
    <MonitorCog size={32} className="text-blue-700" />

    <h3 className="text-2xl font-bold text-blue-700">
      Smart Monitoring
    </h3>
  </div>

  <p className="mt-4 text-gray-600">
    IoT monitoring,
    dashboard dan predictive maintenance.
  </p>

</div>
        </div>

      </div>
    </section>
  );
}
