export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Ready to improve your facility performance?
          Contact ArcticFix today.
        </p>

      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center mt-12">

  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">

    Request Consultation

  </button>

</div>

  <div className="rounded-2xl border p-8 shadow-md text-center">
    <h3 className="text-xl font-bold text-blue-700">
      📞 WhatsApp
    </h3>

    <p className="mt-4 text-gray-600">
      +62 xxx xxxx xxxx
    </p>
  </div>

  <div className="rounded-2xl border p-8 shadow-md text-center">
    <h3 className="text-xl font-bold text-blue-700">
      ✉ Email
    </h3>

    <p className="mt-4 text-gray-600">
      fauzanfirmansyah87@gmail.com
    </p>
  </div>

  <div className="rounded-2xl border p-8 shadow-md text-center">
    <h3 className="text-xl font-bold text-blue-700">
      📍 Location
    </h3>

    <p className="mt-4 text-gray-600">
      Indonesia
    </p>
  </div>

</div>
    </section>
  );
}