// Application State
const state = {
  currentPage: 'home',
  };

// Company Data
const companyData = {
  name: 'ANSHCOAT',
  tagline: 'Coat Every Tablet With Confidence',
  promise: '5 Assurances for Your Peace of Mind',
  email: 'info@anshcoat.com',
  phonePrimary: '+91-9898650649',
  phoneSecondary: '+91-7041754931',
  address: 'Vapi, Gujarat, India',
  website: 'www.anshcoat.com'
};

// Assurances Data
// Leadership Data
const leadership = [
  {
    name: 'Navanath Ambre',
    title: 'R&D Director',
    experience: '13+ Years in Tablet Coating Science',
    initials: 'NA',
    expertise: [
      'Dissolution optimization and controlled release',
      'Bulging prevention and core expansion management',
      'Moisture barrier design for long-term stability',
      'Film uniformity across challenging production scales',
      'Advanced adhesion systems and polymer chemistry',
      'Precision color matching and aesthetic excellence'
    ]
  },
  {
    name: 'Amit Surani',
    title: 'Quality Director',
    credentials: 'B.Pharm, MBA in Total Quality Management',
    experience: '15+ Years QA/RA',
    initials: 'AS',
    expertise: [
      'Expert navigation of FDCA and international standards',
      'Proactive quality management systems (QMS)',
      'Audit and inspection readiness',
      'Systematic CAPA and deviation handling',
      'Beyond Compliance: A Culture of Excellence'
    ]
  }
];

// Product Families
// Aqueous Products
const aqueousProducts = [
  {
    id: 'aqua',
    name: 'ANSHCOAT AQUA',
    polymer: 'PVA',
    solids: '20–22%',
    benefits: [
      'Direct HPMC upgrade with faster processing',
      'Robust elegant film with excellent adhesion',
      'No impact on dissolution or bioequivalence'
    ],
    idealFor: 'Standard to high-speed coating applications',
    process: 'Spray at 40-60°C inlet temperature. Weight gain: 2-3% for aesthetics, 4-6% for protection.'
  },
  {
    id: 'aqua-2.5l',
    name: 'ANSHCOAT AQUA 2.5L',
    polymer: 'PVA',
    solids: '30–35%',
    highlight: 'Revolutionary Ultra-High Solids',
    benefits: [
      'Ultra-high solids for maximum throughput',
      'Lowest water demand and fastest cycles',
      'Reduced energy consumption',
      'Up to 40% faster coating time vs traditional PVA'
    ],
    idealFor: 'High-speed, high-volume commercial manufacturing',
    process: 'Breakthrough high-solids formulation delivers unprecedented efficiency.'
  },
  {
    id: 'aqua-5l',
    name: 'ANSHCOAT AQUA 5L',
    polymer: 'PVA + HPMC Hybrid',
    solids: '17–18%',
    benefits: [
      'Hybrid efficiency faster than pure HPMC',
      'Lower temperature than pure PVA',
      'Enhanced film elasticity and durability',
      'Best of both polymer worlds'
    ],
    idealFor: 'Flexible processing with moderate API sensitivity',
    process: 'Optimal balance of speed and temperature control.'
  },
  {
    id: 'aqua-6l',
    name: 'ANSHCOAT AQUA 6L',
    polymer: 'Lactose + HPMC',
    solids: '14–15%',
    benefits: [
      'PVA-free for heat-sensitive tablets',
      'Reduced thermal exposure and coating time',
      'Cost-effective functional film',
      'Excellent for budget-conscious projects'
    ],
    idealFor: 'Heat-sensitive APIs, budget-conscious formulators',
    process: 'Lower processing temperatures protect sensitive cores.'
  },
  {
    id: 'aqua-7l',
    name: 'ANSHCOAT AQUA 7L',
    polymer: 'HPC + HPMC',
    solids: '11–12%',
    benefits: [
      'Enhanced elasticity for friable cores',
      'Moisture barrier function',
      'Superior adhesion on difficult surfaces',
      'Protective coating for challenging formulations'
    ],
    idealFor: 'Soft, friable, or highly moisture-sensitive cores',
    process: 'Exceptional adhesion prevents film cracking on delicate cores.'
  },
  {
    id: 'aqua-8l',
    name: 'ANSHCOAT AQUA 8L',
    polymer: 'HPMC',
    solids: '12–13%',
    benefits: [
      'Traditional versatile system',
      'Broad API compatibility',
      'Proven regulatory acceptance',
      'Industry-standard reliability'
    ],
    idealFor: 'Standard coating needs, maximum compatibility',
    process: 'Time-tested formulation with comprehensive regulatory support.'
  }
];

// Solvent & Barrier Products
const solventProducts = [
  {
    id: 'organic',
    name: 'ANSHCOAT ORGANIC',
    polymer: 'HPMC',
    solvent: 'IPA / MDC',
    solids: '5–6%',
    benefits: [
      'Complete moisture avoidance',
      'Exceptionally fast processing',
      'Reliable functional film',
      'Ideal for hygroscopic APIs'
    ],
    idealFor: 'Moisture-sensitive or hygroscopic APIs'
  },
  {
    id: 'protect-organic',
    name: 'ANSHCOAT PROTECT ORGANIC',
    polymer: 'HPMC + Ethyl Cellulose',
    solvent: 'IPA / MDC',
    solids: '5–6%',
    benefits: [
      'Exceptional moisture barrier',
      'Enhanced drug stability and shelf life',
      'Robust protective film',
      'Superior barrier performance'
    ],
    idealFor: 'Highly moisture-sensitive APIs, extended shelf-life requirements'
  },
  {
    id: 'universal',
    name: 'ANSHCOAT UNIVERSAL',
    polymer: 'HPMC',
    formats: [
      { type: 'Aqueous', solids: '11–12%' },
      { type: 'Solvent (IPA/MDC)', solids: '5–6%' },
      { type: 'Hydroalcoholic (Water/IPA)', solids: '9–11%' }
    ],
    benefits: [
      'Ultimate flexibility across solvent systems',
      'Same polymer, multiple processing options',
      'Simplified qualification',
      'Adapt to any manufacturing environment'
    ],
    idealFor: 'Diverse API portfolio, flexible manufacturing'
  },
  {
    id: 'protect-aqua',
    name: 'ANSHCOAT PROTECT AQUA',
    polymer: 'PVA + Lecithin + Xanthan Gum',
    solvent: 'Water',
    solids: '20%',
    benefits: [
      'Advanced aqueous moisture barrier',
      'High solids for fast processing',
      'Enhanced humidity protection',
      'Avoids solvent complexity'
    ],
    idealFor: 'Moisture protection without solvent complexity'
  }
];

// Enteric Products
const entericProducts = [
  {
    id: 'ent-aqua',
    name: 'ANSHCOAT ENT AQUA',
    polymer: 'Methacrylic Acid–Ethyl Acrylate (1:1) Type B',
    solvent: 'Aqueous',
    solids: '20%',
    benefits: [
      'Eliminates flammable solvents',
      'Tack-free with strong acid resistance',
      'Excellent color stability, no bleeding',
      'Safe, high-volume production'
    ],
    idealFor: 'Safety-focused operations, high-volume enteric coating'
  },
  {
    id: 'ent-organic',
    name: 'ANSHCOAT ENT ORGANIC',
    polymer: 'Methacrylic Acid–Methyl Methacrylate (1:1)',
    solvent: 'IPA / MDC',
    solids: '7–8%',
    benefits: [
      'Solvent-based ready-to-use',
      'Strong acid resistance',
      'Stable color integration',
      'Traditional reliable performance'
    ],
    idealFor: 'Traditional enteric coating, moisture-sensitive APIs'
  },
  {
    id: 'ent-pro',
    name: 'ANSHCOAT ENT PRO',
    polymer: 'HPMCP',
    solvent: 'Aqueous or Hydroalcoholic',
    solids: '5–6%',
    benefits: [
      'Precise intestinal release',
      'Minimizes drug loss in stomach',
      'Excellent mechanical integrity',
      'Premium enteric protection'
    ],
    idealFor: 'High-value APIs, precise release requirements'
  },
  {
    id: 'ent-advance',
    name: 'ANSHCOAT ENT ADVANCE',
    polymer: 'CAP (Cellulose Acetate Phthalate)',
    solvent: 'Aqueous or Hydroalcoholic',
    solids: '5–6%',
    benefits: [
      'Strong gastric protection',
      'Shields acid-labile APIs',
      'Proven integrity across core types',
      'Maximum acid resistance'
    ],
    idealFor: 'Highly acid-sensitive APIs'
  }
];

