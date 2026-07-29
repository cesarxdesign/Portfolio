/* ============================================================
   THE SPINE. The one canonical sequence and the single source
   of truth for every home version.

   ONE ordered list (`order`) of every project, each carrying
   ALL its attributes. Every home is just a template: it fetches
   the SAME sequence and reads the fields its design needs.
     woven homes (v2, v3, v4) read  home.weave / home.body
     spec home  (v1)          reads home.title / home.tags
     list home  (v0)          reads note / role
   There is no per-home weave. Reorder `order` once (e.g. move
   'trustwallet' up), and every home reflows. `featured` is how
   many leading entries get the full treatment; the rest render
   as the "more work" tail. This file is separate from the
   case-study pages, which never render this data.
   ============================================================ */
window.SPINE = {

  /* THE SEQUENCE. Reorder this to reorder every home at once.
     The first `featured` entries are the lead beats; the rest
     are the tail. Move any key anywhere to promote or demote. */
  order: ['confirmo', 'mara', 'starcount', 'penfold', 'cable', 'trustwallet', 'done'],
  featured: 3,
  cut: ['orbis'],   /* kept in the canon index, tagged CUT; never fed to home iterations */

  projects: {

    confirmo: {
      name: `Confirmo`, role: `Product Design Lead`,
      meta: `Payments · 2025-26`, note: `Recurring crypto payments`,
      accent: `conf`, href: `/confirmo`, status: `mega`,
      media: { type: `phones`, imgs: [`confirmo/hero/c2-v4-06-fulldock.webp`, `confirmo/hero/c2-v4-09.webp`], alt: `Confirmo crypto checkout` },
      home: {
        title: `Added $135M a year with a superficial change`,
        summary: `Confirmo's first designer. I audited a subscription checkout losing most of its payments, rebuilt the flow, and launched the first recurring crypto payments product of its kind.`,
        body: `Confirmo hired me as its first designer. Its crypto checkout was losing <b>nine payments in ten</b>, not to fraud, to friction. I audited it, rebuilt the flow around a single signature, and lifted payment success from <b>9% to 43%</b> in key markets. Then I launched Confirmo Subscriptions, the first recurring crypto payments product of its kind, with Circle and Solana.`,
        weave: `From 9% success rate to 43%`,
        tags: [`9% to 43% success`, `27% overall`, `First designer, 0 to 1`],
        voice: `Nine in ten payments were leaking. Not to fraud, to friction. So I removed the friction.`,
        caption: `Confirmo. A crypto checkout, redrawn to convert.`,
        cta: `See the Confirmo case`
      }
    },

    mara: {
      name: `Mara`, role: `Head of Design & Product Owner`,
      meta: `Digital wallet · 2022-24`, note: `Crypto & fiat wallet for Africa`,
      accent: `mara`, href: `/mara`, status: `mega`,
      media: { type: `phones`, imgs: [`mara/screens/01-home.html`, `mara/assets/onb/15.png`], alt: `Mara wallet, redesigned` },
      home: {
        title: `Saving $6.9M a year whilst improving user experience`,
        summary: `A crypto and fiat wallet for Africa, with Coinbase as lead investor. I ran design, engineering, and support, and personally redrew the entire product before handing off the iterations.`,
        body: `Mara's transfer screen looked like six people had designed it. Concurrently. I did not see a redesign, I saw a gift. Within a week I had a full audit and a way to collapse the chaos: one dynamic component that replaced <b>eight</b>, and an onboarding cut from twenty-seven steps to eight, with nothing important lost. Fewer failed identity checks meant real money back, and I ran the design, engineering, and support that shipped it to 40 million users.`,
        weave: `Onboarding an extra 20M users`,
        tags: [`24M users`, `Onboarding 27 to 8`, `$4.6M KYC saved`, `Ran three teams`],
        voice: `This screen might have been designed by six people. Concurrently. It was a gift.`,
        caption: `Mara. A whole product redrawn in about a month, for 24M users.`,
        cta: `See the Mara case`
      }
    },

    starcount: {
      name: `Starcount`, role: `Head of Product Design`,
      meta: `Data intelligence · 2017-19`, note: `Audience intelligence`,
      accent: `star`, href: `/starcount`, status: `mega`,
      media: { type: `shot`, imgs: [`home-assets/star-04.webp`], alt: `Starcount Audiences 3D density map` },
      home: {
        title: `A one million pound first-year target. Hit in 91 days.`,
        summary: `Audience intelligence built on the first-ever Twitter data deal. I grew from the only designer into a four-person department, and design drove the revenue.`,
        body: `At Starcount I stuck my neck out in a meeting on the first-ever Twitter data deal, and said I would have something to show before the ink was dry. Our product suite beat a <b>one million pound</b> first-year target in ninety-one days. I joined as the only designer and left running a four-person department. And when the audience map came back accurate but useless, I chose to show results that were technically wrong, and genuinely useful.`,
        weave: `I made the map lie, correctly.`,
        tags: [`&pound;1M in 91 days`, `First-ever Twitter &amp; Royal Mail deals`, `Solo to a 4-person dept`],
        voice: `Accurate, but not helpful. So I set out to show results that were wrong, but useful.`,
        caption: `Starcount. Audience intelligence on the first-ever Twitter data deal.`,
        cta: `See the Starcount case`
      }
    },

    cable: {
      name: `Cable`, role: `Founding Designer`,
      meta: `Fincrime · 2021-22`, note: `Fincrime & AML platform`,
      accent: `cable`, href: `/cable`, status: `short`,
      media: { type: `shot`, imgs: [`home-assets/cable.webp`], alt: `Cable Paper Trails platform` },
      home: {
        title: `A one trick pony, turned full-fledged banking suite`,
        summary: `The only fincrime startup with a live product when I joined, as its sole designer. I took it from a single view to the Paper Trails system, to Oversight, to a full 3.0.`,
        body: `Cable was the only fincrime startup with a live product, and I was its only designer. I took it from one stuck feature to the Paper Trails system, to Oversight, to a platform banks buy. My rule on timing: if it is the right fix, I will still do it, even when it is a hard sell to engineering, and I queue it up by priority. Eventually the time comes.`,
        weave: `I earn design a seat in rooms that do not trust it.`,
        tags: [`Sole designer`, `v0.1 to 3.0`, `Unsellable to bank-grade`],
        voice: `This list would come to be the most important part of the whole product.`,
        caption: `Cable. One stuck feature, turned into a platform banks buy.`,
        cta: `See the Cable case`
      }
    },

    penfold: {
      name: `Penfold`, role: `Founding Designer, first hire`,
      meta: `Pensions · 2019-20`, note: `Self-serve pensions`,
      accent: `pen`, href: `/penfold`, status: `short`,
      media: { type: `shot`, imgs: [`home-assets/pen.jpg`], alt: `Penfold self-serve pension app` },
      home: {
        title: `From first hire, to an award winning pension`,
        summary: `A one-week challenge to turn a prototype into a live app. Then a system where the mobile view fed the desktop, so a small team could ship fast, for years.`,
        body: `Penfold hired me first. My week-one task was to turn a prototype into a live app that could onboard real customers, so the company could raise its next round. Then I built the leverage: one component set where the mobile view fed the desktop, so a small team could keep shipping fast. When a user asked "what if I die?" and none of my flows had an answer, I shipped a beneficiary screen that same afternoon.`,
        weave: `I take zero to one, and keep it standing for years.`,
        tags: [`Founding designer`, `One component set, web &amp; mobile`, `Best Pension 2026`],
        voice: `&ldquo;We want to make pensions cool.&rdquo; Figured it would be impossible, so I was excited to try.`,
        caption: `Penfold. First hire, to an award-winning pension.`,
        cta: `See the Penfold case`
      }
    },

    trustwallet: {
      name: `Trust Wallet`, role: `Lead Product Designer`,
      meta: `Web3 wallet · 2025`, note: `Wallet onboarding, 200M+`,
      accent: `tw`, href: `/trustwallet`, status: `short`,
      media: { type: `phones`, imgs: [`trustwallet/assets/s22-01.png`, `trustwallet/assets/s26-03.png`], alt: `Trust Wallet onboarding` },
      home: {
        title: `Wallet onboarding, rebuilt for 200 million.`,
        summary: `Lead designer on Trust Wallet's Banking and Fiat squad. I rebuilt the new-wallet and import onboarding on Binance's framework, benchmarked against Phantom.`,
        body: `At Trust Wallet, lead on the Banking and Fiat squad, I rebuilt the new-wallet and import onboarding on Binance's framework, into Trust Wallet's own design language. Benchmarked against Phantom, tuned for a first-time user, and shipped to a base of <b>200M+</b>.`,
        weave: `Then I do it at two hundred million.`,
        tags: [`200M+ users`, `New wallet + import`, `Binance framework`],
        voice: `A first-time user should feel sure at every step. So I made the situation legibly hard, and the flow calm.`,
        caption: `Trust Wallet. Onboarding, rebuilt for confidence.`,
        cta: `See the Trust Wallet case`
      }
    },

    orbis: {
      name: `Orbis Pay`, role: `Director of Design`,
      meta: `Fintech / EWA · 2020-21`, note: `Earned wage access`,
      accent: `orbis`, href: `/orbis`, status: `cut`,
      media: { type: `shot`, imgs: [`orbis/assets/01-hero.jpg`], alt: `Orbis Pay earned wage access` },
      home: {
        title: `Earned wage access, designed end to end.`,
        summary: `Director of Design for a U.S. earned-wage-access product. I designed the whole thing, from advance and savings flows to onboarding, and ran a remote team across brand and marketing too.`,
        body: `At Orbis Pay I started as a consultant and stayed on as Director of Design. I designed the full product end to end, from the core earned-advance and savings flows to a complete onboarding, and aligned Sales, Engineering, Legal, and Customer Success around it. Turning messy payroll integrations into something simple to use.`,
        weave: `I turn a payroll integration into something a person can actually use.`,
        tags: [`Director of Design`, `Full product, 0 to 1`, `Advance, savings, onboarding`],
        voice: `Complex integrations with employer payroll, made to feel like nothing on the surface.`,
        caption: `Orbis Pay. Earned wage access, designed end to end.`,
        cta: `See the Orbis Pay case`
      }
    },

    done: {
      name: `Done`, role: `Co-founder, still working on it`,
      meta: `Fitness · ongoing`, note: `Fitness app, v1 & v2`,
      accent: `done`, href: `/done`, status: `short`,
      media: { type: `shot`, imgs: [`done/assets/v1-01-hero.jpg`], alt: `DONE fitness app` },
      home: {
        title: `A gym app launched when every gym on earth closed.`,
        summary: `Co-founded a consumer fitness app, led product and design, launched it, then years later rebuilt the same idea solo for wearables.`,
        body: `DONE is my garage moment: a consumer fitness app I co-founded, leading product strategy and UX, keeping a small team aligned around a clear vision. We launched March 18th, 2020. Every gym on earth closed the following month. Years later I rebuilt the idea solo, for wearables and on-device smarts.`,
        weave: `And sometimes I just build the whole thing myself.`,
        tags: [`Co-founder`, `Native iOS`, `Rebuilt for wearables`],
        voice: `Launched the month every gym on earth closed. Timing: immaculate.`,
        caption: `DONE. A fitness app, v1 and v2, years apart.`,
        cta: `See the DONE case`
      }
    }

  },

  /* Shared bits some homes use. */
  partners: [`NFL`, `Binance`, `Coinbase`, `Circle`, `Solana`, `Twitter`, `Royal Mail`, `Samsung`],
  contact: `cesarxdesign@gmail.com`
};

