export default function Industries() {
  return (
    <section id="industries" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Industries We Serve
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          ArcticFix supports a wide range of facility types with reliable
          engineering and maintenance services.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl">🏥</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Healthcare</h3>
            <p className="mt-3 text-gray-600">
              Hospitals, clinics, and medical facilities.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl">🏭</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Manufacturing</h3>
            <p className="mt-3 text-gray-600">
              Plants, factories, and production environments.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl">🏢</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Commercial Buildings</h3>
            <p className="mt-3 text-gray-600">
              Offices, towers, and business properties.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl">🏨</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Hospitality</h3>
            <p className="mt-3 text-gray-600">
              Hotels, resorts, and guest facilities.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl">🏫</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Education</h3>
            <p className="mt-3 text-gray-600">
              Schools, campuses, and training centres.
            </p>
          </div>

          <div className="rounded-2xl border p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl">🏬</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Retail</h3>
            <p className="mt-3 text-gray-600">
              Shopping centres and retail environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}