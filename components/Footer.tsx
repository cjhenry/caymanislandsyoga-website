import Link from 'next/link';

interface FooterProps {
  currentPage?: 'home' | 'teachers' | 'blog' | 'privacy' | 'cookies' | 'other';
}

export default function Footer({ currentPage = 'other' }: FooterProps) {
  return (
    <footer className="mt-12 py-8 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Cayman Yoga</h3>
            <p className="text-sm text-gray-600">Connecting wellness seekers with certified yoga instructors</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className={currentPage === 'home' ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/teachers"
                  className={currentPage === 'teachers' ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}
                >
                  Teachers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={currentPage === 'blog' ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className={currentPage === 'privacy' ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className={currentPage === 'cookies' ? 'text-teal-600 font-medium' : 'text-gray-600 hover:text-teal-600'}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm pt-6 border-t border-gray-200">
          <p>© 2024 Cayman Yoga. Connecting wellness seekers with certified yoga instructors.</p>
        </div>
      </div>
    </footer>
  );
}