// Coating Challenges
const challenges = [
  {
    id: 'enteric',
    name: 'Enteric Dissolution Failures',
    symptoms: [
      'Acid-stage failure (>10% drug release in pH 1.2)',
      'Incomplete enteric protection',
      'Buffer-stage dissolution issues'
    ],
    causes: [
      'Insufficient coating weight gain',
      'Incomplete curing or improper curing conditions',
      'Film defects or mechanical damage'
    ],
    solutions: [
      'ANSHCOAT ENT AQUA for high-solids aqueous processing',
      'Optimize weight gain (typically 6-10% for full protection)',
      'Implement proper curing protocol (50-60°C for 24-48 hours)'
    ]
  },
  {
    id: 'bulging',
    name: 'Bulging & Gas Formation',
    symptoms: [
      'Strip/blister bulging after packaging',
      'Tablet cracking or rupture during storage',
      'Shelf-life stability failures'
    ],
    causes: [
      'Moisture uptake by hygroscopic cores',
      'Chemical reactions generating gas',
      'Inadequate moisture barrier protection'
    ],
    solutions: [
      'ANSHCOAT AQUA 7L for elastic, breathable protection',
      'ANSHCOAT PROTECT AQUA or PROTECT ORGANIC for moisture barrier',
      'Control drying to <2% moisture before packaging'
    ]
  },
  {
    id: 'rough',
    name: 'Rough Film / Orange Peel',
    symptoms: [
      'Uneven surface texture',
      'Mottled or dimpled appearance',
      'Poor brand aesthetics and consumer appeal'
    ],
    causes: [
      'Improper spray atomization or droplet size',
      'Too rapid drying or high inlet temperature',
      'Viscosity issues in coating solution'
    ],
    solutions: [
      'ANSHCOAT AQUA for superior leveling properties',
      'Optimize spray rate and atomization pressure',
      'Reduce inlet temperature to allow proper film formation'
    ]
  },
  {
    id: 'dots',
    name: 'Color Dots & Specks',
    symptoms: [
      'Undispersed pigment particles visible on tablets',
      'Non-uniform color appearance',
      'Batch rejection due to aesthetic defects'
    ],
    causes: [
      'Inadequate pigment dispersion',
      'Poor mixing or insufficient shear',
      'Pigment agglomeration during storage'
    ],
    solutions: [
      'All ANSHCOAT solutions pass 100# sieve guarantee',
      'Follow optimized dispersion protocols',
      'Use high-shear mixing for proper pigment wetting'
    ]
  },
  {
    id: 'uneven',
    name: 'Uneven Coating',
    symptoms: [
      'Inconsistent film thickness across batch',
      'Exposed core areas or thin spots',
      'Color intensity variation within batch'
    ],
    causes: [
      'Poor pan loading or tablet bed dynamics',
      'Incorrect spray gun positioning',
      'Inadequate pan speed or spray pattern'
    ],
    solutions: [
      'Optimize pan loading (40-60% fill)',
      'Position spray guns for optimal coverage',
      'Monitor process parameters continuously'
    ]
  }
];

