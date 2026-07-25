import {
  Zap,
  Snowflake,
  Wrench,
  Droplets,
  Building2,
  MonitorCog,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "Panel listrik, UPS, distribusi daya, MCC, MDB, dan preventive maintenance.",
  },
  {
    icon: Snowflake,
    title: "HVAC Systems",
    description:
      "Chiller, AHU, FCU, VRF/VRV, preventive maintenance HVAC.",
  },
  {
    icon: Wrench,
    title: "Mechanical Systems",
    description:
      "Pump, motor, compressor, conveyor, rotating equipment dan preventive maintenance.",
  },
  {
    icon: Droplets,
    title: "Plumbing Systems",
    description:
      "Water supply, drainage, sanitary system dan preventive inspection.",
  },
  {
    icon: Building2,
    title: "Facility Management",
    description:
      "Integrated operation, maintenance dan asset management.",
  },
  {
    icon: MonitorCog,
    title: "Smart Monitoring",
    description:
      "IoT monitoring, dashboard dan predictive maintenance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Comprehensive engineering and facility management solutions to keep
          your assets reliable, efficient, and operating at their best.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-700 transition">
                  <Icon
                    size={30}
                    className="text-blue-700 group-hover:text-white transition"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-800">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-blue-700 font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}