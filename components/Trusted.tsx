export default function Trusted() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-8">

        <h3 className="text-center text-gray-500 uppercase tracking-[4px] font-semibold">
          Trusted Across Industries
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">

          <div className="border rounded-xl p-6 text-center font-semibold text-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            🏢
            <p className="mt-3">Commercial</p>
          </div>

          <div className="border rounded-xl p-6 text-center font-semibold text-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            🏥
            <p className="mt-3">Healthcare</p>
          </div>

          <div className="border rounded-xl p-6 text-center font-semibold text-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            🏭
            <p className="mt-3">Manufacturing</p>
          </div>

          <div className="border rounded-xl p-6 text-center font-semibold text-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            🏨
            <p className="mt-3">Hospitality</p>
          </div>

          <div className="border rounded-xl p-6 text-center font-semibold text-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            🏫
            <p className="mt-3">Education</p>
          </div>

        </div>

      </div>
    </section>
  );
}