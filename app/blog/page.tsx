import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoga Blog - Tips, Guides & Wellness",
  description: "Explore yoga tips, wellness guides, and insights from certified instructors in the Cayman Islands. Learn about different yoga styles, benefits, and local yoga culture.",
};

// Sample blog posts - in production would come from CMS or database
const blogPosts = [
  {
    slug: "best-yoga-styles-for-beginners",
    title: "Best Yoga Styles for Beginners in Cayman",
    excerpt: "Starting your yoga journey in the Cayman Islands? Learn which yoga styles are perfect for beginners and where to find the best classes.",
    date: "2024-11-01",
    readTime: "5 min read",
    category: "Beginner's Guide",
    image: "🧘‍♀️"
  },
  {
    slug: "benefits-of-beach-yoga",
    title: "The Unique Benefits of Beach Yoga in Grand Cayman",
    excerpt: "Discover why practicing yoga on Seven Mile Beach offers unique physical and mental health benefits you won't get in a studio.",
    date: "2024-10-28",
    readTime: "4 min read",
    category: "Wellness",
    image: "🏖️"
  },
  {
    slug: "hot-yoga-vs-regular-yoga",
    title: "Hot Yoga vs Regular Yoga: Which is Right for You?",
    excerpt: "Understanding the differences between hot yoga and traditional yoga practices, and how Cayman's climate affects your practice.",
    date: "2024-10-25",
    readTime: "6 min read",
    category: "Style Guide",
    image: "🔥"
  },
  {
    slug: "yoga-for-stress-relief-cayman",
    title: "Using Yoga for Stress Relief in Island Life",
    excerpt: "Practical yoga techniques and breathing exercises to manage stress while living or vacationing in the Cayman Islands.",
    date: "2024-10-20",
    readTime: "7 min read",
    category: "Wellness",
    image: "🌊"
  },
  {
    slug: "finding-right-yoga-teacher",
    title: "How to Find the Right Yoga Teacher for Your Goals",
    excerpt: "Essential tips for choosing a yoga instructor in Cayman that matches your experience level, goals, and preferred style.",
    date: "2024-10-15",
    readTime: "5 min read",
    category: "Tips",
    image: "🎯"
  },
  {
    slug: "morning-yoga-routine-island-life",
    title: "Perfect Morning Yoga Routine for Island Living",
    excerpt: "Start your day right with this energizing 20-minute yoga sequence designed for the tropical Cayman lifestyle.",
    date: "2024-10-10",
    readTime: "8 min read",
    category: "Practice",
    image: "🌅"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
          Cayman Yoga
        </Link>
        <div className="flex gap-6">
          <Link href="/teachers" className="text-teal-700 hover:text-teal-900 font-medium">
            Teachers
          </Link>
          <Link href="/" className="text-teal-700 hover:text-teal-900 font-medium">
            Home
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="px-6 py-16 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Yoga Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tips, guides, and insights from certified yoga instructors in the Cayman Islands
        </p>
      </header>

      {/* Blog Posts Grid */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
            >
              {/* Post Image/Icon */}
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-8 text-center">
                <div className="text-6xl">{post.image}</div>
              </div>

              {/* Post Content */}
              <div className="p-6 space-y-3">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                  {post.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm pt-2 group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest yoga tips, teacher profiles, and wellness insights delivered to your inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border-2 border-teal-200 rounded-lg focus:outline-none focus:border-teal-500"
            />
            <button className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                <li><Link href="/" className="text-gray-600 hover:text-teal-600">Home</Link></li>
                <li><Link href="/teachers" className="text-gray-600 hover:text-teal-600">Teachers</Link></li>
                <li><Link href="/blog" className="text-teal-600 font-medium">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Yoga Styles Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Finding a Teacher</a></li>
                <li><a href="#" className="text-gray-600 hover:text-teal-600">Wellness Tips</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm pt-6 border-t border-gray-200">
            <p>© 2024 Cayman Yoga. Connecting wellness seekers with certified yoga instructors.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
