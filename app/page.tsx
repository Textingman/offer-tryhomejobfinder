import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/HJF_logo.png" 
                  alt="TryHomeJobFinder" 
                  width={500} 
                  height={167}
                  className="h-32 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#2F3A40] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#6B7280] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#6B7280] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#6B7280] hover:text-[#3B82F6] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#3B82F6] text-white hover:bg-[#2563eb] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-[#2F3A40] sm:text-6xl md:text-7xl">
            Land Your Dream Job
            <span className="block text-[#3B82F6]">With AI-Powered Resume Analysis</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#6B7280]">
            Get instant feedback on your resume, optimize your job applications, and master the interview process with our AI-powered career tools.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#3B82F6] text-white text-lg font-semibold rounded-lg hover:bg-[#2563eb] transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#3B82F6] text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-[#3B82F6]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2F3A40]">Why Choose TryHomeJobFinder?</h2>
          <p className="mt-4 text-xl text-[#6B7280]">
            Job seekers trust us to optimize their resumes and ace the application process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-12 h-12 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3A40] text-center mb-3">
              AI-Powered Analysis
            </h3>
            <p className="text-[#6B7280] text-center">
              Get instant, intelligent feedback on your resume with actionable suggestions to improve your chances.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3A40] text-center mb-3">
              Interview Prep
            </h3>
            <p className="text-[#6B7280] text-center">
              Master common interview questions and learn proven strategies to stand out from other candidates.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2F3A40] text-center mb-3">
              Application Tracking
            </h3>
            <p className="text-[#6B7280] text-center">
              Keep track of all your job applications in one place and never miss a follow-up opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2F3A40]">How It Works</h2>
            <p className="mt-4 text-xl text-[#6B7280]">
              Your complete toolkit for job search success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Solutions List */}
            <div className="space-y-12">
              {/* Solution 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#2F3A40] mb-4">Resume Analysis</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Upload your resume and get instant AI-powered feedback on formatting, keywords, and content optimization to pass ATS systems.
                </p>
              </div>

              {/* Solution 2 */}
              <div>
                <h3 className="text-2xl font-bold text-[#2F3A40] mb-4">Cover Letter Builder</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Generate tailored cover letters for each position using AI that understands job requirements and highlights your relevant experience.
                </p>
              </div>

              {/* Solution 3 */}
              <div>
                <h3 className="text-2xl font-bold text-[#2F3A40] mb-4">Interview Coaching</h3>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  Practice with AI-powered mock interviews, get feedback on your answers, and learn strategies to confidently handle any question.
                </p>
              </div>
            </div>

            {/* Single Image */}
            <div className="rounded-lg overflow-hidden sticky top-8 flex items-start justify-center">
              <Image 
                src="/Body_page.png" 
                alt="TryHomeJobFinder Solutions"
                width={350} 
                height={350}
                className="w-auto h-auto object-contain max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#3B82F6] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of job seekers who have successfully landed their dream jobs with TryHomeJobFinder's AI-powered career tools.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-white text-[#3B82F6] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F3A40] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TryHomeJobFinder</h3>
              <p className="text-gray-400">
                AI-powered career tools for job seekers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@tryhomejobfinder.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TryHomeJobFinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
