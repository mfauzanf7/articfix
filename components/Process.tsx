export default function Process() {
  return (
    <section id="process" className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Our Process
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          A clear and structured approach to delivering reliable engineering and
          facility management services.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
          <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-700">01</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Site Survey</h3>
            <p className="mt-3 text-gray-600">We inspect the site and understand the condition.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-700">02</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Assessment</h3>
            <p className="mt-3 text-gray-600">We evaluate risks, needs, and maintenance priorities.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-700">03</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Proposal</h3>
            <p className="mt-3 text-gray-600">We prepare a clear scope, timeline, and solution.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-700">04</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Execution</h3>
            <p className="mt-3 text-gray-600">Our team performs the work with quality and safety.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-700">05</div>
            <h3 className="mt-4 text-xl font-bold text-slate-800">Reporting</h3>
            <p className="mt-3 text-gray-600">We deliver reports and recommendations for follow-up.</p>
          </div>
        </div>
      </div>
    </section>
  );
}