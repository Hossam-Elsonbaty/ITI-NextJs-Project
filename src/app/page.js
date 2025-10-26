export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center text-center px-6 py-16">
        <section className="max-w-4xl mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">My Next Project</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Manage your finances smarter. Track your income, expenses, and stay
            organized — all in one simple platform built for you.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/sign-up"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition"
            >
              Learn More
            </a>
          </div>
        </section>
        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mb-20">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              💰 Easy Expense Tracking
            </h3>
            <p className="text-gray-600">
              Log your daily transactions quickly and keep an eye on your cash
              flow effortlessly.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              📊 Smart Reports
            </h3>
            <p className="text-gray-600">
              Get detailed insights into your spending habits and financial
              health with interactive reports.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ☁️ Cloud Sync
            </h3>
            <p className="text-gray-600">
              Access your financial data anywhere, anytime — safely stored in
              the cloud.
            </p>
          </div>
        </section>
        <section className="bg-blue-600 text-white py-12 px-6 rounded-2xl shadow-md w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Managing Your Money Smarter
          </h2>
          <p className="text-lg mb-6">
            Join thousands of users simplifying their finances with Sonbaty
            Cashbook.
          </p>
          <a
            href="/sign-up"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition"
          >
            Create Free Account
          </a>
        </section>
      </main>
    </>
  );
}
