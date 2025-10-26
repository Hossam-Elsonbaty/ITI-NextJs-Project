import React from 'react'
export const metadata ={
  title:"About Us page",
  description :'page to learn more about us'
}

const page = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center text-center px-6 py-16">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-600">Next</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Sonbaty Cashbook is a modern and efficient financial management
          application designed to help individuals and businesses track their
          income and expenses with ease. Our goal is to make money management
          simple, visual, and accessible for everyone.
        </p>
      </section>
      <section className="mt-16 max-w-5xl text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We aim to empower users with tools that simplify financial tracking
          and decision-making. Whether you’re managing a personal budget or a
          business cash flow, Sonbaty Cashbook offers clarity, control, and
          convenience in one intuitive platform.
        </p>
      </section>
      <section className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl">
        {[
          {
            title: "Simple Interface",
            text: "Track transactions effortlessly through a clean and modern design.",
          },
          {
            title: "Secure Data",
            text: "We ensure your financial data is encrypted and stored safely.",
          },
          {
            title: "Smart Insights",
            text: "Visualize your cash flow and make better financial decisions.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.text}</p>
          </div>
        ))}
      </section>
      <section className="mt-16 max-w-5xl text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Our team consists of passionate developers and designers dedicated to
          building tools that help people take control of their finances. We
          value innovation, simplicity, and user trust above all.
        </p>
      </section>
    </main>
  )
}

export default page