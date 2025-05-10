import BetaForm from './components/BetaForm';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Tareeqi</h1>
          <p className="text-xl text-gray-600">Join our beta program or get in touch with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <BetaForm />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
} 