/* ---- shared render helpers (used by every home) ----
   each  -> every project, in order
   lead  -> the first `featured` (the full-treatment beats)
   more  -> the tail (the "more work" entries)             */
window.SPINE._slice = function (a, b, fn) {
  window.SPINE.order.slice(a, b).forEach(function (k, i) { fn(window.SPINE.projects[k], i, k); });
};
window.SPINE.each = function (fn) { window.SPINE._slice(0, undefined, fn); };
window.SPINE.lead = function (fn) { window.SPINE._slice(0, window.SPINE.featured, fn); };
window.SPINE.more = function (fn) { window.SPINE._slice(window.SPINE.featured, undefined, fn); };
window.SPINE.media = function (m, cls) {
  var one = function (src, alt) {
    return /\.html$/.test(src)
      ? '<span class="cs"><iframe src="' + src + '" scrolling="no" loading="lazy" tabindex="-1" title="' + alt + '"></iframe></span>'
      : '<img src="' + src + '" alt="' + alt + '">';
  };
  if (m.type === 'phones') return '<div class="' + (cls || 'duo') + '">' + one(m.imgs[0], m.alt) + one(m.imgs[1], m.alt) + '</div>';
  return '<img class="shot" src="' + m.imgs[0] + '" alt="' + m.alt + '">';
};