// Articles Data
// Page Content Generators
function renderHomePage() {
  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>${companyData.tagline}</h1>
          <p class="hero-description"><ul class="hero-points hero-points--icons">
  <li>
    <i class="fas fa-certificate"></i>
    <span>FDA-approved manufacturing facility</span>
  </li>
  <li>
    <i class="fas fa-flask"></i>
    <span>Expert R&amp;D in formulation &amp; coating</span>
  </li>
  <li>
    <i class="fas fa-shield-alt"></i>
    <span>Comprehensive quality systems</span>
  </li>
</ul></p>
          <div class="hero-cta">
            <button class="btn btn--lg" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Free Samples</button>
            <button class="btn btn--outline btn--lg" onclick="openModal('expertModal')"><i class="fas fa-user-tie"></i> Talk to Expert</button>
            <a href="assets/docs/ANSHCOAT_Product_Catalogue.pdf" class="btn btn--outline btn--lg" download target="_blank"><i class="fas fa-download"></i> Download Catalogue</a>
          </div>
        </div>
      </div>
    </section>

<section class="assurance-script-section">
  <div class="container">
    <h2 class="assurance-script-heading"><span class="assurance-image-wrap" aria-hidden="true">
  <img
    src="data:image/png;base64,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"
    alt="5 assurances"
    class="assurance-image-5"
  />
</span> Assurances for Your Peace of Mind</h2>
  </div>
</section>

<section class="features-section">
  <div class="container">

    <div class="feature-card">
      <img src="assets/images/features/sample-leadtime.png" alt="Accelerated Project Lead Time">
      <h3>Accelerated Project Lead Time</h3>
      <p>Max 1 week lead time for development and sample delivery.</p>
    </div>

    <div class="feature-card">
      <img src="assets/images/features/support-247.png" alt="24/7 After Sales Support">
      <h3>24/7 After-Sales Support</h3>
      <p>Onsite and over-the-call technical assistance.</p>
    </div>

    <div class="feature-card">
      <img src="assets/images/features/colour-consistency.png" alt="Consistent Colour Match">
      <h3>Consistent Colour Match Every Time</h3>
      <p>Guaranteed batch-to-batch colour consistency.</p>
    </div>

    <div class="feature-card">
      <img src="assets/images/features/solution-filtration.png" alt="100% Solution Filtration">
      <h3>100% Solution Passing Through 100#</h3>
      <p>Uniform solution filtration for defect-free coating.</p>
    </div>

    <div class="feature-card">
      <img src="assets/images/features/uniform-powder.png" alt="Uniform Fine Powder">
      <h3>Uniform Fine Powder</h3>
      <p>No undispersed material. Smooth, even coating.</p>
    </div>

  </div>
</section>


    

    

    <!-- Coating Challenges Teaser -->
    <section class="section" >
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">We Solve Your Coating Challenges</h2>
          <p class="section-subtitle">From troubleshooting to optimization, our team has seen it all</p>
        </div>

        <div class="challenge-layout-row">
          <div class="challenge-expert-block">
            <img src="assets/images/challenges/expert-at-work.png"
                 alt="Tablet coating expert inspecting coated tablets in GMP lab">
          </div>
        <div class="challenge-grid">
          ${challenges.map(challenge => `
            <div class="challenge-item">
              <img
                class="challenge-img"
                src="assets/images/challenges/${challenge.id === 'dots' ? 'color.png' : challenge.id + '.png'}"
                alt="${challenge.name}"
              />
              <span>${challenge.name}</span>
            </div>
          `).join('')}
        </div>
        </div>
        <div >
          <button class="btn btn--primary btn--lg" onclick="navigateTo('solutions')">Explore Solutions <i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </section>

    

    

    <!-- Final CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Transform Your Coating Challenges?</h2>
          <p>Connect with our experts today and discover the ANSHCOAT difference</p>
          <div class="cta-buttons">
            <button class="btn btn--lg" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Free Samples</button>
            <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-phone"></i> Schedule Consultation</button>
            <button class="btn btn--lg" onclick="navigateTo('contact')"><i class="fas fa-envelope"></i> Contact Us</button>
          </div>
          <div >
            <p><i class="fas fa-phone"></i> ${companyData.phonePrimary} &nbsp;|&nbsp; <i class="fas fa-envelope"></i> ${companyData.email}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About ANSHCOAT</h2>
          <p class="section-subtitle">Your trusted partner in tablet coating excellence</p>
        </div>

        <!-- Story Hero -->
        <div id="story">
          <div class="story-hero">
            <div class="story-hero-content">
              <h2>Partnering for Pharmaceutical Excellence</h2>
              <p>Built on quality, transparency, and long-term commitment</p>
            </div>
          </div>
          
          <div class="content-rich-text">
            <p>
              ANSHCOAT is more than a coating supplier—we are your coating partner. Built on a foundation of quality, transparency, and long-term commitment, we understand that your tablet coating challenges demand more than just materials; they require expertise, reliability, and genuine partnership.
            </p>
            <p>
              Every product we develop is backed by rigorous R&D, validated manufacturing processes, and unwavering quality standards. From our FDA-approved facility to our 24/7 technical support, we're dedicated to your success at every stage of your coating journey.
            </p>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="stats-section">
          <div class="stats-content">
            <h2 style="color: white; margin-bottom: 8px;">Trust in Numbers</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto;">Proven expertise delivering results</p>
            
            <div class="stats-grid">
              <div class="stat-item">
                <h3>13+</h3>
                <p>Years of R&D Expertise</p>
              </div>
              <div class="stat-item">
                <h3>500+</h3>
                <p>Successful Coating Projects</p>
              </div>
              <div class="stat-item">
                <h3>1 Week</h3>
                <p>Average Sample Delivery</p>
              </div>
              <div class="stat-item">
                <h3>97%</h3>
                <p>Customer Retention Rate</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Vision & Mission -->
        <div id="vision">
          <h3 class="section-subtitle" style="text-align: center; margin-bottom: 32px;">Vision & Mission</h3>
          
          <div class="vision-grid">
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h4>Our Vision</h4>
              <p>"To be your most trusted partner in tablet coating—combining innovation, reliability, and regulatory confidence as we grow ANSHCOAT to a 100 Cr. value by 2030."</p>
            </div>
            
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h4>Our Mission</h4>
              <p>To deliver coating excellence through customer-focused innovation, ethical practices, and unwavering quality standards that set new industry benchmarks.</p>
            </div>
          </div>

          <!-- Mission Pillars -->
          <h4 style="text-align: center; margin: 48px 0 24px; font-size: var(--font-size-2xl); color: var(--color-text);">Mission Pillars</h4>
          
          <div class="vision-grid">
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-users"></i>
              </div>
              <h4>Customer Focus</h4>
              <p>Prioritizing customer needs and creating measurable value in everything we do.</p>
            </div>
            
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h4>Ethical Business</h4>
              <p>Upholding integrity and responsible dealings with all stakeholders.</p>
            </div>
            
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-eye"></i>
              </div>
              <h4>Transparency</h4>
              <p>Open communication and honest relationships with customers and partners.</p>
            </div>
            
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-arrow-up"></i>
              </div>
              <h4>Continuous Improvement</h4>
              <p>Focus on learning and adapting to latest systems and technologies.</p>
            </div>
            
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h4>Employee Well-being</h4>
              <p>Fostering supportive and inclusive environment for our team.</p>
            </div>
            
            <div class="vision-card">
              <div class="vision-card-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h4>Collaboration</h4>
              <p>Working together and valuing all contributions to achieve excellence.</p>
            </div>
          </div>
        </div>

        <!-- Leadership Team -->
        <div id="leadership">
          <h3 style="text-align: center; margin: 48px 0 32px; font-size: var(--font-size-3xl); color: var(--color-text);">Leadership Team</h3>
          
          ${leadership.map(leader => `
            <div class="leader-card-enhanced">
              <div class="leader-header-enhanced">
                <div class="leader-avatar-enhanced">${leader.initials}</div>
                <div class="leader-info-enhanced">
                  <h3>${leader.name}</h3>
                  <div class="leader-title-enhanced">${leader.title}</div>
                  <div class="leader-experience-enhanced">${leader.experience}</div>
                  ${leader.credentials ? `<div style="margin-top: 8px; color: var(--color-text-secondary); font-size: var(--font-size-sm);"><i class="fas fa-graduation-cap"></i> ${leader.credentials}</div>` : ''}
                </div>
              </div>
              
              <div style="margin: 20px 0;">
                <h4 style="color: var(--color-text); margin-bottom: 12px; font-size: var(--font-size-lg);">Key Expertise Areas</h4>
                <div class="expertise-tags">
                  ${leader.expertise.map(item => `<span class="expertise-tag">${item}</span>`).join('')}
                </div>
              </div>
              
              <div style="border-top: 1px solid var(--color-border); padding-top: 20px; margin-top: 20px;">
                <p style="color: var(--color-text-secondary); font-style: italic;">
                  "Bringing scientific rigor and practical solutions to every coating challenge."
                </p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Our Journey Timeline -->
        <div style="margin: 60px 0;">
          <h3 style="text-align: center; margin-bottom: 40px; font-size: var(--font-size-3xl); color: var(--color-text);">Our Journey</h3>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-year">2012</div>
              <div class="timeline-content">
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">Foundation</h4>
                <p>ANSHCOAT established with vision to revolutionize tablet coating solutions</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-year">2015</div>
              <div class="timeline-content">
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">FDA Approval</h4>
                <p>Manufacturing facility receives FDA approval for GMP compliance</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-year">2018</div>
              <div class="timeline-content">
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">Expansion</h4>
                <p>Complete aqueous and enteric coating portfolio launched</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-year">2023</div>
              <div class="timeline-content">
                <h4 style="color: var(--color-primary); margin-bottom: 8px;">Innovation</h4>
                <p>Revolutionary high-solids AQUA 2.5L system introduced</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Our Facility -->
        <div id="facility">
          <h3 style="text-align: center; margin: 60px 0 40px; font-size: var(--font-size-3xl); color: var(--color-text);">Our Facility</h3>
          
          <div class="content-rich-text" style="max-width: 800px; margin: 0 auto 40px;">
            <p style="text-align: center; font-size: var(--font-size-lg);">
              Our FDA-approved, regulatory-compliant manufacturing facility is the foundation of our quality promise. Every batch is produced under validated processes with robust documentation and audit-ready culture.
            </p>
          </div>
          
          <div class="facility-showcase">
            <div class="facility-item">
              <div class="facility-icon">
                <i class="fas fa-certificate"></i>
              </div>
              <div class="facility-content">
                <h4>FDA-Approved</h4>
                <p>Fully compliant manufacturing facility meeting all regulatory requirements</p>
              </div>
            </div>
            
            <div class="facility-item">
              <div class="facility-icon">
                <i class="fas fa-clipboard-check"></i>
              </div>
              <div class="facility-content">
                <h4>Validated Processes</h4>
                <p>Complete IQ/OQ/PQ documentation packages for every product</p>
              </div>
            </div>
            
            <div class="facility-item">
              <div class="facility-icon">
                <i class="fas fa-file-alt"></i>
              </div>
              <div class="facility-content">
                <h4>Complete Documentation</h4>
                <p>Comprehensive regulatory support and batch traceability</p>
              </div>
            </div>
            
            <div class="facility-item">
              <div class="facility-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="facility-content">
                <h4>Audit-Ready</h4>
                <p>Culture of quality and transparency welcomes inspections</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 48px; padding: 32px; background: rgba(var(--color-primary-rgb), 0.05); border-radius: var(--radius-lg); border: 1px solid rgba(var(--color-primary-rgb), 0.1);">
            <h4 style="color: var(--color-primary); margin-bottom: 16px; font-size: var(--font-size-xl);">Quality Commitment</h4>
            <p style="color: var(--color-text-secondary); max-width: 600px; margin: 0 auto;">
              We maintain a perpetually inspection-ready facility with trained personnel, organized documentation, and transparent processes that welcome customer and regulatory audits as opportunities to demonstrate our commitment to quality.
            </p>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="cta-section" style="margin-top: 60px;">
          <div class="cta-content">
            <h2>Ready to Experience ANSHCOAT Excellence?</h2>
            <p>Partner with us for coating solutions backed by expertise and quality</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Free Samples</button>
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-user-tie"></i> Schedule Facility Tour</button>
              <button class="btn btn--lg" onclick="navigateTo('quality')"><i class="fas fa-download"></i> View Quality Documents</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProductsAqueousPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Aqueous Film Coatings</h2>
          <p class="section-subtitle">High-performance PVA and HPMC systems for immediate release applications</p>
        </div>

        <div >
          <p >
            Our aqueous film coating portfolio offers unmatched versatility from traditional HPMC to revolutionary high-solids PVA systems. Whether you're optimizing for speed, temperature sensitivity, or cost-effectiveness, we have the perfect solution for your coating needs.
          </p>
        </div>

        <!-- Comparison Table -->
        <h3 >Product Comparison</h3>
        <div >
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Polymer Base</th>
                <th>Solids %</th>
                <th>Key Advantage</th>
                <th>Ideal Application</th>
              </tr>
            </thead>
            <tbody>
              ${aqueousProducts.map(product => `
                <tr>
                  <td >${product.name}</td>
                  <td>${product.polymer}</td>
                  <td>${product.solids}</td>
                  <td>${product.benefits[0]}</td>
                  <td>${product.idealFor}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Individual Products -->
        <h3 >Detailed Product Information</h3>
        
        ${aqueousProducts.map(product => `
          <div class="accordion ${product.id === 'aqua' ? 'active' : ''}" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>${product.name} ${product.highlight ? `<span >• ${product.highlight}</span>` : ''}</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <div >
                  <div>
                    <strong >Polymer Base:</strong>
                    <p >${product.polymer}</p>
                  </div>
                  <div>
                    <strong >Solids Content:</strong>
                    <p >${product.solids}</p>
                  </div>
                </div>
                
                <h4 >Key Benefits</h4>
                <ul >
                  ${product.benefits.map(benefit => `
                    <li >
                      <i class="fas fa-check" ></i>
                      ${benefit}
                    </li>
                  `).join('')}
                </ul>
                
                <h4 >Ideal For</h4>
                <p >${product.idealFor}</p>
                
                <h4 >Process Notes</h4>
                <p >${product.process}</p>
                
                <div >
                  <button class="btn btn--primary" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Samples</button>
                  <button class="btn btn--outline" onclick="showToast('Technical data sheet download initiated', 'success')"><i class="fas fa-file-pdf"></i> Download TDS</button>
                  <button class="btn btn--outline" onclick="openModal('expertModal')"><i class="fas fa-phone"></i> Discuss Application</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}

        <!-- Selection Guide CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Need Help Selecting the Right Product?</h2>
            <p>Our technical team can help you choose the optimal coating system for your specific needs</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-user-tie"></i> Consult Our Experts</button>
              <button class="btn btn--lg" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Sample Kit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProductsSolventPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Solvent & Barrier Coatings</h2>
          <p class="section-subtitle">Versatile protection systems for moisture-sensitive APIs and extended stability</p>
        </div>

        <div >
          <p >
            When moisture sensitivity is a concern, our solvent-based and advanced barrier coating systems deliver exceptional protection. From complete moisture avoidance to aqueous barrier technologies, we provide the flexibility your formulations demand.
          </p>
        </div>

        <!-- Comparison Table -->
        <h3 >Product Comparison</h3>
        <div >
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Polymer Base</th>
                <th>Solvent System</th>
                <th>Solids %</th>
                <th>Primary Benefit</th>
              </tr>
            </thead>
            <tbody>
              ${solventProducts.map(product => `
                <tr>
                  <td >${product.name}</td>
                  <td>${product.polymer}</td>
                  <td>${product.solvent || 'Multiple'}</td>
                  <td>${product.solids || 'Variable'}</td>
                  <td>${product.benefits[0]}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Individual Products -->
        <h3 >Detailed Product Information</h3>
        
        ${solventProducts.map((product, index) => `
          <div class="accordion ${index === 0 ? 'active' : ''}" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>${product.name}</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <div >
                  <div>
                    <strong >Polymer Base:</strong>
                    <p >${product.polymer}</p>
                  </div>
                  <div>
                    <strong >Solvent System:</strong>
                    <p >${product.solvent || 'Multiple Options'}</p>
                  </div>
                  ${product.solids ? `
                    <div>
                      <strong >Solids Content:</strong>
                      <p >${product.solids}</p>
                    </div>
                  ` : ''}
                </div>
                
                ${product.formats ? `
                  <h4 >Available Formats</h4>
                  <div >
                    ${product.formats.map(format => `
                      <div >
                        <strong >${format.type}:</strong> ${format.solids} solids
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                
                <h4 >Key Benefits</h4>
                <ul >
                  ${product.benefits.map(benefit => `
                    <li >
                      <i class="fas fa-check" ></i>
                      ${benefit}
                    </li>
                  `).join('')}
                </ul>
                
                <h4 >Ideal For</h4>
                <p >${product.idealFor}</p>
                
                <div >
                  <button class="btn btn--primary" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Samples</button>
                  <button class="btn btn--outline" onclick="showToast('Technical data sheet download initiated', 'success')"><i class="fas fa-file-pdf"></i> Download TDS</button>
                  <button class="btn btn--outline" onclick="openModal('expertModal')"><i class="fas fa-phone"></i> Discuss Application</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}

        <!-- CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Moisture Protection Expertise</h2>
            <p>Let our team help you design the optimal barrier coating strategy for your product</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-comments"></i> Schedule Consultation</button>
              <button class="btn btn--lg" onclick="navigateTo('solutions')"><i class="fas fa-lightbulb"></i> View Solutions</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Continue in next part due to length...
function renderProductsEntericPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Enteric Coatings</h2>
          <p class="section-subtitle">Precise intestinal drug delivery with aqueous and solvent-based systems</p>
        </div>

        <div >
          <p >
            Our comprehensive enteric coating portfolio ensures reliable gastric protection and precise intestinal release. From safety-focused aqueous systems to traditional solvent-based formulations, we deliver proven acid resistance and dissolution performance.
          </p>
        </div>

        <!-- Comparison Table -->
        <h3 >Polymer Selection Guide</h3>
        <div >
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Polymer Type</th>
                <th>System</th>
                <th>Solids %</th>
                <th>Primary Application</th>
              </tr>
            </thead>
            <tbody>
              ${entericProducts.map(product => `
                <tr>
                  <td >${product.name}</td>
                  <td>${product.polymer}</td>
                  <td>${product.solvent}</td>
                  <td>${product.solids}</td>
                  <td>${product.idealFor}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Individual Products -->
        <h3 >Detailed Product Information</h3>
        
        ${entericProducts.map((product, index) => `
          <div class="accordion ${index === 0 ? 'active' : ''}" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>${product.name}</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <div >
                  <div>
                    <strong >Polymer Type:</strong>
                    <p >${product.polymer}</p>
                  </div>
                  <div>
                    <strong >Solvent System:</strong>
                    <p >${product.solvent}</p>
                  </div>
                  <div>
                    <strong >Solids Content:</strong>
                    <p >${product.solids}</p>
                  </div>
                </div>
                
                <h4 >Key Benefits</h4>
                <ul >
                  ${product.benefits.map(benefit => `
                    <li >
                      <i class="fas fa-check" ></i>
                      ${benefit}
                    </li>
                  `).join('')}
                </ul>
                
                <h4 >Ideal For</h4>
                <p >${product.idealFor}</p>
                
                <div >
                  <h5 ><i class="fas fa-info-circle" ></i> Application Guidelines</h5>
                  <p >
                    Typical weight gain: 6-10% for complete gastric protection. Curing recommended at 50-60°C for 24-48 hours for optimal film formation and dissolution performance.
                  </p>
                </div>
                
                <div >
                  <button class="btn btn--primary" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Samples</button>
                  <button class="btn btn--outline" onclick="showToast('Dissolution data package download initiated', 'success')"><i class="fas fa-chart-line"></i> Download Dissolution Data</button>
                  <button class="btn btn--outline" onclick="openModal('expertModal')"><i class="fas fa-phone"></i> Technical Support</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}

        <!-- Enteric Coating Best Practices -->
        <div >
          <h3 >Enteric Coating Best Practices</h3>
          <div >
            <div>
              <h4 ><i class="fas fa-weight"></i> Weight Gain</h4>
              <p >Ensure adequate coating thickness (6-10% typical) for complete acid protection</p>
            </div>
            <div>
              <h4 ><i class="fas fa-temperature-high"></i> Curing</h4>
              <p >Proper curing (50-60°C, 24-48 hrs) is critical for film coalescence</p>
            </div>
            <div>
              <h4 ><i class="fas fa-vial"></i> Testing</h4>
              <p >USP dissolution testing: <10% release at pH 1.2, >75% at pH 6.8</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Enteric Coating Challenges?</h2>
            <p>Our experts can help troubleshoot dissolution failures and optimize your enteric coating process</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="navigateTo('solutions')"><i class="fas fa-tools"></i> View Solutions</button>
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-user-md"></i> Consult Expert</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderProductsSpecialPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Special Products</h2>
          <p class="section-subtitle">Innovative solutions for unique coating requirements</p>
        </div>

        <!-- TiO2-Free Systems -->
        <div >
          <div >
            <div ><i class="fas fa-leaf"></i></div>
            <div>
              <h3 >Titanium Dioxide-Free Systems</h3>
              <p >Clean-label coating solutions for regulatory compliance and consumer preference</p>
            </div>
          </div>
          
          <h4 >The Challenge</h4>
          <p >
            Titanium dioxide (E171/TiO₂) faces increasing regulatory scrutiny in Europe and consumer concerns globally. Pharmaceutical manufacturers need compliant, aesthetically-pleasing alternatives that maintain brand identity without compromising quality.
          </p>
          
          <h4 >ANSHCOAT Solution</h4>
          <p >
            Our TiO₂-free coating systems utilize alternative opacifiers and optimized pigment combinations to deliver brilliant, opaque films without titanium dioxide. Achieve clean-label compliance while maintaining the vibrant colors and opacity your brand demands.
          </p>
          
          <div >
            <div >
              <h5 ><i class="fas fa-check-circle" ></i> Regulatory Compliance</h5>
              <p >Fully compliant with evolving EU and global regulations</p>
            </div>
            <div >
              <h5 ><i class="fas fa-paint-brush" ></i> Aesthetic Excellence</h5>
              <p >Vibrant colors with excellent opacity and coverage</p>
            </div>
            <div >
              <h5 ><i class="fas fa-globe" ></i> Global Markets</h5>
              <p >Market access without TiO₂ restrictions</p>
            </div>
          </div>
          
          <div >
            <button class="btn btn--primary" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request TiO₂-Free Samples</button>
            <button class="btn btn--outline" onclick="openModal('expertModal')"><i class="fas fa-comments"></i> Discuss Formulation</button>
          </div>
        </div>

        <!-- Metallic/Pearl Shades -->
        <div >
          <div >
            <div ><i class="fas fa-gem"></i></div>
            <div>
              <h3 >Metallic & Pearl Effect Coatings</h3>
              <p >Premium aesthetics for brand differentiation and market distinction</p>
            </div>
          </div>
          
          <p >
            Elevate your tablet presentation with sophisticated metallic and pearlescent finishes. Our special effect coating systems deliver eye-catching aesthetics that enhance brand perception and product differentiation in competitive markets.
          </p>
          
          <h4 >Available Finishes</h4>
          <div >
            <div >
              <i class="fas fa-circle" ></i>
              <p >Silver</p>
            </div>
            <div >
              <i class="fas fa-circle" ></i>
              <p >Gold</p>
            </div>
            <div >
              <i class="fas fa-circle" ></i>
              <p >Copper</p>
            </div>
            <div >
              <i class="fas fa-circle" ></i>
              <p >Pearl White</p>
            </div>
          </div>
          
          <h4 >Ideal Use Cases</h4>
          <ul >
            <li >
              <i class="fas fa-star" ></i>
              Premium and high-value pharmaceutical products
            </li>
            <li >
              <i class="fas fa-star" ></i>
              Brand differentiation in competitive therapeutic categories
            </li>
            <li >
              <i class="fas fa-star" ></i>
              Nutraceuticals and OTC products seeking shelf appeal
            </li>
            <li >
              <i class="fas fa-star" ></i>
              Anniversary editions and special formulations
            </li>
          </ul>
          
          <h4 >Process Considerations</h4>
          <div >
            <p >
              Metallic and pearl coatings require careful process control for uniform effect distribution. Our technical team provides complete processing guidelines, optimization support, and color matching services to achieve your desired aesthetic outcome.
            </p>
          </div>
          
          <h4 >Customization Services</h4>
          <p >
            We offer bespoke color matching and effect customization to create truly unique finishes that align perfectly with your brand identity and market positioning.
          </p>
          
          <div >
            <button class="btn btn--primary" onclick="openModal('sampleModal')"><i class="fas fa-palette"></i> Request Color Samples</button>
            <button class="btn btn--outline" onclick="openModal('expertModal')"><i class="fas fa-swatchbook"></i> Custom Color Matching</button>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Unique Coating Requirements?</h2>
            <p>Let's create custom solutions that set your products apart</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-lightbulb"></i> Discuss Your Vision</button>
              <button class="btn btn--lg" onclick="openModal('sampleModal')"><i class="fas fa-flask"></i> Request Development Samples</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSolutionsPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Coating Solutions by Challenge</h2>
          <p class="section-subtitle">Systematic approaches to your most critical coating problems</p>
        </div>

        <div >
          <p >
            Drawing on 13+ years of R&D expertise and countless successful troubleshooting projects, we've developed proven solutions for the industry's most persistent coating challenges. Each solution combines the right product selection with optimized process parameters and expert support.
          </p>
        </div>

        ${challenges.map((challenge, index) => `
          <div class="accordion ${index === 0 ? 'active' : ''}" onclick="toggleAccordion(event)" >
            <div class="accordion-header">
              <h3><i class="fas fa-exclamation-triangle" ></i>${challenge.name}</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <h4 ><i class="fas fa-stethoscope" ></i> Symptoms</h4>
                <ul >
                  ${challenge.symptoms.map(symptom => `
                    <li >
                      <i class="fas fa-circle" ></i>
                      ${symptom}
                    </li>
                  `).join('')}
                </ul>
                
                ${challenge.causes ? `
                  <h4 ><i class="fas fa-search" ></i> Root Causes</h4>
                  <ul >
                    ${challenge.causes.map(cause => `
                      <li >
                        <i class="fas fa-arrow-right" ></i>
                        ${cause}
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
                
                <h4 ><i class="fas fa-check-circle" ></i> ANSHCOAT Solutions</h4>
                <div >
                  <ul >
                    ${challenge.solutions.map(solution => `
                      <li >
                        <i class="fas fa-check" ></i>
                        ${solution}
                      </li>
                    `).join('')}
                  </ul>
                </div>
                
                <div >
                  <h5 ><i class="fas fa-lightbulb" ></i> Expert Support Available</h5>
                  <p >
                    Our technical team can analyze your specific batch data, process parameters, and formulation details to provide targeted recommendations. We offer on-site troubleshooting, remote consultation, and comprehensive process optimization support.
                  </p>
                </div>
                
                <div >
                  <button class="btn btn--primary" onclick="openModal('expertModal')"><i class="fas fa-user-md"></i> Request Diagnostic Call</button>
                  <button class="btn btn--outline" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Try Recommended Products</button>
                  <button class="btn btn--outline" onclick="showToast('Troubleshooting guide download initiated', 'success')"><i class="fas fa-file-download"></i> Download Guide</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}

        <!-- Technical Support CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Still Facing Coating Challenges?</h2>
            <p>Our expert team is available 24/7 to help diagnose and resolve your specific issues</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-headset"></i> Get Technical Support</button>
              <button class="btn btn--lg" onclick="navigateTo('support')"><i class="fas fa-tools"></i> View All Services</button>
            </div>
            <div >
              <p><strong>24/7 Support Hotline:</strong> ${companyData.phonePrimary}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderQualityPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Quality & Regulatory Excellence</h2>
          <p class="section-subtitle">FDA-approved facility with comprehensive quality systems and audit-ready culture</p>
        </div>

        <!-- FDA-Approved Manufacturing -->
        <div >
          <div >
            <div ><i class="fas fa-certificate"></i></div>
            <div>
              <h3 >FDA-Approved Manufacturing</h3>
              <p >Regulatory confidence from facility to final product</p>
            </div>
          </div>
          
          <p >
            Our manufacturing facility maintains full FDA approval and GMP compliance, ensuring every ANSHCOAT product meets the highest regulatory standards. This isn't just about passing inspections—it's about building a culture of quality that permeates every aspect of our operations.
          </p>
          
          <h4 >What This Means for You</h4>
          <ul >
            <li >
              <i class="fas fa-check-circle" ></i>
              Complete regulatory documentation packages ready for your DMF submissions
            </li>
            <li >
              <i class="fas fa-check-circle" ></i>
              Confidence during health authority inspections and audits
            </li>
            <li >
              <i class="fas fa-check-circle" ></i>
              Traceability and batch documentation that exceeds compliance requirements
            </li>
            <li >
              <i class="fas fa-check-circle" ></i>
              Global market access with validated manufacturing processes
            </li>
          </ul>
        </div>

        <!-- Validated Processes -->
        <div >
          <h3 ><i class="fas fa-clipboard-check" ></i>Validated Processes</h3>
          <p >
            Every ANSHCOAT product is manufactured using fully validated processes with complete IQ/OQ/PQ documentation. Our validation protocols ensure consistent quality, batch-to-batch reproducibility, and regulatory compliance.
          </p>
          
          <h4 >Documentation Packages Include:</h4>
          <div >
            <div >
              <h5 >Installation Qualification</h5>
              <p >Equipment verification and calibration records</p>
            </div>
            <div >
              <h5 >Operational Qualification</h5>
              <p >Process parameter validation protocols</p>
            </div>
            <div >
              <h5 >Performance Qualification</h5>
              <p >Batch consistency and reproducibility data</p>
            </div>
          </div>
        </div>

        <!-- Quality Management System -->
        <div >
          <h3 ><i class="fas fa-shield-alt" ></i>Quality Management System</h3>
          
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-tasks"></i></div>
              <h3 class="feature-title">Quality Planning</h3>
              <p class="feature-description">Proactive quality objectives, risk assessment, and continuous improvement targets built into every process.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-cogs"></i></div>
              <h3 class="feature-title">Quality Control</h3>
              <p class="feature-description">Rigorous in-process and final product testing with validated analytical methods and release criteria.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-check-double"></i></div>
              <h3 class="feature-title">Quality Assurance</h3>
              <p class="feature-description">Independent QA oversight, batch record review, and comprehensive documentation verification.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
              <h3 class="feature-title">Quality Improvement</h3>
              <p class="feature-description">Data-driven improvement initiatives, trend analysis, and preventive action implementation.</p>
            </div>
          </div>
        </div>

        <!-- Audit Readiness -->
        <div >
          <h3 ><i class="fas fa-search" ></i>Audit-Ready Culture</h3>
          <p >
            We welcome customer and regulatory audits as opportunities to demonstrate our commitment to quality. Our facility is perpetually inspection-ready with complete documentation, trained personnel, and transparent processes.
          </p>
          
          <h4 >What to Expect During Your Audit</h4>
          <div >
            <div >
              <div ><i class="fas fa-folder-open"></i></div>
              <h5 >Complete Documentation</h5>
              <p >Organized, accessible, and comprehensive</p>
            </div>
            <div >
              <div ><i class="fas fa-users"></i></div>
              <h5 >Trained Personnel</h5>
              <p >Knowledgeable and responsive team</p>
            </div>
            <div >
              <div ><i class="fas fa-building"></i></div>
              <h5 >Clean Facility</h5>
              <p >GMP-compliant manufacturing areas</p>
            </div>
            <div >
              <div ><i class="fas fa-handshake"></i></div>
              <h5 >Open Communication</h5>
              <p >Transparent and collaborative approach</p>
            </div>
          </div>
        </div>

        <!-- Regulatory Support -->
        <div >
          <h3 ><i class="fas fa-file-contract" ></i>Regulatory Support</h3>
          <p >
            Led by Amit Surani (B.Pharm, MBA in TQM, 15+ years QA/RA), our regulatory affairs team provides comprehensive support for your submissions, audits, and compliance needs.
          </p>
          
          <div >
            <div >
              <h4 >DMF Support</h4>
              <p >Complete documentation for Drug Master File submissions</p>
            </div>
            <div >
              <h4 >Compliance Guidance</h4>
              <p >Expert navigation of FDCA and international standards</p>
            </div>
            <div >
              <h4 >Audit Preparation</h4>
              <p >Proactive support for regulatory inspections</p>
            </div>
          </div>
        </div>

        <!-- CAPA Process -->
        <div >
          <h3 >CAPA & Problem Resolution Process</h3>
          <p >
            Our systematic approach to corrective and preventive action ensures rapid resolution and continuous improvement.
          </p>
          
          <div >
            <div >
              <div >1</div>
              <h4 >Identify</h4>
              <p >Issue detection and documentation</p>
            </div>
            <div >
              <div >2</div>
              <h4 >Investigate</h4>
              <p >Root cause analysis</p>
            </div>
            <div >
              <div >3</div>
              <h4 >Implement</h4>
              <p >Corrective action execution</p>
            </div>
            <div >
              <div >4</div>
              <h4 >Verify</h4>
              <p >Effectiveness confirmation</p>
            </div>
            <div >
              <div >5</div>
              <h4 >Prevent</h4>
              <p >Preventive measures deployment</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Questions About Quality or Compliance?</h2>
            <p>Connect directly with our Quality Director Amit Surani for regulatory guidance and audit support</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-user-tie"></i> Speak with Quality Director</button>
              <button class="btn btn--lg" onclick="showToast('Quality documentation package download initiated', 'success')"><i class="fas fa-file-download"></i> Download Quality Documents</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSupportPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Technical Support & Services</h2>
          <p class="section-subtitle">24/7 expert support and comprehensive coating services</p>
        </div>

        <!-- 24/7 Support Highlight -->
        <div >
          <div ><i class="fas fa-headset"></i></div>
          <h3 >24/7 Technical Support</h3>
          <p >
            Your coating challenges don't wait for business hours—neither do we
          </p>
          <div >
            <div>
              <h4 >Round-the-Clock Availability</h4>
              <p >Expert support whenever you need it</p>
            </div>
            <div>
              <h4 >Rapid Response</h4>
              <p >Typically within 2 hours</p>
            </div>
            <div>
              <h4 >Expert Team</h4>
              <p >13+ years R&D experience</p>
            </div>
          </div>
          <div >
            <p ><i class="fas fa-phone"></i> ${companyData.phonePrimary}</p>
            <p ><i class="fas fa-envelope"></i> ${companyData.email}</p>
          </div>
        </div>

        <!-- Troubleshooting Expertise -->
        <div >
          <h3 ><i class="fas fa-tools" ></i>Troubleshooting Expertise</h3>
          <p >
            Our technical team has resolved hundreds of coating challenges across diverse formulations, equipment, and production scales. We bring systematic diagnostic approaches and proven solutions to your specific problems.
          </p>
          
          <div class="accordion active" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>Coating Process Issues</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <ul >
                  <li >
                    <i class="fas fa-wrench" ></i>
                    Orange peel, rough film, and surface defects
                  </li>
                  <li >
                    <i class="fas fa-wrench" ></i>
                    Uneven coating distribution and coverage issues
                  </li>
                  <li >
                    <i class="fas fa-wrench" ></i>
                    Color dots, specks, and pigment dispersion problems
                  </li>
                  <li >
                    <i class="fas fa-wrench" ></i>
                    Picking, sticking, and tablet agglomeration
                  </li>
                  <li >
                    <i class="fas fa-wrench" ></i>
                    Spray rate optimization and drying parameter tuning
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>Functional Performance</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <ul >
                  <li >
                    <i class="fas fa-flask" ></i>
                    Enteric dissolution failures and acid-stage release
                  </li>
                  <li >
                    <i class="fas fa-flask" ></i>
                    Moisture barrier inadequacy and stability issues
                  </li>
                  <li >
                    <i class="fas fa-flask" ></i>
                    Bulging, gas formation, and core expansion
                  </li>
                  <li >
                    <i class="fas fa-flask" ></i>
                    Film cracking, peeling, or adhesion failures
                  </li>
                  <li >
                    <i class="fas fa-flask" ></i>
                    Color fading or migration during storage
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>Equipment & Scale Optimization</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <ul >
                  <li >
                    <i class="fas fa-cog" ></i>
                    Pan coating parameter optimization for your equipment
                  </li>
                  <li >
                    <i class="fas fa-cog" ></i>
                    Lab to pilot to commercial scale-up guidance
                  </li>
                  <li >
                    <i class="fas fa-cog" ></i>
                    Spray gun configuration and positioning
                  </li>
                  <li >
                    <i class="fas fa-cog" ></i>
                    Airflow and temperature profile optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div >
            <h4 >Our 4-Step Troubleshooting Approach</h4>
            <p >
              <strong>1. Listen:</strong> Understand your specific symptoms and constraints • 
              <strong>2. Analyze:</strong> Review batch data and process parameters • 
              <strong>3. Diagnose:</strong> Identify root causes using our expertise • 
              <strong>4. Solve:</strong> Implement targeted solutions with ongoing support
            </p>
          </div>
        </div>

        <!-- Scale-Up Services -->
        <div >
          <h3 ><i class="fas fa-arrow-up" ></i>Scale-Up Services</h3>
          <p >
            Successfully transitioning from lab development to commercial production requires careful parameter optimization and process validation. Our team guides you through every scale-up stage with proven protocols and hands-on support.
          </p>
          
          <h4 >Scale-Up Progression</h4>
          <div >
            <div >
              <div ><i class="fas fa-flask"></i></div>
              <h5 >Lab Scale</h5>
              <p >Initial formulation development and proof of concept</p>
            </div>
            <div >
              <div ><i class="fas fa-vials"></i></div>
              <h5 >Pilot Scale</h5>
              <p >Process optimization and validation batches</p>
            </div>
            <div >
              <div ><i class="fas fa-industry"></i></div>
              <h5 >Commercial Scale</h5>
              <p >Full-scale production with validated processes</p>
            </div>
          </div>
          
          <h4 >Optimization Focus Areas</h4>
          <div >
            <div >
              <h5 >Process Parameters</h5>
              <p >Temperature, spray rate, airflow optimization</p>
            </div>
            <div >
              <h5 >Batch Size Effects</h5>
              <p >Pan loading, cycle time adjustments</p>
            </div>
            <div >
              <h5 >Quality Consistency</h5>
              <p >Batch-to-batch reproducibility verification</p>
            </div>
            <div >
              <h5 >Cost Efficiency</h5>
              <p >Throughput and material usage optimization</p>
            </div>
          </div>
        </div>

        <!-- Color Matching Services -->
        <div >
          <h3 ><i class="fas fa-palette" ></i>Color Matching Services</h3>
          <p >
            Brand consistency demands precise color matching across all batches. Our color matching expertise, backed by advanced spectrophotometry and polymer chemistry knowledge, ensures your tablets look exactly as intended—every single time.
          </p>
          
          <h4 >Color Matching Capabilities</h4>
          <div >
            <div >
              <h5 ><i class="fas fa-crosshairs" ></i> Exact Shade Matching</h5>
              <p >Match existing tablet colors or Pantone/RAL references with precision spectrophotometry</p>
            </div>
            <div >
              <h5 ><i class="fas fa-sync-alt" ></i> Batch Consistency</h5>
              <p >Guaranteed batch-to-batch color consistency through controlled pigment dispersion</p>
            </div>
            <div >
              <h5 ><i class="fas fa-paint-brush" ></i> Custom Development</h5>
              <p >Create unique branded colors with stability and regulatory compliance</p>
            </div>
          </div>
          
          <h4 >Our Color Matching Process</h4>
          <div >
            <ol >
              <li ><strong>Sample Submission:</strong> Send us your target color sample or specification</li>
              <li ><strong>Spectrophotometric Analysis:</strong> Precise color measurement and characterization</li>
              <li ><strong>Formulation Development:</strong> Optimize pigment blend for exact match</li>
              <li ><strong>Trial Batch:</strong> Coat sample batch for your approval</li>
              <li ><strong>Refinement:</strong> Adjust as needed until perfect match achieved</li>
              <li><strong>Production:</strong> Scale to commercial batch with guaranteed consistency</li>
            </ol>
          </div>
          
          <div >
            <div ><i class="fas fa-check-circle"></i></div>
            <div>
              <h5 >Color Consistency Guarantee</h5>
              <p >Every batch delivers the exact color you approved—no variation, no surprises</p>
            </div>
          </div>
        </div>

        <!-- Specialized Support -->
        <div >
          <h3 >Additional Specialized Support</h3>
          <div class="feature-grid">
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-spray-can"></i></div>
              <h3 class="feature-title">Spray Dispersion Optimization</h3>
              <p class="feature-description">Complete solution preparation protocols and dispersion techniques for defect-free coating</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
              <h3 class="feature-title">Dissolution Optimization</h3>
              <p class="feature-description">USP method development and dissolution profile optimization for enteric and controlled-release systems</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-atom"></i></div>
              <h3 class="feature-title">Polymer Chemistry Consultation</h3>
              <p class="feature-description">Expert guidance on polymer selection, film formation, and functional coating design</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon"><i class="fas fa-graduation-cap"></i></div>
              <h3 class="feature-title">Training Services</h3>
              <p class="feature-description">On-site or virtual training for your team on coating fundamentals, troubleshooting, and optimization</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section">
          <div class="cta-content">
            <h2>Get Expert Support Now</h2>
            <p>Our technical team is standing by 24/7 to help you achieve coating excellence</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-phone-volume"></i> Request Technical Call</button>
              <button class="btn btn--lg" onclick="openModal('sampleModal')"><i class="fas fa-vial"></i> Request Samples</button>
            </div>
            <div >
              <p ><strong>24/7 Hotline:</strong> ${companyData.phonePrimary}</p>
              <p ><strong>Email:</strong> ${companyData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderKnowledgePage() {
  const categories = ['All', 'Fundamentals', 'Selection Guides', 'Troubleshooting', 'Best Practices'];
  
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Knowledge Center</h2>
          <p class="section-subtitle">Educational resources, technical guides, and coating expertise</p>
        </div>

        <!-- Category Filter -->
        <div >
          ${categories.map(cat => `
            <button class="btn ${state.filterCategory === cat.toLowerCase() ? 'btn--primary' : 'btn--outline'}" 
                    onclick="filterArticles('${cat.toLowerCase()}')">
              ${cat}
            </button>
          `).join('')}
        </div>

        <!-- Featured Articles -->
        <h3 >Featured Articles</h3>
        <div class="article-grid" id="articleGrid">
          ${articles.map((article, index) => `
            <div class="article-card" data-category="${article.category.toLowerCase()}">
              <span class="article-category">${article.category}</span>
              <h3 class="article-title">${article.title}</h3>
              <p class="article-excerpt">${article.excerpt}</p>
              <div class="article-meta">
                <span><i class="fas fa-clock"></i> ${article.readTime} read</span>
                <span><i class="fas fa-user"></i> ${article.audience}</span>
              </div>
              <button class="btn btn--outline btn--sm" onclick="showToast('Article viewer coming soon', 'info')">
                Read Full Article <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          `).join('')}
        </div>

        <!-- FAQs Section -->
        <div >
          <h3 >Frequently Asked Questions</h3>
          
          <div class="accordion active" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>What's the difference between PVA and HPMC film coatings?</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <p >
                  PVA (polyvinyl alcohol) coatings offer faster processing at higher temperatures (40-60°C) with excellent film strength and adhesion. HPMC (hydroxypropyl methylcellulose) provides broader API compatibility and lower processing temperatures (30-40°C), ideal for heat-sensitive formulations. Our hybrid systems like AQUA 5L combine benefits of both polymers.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>How do I choose the right enteric coating polymer?</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <p >
                  Selection depends on your solvent preference, dissolution requirements, and API sensitivity:
                </p>
                <ul >
                  <li><strong>Methacrylic polymers:</strong> Best for aqueous processing and high-volume production</li>
                  <li><strong>HPMCP:</strong> Ideal for precise intestinal release and high-value APIs</li>
                  <li><strong>CAP:</strong> Maximum gastric protection for highly acid-sensitive drugs</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="accordion" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>What causes color dots and specks in coated tablets?</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <p >
                  Color dots typically result from inadequate pigment dispersion or undissolved coating material. Key solutions: (1) Use high-shear mixing for pigment wetting, (2) Filter coating solution through 100# sieve, (3) Allow adequate hydration time before coating, (4) Maintain proper solution temperature. All ANSHCOAT products pass 100# sieve for guaranteed defect-free coating.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>How much weight gain do I need for moisture barrier protection?</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <p >
                  Typical moisture barrier applications require 4-8% weight gain depending on core hygroscopicity and target shelf life. ANSHCOAT PROTECT AQUA and PROTECT ORGANIC deliver superior barrier performance even at lower weight gains (4-6%) due to optimized polymer blends and high solids content. Stability testing should confirm adequate protection for your specific formulation.
                </p>
              </div>
            </div>
          </div>

          <div class="accordion" onclick="toggleAccordion(event)">
            <div class="accordion-header">
              <h3>Can I get samples before committing to a product?</h3>
              <i class="fas fa-chevron-down accordion-icon"></i>
            </div>
            <div class="accordion-content">
              <div class="accordion-body">
                <p >
                  Absolutely! We encourage sampling to ensure the right product-formulation fit. Request free samples through our sample request form or contact our team directly. We typically ship samples within 1 week and provide complete technical support for your trial batches. Our experts can help you design optimal coating trials and interpret results.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Our experts are here to answer your specific questions and provide personalized guidance</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-question-circle"></i> Ask an Expert</button>
              <button class="btn btn--lg" onclick="navigateTo('support')"><i class="fas fa-headset"></i> Get Support</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderResourcesPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Download Center</h2>
          <p class="section-subtitle">Technical documentation, data sheets, and regulatory resources</p>
        </div>

        <div class="resource-grid">
          <!-- Product Catalogue -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-book"></i></div>
            <h3 class="resource-title">Complete Product Catalogue</h3>
            <p class="resource-description">Comprehensive overview of all ANSHCOAT coating systems with specifications and applications</p>
            <p class="resource-meta"><i class="fas fa-file-pdf"></i> PDF • 8.2 MB • Updated Nov 2025</p>
            <button class="btn btn--primary" onclick=""><i class="fas fa-download"></i> Download Catalogue</button>
          </div>

          <!-- Aqueous TDS -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-file-alt"></i></div>
            <h3 class="resource-title">Aqueous Film Coating Data Sheets</h3>
            <p class="resource-description">Technical data sheets for AQUA, AQUA 2.5L, 5L, 6L, 7L, and 8L systems</p>
            <p class="resource-meta"><i class="fas fa-folder"></i> 6 PDF Files • Total 3.4 MB</p>
            <button class="btn btn--primary" onclick="showToast('Data sheets package download initiated', 'success')"><i class="fas fa-download"></i> Download All (ZIP)</button>
          </div>

          <!-- Enteric TDS -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-file-alt"></i></div>
            <h3 class="resource-title">Enteric Coating Data Sheets</h3>
            <p class="resource-description">Technical specifications for ENT AQUA, ENT ORGANIC, ENT PRO, and ENT ADVANCE</p>
            <p class="resource-meta"><i class="fas fa-folder"></i> 4 PDF Files • Total 2.1 MB</p>
            <button class="btn btn--primary" onclick="showToast('Data sheets package download initiated', 'success')"><i class="fas fa-download"></i> Download All (ZIP)</button>
          </div>

          <!-- Solvent TDS -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-file-alt"></i></div>
            <h3 class="resource-title">Solvent & Barrier Data Sheets</h3>
            <p class="resource-description">Complete technical data for ORGANIC, UNIVERSAL, PROTECT systems</p>
            <p class="resource-meta"><i class="fas fa-folder"></i> 4 PDF Files • Total 1.8 MB</p>
            <button class="btn btn--primary" onclick="showToast('Data sheets package download initiated', 'success')"><i class="fas fa-download"></i> Download All (ZIP)</button>
          </div>

          <!-- SDS -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-exclamation-triangle"></i></div>
            <h3 class="resource-title">Safety Data Sheets (SDS)</h3>
            <p class="resource-description">Complete safety information for all ANSHCOAT products</p>
            <p class="resource-meta"><i class="fas fa-shield-alt"></i> Regulatory Compliance Documents</p>
            <button class="btn btn--primary" onclick="showToast('SDS package download initiated', 'success')"><i class="fas fa-download"></i> Download SDS Library</button>
          </div>

          <!-- Selection Guide -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-compass"></i></div>
            <h3 class="resource-title">Product Selection Guide</h3>
            <p class="resource-description">Interactive guide to choosing the optimal coating system for your application</p>
            <p class="resource-meta"><i class="fas fa-file-pdf"></i> PDF • 1.2 MB • Updated Nov 2025</p>
            <button class="btn btn--primary" onclick="showToast('Selection guide download initiated', 'success')"><i class="fas fa-download"></i> Download Guide</button>
          </div>

          <!-- Troubleshooting Guide -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-tools"></i></div>
            <h3 class="resource-title">Troubleshooting Manual</h3>
            <p class="resource-description">Comprehensive guide to diagnosing and resolving common coating defects</p>
            <p class="resource-meta"><i class="fas fa-file-pdf"></i> PDF • 2.5 MB • Updated Oct 2025</p>
            <button class="btn btn--primary" onclick="showToast('Troubleshooting manual download initiated', 'success')"><i class="fas fa-download"></i> Download Manual</button>
          </div>

          <!-- Process Parameters -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-cog"></i></div>
            <h3 class="resource-title">Process Parameter Guidelines</h3>
            <p class="resource-description">Recommended coating parameters for various pan coaters and batch sizes</p>
            <p class="resource-meta"><i class="fas fa-file-excel"></i> Excel • 450 KB</p>
            <button class="btn btn--primary" onclick="showToast('Process guidelines download initiated', 'success')"><i class="fas fa-download"></i> Download Guidelines</button>
          </div>

          <!-- Regulatory Documents -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-certificate"></i></div>
            <h3 class="resource-title">Regulatory Documentation</h3>
            <p class="resource-description">DMF information, compliance statements, and facility certificates</p>
            <p class="resource-meta"><i class="fas fa-lock"></i> Requires Registration</p>
            <button class="btn btn--primary" onclick="openModal('sampleModal')"><i class="fas fa-key"></i> Request Access</button>
          </div>

          <!-- Color Standards -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-palette"></i></div>
            <h3 class="resource-title">Standard Color Catalog</h3>
            <p class="resource-description">Available standard colors with spectrophotometric data</p>
            <p class="resource-meta"><i class="fas fa-file-pdf"></i> PDF • 5.7 MB</p>
            <button class="btn btn--primary" onclick="showToast('Color catalog download initiated', 'success')"><i class="fas fa-download"></i> Download Catalog</button>
          </div>

          <!-- Case Studies -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-chart-bar"></i></div>
            <h3 class="resource-title">Case Studies</h3>
            <p class="resource-description">Real-world problem-solving examples and successful coating projects</p>
            <p class="resource-meta"><i class="fas fa-folder"></i> Multiple Documents</p>
            <button class="btn btn--primary" onclick="showToast('Case studies download initiated', 'success')"><i class="fas fa-download"></i> Download Collection</button>
          </div>

          <!-- Training Materials -->
          <div class="resource-card">
            <div class="resource-icon"><i class="fas fa-graduation-cap"></i></div>
            <h3 class="resource-title">Training Materials</h3>
            <p class="resource-description">Educational presentations and coating fundamentals training modules</p>
            <p class="resource-meta"><i class="fas fa-lock"></i> Requires Registration</p>
            <button class="btn btn--primary" onclick="openModal('expertModal')"><i class="fas fa-key"></i> Request Access</button>
          </div>
        </div>

        <!-- Newsletter Signup -->
        <div >
          <h3 >Stay Updated</h3>
          <p >
            Subscribe to receive new technical bulletins, application notes, and product updates
          </p>
          <div >
            <input type="email" class="form-control" placeholder="Enter your email" >
            <button class="btn btn--primary" onclick="showToast('Thank you for subscribing!', 'success')"><i class="fas fa-envelope"></i> Subscribe</button>
          </div>
        </div>

        <!-- CTA -->
        <div class="cta-section" >
          <div class="cta-content">
            <h2>Need Something Specific?</h2>
            <p>Can't find the document you need? Contact us for custom documentation or additional resources</p>
            <div class="cta-buttons">
              <button class="btn btn--lg" onclick="navigateTo('contact')"><i class="fas fa-envelope"></i> Contact Us</button>
              <button class="btn btn--lg" onclick="openModal('expertModal')"><i class="fas fa-question"></i> Ask for Help</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContactPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Contact Us</h2>
          <p class="section-subtitle">Get in touch with our team for samples, support, or inquiries</p>
        </div>

        <div >
          <!-- Contact Information -->
          <div >
            <h3 >Contact Information</h3>
            
            <div >
              <h4 ><i class="fas fa-building"></i> Company</h4>
              <p >
                
                <strong >${companyData.name}</strong>
              </p>
            </div>

            <div >
              <h4 ><i class="fas fa-map-marker-alt"></i> Address</h4>
              <p >
                Manufacturing Facility<br>
                ${companyData.address}
              </p>
            </div>

            <div >
              <h4 ><i class="fas fa-phone"></i> Phone</h4>
              <p >
                Primary: <a href="tel:${companyData.phonePrimary}" >${companyData.phonePrimary}</a><br>
                Secondary: <a href="tel:${companyData.phoneSecondary}" >${companyData.phoneSecondary}</a>
              </p>
            </div>

            <div >
              <h4 ><i class="fas fa-envelope"></i> Email</h4>
              <p >
                <a href="mailto:${companyData.email}" >${companyData.email}</a>
              </p>
            </div>

            <div>
              <h4 ><i class="fas fa-globe"></i> Website</h4>
              <p >
                <a href="http://${companyData.website}" target="_blank" >${companyData.website}</a>
              </p>
            </div>

            <div >
              <h4 ><i class="fas fa-clock"></i> 24/7 Support Available</h4>
              <p >
                Our technical team is available around the clock for urgent coating challenges and support
              </p>
            </div>
          </div>

          <!-- Quick Contact Form -->
          <div >
            <h3 >Quick Inquiry</h3>
            
            <form id="quickContactForm" onsubmit="handleQuickContact(event)">
              <div class="form-group">
                <label class="form-label">Your Name *</label>
                <input type="text" class="form-control" name="name" required>
              </div>
              
              <div class="form-group">
                <label class="form-label">Email Address *</label>
                <input type="email" class="form-control" name="email" required>
              </div>
              
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-control" name="phone">
              </div>
              
              <div class="form-group">
                <label class="form-label">Company</label>
                <input type="text" class="form-control" name="company">
              </div>
              
              <div class="form-group">
                <label class="form-label">Inquiry Type *</label>
                <select class="form-control" name="inquiryType" required>
                  <option value="">Select type...</option>
                  <option value="technical">Technical Support</option>
                  <option value="samples">Request Samples</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="regulatory">Regulatory Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label">Message *</label>
                <textarea class="form-control" name="message" rows="4" required></textarea>
              </div>
              
              <button type="submit" class="btn btn--primary btn--full-width"><i class="fas fa-paper-plane"></i> Send Inquiry</button>
            </form>
          </div>
        </div>

        <!-- Quick Actions -->
        <div >
          <h3 >Quick Actions</h3>
          <div >
            <button class="btn btn--primary btn--lg" onclick="openModal('sampleModal')" >
              <i class="fas fa-vial" ></i>
              <strong>Request Free Samples</strong><br>
              <span >Get samples within 1 week</span>
            </button>
            <button class="btn btn--primary btn--lg" onclick="openModal('expertModal')" >
              <i class="fas fa-phone" ></i>
              <strong>Schedule Expert Call</strong><br>
              <span >Talk to our technical team</span>
            </button>
            <button class="btn btn--primary btn--lg" onclick="" >
              <i class="fas fa-download" ></i>
              <strong>Download Catalogue</strong><br>
              <span >Complete product information</span>
            </button>
            <button class="btn btn--primary btn--lg" onclick="navigateTo('quality')" >
              <i class="fas fa-calendar" ></i>
              <strong>Schedule Audit</strong><br>
              <span >Visit our FDA-approved facility</span>
            </button>
          </div>
        </div>

        <!-- Service Promises -->
        <div >
          <h3 >Our Service Promises</h3>
          <div >
            <div >
              <div ><i class="fas fa-clock"></i></div>
              <h4 >1-Week Lead Time</h4>
              <p >Samples delivered within maximum 7 days</p>
            </div>
            <div >
              <div ><i class="fas fa-headset"></i></div>
              <h4 >24/7 Support</h4>
              <p >Round-the-clock technical assistance</p>
            </div>
            <div >
              <div ><i class="fas fa-reply"></i></div>
              <h4 >2-Hour Response</h4>
              <p >Typical response time for inquiries</p>
            </div>
            <div >
              <div ><i class="fas fa-shield-alt"></i></div>
              <h4 >Quality Guaranteed</h4>
              <p >FDA-approved facility and processes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Navigation & Utility Functions
function navigateTo(page) {
  state.currentPage = page;
  
  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page.split('-')[0]) {
      link.classList.add('active');
    }
  });
  
  // Close mobile menu if open
  const navMenu=document.getElementById('navMenu'); if(navMenu){navMenu.classList.remove('active');}
  
  // Render page content
  const mainContent = document.getElementById('mainContent');
  
  switch(page) {
    case 'home':
      mainContent.innerHTML = renderHomePage();
      break;
    case 'about':
      mainContent.innerHTML = renderAboutPage();
      break;
    case 'products-aqueous':
      mainContent.innerHTML = renderProductsAqueousPage();
      break;
    case 'products-solvent':
      mainContent.innerHTML = renderProductsSolventPage();
      break;
    case 'products-enteric':
      mainContent.innerHTML = renderProductsEntericPage();
      break;
    case 'products-special':
      mainContent.innerHTML = renderProductsSpecialPage();
      break;
    case 'solutions':
      mainContent.innerHTML = renderSolutionsPage();
      break;
    case 'quality':
      mainContent.innerHTML = renderQualityPage();
      break;
    case 'support':
      mainContent.innerHTML = renderSupportPage();
      break;
    case 'knowledge':
      mainContent.innerHTML = renderKnowledgePage();
      break;
    case 'resources':
      mainContent.innerHTML = renderResourcesPage();
      break;
    case 'contact':
      mainContent.innerHTML = renderContactPage();
      break;
    default:
      mainContent.innerHTML = renderHomePage();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Update URL hash
  window.location.hash = page;
}

// Modal Functions
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
  document.body.style.overflow = '';
}

// Accordion Toggle
function toggleAccordion(event) {
  const accordion = event.currentTarget.closest ? event.currentTarget.closest('.accordion') : event.currentTarget;
  accordion.classList.toggle('active');
}

// Form Step Navigation
function nextStep(step) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.progress-step').forEach(s => s.classList.remove('active'));
  
  document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');
  document.querySelector(`.progress-step[data-step="${step}"]`).classList.add('active');
  
  state.currentFormStep = step;
}

function prevStep(step) {
  nextStep(step);
}

// Toast Notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Filter Articles
function filterArticles(category) {
  state.filterCategory = category;
  
  const articles = document.querySelectorAll('.article-card');
  articles.forEach(article => {
    if (category === 'all' || article.dataset.category === category) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
  
  // Re-render page to update button states
  navigateTo('knowledge');
}

// Form Handlers
function handleQuickContact(event) {
  event.preventDefault();
  showToast('Thank you! We will contact you within 2 hours.', 'success');
  event.target.reset();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  document.getElementById('mobileMenuToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('active');
  });
  
  // Close modals on outside click
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
  
  // Sample form submission
  document.getElementById('sampleForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Sample request submitted! We will contact you within 24 hours.', 'success');
    closeModal('sampleModal');
    e.target.reset();
    nextStep(1);
  });
  
  // Catalogue form submission
  document.getElementById('catalogueForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Catalogue download initiated! Check your email.', 'success');
    closeModal('catalogueModal');
    e.target.reset();
  });
  
  // Expert consultation form
  document.getElementById('expertForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Consultation request received! Our expert will contact you soon.', 'success');
    closeModal('expertModal');
    e.target.reset();
  });
  
  // Handle hash navigation
  function handleHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      navigateTo(hash);
    } else {
      navigateTo('home');
    }
  }
  
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
  
  // Sticky navbar
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    
    lastScroll = currentScroll;
  });
});


/* === Safe hash restore (non-visual) === */
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#','');
  if (hash) {
    try { navigateTo(hash); } catch(e) {}
  }
});
