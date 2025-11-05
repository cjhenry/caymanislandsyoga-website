import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

// Sample blog post data - in production would come from CMS or database
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}> = {
  "best-yoga-styles-for-beginners": {
    title: "Best Yoga Styles for Beginners in Cayman",
    excerpt: "Starting your yoga journey in the Cayman Islands? Learn which yoga styles are perfect for beginners and where to find the best classes.",
    date: "2024-11-01",
    readTime: "5 min read",
    category: "Beginner's Guide",
    image: "🧘‍♀️",
    content: (
      <>
        <p>Starting your yoga journey can feel overwhelming with so many different styles to choose from. In the Cayman Islands, you'll find certified instructors offering a variety of yoga practices suitable for all levels.</p>

        <h2>Hatha Yoga - The Foundation</h2>
        <p>Hatha yoga is perfect for beginners as it focuses on basic poses and breathing techniques. Classes move at a slower pace, giving you time to understand proper alignment and build confidence. Many Grand Cayman instructors offer Hatha classes specifically designed for newcomers.</p>

        <h2>Vinyasa Flow - Building Strength</h2>
        <p>Once you're comfortable with basic poses, Vinyasa offers a more dynamic practice. This style links breath with movement, creating flowing sequences. Several teachers in Seven Mile Beach area specialize in beginner-friendly Vinyasa.</p>

        <h2>Restorative Yoga - Deep Relaxation</h2>
        <p>For those seeking stress relief and relaxation, restorative yoga uses props to support the body in passive poses. This gentle practice is excellent for beginners and particularly beneficial in the island's warm climate.</p>

        <h2>Finding Your Teacher</h2>
        <p>Browse our <Link href="/teachers" className="text-teal-600 hover:underline">teacher directory</Link> to find certified instructors offering beginner classes across the Cayman Islands. Look for teachers who offer trial classes or introductory packages.</p>
      </>
    )
  },
  "benefits-of-beach-yoga": {
    title: "The Unique Benefits of Beach Yoga in Grand Cayman",
    excerpt: "Discover why practicing yoga on Seven Mile Beach offers unique physical and mental health benefits you won't get in a studio.",
    date: "2024-10-28",
    readTime: "4 min read",
    category: "Wellness",
    image: "🏖️",
    content: (
      <>
        <p>Seven Mile Beach and other stunning Cayman beaches provide the perfect backdrop for yoga practice. But beach yoga offers more than just beautiful views - it brings unique physical and mental benefits.</p>

        <h2>Natural Vitamin D</h2>
        <p>Practicing yoga outdoors in Cayman's sunshine helps your body produce vitamin D, essential for bone health, immune function, and mood regulation. Early morning or late afternoon beach sessions provide optimal sun exposure.</p>

        <h2>Uneven Surface Benefits</h2>
        <p>The sand creates an unstable surface that engages more muscles, particularly in your core and feet. This natural challenge improves balance and strengthens stabilizer muscles you might not work in a studio.</p>

        <h2>Ocean Sounds and Mindfulness</h2>
        <p>The rhythmic sound of waves naturally enhances meditation and breathing exercises. This natural soundtrack helps deepen your practice and reduce stress more effectively than indoor classes.</p>

        <h2>Island Energy</h2>
        <p>There's something special about practicing yoga while feeling ocean breezes and hearing tropical birds. Many practitioners report deeper relaxation and connection with nature during beach sessions.</p>

        <h2>Find Beach Yoga Classes</h2>
        <p>Several instructors in our <Link href="/teachers" className="text-teal-600 hover:underline">directory</Link> offer beach yoga sessions across Grand Cayman, Cayman Brac, and Little Cayman.</p>
      </>
    )
  },
  "hot-yoga-vs-regular-yoga": {
    title: "Hot Yoga vs Regular Yoga: Which is Right for You?",
    excerpt: "Understanding the differences between hot yoga and traditional yoga practices, and how Cayman's climate affects your practice.",
    date: "2024-10-25",
    readTime: "6 min read",
    category: "Style Guide",
    image: "🔥",
    content: (
      <>
        <p>Hot yoga has gained popularity worldwide, and the Cayman Islands offers several studios with heated rooms. But is hot yoga better than traditional yoga, or just different?</p>

        <h2>What is Hot Yoga?</h2>
        <p>Hot yoga is practiced in rooms heated to 95-105°F with controlled humidity. The most famous style is Bikram, but many instructors offer various heated yoga practices. The heat is designed to increase flexibility and promote detoxification through sweating.</p>

        <h2>Benefits of Hot Yoga</h2>
        <ul>
          <li>Increased flexibility due to warm muscles</li>
          <li>More intense cardiovascular workout</li>
          <li>Deep detoxification through sweating</li>
          <li>Potential for increased calorie burn</li>
        </ul>

        <h2>Traditional Yoga Benefits</h2>
        <ul>
          <li>Lower risk of dehydration and heat exhaustion</li>
          <li>Better for beginners building foundations</li>
          <li>Focus on alignment without heat distraction</li>
          <li>Suitable for all ages and health conditions</li>
        </ul>

        <h2>Cayman Climate Considerations</h2>
        <p>Cayman's tropical climate already provides warmth and humidity. Some practitioners find outdoor or naturally-ventilated yoga more comfortable than additional heating. Beach yoga in Cayman offers many hot yoga benefits naturally.</p>

        <h2>Which Should You Choose?</h2>
        <p>Try both! Most experienced practitioners incorporate both heated and traditional yoga. Check our <Link href="/teachers" className="text-teal-600 hover:underline">teacher listings</Link> to find instructors offering both styles.</p>
      </>
    )
  },
  "yoga-for-stress-relief-cayman": {
    title: "Using Yoga for Stress Relief in Island Life",
    excerpt: "Practical yoga techniques and breathing exercises to manage stress while living or vacationing in the Cayman Islands.",
    date: "2024-10-20",
    readTime: "7 min read",
    category: "Wellness",
    image: "🌊",
    content: (
      <>
        <p>Island life may seem stress-free, but work pressures, tropical storms, and daily challenges affect everyone. Yoga offers powerful tools for stress management that work particularly well in Cayman's environment.</p>

        <h2>Pranayama - Breath Control</h2>
        <p>Breathing exercises are the fastest way to calm your nervous system. Try this simple technique anywhere: breathe in for 4 counts, hold for 4, exhale for 6, pause for 2. Repeat for 5 minutes.</p>

        <h2>Beach Meditation Practice</h2>
        <p>Cayman's beaches provide ideal meditation spots. Sit facing the ocean, close your eyes, and synchronize your breath with the waves. This practice combines yoga meditation with nature therapy.</p>

        <h2>Yin Yoga for Deep Release</h2>
        <p>Yin yoga involves holding gentle poses for 3-5 minutes, allowing deep tissue release. This practice is especially effective for stress stored in the body. Many Cayman instructors specialize in this restorative style.</p>

        <h2>Morning Routine for Calm Days</h2>
        <p>Start each day with 10 minutes of gentle stretching and breathing. Sun salutations at sunrise are popular in Cayman - you can practice on your patio or at the beach.</p>

        <h2>Finding Support</h2>
        <p>Working with an experienced instructor helps develop a personalized stress-management practice. Browse our <Link href="/teachers" className="text-teal-600 hover:underline">directory</Link> for teachers specializing in therapeutic yoga.</p>
      </>
    )
  },
  "finding-right-yoga-teacher": {
    title: "How to Find the Right Yoga Teacher for Your Goals",
    excerpt: "Essential tips for choosing a yoga instructor in Cayman that matches your experience level, goals, and preferred style.",
    date: "2024-10-15",
    readTime: "5 min read",
    category: "Tips",
    image: "🎯",
    content: (
      <>
        <p>The right yoga teacher can transform your practice, while the wrong match might leave you frustrated. Here's how to find your ideal instructor in the Cayman Islands.</p>

        <h2>Consider Your Goals</h2>
        <p>Are you seeking flexibility, strength, stress relief, or spiritual growth? Different teachers emphasize different aspects. Be clear about your primary goals when researching instructors.</p>

        <h2>Check Credentials</h2>
        <p>Look for teachers with RYT (Registered Yoga Teacher) certification, ideally 200-hour minimum. Many Cayman instructors have 500-hour certifications or specialized training in specific styles.</p>

        <h2>Experience Level Matching</h2>
        <p>Beginners need patient teachers who emphasize fundamentals and proper alignment. Advanced practitioners may want teachers who challenge them with complex sequences or specialized techniques.</p>

        <h2>Try Multiple Teachers</h2>
        <p>Attend trial classes with several instructors before committing. Each teacher has a unique style - what works for others might not work for you. Most Cayman yoga teachers offer introductory rates.</p>

        <h2>Location and Schedule</h2>
        <p>Consider practical factors like class location (studio, beach, or home visits) and timing. Consistency matters more than perfection - choose a teacher whose schedule fits yours.</p>

        <h2>Browse Our Directory</h2>
        <p>Our <Link href="/teachers" className="text-teal-600 hover:underline">teacher directory</Link> includes detailed profiles, specialties, and student reviews to help you find your perfect match.</p>
      </>
    )
  },
  "morning-yoga-routine-island-life": {
    title: "Perfect Morning Yoga Routine for Island Living",
    excerpt: "Start your day right with this energizing 20-minute yoga sequence designed for the tropical Cayman lifestyle.",
    date: "2024-10-10",
    readTime: "8 min read",
    category: "Practice",
    image: "🌅",
    content: (
      <>
        <p>Morning yoga sets a positive tone for your entire day. This 20-minute sequence is designed specifically for Cayman's tropical climate and island lifestyle.</p>

        <h2>Why Morning Practice?</h2>
        <p>Practicing before the day's heat builds is ideal in Cayman's climate. Morning yoga boosts energy, improves focus, and helps you feel grounded before work or beach activities.</p>

        <h2>The 20-Minute Sequence</h2>

        <h3>1. Centering (2 minutes)</h3>
        <p>Sit comfortably, close your eyes, and take 10 deep breaths. Set an intention for your day.</p>

        <h3>2. Cat-Cow Stretches (2 minutes)</h3>
        <p>Gentle spine warmup to wake your back. Perfect after sleeping in Cayman's humid nights.</p>

        <h3>3. Sun Salutations (5 minutes)</h3>
        <p>Complete 5 rounds of Surya Namaskar A. This traditional sequence energizes your whole body.</p>

        <h3>4. Standing Poses (5 minutes)</h3>
        <p>Warrior I, Warrior II, and Triangle pose build strength and stability.</p>

        <h3>5. Forward Folds (3 minutes)</h3>
        <p>Standing and seated forward bends calm the nervous system and stretch hamstrings.</p>

        <h3>6. Savasana (3 minutes)</h3>
        <p>Final relaxation integrates the practice. Use this time to visualize your ideal day.</p>

        <h2>Where to Practice</h2>
        <p>Try your patio, a quiet beach spot, or a shaded garden. Many Cayman residents practice outdoors to enjoy morning breezes and bird songs.</p>

        <h2>Need Guidance?</h2>
        <p>Consider private sessions with a local instructor to perfect your technique. Check our <Link href="/teachers" className="text-teal-600 hover:underline">teacher directory</Link> for morning class specialists.</p>
      </>
    )
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found"
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": "Cayman Yoga"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Cayman Yoga"
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-blue-50">
        {/* Navigation */}
        <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <Link href="/" className="text-2xl font-bold text-teal-900 hover:text-teal-700 transition-colors">
            Cayman Yoga
          </Link>
          <div className="flex gap-6">
            <Link href="/blog" className="text-teal-700 hover:text-teal-900 font-medium">
              Blog
            </Link>
            <Link href="/teachers" className="text-teal-700 hover:text-teal-900 font-medium">
              Teachers
            </Link>
          </div>
        </nav>

        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-teal-600 prose-strong:text-gray-900 prose-ul:text-gray-700">
            {post.content}
          </div>

          {/* Related CTA */}
          <div className="mt-12 p-6 bg-teal-50 rounded-lg border-2 border-teal-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Start Your Yoga Journey?
            </h3>
            <p className="text-gray-700 mb-4">
              Browse our directory of certified yoga teachers across the Cayman Islands
            </p>
            <Link
              href="/teachers"
              className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
            >
              Find a Teacher
            </Link>
          </div>
        </article>

        <Footer currentPage="blog" />
      </div>
    </>
  );
}
