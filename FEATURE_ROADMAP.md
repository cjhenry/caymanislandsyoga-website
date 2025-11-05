# Cayman Islands Yoga Website - Feature Roadmap

## Current State Summary

**Implemented:**
- Landing page with hero, features, FAQ, SEO optimization
- Teachers directory (10 instructors with profiles)
- Blog (6 posts with individual post pages)
- Cookie consent banner
- Sitemap & robots.txt for SEO
- JSON-LD structured data for AEO

**Non-functional placeholders:**
- Search bar on home page
- Yoga styles filter buttons
- "List Your Classes" teacher registration
- Newsletter subscription
- Footer resource links

---

## Feature Roadmap - Prioritized

### Phase 1: Core Functionality (High Priority - MVP Enhancement)

#### 1.1 Search & Filter System
**Priority:** 🔴 Critical
**Estimated Effort:** Medium
**Business Value:** High - Improves user experience, helps users find teachers faster

**Features:**
- Implement functional search bar (teacher name, style, location)
- Add filter functionality for yoga styles on home page
- Teacher directory filtering:
  - By yoga style (Vinyasa, Hatha, Hot Yoga, etc.)
  - By location (Seven Mile Beach, George Town, etc.)
  - By experience level (beginner-friendly, advanced, etc.)
- Clear filter/reset functionality
- URL query parameters for shareable filtered views
- Mobile-friendly filter interface

**Technical Approach:**
- Client-side filtering with React state management
- URL search params for filter persistence
- Debounced search input for performance

---

#### 1.2 Individual Teacher Profile Pages
**Priority:** 🔴 Critical
**Estimated Effort:** Medium
**Business Value:** High - Detailed teacher info drives booking decisions

**Features:**
- Dynamic route: `/teachers/[slug]`
- Enhanced teacher profiles including:
  - Full bio & philosophy
  - High-quality photos/gallery
  - Certifications & credentials
  - Class schedule & availability
  - Contact information
  - Social media links
  - Student testimonials section (placeholder for future reviews)
  - Location map integration
  - "Book a Class" CTA button
- Back-navigation to directory
- SEO optimization with unique meta tags per teacher
- JSON-LD Person/LocalBusiness schema

**Data Structure:**
- Extract teacher data to JSON/TypeScript data file
- Add slug field for URL-friendly names
- Include additional fields (phone, email, social links, schedule)

---

#### 1.3 Class Schedule & Calendar
**Priority:** 🔴 Critical
**Estimated Effort:** High
**Business Value:** Very High - Essential for bookings

**Features:**
- New page: `/schedule` or `/classes`
- Weekly class calendar view
- Filter by:
  - Yoga style
  - Teacher
  - Location/studio
  - Time of day (morning, afternoon, evening)
  - Day of week
- Class details:
  - Teacher name (linked to profile)
  - Style & level
  - Duration
  - Location/studio
  - Price
  - Available spots
  - Description
- Mobile-responsive calendar interface
- "Add to Calendar" functionality (Google Cal, iCal)
- Integration with teacher profiles

**Technical Approach:**
- Use a React calendar library (react-big-calendar, FullCalendar)
- Create classes data structure (JSON or later database)
- Timezone handling (Cayman Islands time)

---

### Phase 2: Booking & Revenue Generation (High Priority - Monetization)

#### 2.1 Online Booking System
**Priority:** 🟠 High
**Estimated Effort:** High
**Business Value:** Very High - Direct revenue generation

**Features:**
- Book individual classes or class packages
- User flow:
  1. Select class from schedule
  2. Review class details
  3. Enter student information (name, email, phone)
  4. Select payment method
  5. Receive confirmation
- Booking confirmation page
- Email confirmations (with calendar attachment)
- Booking management:
  - View upcoming bookings
  - Cancel/reschedule (with policy)
  - Waitlist for full classes
- Integration with teacher schedules (reduce available spots)

**Technical Approach:**
- Database for bookings (consider Vercel Postgres, Supabase, or Firebase)
- Email service integration (SendGrid, Resend, or AWS SES)
- Session storage for booking flow
- Form validation with proper error handling

---

#### 2.2 Payment Integration
**Priority:** 🟠 High
**Estimated Effort:** High
**Business Value:** Very High - Required for online bookings

**Features:**
- Stripe integration (recommended for Cayman Islands)
- Payment options:
  - Single class purchase
  - Class packages (5-class, 10-class bundles)
  - Monthly memberships
  - Drop-in rates
- Secure payment processing
- Payment confirmation & receipts
- Refund handling
- Currency: Cayman Islands Dollar (KYD) with USD alternative

**Technical Approach:**
- Stripe Checkout or Stripe Elements
- Webhook handling for payment events
- PCI compliance (handled by Stripe)
- Server-side payment verification

---

