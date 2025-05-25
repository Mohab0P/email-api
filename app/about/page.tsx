export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Tareeqi</h1>
          <p className="text-xl text-gray-600">Empowering Your Journey with Smart Navigation</p>
        </div>

        <div className="prose prose-purple mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At Tareeqi, we're dedicated to revolutionizing the way people navigate and explore their surroundings. 
              Our platform combines cutting-edge technology with local expertise to provide an unparalleled navigation experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Beta Program</h2>
            <p className="text-gray-700">
              We're currently inviting users to join our beta program and be among the first to experience Tareeqi. 
              As a beta tester, you'll have:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Early access to our platform</li>
              <li>Direct influence on feature development</li>
              <li>Exclusive updates and insights</li>
              <li>Priority support</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Smart Navigation</h3>
                <p className="text-gray-700">Advanced routing algorithms for optimal path finding</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Local Insights</h3>
                <p className="text-gray-700">Community-driven points of interest and recommendations</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Real-time Updates</h3>
                <p className="text-gray-700">Live traffic and route condition information</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Offline Access</h3>
                <p className="text-gray-700">Access essential features without internet connection</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions or suggestions? We'd love to hear from you! Use our contact form to get in touch with our team.
              We're committed to providing excellent support and are always eager to hear your feedback.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Team</h2>
            <p className="text-gray-700">
              Tareeqi is built by a passionate team of developers, designers, and navigation experts. 
              We're committed to creating the best possible navigation experience for our users.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 