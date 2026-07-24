import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-slate-800">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Examples of engineering and facility management services that
          reflect ArcticFix's commitment to quality, reliability, and
          operational excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <Image
              src="/images/hero-building.jpg"
              alt="Hospital Project"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-slate-800">
                🏥 Hospital HVAC
              </h3>

              <p className="text-gray-600 mt-3">
                Preventive maintenance for AHU, FCU,
                and ventilation systems.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:underline">
                View Details →
              </button>

            </div>

          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <Image
              src="/images/hero-building.jpg"
              alt="Office Building"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-slate-800">
                🏢 Office Building
              </h3>

              <p className="text-gray-600 mt-3">
                Electrical panel inspection,
                UPS maintenance, and energy optimization.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:underline">
                View Details →
              </button>

            </div>

          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <Image
              src="/images/hero-building.jpg"
              alt="Manufacturing"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold text-slate-800">
                🏭 Manufacturing Plant
              </h3>

              <p className="text-gray-600 mt-3">
                Mechanical maintenance,
                utility inspection, and equipment reliability.
              </p>

              <button className="mt-6 text-blue-600 font-semibold hover:underline">
                View Details →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}