#### 2.3 Class Packages & Memberships
**Priority:** 🟡 Medium
**Estimated Effort:** Medium
**Business Value:** High - Increases customer lifetime value

**Features:**
- Package types:
  - Single class ($20-30)
  - 5-class pack ($90-120, 10% discount)
  - 10-class pack ($160-200, 20% discount)
  - Monthly unlimited ($150-200)
- Package management system:
  - Track remaining classes
  - Expiration dates (e.g., 3 months)
  - Usage history
- Member dashboard:
  - View active packages
  - Class credits remaining
  - Booking history

**Technical Approach:**
- Database schema for packages & credits
- Automated expiration handling
- Credit deduction on booking

---

### Phase 3: Teacher & Studio Tools (Medium Priority - Platform Growth)

#### 3.1 Teacher Registration & Onboarding
**Priority:** 🟡 Medium
**Estimated Effort:** High
**Business Value:** High - Grows teacher network

**Features:**
- "List Your Classes" form implementation:
  - Teacher information (name, bio, certifications)
  - Photo upload
  - Yoga styles & specialties
  - Experience level
  - Location & coverage area
  - Contact information
  - Website/social links
  - Availability & pricing
- Application review process (admin approval)
- Welcome email with next steps
- Teacher onboarding guide

**Technical Approach:**
- Form with file upload (profile photo)
- Image optimization (Next.js Image)
- Email notifications to admin
- Temporary storage until approved

---

#### 3.2 Teacher Dashboard
**Priority:** 🟡 Medium
**Estimated Effort:** High
**Business Value:** Medium - Teacher retention & management

**Features:**
- Teacher authentication (login system)
- Dashboard sections:
  - Profile management (edit bio, photos, info)
  - Class schedule management:
    - Add/edit/cancel classes
    - Set recurring schedule
    - Adjust pricing
  - Booking overview:
    - Upcoming classes
    - Student list per class
    - Total bookings & revenue
  - Calendar integration
  - Student communication tools
- Analytics:
  - Total students taught
  - Popular class times
  - Revenue tracking

**Technical Approach:**
- Authentication system (NextAuth.js, Clerk, or Supabase Auth)
- Role-based access control (teacher, admin, student)
- Protected routes
- Database queries for teacher-specific data

---

#### 3.3 Studio/Multi-Teacher Accounts
**Priority:** 🟢 Low-Medium
**Estimated Effort:** Medium
**Business Value:** Medium - Attracts studios

**Features:**
- Studio account type with multiple teachers
- Studio profile page:
  - Studio name, description, amenities
  - Location & contact info
  - Photos/gallery
  - List of instructors at studio
  - Full studio schedule
- Studio dashboard for managing multiple teachers

---

### Phase 4: Community & Engagement (Medium Priority - Retention)

#### 4.1 Newsletter System
**Priority:** 🟡 Medium
**Estimated Effort:** Low-Medium
**Business Value:** Medium - Marketing & retention

**Features:**
- Functional newsletter signup (currently placeholder)
- Email collection & storage
- Integration with email service (Mailchimp, ConvertKit, or Resend)
- Welcome email automation
- Newsletter content ideas:
  - New teacher announcements
  - Workshop/special event notifications
  - Blog post highlights
  - Seasonal wellness tips
  - Special offers/promotions

**Technical Approach:**
- API route for email submission
- Email service API integration
- Database or third-party storage
- Double opt-in confirmation

---

#### 4.2 Student Reviews & Ratings
**Priority:** 🟡 Medium
**Estimated Effort:** Medium
**Business Value:** Medium-High - Social proof

**Note:** Reviews were recently removed (commit eec4bfe), so validate if/when to reintroduce

**Features:**
- Post-class review prompts
- Rating system (1-5 stars)
- Written reviews with moderation
- Display on teacher profiles
- Aggregate ratings in directory
- Response mechanism for teachers
- Report inappropriate reviews

**Technical Approach:**
- Database schema for reviews
- Moderation queue (manual or automated)
- Email trigger after class completion
- Spam/abuse prevention

---

#### 4.3 Student Profiles & Accounts
**Priority:** 🟢 Low-Medium
**Estimated Effort:** High
**Business Value:** Medium - Personalization & retention

**Features:**
- Student registration & login
- Student dashboard:
  - Upcoming classes
  - Booking history
  - Saved favorite teachers
  - Class packages & credits
  - Payment methods
  - Profile settings
- Personalized recommendations
- Saved preferences (yoga styles, locations)

**Technical Approach:**
- Same auth system as teachers (shared)
- User role differentiation
- Protected student routes

---

#### 4.4 Events & Workshops
**Priority:** 🟢 Low-Medium
**Estimated Effort:** Medium
**Business Value:** Medium - Additional revenue & community

