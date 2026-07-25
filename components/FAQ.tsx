export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-slate-800">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Common questions about ArcticFix services, maintenance approach, and support.
        </p>

        <div className="grid gap-4 mt-14 max-w-4xl mx-auto">
          <details className="rounded-2xl border p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-800">
              Do you provide preventive maintenance?
            </summary>
            <p className="mt-4 text-gray-600">
              Yes. We provide scheduled preventive maintenance to reduce downtime, extend asset life, and keep systems performing reliably.
            </p>
          </details>

          <details className="rounded-2xl border p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-800">
              Do you support emergency breakdowns?
            </summary>
            <p className="mt-4 text-gray-600">
              Yes. We can support urgent breakdown response depending on location and service scope.
            </p>
          </details>

          <details className="rounded-2xl border p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-800">
              Which industries do you serve?
            </summary>
            <p className="mt-4 text-gray-600">
              We serve healthcare, manufacturing, commercial buildings, hospitality, education, retail, and more.
            </p>
          </details>

          <details className="rounded-2xl border p-6 shadow-sm">
            <summary className="cursor-pointer font-semibold text-slate-800">
              Can you handle both maintenance and project work?
            </summary>
            <p className="mt-4 text-gray-600">
              Yes. We support both routine maintenance services and project-based engineering work.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}