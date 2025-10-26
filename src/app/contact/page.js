import React from "react";
export const metadata ={
  title:"Contact Us page",
  description :'page to contact with us'
}

const page = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <section className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Have questions or need help? We’d love to hear from you! Fill out the
          form below or reach out using the information provided.
        </p>
      </section>
      <section className="grid md:grid-cols-2 gap-10 w-full max-w-5xl bg-white shadow-md rounded-2xl p-8">
        <form
          className="flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col justify-center gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We’re here to assist you with any inquiries or support requests.
              Our team will respond as soon as possible.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-1">📍 Address</h3>
            <p className="text-gray-600">123 Business Street, Cairo, Egypt</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-1">📞 Phone</h3>
            <p className="text-gray-600">+20 111 234 5678</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 mb-1">📧 Email</h3>
            <p className="text-gray-600">support@sonbatycashbook.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