**Features:**
- New page: `/events` or `/workshops`
- Special event listings:
  - Yoga workshops
  - Teacher trainings
  - Retreats
  - Beach yoga events
  - Wellness festivals
- Event details:
  - Date, time, duration
  - Location
  - Instructor(s)
  - Price & registration
  - Event description & benefits
- Event booking system (similar to classes)
- Calendar integration

---

### Phase 5: Content & SEO Expansion (Ongoing - Traffic Growth)

#### 5.1 Resource Pages
**Priority:** 🟢 Low-Medium
**Estimated Effort:** Low-Medium
**Business Value:** Medium - SEO & education

**Features:**
- Complete footer resource links (currently #):
  - **Yoga Styles Guide** (`/yoga-styles`)
    - Detailed pages for each style (Hatha, Vinyasa, Yin, etc.)
    - Benefits, typical class structure, who it's for
    - Find teachers specializing in each style
  - **Finding a Teacher Guide** (`/guide/finding-teacher`)
    - How to choose the right instructor
    - Questions to ask
    - What to expect in first class
  - **Wellness Tips** (`/wellness`)
    - Island wellness blog/resource hub
    - Nutrition, meditation, lifestyle tips
- Internal linking to teachers & blog posts
- SEO optimization for each guide page

---

#### 5.2 Location Pages
**Priority:** 🟢 Low
**Estimated Effort:** Medium
**Business Value:** Medium - Local SEO

**Features:**
- Location-specific pages:
  - `/locations/seven-mile-beach`
  - `/locations/george-town`
  - `/locations/bodden-town`
  - `/locations/east-end`
  - `/locations/cayman-brac`
- Each page includes:
  - Teachers in that area
  - Classes available
  - Studio/venue information
  - Local wellness scene description
  - Map integration
- SEO optimization for "yoga in [location]" searches

---

#### 5.3 Expanded Blog
**Priority:** 🟢 Low
**Estimated Effort:** Ongoing
**Business Value:** Medium - SEO & authority

**Features:**
- Increase blog post frequency (current: 6 posts)
- Content ideas:
  - Teacher interviews/spotlights
  - Student success stories
  - Pose tutorials with photos
  - Cayman wellness scene coverage
  - Seasonal yoga practices
  - Mental health & yoga
  - Yoga for specific needs (pregnancy, seniors, athletes)
- Blog categories/tags
- Search functionality within blog
- Author pages (for guest contributors)
- Social sharing buttons

---

### Phase 6: Advanced Features (Low Priority - Future Innovation)

#### 6.1 Virtual/Online Classes
**Priority:** 🟢 Low
**Estimated Effort:** Very High
**Business Value:** Medium - Expands market beyond Cayman

**Features:**
- Live streaming integration (Zoom, YouTube Live)
- On-demand video library
- Virtual class bookings
- Subscription model for online access
- Hybrid in-person + virtual options

---

#### 6.2 Mobile App (Native or PWA)
**Priority:** 🟢 Low
**Estimated Effort:** Very High
**Business Value:** Medium - User convenience

**Features:**
- Progressive Web App (PWA) capabilities:
  - Install to home screen
  - Offline functionality
  - Push notifications for class reminders
  - App-like experience
- Or native mobile app (iOS/Android)

---

#### 6.3 Marketplace Features
**Priority:** 🟢 Low
**Estimated Effort:** High
**Business Value:** Low-Medium - Diversified revenue

**Features:**
- Yoga equipment shop
- Teacher merchandise
- Affiliate products (mats, blocks, clothing)
- Gift cards/vouchers

---

#### 6.4 Social Features
**Priority:** 🟢 Low
**Estimated Effort:** High
**Business Value:** Low-Medium - Community building

**Features:**
- Student community forum
- Class check-ins & achievements
- Social sharing of progress
- Challenge/goal tracking
- Student-to-student messaging

---

## Implementation Priority Summary

### Immediate Next Steps (Phase 1):
1. ✅ **Search & Filter System** - Make existing UI functional
2. ✅ **Individual Teacher Profiles** - Essential for teacher showcase
3. ✅ **Class Schedule/Calendar** - Required before booking system

### Critical for Monetization (Phase 2):
4. ✅ **Online Booking System** - Core revenue driver
5. ✅ **Payment Integration** - Required for bookings
6. ✅ **Class Packages & Memberships** - Increases revenue per customer

### Platform Growth (Phase 3):
7. ✅ **Teacher Registration** - Grow teacher network
8. ✅ **Teacher Dashboard** - Teacher retention & autonomy

### Engagement & Content (Phases 4-5):
9. ⚠️ **Newsletter System** - Quick win for marketing
10. ⚠️ **Reviews & Ratings** - Social proof (if reintroducing)
11. ⚠️ **Resource Pages** - Complete site content, SEO benefits

### Long-term Innovation (Phase 6):
12. 🔮 **Virtual Classes** - Market expansion
13. 🔮 **Mobile App/PWA** - Enhanced UX

---

## Technical Considerations

### Database Selection
**Needed for:** Bookings, user accounts, reviews, class schedules

**Options:**
- **Vercel Postgres** - Seamless Vercel integration
- **Supabase** - PostgreSQL + Auth + Storage
- **Firebase** - NoSQL, real-time capabilities
- **PlanetScale** - Serverless MySQL

**Recommendation:** Supabase (provides database + auth + storage in one)

### Authentication
**Options:**
- **NextAuth.js** - Most popular Next.js auth
- **Clerk** - Managed auth with beautiful UI
- **Supabase Auth** - If using Supabase for database

**Recommendation:** Clerk or Supabase Auth (less setup than NextAuth)

### Email Service
**Needed for:** Confirmations, newsletters, notifications

**Options:**
- **Resend** - Modern, developer-friendly (recommended for Next.js)
- **SendGrid** - Enterprise-grade
- **AWS SES** - Cost-effective at scale
- **Mailchimp** - For newsletters specifically

### Payment Processing
**Recommendation:** Stripe (best for Cayman Islands, supports KYD)

---

## Success Metrics

### Phase 1 Goals:
- 50%+ of visitors use search/filter
- 30%+ click-through to teacher profiles
- Average 2+ minutes on profile pages

### Phase 2 Goals:
- 10%+ conversion rate (visitor to booking)
- $5,000+ monthly revenue within 3 months
- 70%+ payment success rate

### Phase 3 Goals:
- 5+ new teachers onboarded per month
- 80%+ teacher retention after 6 months

### Phase 4-5 Goals:
- 500+ newsletter subscribers in 3 months
- 100+ new blog visitors per week
- 4.5+ average teacher rating

---

## Budget Estimates (Monthly Operational Costs)

### Phase 1 (Search & Profiles):
- **Hosting:** $0 (Vercel free tier)
- **Total:** $0/month

### Phase 2 (Booking & Payments):
- **Hosting:** $20 (Vercel Pro for DB)
- **Database:** $25 (Supabase Pro) or included in Vercel
- **Email:** $10 (Resend - 50k emails)
- **Payment Processing:** 2.9% + $0.30 per transaction (Stripe)
- **Total:** ~$55/month + transaction fees

### Phase 3-4 (Full Platform):
- **Hosting:** $20
- **Database:** $25
- **Email:** $20 (100k emails)
- **Payment:** 2.9% + $0.30 per transaction
- **Auth:** $25 (Clerk Pro) or $0 (if using Supabase)
- **Total:** ~$90/month + transaction fees

### Phase 6 (Advanced):
- Add video hosting: $50-100/month
- Add CDN costs for video: $20-50/month
- Total could reach $200-300/month

---

## Open Questions for Stakeholders

1. **Booking Model:** Should teachers handle bookings directly, or centralize through the platform?
2. **Revenue Share:** Will platform take commission on bookings, or charge teachers a listing fee?
3. **Class Ownership:** Who manages class schedules - teachers independently or studio/platform admin?
4. **Review Policy:** Given recent removal, what's the plan for reintroducing reviews (if at all)?
5. **Target Audience:** Focus on tourists, locals, or both? (Affects pricing, content strategy)
6. **Immediate Revenue:** Is immediate monetization critical, or building user base first?
7. **Content Strategy:** Who will write ongoing blog content and resource pages?

---

## Recommended Next Sprint

### Sprint 1 (2 weeks): Search & Filter Foundation
- [ ] Extract teacher data to structured JSON file
- [ ] Implement search bar functionality (name, style, location)
- [ ] Add filter buttons logic on home page
- [ ] Implement teacher directory filtering UI
- [ ] Add URL query parameters for filters
- [ ] Mobile responsive filter interface
- [ ] Testing across devices

**Outcome:** Functional search that improves user experience and validates technical approach

### Sprint 2 (2 weeks): Teacher Profile Pages
- [ ] Create `/teachers/[slug]` dynamic route
- [ ] Design enhanced profile layout
- [ ] Add slug generation for all teachers
- [ ] Implement profile page with full details
- [ ] Add SEO metadata per teacher
- [ ] JSON-LD schema for profiles
- [ ] Link from directory to profiles

**Outcome:** Complete teacher showcase ready for traffic

### Sprint 3 (3 weeks): Class Schedule System
- [ ] Create `/schedule` or `/classes` page
- [ ] Design class data structure
- [ ] Implement calendar component
- [ ] Add sample class data for all teachers
- [ ] Implement schedule filtering
- [ ] Mobile responsive calendar
- [ ] "Add to Calendar" functionality

**Outcome:** Full schedule visibility, foundation for booking system

---

*This roadmap is a living document and should be updated as features are completed, priorities shift, or new opportunities emerge.*
