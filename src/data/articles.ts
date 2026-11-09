import { Article } from '../types';

export const ARTICLES: Article[] = [
  // ---------------------------------------------------------------------------
  // 1. HEALTH & WELLNESS (MAIN FEATURED ARTICLE)
  // ---------------------------------------------------------------------------
  {
    id: 'art-001',
    slug: 'small-daily-habits-that-can-transform-your-life',
    title: 'Small Daily Habits That Can Transform Your Life',
    category: 'health',
    excerpt: 'Lasting change rarely happens overnight. Discover how small, intentional daily habits can help you build a healthier and more fulfilling lifestyle.',
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Quiet morning tea and notebook resting on a wooden table in morning sunlight',
    authorId: 'kenti',
    publishedAt: '2026-10-18T08:00:00Z',
    updatedAt: '2026-11-02T10:15:00Z',
    readingTime: 6,
    tags: ['Mindfulness', 'Daily Habits', 'Morning Rituals', 'Wellness'],
    featured: true,
    categoryFeatured: true,
    relatedArticleIds: ['art-002', 'art-003', 'art-009'],
    blocks: [
      {
        type: 'paragraph',
        text: 'We live in a culture obsessed with monumental breakthroughs. We celebrate sudden transformations, overnight fitness triumphs, and radical lifestyle overhauls. Yet, if we inspect the lives of those who sustain true peace and physical vigor over decades, we rarely find abrupt revolutions. Instead, we discover an accumulation of quiet, unassuming micro-decisions repeated with patient devotion.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Architecture of the Micro-Moment',
        id: 'the-architecture-of-the-micro-moment',
      },
      {
        type: 'paragraph',
        text: 'A habit is not merely an action; it is a vote of confidence in the person you wish to become. When you take two minutes in the morning to breathe with intention before reaching for a glowing smartphone, you declare that your nervous system matters more than the digital noise of the outside world.',
      },
      {
        type: 'callout',
        title: 'Core Philosophy: The 1% Compounding Rule',
        text: 'Improving by just one percent each day appears imperceptible in the moment. Over the course of 365 days, however, mathematically that daily one percent compound yields a result nearly thirty-seven times greater. Small rituals are the compound interest of self-development.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Four Anchor Habits for Sustainable Vitality',
        id: 'four-anchor-habits-for-sustainable-vitality',
      },
      {
        type: 'paragraph',
        text: 'Rather than trying to reconstruct your entire schedule, consider weaving one or two grounding anchors into existing transitions throughout the day:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Hydration Before Stimulation: Drink a tall glass of room-temperature water with lemon before your first cup of coffee or tea.',
          'Natural Daylight Exposure: Step outside or stand beside an open window for five to ten minutes within an hour of waking to calibrate your circadian clock.',
          'Midday Posture & Breath Reset: Set a gentle hourly cue to unclench your jaw, soften your shoulders, and inhale deeply for four seconds, pausing for four, and releasing for six.',
          'The Evening Unplug Ritual: Create a physical charging station outside your bedroom thirty minutes before turning off the bedside lamp.',
        ],
      },
      {
        type: 'quote',
        text: 'We do not rise to the level of our grandest goals; we settle to the level of our daily systems. Tend to the systems with tenderness.',
        attribution: 'Kenti Fam, Living Well Journal',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Overcoming the Urge to Overcomplicate',
        id: 'overcoming-the-urge-to-overcomplicate',
      },
      {
        type: 'paragraph',
        text: 'The primary reason people abandon positive routines is friction. When a habit requires thirty minutes of preparation, specialized equipment, or superhuman willpower, it quickly succumbs to fatigue on challenging days. Lower the barrier until resistance vanishes.',
      },
      {
        type: 'paragraph',
        text: 'If reading ten pages feels daunting after a long workday, commit to just one paragraph. If a forty-minute jog feels impossible, put on your shoes and walk around the garden for five minutes. Honor the consistency of the gesture over the magnitude of the output.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Actionable Takeaways for This Week',
        id: 'actionable-takeaways-for-this-week',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Choose exactly one micro-habit from the list above and commit to practicing it for the next seven days.',
          'Anchor it to an existing behavior (e.g., "After I boil the kettle, I will drink my glass of water").',
          'Notice how your nervous system responds without tracking metrics or judging progress.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. HEALTH & WELLNESS
  // ---------------------------------------------------------------------------
  {
    id: 'art-002',
    slug: 'simple-ways-to-make-healthy-eating-a-lifestyle',
    title: 'Simple Ways to Make Healthy Eating a Lifestyle',
    category: 'health',
    excerpt: 'Move away from restrictive diets and toward an intuitive, deeply satisfying relationship with nourishing, seasonal whole foods.',
    coverImage: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Fresh organic greens, vibrant vegetables and grains in artisanal ceramic bowls',
    authorId: 'dr-tariq',
    publishedAt: '2026-10-14T09:30:00Z',
    readingTime: 5,
    tags: ['Nutrition', 'Intuitive Eating', 'Whole Foods', 'Vitality'],
    featured: false,
    categoryFeatured: false,
    relatedArticleIds: ['art-001', 'art-003', 'art-008'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Every few months, popular discourse crowns a new dietary villain and exalts a fresh miracle superfood. Yet humanity has nourished itself sustainably across centuries through simple, intuitive guidelines centered around fresh, minimally processed ingredients, mindful savoring, and communal dining.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Power of the Colorful Plate',
        id: 'the-power-of-the-colorful-plate',
      },
      {
        type: 'paragraph',
        text: 'Instead of obsessing over calorie charts or eliminating entire macronutrient groups, shift your focus toward chromatic abundance. Aim to incorporate three distinct natural colors on your plate at every meal—deep leafy greens, warm root vegetables, and golden grains.',
      },
      {
        type: 'callout',
        title: 'Nutritional Harmony: Whole Foods First',
        text: 'When we eat foods in their unrefined forms—fresh local produce, fiber-rich legumes, nuts, seeds, and lean proteins—our satiety signals operate naturally. We feel fulfilled without counting grams or feeling deprived.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Mindful Eating as a Daily Meditation',
        id: 'mindful-eating-as-a-daily-meditation',
      },
      {
        type: 'paragraph',
        text: 'How you eat is frequently just as consequential as what you eat. Eating while scrolling through notifications or rushing between appointments forces the body into sympathetic dominance, impairing digestive enzyme production and blunting satiety cues.',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Sit down at a table without digital screens.',
          'Take three conscious breaths before taking the first forkful.',
          'Chew thoroughly and notice the textures, aromas, and spices.',
          'Pause midway through your meal to assess your authentic fullness level.',
        ],
      },
      {
        type: 'quote',
        text: 'Food is neither reward nor punishment; it is connection to the earth, to culture, and to the living cellular architecture of our bodies.',
        attribution: 'Tariq Oladipo, Integrative Wellness Contributor',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Stocking a Kitchen for Ease and Joy',
        id: 'stocking-a-kitchen-for-ease-and-joy',
      },
      {
        type: 'paragraph',
        text: 'Keep healthy choices effortlessly accessible. When you return from the market, wash your greens, roast a tray of seasonal vegetables, and boil a pot of grains like brown rice, fonio, or quinoa. Having these foundational components ready turns dinner preparation into an easy, creative assembly.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. HEALTH & WELLNESS
  // ---------------------------------------------------------------------------
  {
    id: 'art-003',
    slug: 'why-rest-is-just-as-important-as-productivity',
    title: 'Why Rest Is Just as Important as Productivity',
    category: 'health',
    excerpt: 'True rest is not a consolation prize for exhaustion. Learn why deliberate restorative stillness is the fertile ground for creativity, longevity, and joy.',
    coverImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Soft linen sheets in serene morning light beside an open book',
    authorId: 'dr-tariq',
    publishedAt: '2026-10-08T11:00:00Z',
    readingTime: 7,
    tags: ['Rest', 'Burnout Prevention', 'Sleep Hygiene', 'Mental Health'],
    featured: false,
    categoryFeatured: false,
    relatedArticleIds: ['art-001', 'art-007', 'art-009'],
    blocks: [
      {
        type: 'paragraph',
        text: 'In our relentless rush toward external output, rest has been relegated to an emergency stop—something we only permit ourselves when our bodies force a shutdown through illness or chronic fatigue. But biological systems require rhythmic oscillation: exertion must be paired with restoration.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Seven Types of Rest You Need',
        id: 'the-seven-types-of-rest-you-need',
      },
      {
        type: 'paragraph',
        text: 'Often we wake from eight hours of sleep still feeling drained. That is because physical sleep alone cannot remedy sensory overload, creative drought, or emotional depletion.',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Physical Rest: Passive sleep and active practices like gentle stretching, restorative yoga, or slow walking.',
          'Mental Rest: Scheduled short breaks during work hours to release cognitive tension and quiet racing thoughts.',
          'Sensory Rest: Dimming bright screens, turning off ambient audio, and embracing quiet intervals.',
          'Creative Rest: Allowing yourself to experience natural beauty, art, or peaceful landscapes without needing to produce anything.',
          'Emotional Rest: Creating space where you can be entirely honest about your feelings without having to appease others.',
          'Social Rest: Spending time with individuals who replenish your spirit rather than draining your social energy.',
          'Spiritual Rest: Connecting to something larger than yourself through prayer, meditation, or community service.',
        ],
      },
      {
        type: 'callout',
        title: 'Clinical Insight on Sleep Hygiene',
        text: 'During deep non-REM sleep, the brain’s glymphatic system clears metabolic waste products that accumulate during waking hours. Sacrificing sleep for productivity actually degrades cognitive precision, memory retention, and emotional balance.',
      },
      {
        type: 'quote',
        text: 'The field that has rested yields a bountiful harvest. You cannot harvest from depleted soil.',
        attribution: 'Ovid',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Reclaiming the Sabbath Rhythm',
        id: 'reclaiming-the-sabbath-rhythm',
      },
      {
        type: 'paragraph',
        text: 'Dedicate one block of time each week—whether an entire Sunday or a half-day Saturday—where productivity is deliberately banned. No to-do lists, no urgent grocery runs, no digital obligations. Treat this sanctuary of time as sacred.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. FINANCE (CATEGORY FEATURED ARTICLE)
  // ---------------------------------------------------------------------------
  {
    id: 'art-004',
    slug: 'how-to-build-a-personal-budget-that-actually-works',
    title: 'How to Build a Personal Budget That Actually Works',
    category: 'finance',
    excerpt: 'A practical, shame-free framework to take control of your cash flow, eliminate financial anxiety, and allocate your earnings toward what truly matters.',
    coverImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Financial ledger, ceramic cup of coffee, and clean workspace with calculator and fountain pen',
    authorId: 'amara',
    publishedAt: '2026-10-22T09:00:00Z',
    updatedAt: '2026-11-04T14:30:00Z',
    readingTime: 8,
    tags: ['Budgeting', 'Financial Literacy', 'Money Management', 'Savings'],
    featured: false,
    categoryFeatured: true,
    relatedArticleIds: ['art-005', 'art-006', 'art-009'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Most personal budgets fail for the same reason crash diets do: they are built on deprivation, rigid formulas, and emotional guilt rather than a realistic appraisal of human nature. A true budget is not a financial straightjacket; it is a conscious spending blueprint that grants you permission to spend without regret on the things you value most.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The 50/30/20 Framework in the Real World',
        id: 'the-50-30-20-framework-in-the-real-world',
      },
      {
        type: 'paragraph',
        text: 'Originally popularized as a balanced money guideline, the 50/30/20 model divides your net take-home income into three intentional buckets:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '50% Essential Needs: Housing, groceries, utilities, transportation, basic healthcare, and minimum debt payments.',
          '30% Intentional Lifestyle: Dining out, family leisure, hobbies, personal gifts, and subscriptions.',
          '20% Financial Resilience: Emergency buffer building, debt acceleration, retirement contributions, and investments.',
        ],
      },
      {
        type: 'callout',
        title: 'Realistic Example: ₦500,000 Monthly Net Income in Nigeria',
        text: 'Consider an entrepreneur or working professional in Lagos or Abuja earning a net monthly salary of ₦500,000:\n• Needs (50% = ₦250,000): Rent sinking fund (₦140,000), food staples & groceries (₦60,000), power/fuel (₦30,000), transport (₦20,000).\n• Wants (30% = ₦150,000): Weekend outings, cinema, subscriptions, personal self-care.\n• Future (20% = ₦100,000): ₦50,000 into a high-yield emergency reserve fund and ₦50,000 into a diversified mutual fund or pension plan.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Designing for Cash Flow Predictability',
        id: 'designing-for-cash-flow-predictability',
      },
      {
        type: 'paragraph',
        text: 'Irregular expenses—such as annual car insurance, school fees, or holiday travel—routinely sabotage well-intentioned budgets. The antidote is setting up "sinking funds." Calculate your expected annual non-monthly expenses, divide by twelve, and automatically transfer that sum each month into a separate dedicated savings sub-account.',
      },
      {
        type: 'quote',
        text: 'A budget tells your money where to go instead of wondering where it went. Clarity is the ultimate antidote to financial stress.',
        attribution: 'Amara Eze, Sustainable Wealth Strategist',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Practical Steps to Start Today',
        id: 'practical-steps-to-start-today',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Audit your last 60 days of bank and debit card statements to see your true spending baseline.',
          'Categorize expenses into Fixed Needs, Flexible Wants, and Savings.',
          'Automate your savings transfer for the exact morning your salary or revenue arrives.',
          'Review your numbers for ten minutes on Sunday evenings—gently, without recrimination.',
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. FINANCE
  // ---------------------------------------------------------------------------
  {
    id: 'art-005',
    slug: 'smart-saving-habits-for-a-more-secure-future',
    title: 'Smart Saving Habits for a More Secure Future',
    category: 'finance',
    excerpt: 'Build an unshakeable financial buffer that shields your household from life’s uncertainties and turns saving from a chore into an act of self-care.',
    coverImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Golden coins, glass jar savings, and green plant growing symbolizing financial stability',
    authorId: 'amara',
    publishedAt: '2026-10-10T12:00:00Z',
    readingTime: 6,
    tags: ['Savings', 'Emergency Fund', 'Financial Security', 'Money Mindset'],
    featured: false,
    categoryFeatured: false,
    relatedArticleIds: ['art-004', 'art-006', 'art-007'],
    blocks: [
      {
        type: 'paragraph',
        text: 'An emergency fund is not an investment designed to maximize yields; it is financial insurance that buys you freedom, tranquility, and options. When unexpected automobile repairs, medical expenses, or income interruptions occur, having liquid savings prevents you from turning to predatory loans or exhausting family resources.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Step 1: The Starter Buffer vs. The Full Reserve',
        id: 'step-1-the-starter-buffer-vs-the-full-reserve',
      },
      {
        type: 'paragraph',
        text: 'Aiming immediately for six months of living expenses can feel insurmountable. Break the journey into distinct psychological milestones:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Phase 1 — Starter Shield: Accumulate one full month of baseline living expenses (e.g., ₦200,000 to ₦350,000). Keep this untouched in an easily accessible high-interest savings account.',
          'Phase 2 — Debt Elimination: If you carry high-interest consumer debt, focus extra cash flow on clearing it while maintaining your starter shield.',
          'Phase 3 — Full Reserve: Gradually expand your safety cushion to three to six months of fundamental living necessities.',
        ],
      },
      {
        type: 'callout',
        title: 'Where Should Emergency Money Live?',
        text: 'Never place emergency reserves in speculative assets, cryptocurrency, or locked illiquid real estate. Safety, capital preservation, and instant liquidity always take precedence over maximum returns when your safety net is at stake.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Automating Your Savings Discipline',
        id: 'automating-your-savings-discipline',
      },
      {
        type: 'paragraph',
        text: 'Willpower is a finite emotional commodity. If you wait until the end of the month to save "whatever is left," there will invariably be nothing left. Treat your future self as your most essential creditor: pay yourself first.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. FINANCE
  // ---------------------------------------------------------------------------
  {
    id: 'art-006',
    slug: 'understanding-the-basics-of-investing-and-wealth-building',
    title: 'Understanding the Basics of Investing and Wealth Building',
    category: 'finance',
    excerpt: 'Demystifying the stock market, inflation protection, and asset allocation for beginners seeking steady, generational financial growth.',
    coverImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Modern architectural lines in warm wood and stone, suggesting sustainable wealth structure',
    authorId: 'amara',
    publishedAt: '2026-10-02T14:15:00Z',
    readingTime: 7,
    tags: ['Investing', 'Wealth Building', 'Compound Interest', 'Financial Freedom'],
    featured: false,
    categoryFeatured: false,
    relatedArticleIds: ['art-004', 'art-005', 'art-008'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Saving keeps your money safe today, but in an era of persistent global and local inflation, cash sitting idle in a standard low-interest checking account slowly loses its purchasing power. Investing is the deliberate act of putting your capital to work in productive assets that grow faster than the cost of living.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Core Pillars of Sensible Investing',
        id: 'the-core-pillars-of-sensible-investing',
      },
      {
        type: 'paragraph',
        text: 'Sustainable wealth building does not require chasing hot stock tips or day-trading volatility. It rests on three durable pillars:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Broad Diversification: Spreading risk across hundreds of companies, sectors, and geographic regions through low-cost index funds and ETFs.',
          'Dollar-Cost Averaging: Investing a consistent sum at regular intervals (e.g. monthly) regardless of whether market headlines are euphoric or panicked.',
          'Long-Term Horizon: Allowing compound interest decades to perform its quiet mathematical magic.',
        ],
      },
      {
        type: 'quote',
        text: 'The stock market is a device for transferring money from the impatient to the patient.',
        attribution: 'Warren Buffett',
      },
      {
        type: 'callout',
        title: 'Guarding Against Get-Rich-Quick Traps',
        text: 'Any scheme or platform promising guaranteed returns exceeding 20% to 30% per month with zero risk is almost certainly unsustainable or fraudulent. True wealth building is gradual, disciplined, and transparent.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Your Starting Roadmap',
        id: 'your-starting-roadmap',
      },
      {
        type: 'paragraph',
        text: 'Begin by maximizing any workplace pension matching opportunities available to you. Next, open an account with a licensed, regulated asset manager or investment brokerage and establish an automated monthly contribution into a broad-market fund.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. FAMILY (CATEGORY FEATURED ARTICLE)
  // ---------------------------------------------------------------------------
  {
    id: 'art-007',
    slug: 'building-stronger-family-relationships-through-communication',
    title: 'Building Stronger Family Relationships Through Communication',
    category: 'family',
    excerpt: 'How listening with empathy, practicing gentle repair, and establishing daily conversational rituals can heal fractures and deepen kinship.',
    coverImage: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Family sitting warmly around an outdoor timber table enjoying peaceful conversation',
    authorId: 'simi',
    publishedAt: '2026-10-20T10:00:00Z',
    updatedAt: '2026-11-05T16:00:00Z',
    readingTime: 6,
    tags: ['Family Bonds', 'Conscious Communication', 'Parenting', 'Empathy'],
    featured: false,
    categoryFeatured: true,
    relatedArticleIds: ['art-008', 'art-009', 'art-001'],
    blocks: [
      {
        type: 'paragraph',
        text: 'We often take our closest relationships for granted, assuming that love alone will effortlessly bridge misunderstandings. Yet beneath the roof of even the most affectionate households, hurried schedules, unspoken expectations, and unexamined stress can quietly build walls between partners, parents, and children.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Moving from Reaction to Attunement',
        id: 'moving-from-reaction-to-attunement',
      },
      {
        type: 'paragraph',
        text: 'Attunement is the deliberate choice to step into another family member’s emotional landscape before offering advice, correction, or judgment. When a child throws a tantrum or a spouse responds sharply after work, the instinctive reaction is defensiveness. Attunement asks: What distress is this behavior trying to express?',
      },
      {
        type: 'callout',
        title: 'The "Speaker-Listener" Technique',
        text: 'When addressing a delicate family dispute, designate one person as the speaker for two uninterrupted minutes. The listener cannot cross-examine or rebut; they can only summarize what they heard: "What I hear you saying is that you felt unsupported when..." This simple rule dissolves 80% of defensive escalations.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Small Daily Conversations That Matter',
        id: 'small-daily-conversations-that-matter',
      },
      {
        type: 'paragraph',
        text: 'Substitute closed questions like "How was school today?" with curiosity-sparking prompts:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          '"What was something that made you laugh or smile today?"',
          '"Was there a moment today where you felt frustrated or unsure?"',
          '"What is one kind thing someone did for you, or one kind thing you did for someone else?"',
        ],
      },
      {
        type: 'quote',
        text: 'In family life, love is an oil that eases friction, a cement that binds closer, and a music that brings harmony.',
        attribution: 'Eva Burrows',
      },
      {
        type: 'heading',
        level: 2,
        text: 'The Art of the Clean Apology',
        id: 'the-art-of-the-clean-apology',
      },
      {
        type: 'paragraph',
        text: 'Nothing strengthens family resilience more than witnessing parents and partners apologize sincerely. A clean apology contains no "if" or "but" ("I’m sorry I raised my voice, but you made me angry"). A clean apology owns the impact: "I was tired, and I raised my voice. You didn’t deserve that, and I am working on taking a breath first."',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. FAMILY
  // ---------------------------------------------------------------------------
  {
    id: 'art-008',
    slug: 'simple-ways-to-create-more-meaningful-family-time',
    title: 'Simple Ways to Create More Meaningful Family Time',
    category: 'family',
    excerpt: 'Cut through digital distractions and busy calendars with high-connection, low-cost rituals that build lasting memories.',
    coverImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Group of friends and family laughing and cooking together in warm sunlit kitchen',
    authorId: 'simi',
    publishedAt: '2026-10-12T13:45:00Z',
    readingTime: 5,
    tags: ['Quality Time', 'Family Traditions', 'Memory Making', 'Connection'],
    featured: false,
    categoryFeatured: false,
    relatedArticleIds: ['art-007', 'art-009', 'art-002'],
    blocks: [
      {
        type: 'paragraph',
        text: 'Meaningful family connection rarely requires expensive vacations or elaborate weekend productions. In fact, children and partners often recount simple, repetitive household traditions with the greatest warmth—Sunday evening pancakes, evening walks around the neighborhood, or board games by candlelight.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Establishing "Sacred" Tech-Free Zones',
        id: 'establishing-sacred-tech-free-zones',
      },
      {
        type: 'paragraph',
        text: 'Our smartphones create a state of continuous partial presence. We sit beside our children or partners while our eyes and minds dart to work emails and social media notifications. Establishing physical and temporal boundaries is transformative:',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'The Dinner Table Sanctuary: No phones or tablets allowed at the dining table during dinner—adults included.',
          'The 20-Minute Bedtime Window: A quiet, device-free interval dedicated to reading aloud, quiet conversation, or gentle review of the day.',
          'Saturday Morning Nature Stroll: Taking a brisk walk in a nearby park, local market, or neighborhood lane without audio earbuds.',
        ],
      },
      {
        type: 'quote',
        text: 'Children will not remember the toys you bought them, but they will never forget the feeling of having your undivided attention.',
        attribution: 'Simi Williams, Family Dynamics Writer',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Shared Projects Build Lasting Pride',
        id: 'shared-projects-build-lasting-pride',
      },
      {
        type: 'paragraph',
        text: 'Engage in collaborative activities where everyone has an age-appropriate role: planting herb pots on a balcony, baking family bread, organizing a photo album, or cooking a multi-step traditional meal together.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. FAMILY
  // ---------------------------------------------------------------------------
  {
    id: 'art-009',
    slug: 'balancing-work-parenting-and-personal-well-being',
    title: 'Balancing Work, Parenting and Personal Well-being',
    category: 'family',
    excerpt: 'Ditching the myth of effortless perfection to build a sustainable, gracious rhythm between professional ambition and parenting.',
    coverImage: 'https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=1200&q=80',
    coverImageAlt: 'Parent holding child with gentle smile in serene natural outdoor setting',
    authorId: 'kenti',
    publishedAt: '2026-10-05T08:30:00Z',
    readingTime: 6,
    tags: ['Work-Life Balance', 'Parenting', 'Self Care', 'Boundaries'],
    featured: false,
    categoryFeatured: false,
    relatedArticleIds: ['art-001', 'art-003', 'art-007'],
    blocks: [
      {
        type: 'paragraph',
        text: 'The phrase "having it all" has done profound emotional damage to modern parents and professionals. It implies that at any given moment, one can be operating as a tireless corporate performer, an impeccably present parent, an energetic partner, and a luminous beacon of wellness—all without breaking a sweat. In reality, life is a series of deliberate trade-offs.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Seasonal Thinking vs. Daily Perfection',
        id: 'seasonal-thinking-vs-daily-perfection',
      },
      {
        type: 'paragraph',
        text: 'Release the expectation of equal daily balance. Instead, think in terms of seasons. Some months demand acute focus on a professional milestone; during those periods, simplify family meal preparation and lower domestic standards. In other seasons, family needs take precedence, and career boundaries must be firmly held.',
      },
      {
        type: 'callout',
        title: 'The Oxygen Mask Principle',
        text: 'Flight attendants remind us on every flight: put on your own mask before helping others. A parent who is chronically sleep-deprived, under-nourished, and emotionally depleted will inevitably parent from irritability and exhaustion. Personal self-care is not a luxury; it is the fuel for compassionate caregiving.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Protecting Micro-Sanctuaries',
        id: 'protecting-micro-sanctuaries',
      },
      {
        type: 'paragraph',
        text: 'You may not have two spare hours every day for personal leisure, but you can fiercely protect fifteen minutes. Wake fifteen minutes earlier to sit quietly with your favorite tea, take a ten-minute walk between remote meetings, or spend five minutes stretching before bed. Reclaim these small pockets of restorative solitude.',
      },
      {
        type: 'quote',
        text: 'You don’t have to do it all at once to do it well. Grace and patience will carry your family further than rigid pressure ever could.',
        attribution: 'Kenti Fam, Founder of Kenti’s Corner',
      },
    ],
  },
];

// Helper functions for easy consumption across components
export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedArticle(): Article {
  return ARTICLES.find((a) => a.featured) || ARTICLES[0];
}

export function getCategoryFeaturedArticle(category: string): Article {
  const catArticle = ARTICLES.find((a) => a.category === category && a.categoryFeatured);
  if (catArticle) return catArticle;
  const firstInCat = ARTICLES.find((a) => a.category === category);
  return firstInCat || ARTICLES[0];
}

export function getArticlesByCategory(category?: string | null): Article[] {
  if (!category || category === 'all') {
    return ARTICLES;
  }
  return ARTICLES.filter((a) => a.category === category);
}

export function getRelatedArticles(currentArticle: Article, count: number = 3): Article[] {
  // First, check explicit related IDs
  const explicit = (currentArticle.relatedArticleIds || [])
    .map((id) => ARTICLES.find((a) => a.id === id))
    .filter((a): a is Article => a !== undefined && a.id !== currentArticle.id);

  if (explicit.length >= count) {
    return explicit.slice(0, count);
  }

  // Next, same category
  const sameCat = ARTICLES.filter(
    (a) => a.category === currentArticle.category && a.id !== currentArticle.id && !explicit.includes(a)
  );

  const combined = [...explicit, ...sameCat];
  if (combined.length >= count) {
    return combined.slice(0, count);
  }

  // Fallback to any other articles
  const others = ARTICLES.filter((a) => a.id !== currentArticle.id && !combined.includes(a));
  return [...combined, ...others].slice(0, count);
}

export function searchArticles(query: string, category?: string | null): Article[] {
  const q = query.trim().toLowerCase();
  let pool = ARTICLES;
  if (category && category !== 'all') {
    pool = pool.filter((a) => a.category === category);
  }

  if (!q) return pool;

  return pool.filter((article) => {
    const titleMatch = article.title.toLowerCase().includes(q);
    const excerptMatch = article.excerpt.toLowerCase().includes(q);
    const categoryMatch = article.category.toLowerCase().includes(q);
    const tagMatch = article.tags.some((tag) => tag.toLowerCase().includes(q));
    const blockMatch = article.blocks.some((b) => {
      if ('text' in b) return b.text.toLowerCase().includes(q);
      if ('items' in b) return b.items.some((item) => item.toLowerCase().includes(q));
      return false;
    });

    return titleMatch || excerptMatch || categoryMatch || tagMatch || blockMatch;
  });
}
