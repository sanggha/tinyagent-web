import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "tiktok-word-filter-real-estate",
  title: "The Hidden TikTok Word Filter That's Killing Real Estate Accounts in 2026",
  description:
    "TikTok doesn't publish a banned-words list, but Australian real estate accounts are getting throttled. Here are the language patterns we observe, the rewrites that work, and a 14-day diagnostic you can run this week.",
  excerpt:
    "Real estate accounts on TikTok are losing reach for reasons most agents never connect to their captions. Here's the pattern we see, in plain English.",
  publishedAt: "2026-03-11",
  readingTime: 9,
  category: "Platform Tactics",
  tags: [
    "TikTok",
    "Real Estate Marketing",
    "Shadowban",
    "Community Guidelines",
    "Short Form Video",
    "Australia",
  ],
  author: {
    name: "Maya Chen",
    role: "Head of Creative, Tiny Agent",
  },
  cover: {
    src: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=1600&q=80",
    alt: "Sydney Opera House and Harbour Bridge — the iconic Australian skyline where many of our monitored real estate accounts operate",
    credit: "Unsplash",
  },
  contentHtml: `
<p class="lede">"Shadowban" isn't a TikTok-confirmed feature — it's the term creators use for sudden, unexplained reach drops. What's actually happening is reach suppression: your video stays public, but the For You Page stops showing it. This article covers the language patterns we observe causing it across the Australian real estate accounts we manage, the rewrites that fix them, and a 14-day diagnostic you can run on your own account this week.</p>

<h2>1. Shadowban vs reach suppression — get the term right</h2>

<p>TikTok has repeatedly said it does not "shadowban". What its <a href="https://www.tiktok.com/community-guidelines/en" target="_blank" rel="noopener noreferrer">Community Guidelines</a> do describe is content that becomes "ineligible for the For You feed". The video stays live. Your followers see it. Strangers don't. Use the right term and you'll find better answers.</p>

<p>Suppression happens at two levels:</p>
<ul>
  <li><strong>Video-level:</strong> one upload gets clipped. Common, often clears in a week.</li>
  <li><strong>Account-level:</strong> the recommendation system treats the whole account cautiously after repeated flags. Takes longer to heal.</li>
</ul>

<p>A Bondi buyer's agent we monitor went from a 6,400-view average to under 300 in nine days after a run of "cash offer" captions. No notification, no email — just the FYP turning off.</p>

<h2>2. Why real estate sits in TikTok's moderation grey zone</h2>

<p>Real estate isn't a banned category. But it brushes against four that are heavily moderated: financial services, get-rich-quick content, gambling-adjacent language, and misleading claims. The automated classifier doesn't know you're an agent in Coorparoo talking honestly about a Queenslander on Cavendish Road — it reads the words. And "guaranteed top dollar" looks identical to crypto-promo copy from above.</p>

<p>One caveat before the fixes: moderation is multi-signal. One "wrong" phrase won't tank you. It's the <em>combination</em> of language, behaviour and account history. Don't expect a single keyword swap to fix a 60-day decline.</p>

<h2>3. The five phrase categories we observe causing reach drops</h2>

<p>We can't prove causation — only TikTok can — but the correlation across the Australian accounts we run is consistent enough to act on. Here are the five categories, with the rewrites we now default to.</p>

<h3>a. Financial outcome promises</h3>
<blockquote>Bad: "Guaranteed sale in 30 days or your fee back."</blockquote>
<p>Better: "Our last six listings in this postcode sold inside a month."</p>
<p>Why: replace claim with observation. A Manly agent rewrote her hero hook this way and her average view count doubled over the next fortnight.</p>

<h3>b. Investment and passive-income framing</h3>
<blockquote>Bad: "Turn this Logan unit into passive income — investment opportunity, huge returns."</blockquote>
<p>Better: "Logan's rental yields are sitting around the high 5s right now — here's what that looks like on a unit like this."</p>
<p>Why: descriptive market data reads as information; "passive income" tips the video into the financial-services classifier.</p>

<h3>c. Urgency and scarcity stuffing</h3>
<blockquote>Bad: "LAST CHANCE — you won't believe this price — DM me NOW before someone else gets it."</blockquote>
<p>Better: "First open is Saturday at 10. Worth a look if you've been watching this street."</p>
<p>Why: one urgency line is fine. Stacking them on every upload looks like spam at the account level.</p>

<h3>d. Off-platform contact pressure</h3>
<blockquote>Bad: "DM for the address. Text me for the price. Link in bio for the full tour."</blockquote>
<p>Better: "Inspection details on our profile."</p>
<p>Why: TikTok wants people on TikTok. Every caption that funnels off-platform trains the classifier on what your account is for. A Newtown agent removed "DM me" from her last 20 captions and recovered FYP reach in 11 days.</p>

<h3>e. Hyperbole around price</h3>
<blockquote>Bad: "Insane price drop — sellers are practically giving this away."</blockquote>
<p>Better: "Price guide came down this week. Here's where it sits relative to the last three comparables."</p>
<p>Why: as a bonus, this also keeps you on the safer side of <a href="https://www.accc.gov.au/" target="_blank" rel="noopener noreferrer">ACCC</a> guidance on misleading conduct in property advertising.</p>

<h2>4. Caption practices that flag the spam classifier</h2>

<p>Beyond word choice, six caption-level behaviours compound suppression risk:</p>

<ol>
  <li><strong>Hashtag stuffing.</strong> Twenty hashtags, half irrelevant. The "#fyp #foryou #foryoupage" play stopped working years ago and now reads as low-quality signal. Four relevant tags is plenty.</li>
  <li><strong>"Link in bio" three times in one video</strong> — caption, on-screen text, voiceover. Pick one place. Better, drop it entirely on FYP-hunting posts.</li>
  <li><strong>Identical captions across uploads.</strong> Copy-pasting the same block to ten listings looks like automation. Vary the first 40 characters at minimum.</li>
  <li><strong>Phone numbers and email addresses in captions.</strong> Treated as off-platform funnelling. Use the contact button on your business profile instead.</li>
  <li><strong>"Comment YES and I'll DM you"</strong> patterns. The exact phrasing TikTok's spam guidance calls out.</li>
  <li><strong>External URLs typed as text.</strong> Writing "realestate.com.au/property/12345" is treated differently to letting the platform handle the link.</li>
</ol>

<p>None of these are individually fatal. Stacked across 50 uploads, they define your account for the classifier. Same principle we cover in <a href="/blog/instagram-reels-8-seconds-rule">the 8-second rule for Instagram Reels</a> — small signals, accumulated, become the algorithm's read on you.</p>

<h2>5. The 14-day FYP diagnostic — run it on your own account this week</h2>

<p>Before assuming you're suppressed, run this. It's not official. It's repeatable. We've used it on dozens of agent accounts and it gives a clean read.</p>

<p>Post seven videos over fourteen days under these rules:</p>
<ul>
  <li>No financial outcome words (sold, guaranteed, cash, investment, passive).</li>
  <li>No off-platform CTAs in caption or on-screen text.</li>
  <li>Maximum four hashtags, all directly relevant.</li>
  <li>Captions under 80 characters, conversational, unique per post.</li>
  <li>No phone numbers, emails, URLs, or "link in bio" anywhere visible.</li>
  <li>Useful or entertaining content only: a suburb walk-through, "three things buyers ask me about this area", behind-the-scenes from an open home.</li>
  <li>Post at the same time daily, weekday evenings AEST.</li>
</ul>

<p>Compare the average views of those seven videos to your previous fortnight. A 2× lift or better suggests video-level suppression has cleared. Flat results point to account-level signal that needs more work — or a rebuild. A Coffs Harbour agent we worked with ran this and went from a 420-view average to 3,100 across the seven test posts. Account healed.</p>

<h2>6. If reach has dropped: the order of operations</h2>

<ol>
  <li><strong>Check your account status.</strong> Settings → Account → Account status. TikTok's <a href="https://support.tiktok.com/en/safety-hc/account-and-user-safety/community-guidelines-enforcement" target="_blank" rel="noopener noreferrer">Help Centre</a> documents what each warning level means. A formal strike changes the playbook.</li>
  <li><strong>Audit your last 20 uploads.</strong> Read every caption out loud. Count how many contain promise language, urgency stuffing, or off-platform CTAs. If it's more than half, that's your starting point.</li>
  <li><strong>Do not delete old posts.</strong> Deletions at scale are themselves a spam signal. Leave them up.</li>
  <li><strong>Do not switch the account to private.</strong> Private accounts vanish from FYP entirely; you'll mistake the silence for suppression and panic.</li>
  <li><strong>Pause for 48 hours.</strong> Posting through a suppression event tends to reinforce the signal.</li>
  <li><strong>Run the 14-day diagnostic above.</strong></li>
  <li><strong>If reach recovers, reintroduce CTAs natively only</strong> — the contact button, not a typed phone number.</li>
</ol>

<h2>7. Cross-posting hygiene — what helps and what hurts on TikTok specifically</h2>

<p>Most agents post the same vertical to TikTok, Reels and YouTube Shorts. Sensible. Three habits hurt the TikTok side specifically:</p>

<ul>
  <li><strong>Uploading the watermarked download from another platform.</strong> An Instagram or CapCut watermark is widely reported to deprioritise the video on TikTok. Export clean masters and upload natively.</li>
  <li><strong>Identical captions across platforms.</strong> Rewrite shorter and more conversational for TikTok.</li>
  <li><strong>Same-minute posting to all three.</strong> Stagger by a few hours.</li>
</ul>

<p>If you're building a multi-platform release flow, the <a href="/blog/coming-soon-youtube-shorts-funnel">coming-soon YouTube Shorts funnel</a> shows a sequence that avoids tripping any one platform's spam detection.</p>

<h2>8. When to abandon the account vs heal it</h2>

<p>Heal if: average views dropped recently, no formal Community Guidelines strike, and the 14-day diagnostic shows any lift at all.</p>

<p>Rebuild if: multiple guideline strikes, more than 60 days of flat performance after changing tactics, or the account was built on hard-sell listing montages the platform no longer rewards. A Brunswick agent we work with did a full rebuild after 90 days of dead reach — the new account passed her old peak within six weeks. Not always the wrong call. Our piece on <a href="/blog/veteran-agents-short-form-mistake">the short-form mistake veteran agents keep making</a> covers why fresh accounts often outperform old ones for experienced agents.</p>

<p>If you want a second pair of eyes on the diagnostic or a sharper TikTok strategy alongside Meta, <a href="/">Tiny Agent</a> works with agents Australia-wide. <a href="/#contact">Book a free strategy call</a> and we'll go through your last 30 days.</p>

<h2>Bottom line</h2>

<p>TikTok doesn't publish a banned-words list. Anyone who tells you they have one is guessing. What's real: reach suppression on Australian real estate content is pattern-driven and largely avoidable. Drop promise language. Drop off-platform funnels from every caption. Stop stuffing hashtags. Speak like a human who knows property. Run the 14-day diagnostic before you rebuild. Most agents we see don't need a new account — they need a slightly different vocabulary.</p>
`,
  sources: [
    {
      title: "TikTok Community Guidelines",
      url: "https://www.tiktok.com/community-guidelines/en",
      publisher: "TikTok",
    },
    {
      title: "TikTok Newsroom",
      url: "https://newsroom.tiktok.com/",
      publisher: "TikTok",
    },
    {
      title: "TikTok for Business",
      url: "https://www.tiktok.com/business/en",
      publisher: "TikTok",
    },
    {
      title: "Community Guidelines Enforcement — Account Status",
      url: "https://support.tiktok.com/en/safety-hc/account-and-user-safety/community-guidelines-enforcement",
      publisher: "TikTok Help Centre",
    },
    {
      title: "Advertising and selling guide",
      url: "https://www.accc.gov.au/",
      publisher: "Australian Competition and Consumer Commission",
    },
    {
      title: "Real Estate Institute of Australia",
      url: "https://reia.com.au/",
      publisher: "REIA",
    },
  ],
  relatedSlugs: [
    "instagram-reels-8-seconds-rule",
    "veteran-agents-short-form-mistake",
    "coming-soon-youtube-shorts-funnel",
  ],
  faq: [
    {
      question: "How do I know for sure if my TikTok account is shadowbanned?",
      answer:
        "You can't get a definitive answer from TikTok — they don't confirm suppression. The cleanest test is the 14-day diagnostic in this article: post seven videos that strip out every suspected trigger and compare the average view count to your previous fortnight. A 2× or better lift means video-level suppression that's now clearing. Flat results point to deeper account-level signal. Also check Settings → Account → Account status for any formal Community Guidelines warnings, which change the playbook entirely.",
    },
    {
      question: "Will using a VPN fix or worsen the problem?",
      answer:
        "Worsen, almost always. Logging in from inconsistent locations is itself a spam-and-bot signal. Australian agents posting through a US or Singapore VPN to 'reach a bigger market' tend to see reach drop, not climb. Post from your normal connection and let the platform geo-target you locally — that's where your buyer and vendor audience actually is.",
    },
    {
      question: "What should I do if a competitor mass-reports my account?",
      answer:
        "Reports alone don't trigger penalties — TikTok's moderation reviews flagged content before acting. If a video is taken down and you believe the report was malicious, use the in-app appeal immediately (you have a limited window). Keep posting normally on compliant content while the appeal runs. If you receive a strike you believe is wrong, the appeal path in the Help Centre is the only channel that matters; don't try to escalate via email or social media.",
    },
    {
      question: "Should I start a second account in parallel as a backup?",
      answer:
        "Running two real-estate accounts from the same device, IP and behaviour pattern often gets both treated as duplicate or spam. If you genuinely want a backup, use it for a clearly different angle — buyer education, market commentary, behind-the-scenes — and post from it on different days. Don't mirror the same content across both.",
    },
    {
      question: "How long does TikTok reach suppression typically last?",
      answer:
        "From the Australian accounts we manage, video-level suppression usually clears within 7-14 days once the underlying pattern changes. Account-level suppression can run 30-90 days. If you've changed tactics meaningfully and seen no movement past 60 days, a rebuild is usually faster than continuing to wait.",
    },
  ],
};
