/* ==========================================================================
   AERONITK INTERACTIVE PRESENTATION — SCRIPT.JS
   Contains all 54 slides from AERO ppt (1).pptx in exact order,
   Reusable Templates A–F, GSAP Flight Paths, and Three.js 3D Models.
   ========================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   ALL 54 SLIDES DATA (Verbatim Text, Titles, Logos & Structure from PDF)
   -------------------------------------------------------------------------- */
const SLIDES = [
  // SLIDE 1 — Template A ("Fly-in")
  {
    slideNum: 1,
    template: 'A',
    footer: 'AERONITK CLUB | 1',
    kicker: 'PL-130N: Introduction to Technical Activities - 1',
    title: 'AERONITK CLUB',
    subtitle: 'Air/Space Vehicle T1-Drone/ Airplane',
    buttonLabel: 'Fly',
    image: 'images/slide1_hero.png',
    imageAlt: 'AeroNITK Club Cover & Logos',
    logos: [
      { name: 'NITK Surathkal', src: 'images/nitk_logo.png' },
      { name: 'Team AeroNITK', src: 'images/aeronitk_logo.png' }
    ],
    blocks: [
      '<strong>Course:</strong> PL-130N: Introduction to Technical Activities - 1',
      '<strong>Track:</strong> Air/Space Vehicle T1-Drone/ Airplane',
      '<strong>Faculty Activity Coordinators:</strong><br>• Dr. Deepak Kumar<br>• Dr. A. S. S. Balan',
      '<strong>Department:</strong> Department of Mechanical Engineering, National Institute of Technology, Karnataka'
    ]
  },

  // SLIDE 2 — Template B ("Whiteboard drop")
  {
    slideNum: 2,
    template: 'B',
    footer: 'PL130N • AeroNITK • 1',
    kicker: 'FOUNDATION // 2018',
    title: 'Our Origin & History',
    buttonLabel: 'Drop Whiteboard: Origin & History',
    image: 'images/slide2_origin.png',
    imageAlt: 'Team AeroNITK Workshop & Aircraft',
    lines: [
      'Back in 2018, two mechanical seniors, <strong>Pavan and Sandeep</strong>, noticed a big gap at NITK: plenty of passion for aerospace, but no platform to actually get our hands dirty.',
      'Instead of just memorizing textbook definitions of lift and drag, they started <strong>Team AeroNITK</strong> to build an environment focused on doing rather than just reading.',
      '<strong>AeroNITK</strong> is the official aeromodelling and drone development club of NITK Surathkal.',
      'We are a multidisciplinary team of undergraduates who design, build, and fly radio-controlled aircraft and autonomous drones from scratch, competing against IITs, NITs, and top engineering colleges across India.'
    ]
  },

  // SLIDE 3 — Template C ("Two-button reveal": Boeing & Wright Flight, plus CAD/Workshop overview)
  {
    slideNum: 3,
    template: 'C',
    footer: 'PL130N • AeroNITK • 2',
    kicker: 'HANDS-ON ENGINEERING',
    title: 'What Do we Do??',
    subtitle: 'Build RC Planes… Making drones? Not Just that',
    choices: [
      {
        btnLabel: 'Boeing',
        heading: 'From CAD to Workshop & Boeing Bootcamps',
        image: 'images/slide3_cad.png',
        text: 'Shaping sleek contours to bend the laws of physics, engineering rugged lightweight frames that can take real-world stress, and programming the intelligent onboard brains that navigate complex missions autonomously.'
      },
      {
        btnLabel: 'Wright Flight',
        heading: 'Manufacturing to Maiden Test Flight',
        image: 'images/slide3_flight.png',
        text: 'From the first line drawn in CAD to manufacturing using 3D printers and laser cutters in our workshop to that high-stakes moment of a maiden test flight… We turn raw ideas into high-performance flying machines.'
      }
    ]
  },

  // SLIDE 4 — Template C ("Two-button reveal": Boeing & Wright Flight)
  {
    slideNum: 4,
    template: 'C',
    footer: 'PL130N • AeroNITK • 4',
    kicker: 'CAMPUS & NATIONAL ARENAS',
    title: 'Competitions & Events',
    subtitle: 'Select an event below to inspect image & details:',
    choices: [
      {
        btnLabel: 'Boeing',
        heading: 'Boeing SKYVVERSE workshop',
        image: 'images/slide4_boeing.png',
        text: 'Hands-on fabrication bootcamps sponsored by Boeing, teaching campus freshmen aeromodelling and flight fundamentals from scratch.'
      },
      {
        btnLabel: 'Wright Flight',
        heading: 'WRIGHT FLIGHT',
        image: 'images/slide4_wright.png',
        text: 'NITK’s flagship aeromodelling challenge hosted during Engineer, testing RC flight dynamics and pilot precision. Nearly 20 teams, across various colleges in India participates it.'
      }
    ]
  },

  // SLIDE 5 — Template A ("Fly-in")
  {
    slideNum: 5,
    template: 'A',
    footer: 'PL130N • AeroNITK • 5',
    kicker: 'NATIONAL ARENAS',
    title: 'Main Competitions:',
    subtitle: 'SAE AEROTHON • SAE DDC • IITB & IITM TECHFESTS • SAE ADDC',
    buttonLabel: 'Fly Through Competitions',
    image: 'images/slide5_competitions.png',
    imageAlt: 'AeroNITK National Competitions',
    logos: [],
    blocks: [
      '<strong>SAE AEROTHON:</strong> Pushes us to design high-performance hybrid VTOL aircraft from scratch, engineering seamless transitions between vertical lift and forward cruise to handle heavy payloads and demanding mission profiles.',
      '<strong>SAE DDC:</strong> DDC serves as our primary testbed for rapid airframe development, aeromechanical optimization, and precision piloting. In this challenge, the team focuses on designing and fabricating RC Planes Engineered for high agility, structural robustness, and reliable payload delivery under stringent size and weight constraints.',
      '<strong>IITB & IITM TECHFESTS:</strong> Fast-paced national arenas where we custom built RC aircraft against top institutes, testing high-speed aerobatics, extreme maneuverability, and structural durability under intense competitive conditions.',
      '<strong>SAE ADDC:</strong> ADDC shifts the focus toward intelligent autonomy, pushing our avionics and software capabilities to the limit. We engineer fully self-navigating UAVs capable of mission planning, real-time computer vision, waypoint tracking, and sensor-driven obstacle avoidance—executing complex target-detection and payload drop routines entirely without pilot intervention.'
    ]
  },

  // SLIDE 6 — Template B ("Whiteboard drop")
  {
    slideNum: 6,
    template: 'B',
    footer: 'PL130N • AeroNITK • 6',
    kicker: 'PODIUM TRACK RECORD',
    title: 'Achievements & Milestones',
    buttonLabel: 'Drop Whiteboard: Results',
    image: 'images/slide6_achievements.png',
    imageAlt: 'AeroNITK Trophies and Team',
    lines: [
      '<strong>IIT Bombay Techfest - Dec’25:</strong> Participations: 200+ Teams | Result: <strong>Runner up</strong>',
      '<strong>SAE DDC - 2024 to 2025 Season:</strong> Participations: 200+ Teams | Result: <strong>2nd Best CFD Analysis</strong>, <strong>2nd Best Overall Drag Performance</strong>, <strong>5th most Innovative</strong>, <strong>9th Most Endurance (90 minutes)</strong>',
      '<strong>JNNCE, Shivamogga:</strong> Result: Participated as two teams, bagged <strong>1st and 2nd place</strong>',
      '<strong>SAE ADDC - 2025-’26:</strong> Participants: 60 teams | Result: <strong>3rd Place for Payload Design</strong>'
    ]
  },

  // SLIDE 7 — Template C ("Two-button reveal")
  {
    slideNum: 7,
    template: 'C',
    footer: 'PL130N • AeroNITK • 7',
    kicker: 'COMPETITION GALLERY // 2025–26',
    title: 'SAE ADDC • JNNCE • SAE DDC • IITB',
    subtitle: 'Explore our 2025–’26 campaign highlights:',
    choices: [
      {
        btnLabel: 'SAE ADDC & DDC 2025-’26',
        heading: 'SAE ADDC 2025-’26 & SAE DDC 2025-’26',
        image: 'images/slide7_sae.png',
        text: 'SAE ADDC 2025-’26 & SAE DDC 2025-’26 — National level autonomous drone and regular/micro class aerodesign campaigns.'
      },
      {
        btnLabel: 'JNNCE Nov’25 & IITB Dec’25',
        heading: 'JNNCE, Shivamogga Nov’25 & IITB – Dec’25',
        image: 'images/slide7_iitb.png',
        text: 'JNNCE, Shivamogga Nov’25 (1st & 2nd Place finish) and IITB – Dec’25 (Runner-up among 200+ teams).'
      }
    ]
  },

  // SLIDE 8 — Template D ("Section header" with 3D VTOL & Quadcopter)
  {
    slideNum: 8,
    template: 'D',
    modelType: 'vtol_quad',
    footer: 'PL130N • AeroNITK • 30',
    kicker: '2026 ARCHITECTURE',
    title: 'The AeroNITK Ecosystem',
    subtitle: 'Three distinct platforms. One unified engineering methodology. Each aircraft solves a unique aerospace challenge.'
  },

  // SLIDE 9 — Template E ("Step-by-step reveal")
  {
    slideNum: 9,
    template: 'E',
    footer: 'PL130N • AeroNITK • 3',
    kicker: 'ENGINEERING PILLARS',
    title: 'Core Subsystems',
    subtitle: 'Click "Next Step" to reveal each subsystem and its toolchain:',
    steps: [
      {
        icon: '༄',
        heading: 'Aerodynamics',
        text: 'Leveraging Computational Fluid Dynamics (CFD) to maximize aerodynamic efficiency, reduce drag, and enhance overall flight stability.<br><strong>Tools:</strong> ANSYS Fluent, OpenFOAM, XFLR5'
      },
      {
        icon: '🛠️',
        heading: 'Structures',
        text: 'Engineering featherlight, high-strength frames built to handle extreme loads.<br><strong>Tools:</strong> SolidWorks, ANSYS Mechanical'
      },
      {
        icon: '📟',
        heading: 'Avionics',
        text: 'Autonomous flight-control, telemetry, and sensor integration.<br><strong>Tools:</strong> Gazebo, ArduPilot'
      }
    ]
  },

  // SLIDE 10 — Template D ("Section header" 3D visual related to planes)
  {
    slideNum: 10,
    template: 'D',
    modelType: 'plane',
    footer: 'PL130N • AeroNITK • Section I',
    kicker: 'SUBSYSTEM 01 // FLUID DYNAMICS',
    title: 'areodynamics',
    subtitle: 'Lift, Drag, Airfoils & Flight Stability'
  },

  // SLIDE 11 — Template B (Placeholder noted for visual-only slide 15)
  {
    slideNum: 11,
    template: 'B',
    footer: 'PL130N • AeroNITK • 15',
    kicker: 'AERODYNAMICS // VISUAL SLIDE 11',
    title: 'PL130N AeroNITK — Aerodynamics Visual I',
    buttonLabel: 'Drop Whiteboard: Slide 11 Notes',
    image: 'images/slide11.png',
    imageAlt: 'Slide 11 Aerodynamics Graphic (PL130N AeroNITK 15)',
    lines: [
      '<strong>[PLACEHOLDER — SLIDE 11 CONTENT]:</strong> In the source PPTX, Slide 11 (marked <code>PL130N AeroNITK 15</code>) contained a full-slide visual diagram with no selectable text layer.',
      'Place your exported Slide 11 image at <code>/images/slide11.png</code> to display the exact slide graphic on the left.',
      'You can also replace these whiteboard lines in <code>script.js</code> if you wish to add custom spoken notes for Slide 11.'
    ]
  },

  // SLIDE 12 — Special Slide: Instagram Reel + Reveal Formula Button + Tenor Math GIF
  {
    slideNum: 12,
    template: 'S12',
    footer: 'PL130N • AeroNITK • 16',
    kicker: 'AERODYNAMICS // LIFT & DRAG EQUATIONS',
    title: 'Aerodynamic Formula & Flight Reel',
    reelUrl: 'https://www.instagram.com/reel/DUoj5FdEhGD/',
    formulaText: 'L = ½ · ρ · v² · S · C_L   |   D = ½ · ρ · v² · S · C_D\n[PLACEHOLDER: Exact text/formula from Slide 12 (PL130N AeroNITK 16) image layer — update if additional text was on the rasterized graphic]'
  },

  // SLIDE 13 — Template A ("Fly-in")
  {
    slideNum: 13,
    template: 'A',
    footer: 'PL130N • AeroNITK • 19',
    kicker: 'PLATFORM COMPARISON',
    title: 'Airframe & Aerodynamic Architecture',
    subtitle: 'Fixed-Wing • Multirotor • Hybrid VTOL',
    buttonLabel: 'Fly & Assemble Architectures',
    image: 'images/slide13_architecture.png',
    imageAlt: 'Airframe & Aerodynamic Architecture',
    logos: [],
    blocks: [
      '<strong>Fixed-Wing Platform:</strong> Designed for long-range efficiency and endurance flights.<br>› Fuselage & Wings • › Horiz. / Vert. Stabilizer • › Ailerons & Elevator • › Landing Gear Assembly',
      '<strong>Multirotor Configuration:</strong> Optimized for vertical takeoff, landing, and stable hovering.<br>› Central Rigid Frame • › Structural Arms • › Motor Mount Brackets • › Prop Guards & Legs',
      '<strong>Hybrid VTOL Architecture:</strong> Combines multirotor VTOL agility with fixed-wing cruise speed.<br>› Wing + Fuselage Hybrid • › Dedicated Lift Motors • › Forward Cruise Motor • › Transition Mechanism'
    ]
  },

  // SLIDE 14 — Template B ("Whiteboard drop")
  {
    slideNum: 14,
    template: 'B',
    footer: 'PL130N • AeroNITK • 31',
    kicker: 'CRUISE EFFICIENCY & CONTROL SURFACES',
    title: 'Fixed-wing Aircraft',
    buttonLabel: 'Drop Whiteboard: Control Surfaces',
    image: 'images/slide14_fixedwing.png',
    imageAlt: 'Fixed-wing Aircraft Control Surfaces',
    lines: [
      '<strong>Engineered for maximum endurance, payload, and aerodynamic efficiency.</strong>',
      'Driven by forward airspeed over an optimized airfoil, fixed-wing platforms trade raw thrust for dynamic lift. This maximizes aerodynamic efficiency, drastically reducing cruise-phase power consumption and expanding the flight envelope for long-range, heavy-payload missions.',
      '<strong>Main Wing:</strong> Generates primary lift and inherent stability, while producing induced drag as a natural byproduct.',
      '<strong>Ailerons:</strong> Control roll by asymmetrically altering lift and drag on opposite wings to bank the aircraft.',
      '<strong>Elevators:</strong> Control pitch by shifting tail downforce, which directly dictates the main wing\'s angle of attack and total drag.'
    ]
  },

  // SLIDE 15 — Template D ("Section header" 3D visual related to planes)
  {
    slideNum: 15,
    template: 'D',
    modelType: 'airframe',
    footer: 'PL130N • AeroNITK • Section II',
    kicker: 'SUBSYSTEM 02 // AIRFRAME & MATERIALS',
    title: 'structure',
    subtitle: 'STRUCTURES: DESIGN. BUILD. FAIL.'
  },

  // SLIDE 16 — 4 Big Interactive Buttons Hub (Links to Slides 17–21 with plane transition)
  {
    slideNum: 16,
    template: 'HUB4',
    footer: 'PL130N • AeroNITK • Structures Hub',
    kicker: 'STRUCTURES // INTERACTIVE MISSION HUB',
    title: 'STRUCTURES: DESIGN. BUILD. FAIL.',
    subtitle: 'A structure is only as reliable as our understanding of its limits. Select any module below to fly to its slide:',
    hubButtons: [
      {
        targetSlide: 17,
        num: 'MODULE 01 // SLIDE 17',
        title: 'Design, Build & Failure Testing Philosophy',
        desc: 'We design to predict. We build to realize. We test to discover.'
      },
      {
        targetSlide: 18,
        num: 'MODULE 02 // SLIDE 18',
        title: 'King of long flights — The Albatross',
        desc: '120,000 miles (1,93,000km) without touching the ground & 12-foot wingspan.'
      },
      {
        targetSlide: 19,
        num: 'MODULE 03 // SLIDE 19–20',
        title: 'Future Technologies: Morphing Wings',
        desc: 'FlexSys Adaptive Compliant Trailing Edge & AFTI/F111A Aardvark Mission Adaptable Wing.'
      },
      {
        targetSlide: 21,
        num: 'MODULE 04 // SLIDE 21',
        title: 'Why is failure important?',
        desc: 'Why real-world structural testing reveals what simulations alone cannot predict.'
      }
    ]
  },

  // SLIDE 17 — Revealed from Button 1 of Slide 16 (Template A)
  {
    slideNum: 17,
    template: 'A',
    hubReturn: 16,
    footer: 'PL130N • AeroNITK • Structures Philosophy',
    kicker: 'MODULE 01 // STRUCTURES PHILOSOPHY',
    title: 'STRUCTURES: DESIGN. BUILD. FAIL.',
    subtitle: 'A structure is only as reliable as our understanding of its limits.',
    buttonLabel: 'Fly & Reveal Philosophy',
    image: 'images/slide17_structures.png',
    imageAlt: 'Structures Design Build Fail',
    logos: [],
    blocks: [
      '<strong>We design to predict. We build to realize. We test to discover.</strong>',
      'Design tells us how a structure should behave. Building reveals the challenges of manufacturing and assembly. Failure testing reveals what happens when reality challenges our assumptions.',
      'By studying where, why, and how a structure fails, we identify weak points, validate simulations, understand material behaviour, and improve our designs.',
      'For us, failure is not the opposite of success. It is a source of engineering knowledge.<br><strong>Design with purpose. Build with precision. Learn from failure. Engineer better.</strong>'
    ]
  },

  // SLIDE 18 — Revealed from Button 2 of Slide 16 (Template B)
  {
    slideNum: 18,
    template: 'B',
    hubReturn: 16,
    footer: 'PL130N • AeroNITK • 34',
    kicker: 'MODULE 02 // BIO-INSPIRED AERODYNAMICS',
    title: 'King of long flights',
    buttonLabel: 'Drop Whiteboard: Albatross Physics',
    image: 'images/slide18_albatross.png',
    imageAlt: 'Albatross Dynamic Soaring',
    lines: [
      'Documented case of this bird flying about <strong>120,000 miles i.e 1,93,000km (WITHOUT TOUCHING THE GROUND)</strong>',
      '<strong>WHAT MAKES THEM SPECIAL:</strong> WINNGS SPAN OF ABOUT 12 FEET LONG.',
      'Albatrosses repeatedly move between air layers of different speeds to extract energy from wind shear.',
      'Their long, narrow wings generate lift efficiently while reducing drag during soaring flight.'
    ]
  },

  // SLIDE 19 — Revealed from Button 3 of Slide 16 (Template C)
  {
    slideNum: 19,
    template: 'C',
    hubReturn: 16,
    footer: 'PL130N • AeroNITK • Morphing Wings I',
    kicker: 'MODULE 03A // ADAPTIVE AIRFRAMES',
    title: 'Adaptive & Mission Adaptable Wings',
    subtitle: 'Compare the two morphing wing benchmarks:',
    choices: [
      {
        btnLabel: 'FlexSys Morphing Wing',
        heading: 'Adaptive compliant trailing edge morphing wing design',
        image: 'images/slide19_flexsys.png',
        text: 'Adaptive compliant trailing edge morphing wing design (Source: FlexSys Morphing Wing)'
      },
      {
        btnLabel: 'AFTI/F111A Aardvark',
        heading: 'General Dynamics – Boeing – AFTI/F111A Aardvark',
        image: 'images/slide19_f111a.png',
        text: 'General Dynamics – Boeing – AFTI/F111A Aardvark (Source: Wikipedia)'
      }
    ]
  },

  // SLIDE 20 — Part 2 of Morphing Wings (Template A)
  {
    slideNum: 20,
    template: 'A',
    hubReturn: 16,
    footer: 'PL130N • AeroNITK • Morphing Wings II',
    kicker: 'MODULE 03B // MISSION ADAPTABLE WING',
    title: 'Future Technologies Morphing Wings',
    subtitle: 'AFTI/F111A Aardvark (1985–1988)',
    buttonLabel: 'Fly & Reveal MAW Details',
    image: 'images/slide20_maw.png',
    imageAlt: 'Mission Adaptable Wing F111 Aardvark',
    logos: [],
    blocks: [
      'A specially modified f111 Aardvark that featured a special <strong>Mission Adaptable Wing (MAW)</strong>, it could change the camber, profile and other wing parameters on command based on the phase of flight.',
      'It first flew in <strong>1985</strong> and continued flying until <strong>1988</strong>.'
    ]
  },

  // SLIDE 21 — Revealed from Button 4 of Slide 16 (Template B)
  {
    slideNum: 21,
    template: 'B',
    hubReturn: 16,
    footer: 'PL130N • AeroNITK • Structural Testing',
    kicker: 'MODULE 04 // REAL-WORLD VALIDATION',
    title: 'Why is failure important?',
    buttonLabel: 'Drop Whiteboard: Failure Analysis',
    image: 'images/slide21_failure.png',
    imageAlt: 'Structural Failure Testing',
    lines: [
      '<strong>Failure reveals what design calculations alone cannot fully predict.</strong>',
      'A structure may appear safe in simulations but behave differently under real-world conditions.',
      'Testing helps engineers discover its limitations, understand unexpected behaviour, and improve future designs.'
    ]
  },

  // SLIDE 22 — Template D (3D Visual Section Header before Crash/Flight Videos)
  {
    slideNum: 22,
    template: 'D',
    modelType: 'plane',
    footer: 'PL130N • AeroNITK • Flight Test Logs',
    kicker: 'FIELD TESTING // REALITY CHECK',
    title: 'Flight Testing & Crash Logs',
    subtitle: 'When simulations meet the real-world airfield'
  },

  // SLIDE 23 — Template F (Playable uploaded videos + Meme GIFs)
  {
    slideNum: 23,
    template: 'F_MEME',
    footer: 'PL130N • AeroNITK • Field Videos I',
    kicker: 'MAIDEN FLIGHT CHRONICLES // PART 1',
    title: 'Day & Night Test Flights',
    subtitle: 'Playable field videos + live team reactions:',
    videos: [
      { src: 'videos/slide23_day_flight.mp4', poster: 'images/slide23_vid1.png', caption: 'Daytime Airfield Test Flight' },
      { src: 'videos/slide23_night_crash.mp4', poster: 'images/slide23_vid2.png', caption: 'Night Amphitheatre Flight Test' }
    ],
    captions: []
  },

  // SLIDE 24 — Template F ("Us when our plane crashed" + Uploaded Videos + Both Meme GIFs)
  {
    slideNum: 24,
    template: 'F_MEME',
    footer: 'PL130N • AeroNITK • 35',
    kicker: 'MAIDEN FLIGHT CHRONICLES // PART 2',
    title: 'Us when our plane crashed',
    subtitle: 'motor • "me thinking i will be the king of the sky after first flight" • FINALLY COMEBACK NO MORE CRASHES Flying video',
    videos: [
      { src: 'videos/slide24_comeback.mp4', poster: 'images/slide24_comeback.png', caption: 'FINALLY COMEBACK NO MORE CRASHES Flying video' }
    ],
    captions: [
      'Us when our plane crashed',
      'motor',
      'me thinking i will be the king of the sky after first flight',
      'FINALLY COMEBACK NO MORE CRASHES Flying video'
    ]
  },

  // SLIDE 25 — Template F (Playable video slide)
  {
    slideNum: 25,
    template: 'F',
    footer: 'PL130N • AeroNITK • Flight Video Archive',
    kicker: 'FLIGHT ARCHIVE // SLIDE 25',
    title: 'Flight Test Showcase',
    subtitle: 'Playable flight footage from our test sessions:',
    mediaItems: [
      {
        type: 'video',
        src: 'videos/slide25_flight.mp4',
        poster: 'images/slide25.png',
        title: 'Slide 25 Flight Footage',
        desc: 'Place your Slide 25 video at /videos/slide25_flight.mp4 (or image at /images/slide25.png).'
      }
    ]
  },

  // SLIDE 26 — Template D (3D Visual Section Header)
  {
    slideNum: 26,
    template: 'D',
    modelType: 'plane',
    footer: 'PL130N • AeroNITK • Airfield Practice',
    kicker: 'PILOT TRAINING // GROUND SCHOOL',
    title: 'PRACTICE SESSION',
    subtitle: 'Precision RC piloting & recovery drills on the NITK grounds'
  },

  // SLIDE 27 — Template F ("PRACTICE SESSION" playable video)
  {
    slideNum: 27,
    template: 'F',
    footer: 'PL130N • AeroNITK • Practice Session',
    kicker: 'LIVE AIRFIELD FOOTAGE',
    title: 'PRACTICE SESSION',
    subtitle: 'High-wing trainer takeoff and circuit practice:',
    mediaItems: [
      {
        type: 'video',
        src: 'videos/slide27_practice.mp4',
        poster: 'images/slide27_practice.png',
        title: 'PRACTICE SESSION — Airfield Video',
        desc: 'Playable RC flight practice session video (/videos/slide27_practice.mp4).'
      }
    ]
  },

  // SLIDE 28 — Template D ("GUESS THE PLANE" 3D Visual Header)
  {
    slideNum: 28,
    template: 'D',
    modelType: 'mystery_jet',
    footer: 'PL130N • AeroNITK • Interactive Quiz',
    kicker: 'AUDIENCE CHALLENGE',
    title: 'GUESS THE PLANE',
    subtitle: 'Identify the legendary aircraft from their silhouettes and specs!'
  },

  // SLIDE 29 — Template E ("Guess the Plane" Round 1)
  {
    slideNum: 29,
    template: 'E_GUESS',
    footer: 'PL130N • AeroNITK • Guess The Plane #1',
    kicker: 'GUESS THE PLANE // ROUND 01 (SLIDE 29)',
    title: 'Mystery Aircraft #1',
    clueSilhouetteImg: 'images/slide29_silhouette.png',
    clueSpecs: 'Clue 2 — Check the wing geometry, engine placement, and twin-tail/fuselage profile from Slide 29.',
    answerTitle: 'Slide 29 Aircraft Revealed! [Update exact aircraft name from Slide 29 image]',
    answerImg: 'images/slide29_answer.png'
  },

  // SLIDE 30 — Template E ("Guess the Plane" Round 2)
  {
    slideNum: 30,
    template: 'E_GUESS',
    footer: 'PL130N • AeroNITK • Guess The Plane #2',
    kicker: 'GUESS THE PLANE // ROUND 02 (SLIDE 30)',
    title: 'Mystery Aircraft #2',
    clueSilhouetteImg: 'images/slide30_silhouette.png',
    clueSpecs: 'Clue 2 — Inspect the distinctive airframe profile and propulsion layout from Slide 30.',
    answerTitle: 'Slide 30 Aircraft Revealed! [Update exact aircraft name from Slide 30 image]',
    answerImg: 'images/slide30_answer.png'
  },

  // SLIDE 31 — Template E ("Guess the Plane" Round 3)
  {
    slideNum: 31,
    template: 'E_GUESS',
    footer: 'PL130N • AeroNITK • Guess The Plane #3',
    kicker: 'GUESS THE PLANE // ROUND 03 (SLIDE 31)',
    title: 'Mystery Aircraft #3',
    clueSilhouetteImg: 'images/slide31_silhouette.png',
    clueSpecs: 'Clue 2 — Examine the wingspan, cockpit, and tail configuration from Slide 31.',
    answerTitle: 'Slide 31 Aircraft Revealed! [Update exact aircraft name from Slide 31 image]',
    answerImg: 'images/slide31_answer.png'
  },

  // SLIDE 32 — Template D ("avionics" 3D Visual Section Header)
  {
    slideNum: 32,
    template: 'D',
    modelType: 'avionics_drone',
    footer: 'PL130N • AeroNITK • Section III',
    kicker: 'SUBSYSTEM 03 // AUTONOMY & ELECTRONICS',
    title: 'avionics',
    subtitle: 'Flight Controllers, Sensors, Telemetry & Autonomous UAVs'
  },

  // SLIDE 33 — Template E (Origin, Evolution & Types of Drones)
  {
    slideNum: 33,
    template: 'E',
    footer: 'PL130N • AeroNITK • 9',
    kicker: 'UAV FUNDAMENTALS',
    title: 'Origin, Evolution & Types of Drones',
    subtitle: 'Reveal the 3 foundational pillars of UAV classification:',
    steps: [
      {
        icon: '🛸',
        heading: 'What is a Drone?',
        text: 'Formally called Unmanned Aerial Vehicle (UAV), is an aircraft that operates without human interference (autonomous) or remotely piloted'
      },
      {
        icon: '📊',
        heading: 'Categorization of Drones',
        text: 'Drones are categorized based on:<br>a) No. of Propellers<br>b) Size<br>c) Range'
      },
      {
        icon: '⚙️',
        heading: 'Five Core Subsystems',
        text: 'A Drone’s architecture consists of airframe, control system, power source and dedicated payload'
      }
    ]
  },

  // SLIDE 34 — Template B (History of Drones + Operation Aphrodite)
  {
    slideNum: 34,
    template: 'B',
    footer: 'PL130N • AeroNITK • 11',
    kicker: 'HISTORICAL TIMELINE // 1894–1944',
    title: 'History of Drones',
    buttonLabel: 'Drop Whiteboard: 1894 to WWII',
    image: 'images/slide34_aphrodite.png',
    imageAlt: 'An image of a plane used in Operation Aphrodite one of the first uses of drones in combat, all the way back in 1944',
    lines: [
      'The earliest concept of UAV’S was arisen by Austrians in 1894 using unmanned balloons and the first aircraft was built at the time of the first World War. Technological Development exponentially rose in the Drones’ field since the war.',
      '<strong>01. Early 20th Century Pioneers:</strong> Unmanned flight concepts originated during WWI with pilotless aerial torpedoes and automatic aircraft development',
      '<strong>02. Target Practice & Radio Control:</strong> Early systems were primarily engineered for military training and target practice, enabled by groundbreaking radio-control links.',
      '<strong>03. WWII Acceleration & Scale:</strong> World War II accelerated mass manufacturing. These early UAVs were large, costly, and strictly confined to specialized defense ops.',
      '<em>Caption: An image of a plane used in Operation Aphrodite one of the first uses of drones in combat, all the way back in 1944</em>'
    ]
  },

  // SLIDE 35 — Template E (Evolution of Drone Tech — 5 Stages)
  {
    slideNum: 35,
    template: 'E',
    footer: 'PL130N • AeroNITK • 12',
    kicker: 'GENERATIONAL LEAPS',
    title: 'Evolution of Drone Tech',
    subtitle: 'Step through all 5 eras of UAV evolution:',
    steps: [
      {
        icon: '🎯',
        heading: 'Target Aircraft',
        text: 'Early radio-controlled aerial torpedoes & target practice planes like the DH.82B Queen Bee.'
      },
      {
        icon: '👁️',
        heading: 'Reconnaissance',
        text: 'Tactical battlefield surveillance & reusable reconnaissance UAVs with film camera'
      },
      {
        icon: '⌖',
        heading: 'GPS & Autonomy',
        text: 'Digital microcontrollers and satellite GPS navigation unlocked waypoint routing.'
      },
      {
        icon: '📡',
        heading: 'MEMS & Electric',
        text: 'Micro-machined gyro sensors, LiPo batteries, & brushless motors democratized drones.'
      },
      {
        icon: '🤖',
        heading: 'AI & Hybrid VTOL',
        text: 'Edge AI vision, obstacle avoidance, swarm logic, and long-range hybrid tilt-rotor'
      }
    ]
  },

  // SLIDE 36 — Template A (Quadcopter)
  {
    slideNum: 36,
    template: 'A',
    footer: 'PL130N • AeroNITK • 32',
    kicker: 'MULTIROTOR DYNAMICS',
    title: 'Quadcopter',
    subtitle: 'The Brain • Clean Data • Power Delivery',
    buttonLabel: 'Fly & Reveal Quadcopter Architecture',
    image: 'images/slide36_quadcopter.png',
    imageAlt: 'AeroNITK Quadcopter Platform',
    logos: [],
    blocks: [
      '<strong>The Brain:</strong> Flight Controller processes IMU/gyroscope data hundreds of times per second.',
      '<strong>Clean Data:</strong> FEA-validated, rigid frame design eliminates resonant vibrations that disrupt sensors.',
      '<strong>Power Delivery:</strong> High-discharge LiPos and ESCs translate digital signals into immediate torque.',
      'Our drone delivers a genuinely stable, long-lasting, and durable flight experience that gives every user confident control throughout every single demanding daily flight session.'
    ]
  },

  // SLIDE 37 — Template F (PL130N AeroNITK 17 Visual Slide)
  {
    slideNum: 37,
    template: 'F',
    footer: 'PL130N • AeroNITK • 17',
    kicker: 'QUADCOPTER VISUAL // SLIDE 37',
    title: 'Quadcopter Subsystem Diagram (Slide 37)',
    subtitle: 'Visual diagram from PL130N AeroNITK 17:',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide37.png',
        title: 'PL130N AeroNITK 17 — Visual Diagram',
        desc: '[PLACEHOLDER: Save Slide 37 visual as /images/slide37.png]'
      }
    ]
  },

  // SLIDE 38 — Template B (PL130N AeroNITK 14 Visual Slide)
  {
    slideNum: 38,
    template: 'B',
    footer: 'PL130N • AeroNITK • 14',
    kicker: 'AVIONICS VISUAL // SLIDE 38',
    title: 'Quadcopter / Avionics Layout (Slide 38)',
    buttonLabel: 'Drop Whiteboard: Slide 38 Notes',
    image: 'images/slide38.png',
    imageAlt: 'Slide 38 Graphic (PL130N AeroNITK 14)',
    lines: [
      '<strong>[PLACEHOLDER — SLIDE 38 (PL130N AeroNITK 14)]:</strong> This slide contained a full-bleed diagram/photo in the source deck.',
      'Place the exported image at <code>/images/slide38.png</code>.'
    ]
  },

  // SLIDE 39 — Template D ("subsection : VTOL" 3D Visual Section Header)
  {
    slideNum: 39,
    template: 'D',
    modelType: 'vtol_quad',
    footer: 'PL130N • AeroNITK • 18',
    kicker: 'HYBRID AEROSPACE ARCHITECTURE',
    title: 'subsection : VTOL',
    subtitle: 'Vertical Takeoff & Landing + Fixed-Wing Cruise'
  },

  // SLIDE 40 — Template E ("VTOL: Combining Worlds")
  {
    slideNum: 40,
    template: 'E',
    footer: 'PL130N • AeroNITK • 33',
    kicker: 'TRANSITION FLIGHT REGIME',
    title: 'VTOL: Combining Worlds',
    subtitle: 'Step through the hybrid VTOL flight phases:',
    steps: [
      {
        icon: '⚡',
        heading: 'The Ultimate Challenge',
        text: 'Blending multirotor mechanics with fixed-wing aerodynamics.'
      },
      {
        icon: '🛫',
        heading: 'Vertical Phase',
        text: 'Dedicated quad-rotors provide 100% of the thrust for takeoff and landing.'
      },
      {
        icon: '🔄',
        heading: 'The Transition',
        text: 'Forward motor engages, airspeed builds, and wings dynamically take over the lifting load.'
      },
      {
        icon: '✈️',
        heading: 'Forward Cruise',
        text: 'Lift motors shut down, drastically reducing battery drain during long-range flight.'
      }
    ]
  },

  // SLIDE 41 — Template A (PL130N AeroNITK 10 Visual Slide)
  {
    slideNum: 41,
    template: 'A',
    footer: 'PL130N • AeroNITK • 10',
    kicker: 'VTOL / PROPULSION OVERVIEW // SLIDE 41',
    title: 'PL130N AeroNITK 10 — Architecture Overview',
    subtitle: 'Visual diagram slide before Propulsion Subsystem',
    buttonLabel: 'Fly & Reveal Diagram Notes',
    image: 'images/slide41.png',
    imageAlt: 'Slide 41 Graphic (PL130N AeroNITK 10)',
    logos: [],
    blocks: [
      '<strong>[PLACEHOLDER — SLIDE 41 (PL130N AeroNITK 10)]:</strong> Drop your exported graphic from Slide 41 into <code>/images/slide41.png</code>.'
    ]
  },

  // SLIDE 42 — Template E ("Propulsion Subsystem")
  {
    slideNum: 42,
    template: 'E',
    footer: 'PL130N • AeroNITK • 20',
    kicker: 'THRUST & POWER CONVERSION',
    title: 'Propulsion Subsystem',
    subtitle: 'Reveal each component of the electric propulsion train:',
    steps: [
      {
        icon: '🧲',
        heading: 'Brushless DC Motors (BLDC)',
        text: 'Offers high power-to-weight ratio, exceptional thermal efficiency, and minimal mechanical friction due to electronic commutation.'
      },
      {
        icon: '🎛️',
        heading: 'Electronic Speed Controller (ESC)',
        text: 'Translates flight controller PWM/DShot signals into precise 3-phase AC voltage to regulate motor RPM instantly.'
      },
      {
        icon: '🌀',
        heading: 'Propeller Selection Dynamics',
        text: 'Diameter & pitch directly dictate static thrust, current draw, aerodynamic efficiency, and maximum airspeed.'
      },
      {
        icon: '🔌',
        heading: 'Power Distribution System',
        text: 'Routes raw high-current battery power safely to multiple ESCs while stepping down clean voltage for electronics.'
      }
    ]
  },

  // SLIDE 43 — Template B ("Flight Controller & Onboard Sensors")
  {
    slideNum: 43,
    template: 'B',
    footer: 'PL130N • AeroNITK • 21',
    kicker: 'AVIONICS // EKF & PID LOOPS',
    title: 'Flight Controller & Onboard Sensors',
    buttonLabel: 'Drop Whiteboard: Sensor Fusion',
    image: 'images/slide43_fc.png',
    imageAlt: 'Flight Controller & Onboard Sensors',
    lines: [
      '<strong>The Central "Brain" of the Aircraft:</strong> The Flight Controller (FC) continuously polls multi-sensor data, computes state estimation filters (EKF), and executes high-speed control loops.',
      '<strong>Inertial Measurement Unit (IMU):</strong> Integrates Accelerometer (forces) & Gyroscope (angular velocity) for attitude estimation.',
      '<strong>Navigation & Altitude Suite:</strong> Magnetometer (heading), Barometer (altitude), GPS/GNSS (waypoint position), & Airspeed Pitot tubes.',
      '<strong>Control Loop Execution:</strong> Runs PID algorithm loops to send instant command signals to motors and control surface servos.'
    ]
  },

  // SLIDE 44 — Template E ("Communication & Feedback Control")
  {
    slideNum: 44,
    template: 'E',
    footer: 'PL130N • AeroNITK • 22',
    kicker: 'CLOSED-LOOP FLIGHT CONTROL SYSTEM CYCLE',
    title: 'Communication & Feedback Control',
    subtitle: 'Step through the Signal Link, Telemetry, and 5-Stage Closed-Loop Cycle:',
    steps: [
      {
        icon: '📻',
        heading: 'Signal Link Chain',
        text: '<strong>Radio Transmitter → Receiver:</strong> Manual pilot stick input commands over 2.4GHz / 900MHz channels.<br><strong>FC → Actuators:</strong> Direct PWM/DShot signals to ESCs and control servos for physical movement.'
      },
      {
        icon: '📡',
        heading: 'Two-Way Telemetry',
        text: 'Streams critical real-time flight parameters back to the Ground Control Station (GCS):<br>• Altitude • Airspeed • GPS Coordinates • Battery Voltage • Flight Mode • Satellite Lock'
      },
      {
        icon: '🔄',
        heading: 'Closed-Loop Steps 1 – 3',
        text: '<strong>1. Sensors:</strong> IMU, GPS, Baro read aircraft state<br><strong>2. Flight Controller:</strong> Evaluates target vs actual attitude<br><strong>3. Control Algorithm:</strong> Calculates PID error correction'
      },
      {
        icon: '✈️',
        heading: 'Closed-Loop Steps 4 – 5',
        text: '<strong>4. Actuators:</strong> ESCs adjust motor speeds / servos<br><strong>5. Aircraft Motion:</strong> Physical response changes state'
      }
    ]
  },

  // SLIDE 45 — Template C ("Power Architecture & Battery Tech")
  {
    slideNum: 45,
    template: 'C',
    footer: 'PL130N • AeroNITK • 23',
    kicker: 'ELECTRICAL TOPOLOGY',
    title: 'Power Architecture & Battery Tech',
    subtitle: 'Compare Power System Topology and the Lithium Polymer (LiPo) Standard:',
    choices: [
      {
        btnLabel: 'Power System Topology',
        heading: 'Power System Topology',
        image: 'images/slide45_topology.png',
        text: '• Main Power Source: Battery pack supplying high direct current (DC).<br>• Power Distribution Board (PDB): Distributes high-current traces directly to ESCs.<br>• Voltage Regulators (BEC): Steps down main voltage to clean 5V/9V/12V DC for FC, receiver, and payloads.<br>• Current & Voltage Monitoring: Onboard telemetry sense resistor measures power consumption.'
      },
      {
        btnLabel: 'Lithium Polymer (LiPo) Standard',
        heading: 'Lithium Polymer (LiPo) Standard',
        image: 'images/slide45_lipo.png',
        text: '• High Energy Density: Superior capacity-to-weight ratio essential for flight endurance.<br>• High Discharge Rate (C-Rating): Delivers massive burst currents required during high-thrust maneuvers.<br>• Safety & Maintenance: Requires precise balance charging, storage voltage maintenance, and thermal monitoring.'
      }
    ]
  },

  // SLIDE 46 — Template E ("Mission Payloads & Sensor Integration")
  {
    slideNum: 46,
    template: 'E',
    footer: 'PL130N • AeroNITK • 24',
    kicker: 'APPLICATION PAYLOADS',
    title: 'Mission Payloads & Sensor Integration',
    subtitle: 'Reveal each mission payload package:',
    steps: [
      {
        icon: '📷',
        heading: 'Optical & Thermal Imaging',
        text: 'High-resolution RGB cameras mounted on 3-axis stabilized gimbals for inspection, and Infrared (FLIR) sensors for thermal search & rescue.'
      },
      {
        icon: '🌐',
        heading: 'LiDAR & Surveying Sensors',
        text: 'Light Detection and Ranging (LiDAR) for precise 3D terrain mapping, canopy penetration, structural inspection, and multispectral environmental sensors.'
      },
      {
        icon: '📦',
        heading: 'Delivery & Scientific Instruments',
        text: 'Servo-driven release mechanisms for medical package delivery, water sampling winches, and specialized atmospheric gas sensors.'
      }
    ]
  },

  // SLIDES 47–52 — Visual Gallery / Subsystem Slides (PL130N AeroNITK 25 to 29)
  {
    slideNum: 47,
    template: 'F',
    footer: 'PL130N • AeroNITK • 25',
    kicker: 'GALLERY & HARDWARE // SLIDE 47',
    title: 'AeroNITK Hardware & Flight Showcase I',
    subtitle: 'Slide 47 (PL130N AeroNITK 25):',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide47.png',
        title: 'PL130N AeroNITK 25',
        desc: '[PLACEHOLDER: Save Slide 47 visual as /images/slide47.png]'
      }
    ]
  },
  {
    slideNum: 48,
    template: 'F',
    footer: 'PL130N • AeroNITK • 26',
    kicker: 'GALLERY & HARDWARE // SLIDE 48',
    title: 'AeroNITK Hardware & Flight Showcase II',
    subtitle: 'Slide 48 (PL130N AeroNITK 26):',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide48.png',
        title: 'PL130N AeroNITK 26',
        desc: '[PLACEHOLDER: Save Slide 48 visual as /images/slide48.png]'
      }
    ]
  },
  {
    slideNum: 49,
    template: 'F',
    footer: 'PL130N • AeroNITK • 27',
    kicker: 'GALLERY & HARDWARE // SLIDE 49',
    title: 'AeroNITK Hardware & Flight Showcase III',
    subtitle: 'Slide 49 (PL130N AeroNITK 27):',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide49.png',
        title: 'PL130N AeroNITK 27',
        desc: '[PLACEHOLDER: Save Slide 49 visual as /images/slide49.png]'
      }
    ]
  },
  {
    slideNum: 50,
    template: 'F',
    footer: 'PL130N • AeroNITK • 28',
    kicker: 'GALLERY & HARDWARE // SLIDE 50',
    title: 'AeroNITK Hardware & Flight Showcase IV',
    subtitle: 'Slide 50 (PL130N AeroNITK 28):',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide50.png',
        title: 'PL130N AeroNITK 28 (Part 1)',
        desc: '[PLACEHOLDER: Save Slide 50 visual as /images/slide50.png]'
      }
    ]
  },
  {
    slideNum: 51,
    template: 'F',
    footer: 'PL130N • AeroNITK • 28',
    kicker: 'GALLERY & HARDWARE // SLIDE 51',
    title: 'AeroNITK Hardware & Flight Showcase V',
    subtitle: 'Slide 51 (PL130N AeroNITK 28):',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide51.png',
        title: 'PL130N AeroNITK 28 (Part 2)',
        desc: '[PLACEHOLDER: Save Slide 51 visual as /images/slide51.png]'
      }
    ]
  },
  {
    slideNum: 52,
    template: 'F',
    footer: 'PL130N • AeroNITK • 29',
    kicker: 'GALLERY & HARDWARE // SLIDE 52',
    title: 'AeroNITK Hardware & Flight Showcase VI',
    subtitle: 'Slide 52 (PL130N AeroNITK 29):',
    mediaItems: [
      {
        type: 'image',
        src: 'images/slide52.png',
        title: 'PL130N AeroNITK 29',
        desc: '[PLACEHOLDER: Save Slide 52 visual as /images/slide52.png]'
      }
    ]
  },

  // SLIDE 53 — Template B ("Club Alumnis")
  {
    slideNum: 53,
    template: 'B',
    footer: 'PL130N • AeroNITK • 8',
    kicker: 'GLOBAL IMPACT & INDUSTRY LEADERS',
    title: 'Club Alumnis',
    buttonLabel: 'Drop Whiteboard: Alumni Network',
    image: 'images/slide53_alumni.png',
    imageAlt: 'AeroNITK Alumni Network',
    lines: [
      '<strong>Leadership & Entrepreneurship:</strong><br>• Ayush Saxena: Founder & CEO of Bloofy and GradHub',
      '<strong>Aerospace, Defense & Public Sector:</strong><br>• Bhimu: Bharat Electronics Limited (BEL)<br>• Bharat Patel: Engineers India Limited (EIL)',
      '<strong>Automotive & Mobility:</strong><br>• Lavnnya: Bajaj Auto<br>• Gowtham Sunil: Maruti Suzuki',
      '<strong>Tech, Core Engineering & Industry:</strong><br>• Rahul N.C.: Oceaneering<br>• Tanay Shekhokar: Saviynt Amuse Labs<br>• Gowtham B.M.: R.L. Fine Chem'
    ]
  },

  // SLIDE 54 — Template A ("CONNECT WITH TEAM AERO NITK")
  {
    slideNum: 54,
    template: 'A',
    footer: 'Team AeroNITK • Wings of Teamwork',
    kicker: 'JOIN THE FLIGHT CREW',
    title: 'CONNECT WITH TEAM AERO NITK',
    subtitle: 'Ready to build, innovate, and take flight with us?',
    buttonLabel: 'Fly & Reveal Official Links',
    image: 'images/slide54_connect.png',
    imageAlt: 'Connect with Team AeroNITK QR & Links',
    logos: [
      { name: 'Team AeroNITK', src: 'images/aeronitk_logo.png' },
      { name: 'NITK Surathkal', src: 'images/nitk_logo.png' }
    ],
    blocks: [
      '<strong>LinkedIn:</strong> Team AeroNITK: Overview | LinkedIn',
      '<strong>Official Website:</strong> Web: Aero NITK | Wings of Teamwork',
      '<strong>Ready to build, innovate, and take flight with us?</strong> Scan our QR codes or reach out at the AeroNITK Workshop!'
    ]
  }
];

/* --------------------------------------------------------------------------
   STATE & DOM REFERENCES
   -------------------------------------------------------------------------- */
let currentIndex = 0;
const stageEl = document.getElementById('presentation-stage');
const counterEl = document.getElementById('slide-counter');
const tplBadgeEl = document.getElementById('template-badge');
const footerMetaEl = document.getElementById('slide-footer-meta');
const progressFillEl = document.getElementById('progress-fill');
const progressTrackEl = document.getElementById('progress-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const drawerEl = document.getElementById('slide-drawer');
const drawerGridEl = document.getElementById('drawer-grid');

/* --------------------------------------------------------------------------
   HELPER: RENDER IMAGE WITH AUTOMATIC PLACEHOLDER FALLBACK
   -------------------------------------------------------------------------- */
function renderImageFrame(src, alt) {
  return `
    <div class="media-frame">
      <img src="${src}" alt="${alt}" loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="img-placeholder-box" style="display:none;">
        <span>✈ SLIDE IMAGE ASSET</span>
        <code>/${src}</code>
        <span>(${alt})</span>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   GLOBAL SVG AIRPLANE FLY-ACROSS ANIMATION
   -------------------------------------------------------------------------- */
function triggerPlaneFlyover(onCompleteCallback) {
  if (prefersReducedMotion || typeof gsap === 'undefined') {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  gsap.registerPlugin(MotionPathPlugin);
  const path = document.getElementById('flight-curve');
  const jet = document.getElementById('flying-jet');

  gsap.killTweensOf([path, jet]);
  gsap.set(path, { strokeDashoffset: 2200, opacity: 1 });
  gsap.set(jet, { opacity: 1 });

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to([path, jet], { opacity: 0, duration: 0.4 });
      if (onCompleteCallback) onCompleteCallback();
    }
  });

  tl.to(path, {
    strokeDashoffset: 0,
    duration: 1.15,
    ease: 'power2.inOut'
  }, 0);

  tl.to(jet, {
    duration: 1.15,
    ease: 'power2.inOut',
    motionPath: {
      path: '#flight-curve',
      align: '#flight-curve',
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  }, 0);
}

/* --------------------------------------------------------------------------
   TEMPLATE BUILDERS (A, B, C, D, E, F + Special Slide 12 & Slide 16 Hub)
   -------------------------------------------------------------------------- */

function buildTemplateA(s) {
  const logosHTML = (s.logos && s.logos.length)
    ? `<div class="logo-strip">
        ${s.logos.map(l => `
          <div class="logo-badge">
            <img src="${l.src}" alt="${l.name}" onerror="this.style.display='none'" />
            <span>${l.name}</span>
          </div>
        `).join('')}
      </div>`
    : '';

  const returnBtn = s.hubReturn
    ? `<button class="action-btn cyan-btn" onclick="flyToSlide(${s.hubReturn - 1})" style="margin-right:10px;">↩ Back to 4-Button Hub (Slide 16)</button>`
    : '';

  return `
    <div class="slide-container glass-panel">
      <div class="tpl-a-grid">
        <div>
          <span class="slide-kicker">${s.kicker}</span>
          <h1 class="slide-title">${s.title}</h1>
          ${s.subtitle ? `<p class="slide-subtitle">${s.subtitle}</p>` : ''}
          ${logosHTML}
          ${renderImageFrame(s.image, s.imageAlt)}
          <div style="margin-top: 18px; display:flex; flex-wrap:wrap; gap:10px;">
            ${returnBtn}
            <button id="tpl-a-fly-btn" class="action-btn">
              <span>✈ ${s.buttonLabel || 'Fly'}</span>
            </button>
          </div>
        </div>
        <div id="tpl-a-payload" class="fly-hidden-payload">
          <div style="display:flex; flex-direction:column; gap:14px;">
            ${s.blocks.map(b => `
              <div class="step-card step-revealed">
                <p class="slide-body-text">${b}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildTemplateB(s) {
  const returnBtn = s.hubReturn
    ? `<button class="action-btn cyan-btn" onclick="flyToSlide(${s.hubReturn - 1})">↩ Back to Slide 16 Hub</button>`
    : '';

  return `
    <div class="slide-container glass-panel">
      <div class="tpl-b-layout">
        <div>
          <span class="slide-kicker">${s.kicker}</span>
          <h1 class="slide-title">${s.title}</h1>
          ${renderImageFrame(s.image, s.imageAlt)}
          <div style="margin-top: 18px; display:flex; flex-wrap:wrap; gap:10px;">
            ${returnBtn}
            <button id="tpl-b-drop-btn" class="action-btn">
              <span>📋 ${s.buttonLabel || 'Reveal Whiteboard'}</span>
            </button>
          </div>
        </div>

        <div class="whiteboard-rig">
          <div class="wb-ropes">
            <div class="wb-rope"></div>
            <div class="wb-rope"></div>
          </div>
          <div id="wb-board" class="whiteboard-board">
            <div class="whiteboard-header">
              <span>AERONITK // BRIEFING WHITEBOARD</span>
              <span>SLIDE #${String(s.slideNum).padStart(2, '0')}</span>
            </div>
            <div id="wb-lines-wrap">
              ${s.lines.map(line => `<p class="wb-line">${line}</p>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildTemplateC(s) {
  const returnBtn = s.hubReturn
    ? `<button class="action-btn cyan-btn" onclick="flyToSlide(${s.hubReturn - 1})">↩ Back to Slide 16 Hub</button>`
    : '';

  return `
    <div class="slide-container glass-panel">
      <span class="slide-kicker">${s.kicker}</span>
      <h1 class="slide-title">${s.title}</h1>
      ${s.subtitle ? `<p class="slide-subtitle">${s.subtitle}</p>` : ''}

      <div class="tpl-c-buttons">
        ${returnBtn}
        ${s.choices.map((c, idx) => `
          <button class="action-btn cyan-btn tpl-c-trigger" data-choice="${idx}">
            ✈ ${c.btnLabel}
          </button>
        `).join('')}
      </div>

      <div class="tpl-c-stage">
        ${s.choices.map((c, idx) => `
          <div class="tpl-c-card" id="tpl-c-card-${idx}">
            <h3 class="slide-subtitle" style="margin-bottom:10px;">${c.heading}</h3>
            <div class="c-card-img">
              ${renderImageFrame(c.image, c.heading)}
            </div>
            <div class="c-card-text">
              <p class="slide-body-text">${c.text}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function buildTemplateD(s) {
  const chars = s.title.split('').map(ch =>
    ch === ' ' ? '&nbsp;' : `<span class="char">${ch}</span>`
  ).join('');

  return `
    <div class="slide-container">
      <div class="tpl-d-center">
        <span class="slide-kicker">${s.kicker}</span>
        <h1 class="tpl-d-title" aria-label="${s.title}">${chars}</h1>
        <p class="slide-subtitle" style="color:#e2e8f0; max-width:680px; margin:0 auto;">
          ${s.subtitle || ''}
        </p>
        <div class="tpl-d-hint">
          <span>✥ INTERACTIVE 3D MODEL — MOVE MOUSE OR TOUCH TO ROTATE</span>
        </div>
      </div>
    </div>
  `;
}

function buildTemplateE(s) {
  return `
    <div class="slide-container glass-panel">
      <div class="tpl-e-header">
        <div>
          <span class="slide-kicker">${s.kicker}</span>
          <h1 class="slide-title">${s.title}</h1>
          ${s.subtitle ? `<p class="slide-subtitle" style="margin-bottom:0;">${s.subtitle}</p>` : ''}
        </div>
        <button id="tpl-e-next-btn" class="action-btn">
          <span>Next Step (1 / ${s.steps.length}) →</span>
        </button>
      </div>

      <div class="tpl-e-grid">
        ${s.steps.map((st, i) => `
          <div class="step-card" id="e-step-${i}">
            <span class="step-icon">${st.icon}</span>
            <h3 class="slide-subtitle" style="margin-bottom:8px;">${st.heading}</h3>
            <p class="slide-body-text">${st.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function buildTemplateEGuess(s) {
  return `
    <div class="slide-container glass-panel">
      <div class="tpl-e-header">
        <div>
          <span class="slide-kicker">${s.kicker}</span>
          <h1 class="slide-title">${s.title}</h1>
          <p class="slide-subtitle" style="margin-bottom:0;">Reveal Clues Step-by-Step: 1. Silhouette → 2. Specs → 3. Answer!</p>
        </div>
        <button id="guess-next-btn" class="action-btn">
          <span>Reveal Clue 1: Silhouette →</span>
        </button>
      </div>

      <div class="tpl-e-grid">
        <div class="step-card" id="guess-step-0">
          <span class="step-icon">🕵️</span>
          <h3 class="slide-subtitle">Clue 01 // Silhouette</h3>
          ${renderImageFrame(s.clueSilhouetteImg, 'Aircraft Silhouette Clue')}
        </div>

        <div class="step-card" id="guess-step-1">
          <span class="step-icon">📐</span>
          <h3 class="slide-subtitle">Clue 02 // Technical Specs</h3>
          <p class="slide-body-text">${s.clueSpecs}</p>
        </div>

        <div class="step-card" id="guess-step-2">
          <span class="step-icon">🏆</span>
          <h3 class="slide-subtitle">Clue 03 // Answer Reveal!</h3>
          <p class="slide-body-text" style="color:var(--amber-400); font-weight:700; margin-bottom:10px;">${s.answerTitle}</p>
          ${renderImageFrame(s.answerImg, 'Revealed Aircraft')}
        </div>
      </div>
    </div>
  `;
}

function buildSlide12Special(s) {
  return `
    <div class="slide-container glass-panel">
      <span class="slide-kicker">${s.kicker}</span>
      <h1 class="slide-title">${s.title}</h1>

      <div class="tpl-f-grid">
        <!-- Official Instagram Reel Embed -->
        <div class="media-card">
          <h4>📸 Official Instagram Reel</h4>
          <div style="max-height:380px; overflow-y:auto; border-radius:12px;">
            <blockquote class="instagram-media" data-instgrm-permalink="${s.reelUrl}" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:260px; padding:0; width:99.375%;">
              <a href="${s.reelUrl}" target="_blank" rel="noopener">View this Reel on Instagram</a>
            </blockquote>
          </div>
        </div>

        <!-- Reveal Formula Interactive Card -->
        <div class="media-card">
          <h4>🧮 Aerodynamic Formula</h4>
          <button id="reveal-formula-btn" class="action-btn" style="margin-bottom:16px;">
            <span>Reveal Formula</span>
          </button>
          <div id="formula-box" class="step-card" style="font-family:var(--font-mono); white-space:pre-line;">
            ${s.formulaText}
          </div>
        </div>

        <!-- Tenor Math Calculate GIF Embed -->
        <div class="media-card">
          <h4>🤔 Calculating Lift & Drag...</h4>
          <div class="tenor-gif-embed" data-postid="6237717" data-share-method="host" data-aspect-ratio="1.52381" data-width="100%">
            <a href="https://tenor.com/view/math-calculate-confusing-figure-out-gif-6237717">Math Calculate GIF</a> from <a href="https://tenor.com/search/math-gifs">Math GIFs</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildSlide16Hub(s) {
  return `
    <div class="slide-container glass-panel">
      <span class="slide-kicker">${s.kicker}</span>
      <h1 class="slide-title">${s.title}</h1>
      <p class="slide-subtitle">${s.subtitle}</p>

      <div class="hub-4-grid">
        ${s.hubButtons.map(b => `
          <button class="hub-big-btn" onclick="flyToSlide(${b.targetSlide - 1})">
            <span class="hub-num">${b.num} ✈</span>
            <span class="hub-title">${b.title}</span>
            <span class="hub-desc">${b.desc}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function buildTemplateFMeme(s) {
  const captionsHTML = (s.captions && s.captions.length)
    ? `<div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:16px;">
        ${s.captions.map(c => `<span class="slide-kicker" style="margin-bottom:0;">"${c}"</span>`).join('')}
      </div>`
    : '';

  return `
    <div class="slide-container glass-panel">
      <span class="slide-kicker">${s.kicker}</span>
      <h1 class="slide-title">${s.title}</h1>
      ${captionsHTML}

      <div class="tpl-f-grid">
        ${s.videos.map(v => `
          <div class="media-card">
            <h4>🎬 ${v.caption}</h4>
            <div class="media-frame">
              <video controls preload="metadata" poster="${v.poster}">
                <source src="${v.src}" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <p class="slide-body-text" style="font-size:0.8rem; margin-top:8px; color:var(--text-muted);">
              File: <code>/${v.src}</code>
            </p>
          </div>
        `).join('')}

        <!-- Tenor Meme GIF 1: Funny Cat Eating Chips -->
        <div class="media-card">
          <h4>🐱 Funny Cat Eating Chips</h4>
          <div class="tenor-gif-embed" data-postid="27622762" data-share-method="host" data-aspect-ratio="1" data-width="100%">
            <a href="https://tenor.com/view/funny-cat-eating-chips-gif-27622762">Funny Cat Eating Chips GIF</a> from <a href="https://tenor.com/search/funny+cat+eating+chips-gifs">Funny Cat Eating Chips GIFs</a>
          </div>
        </div>

        <!-- Tenor Meme GIF 2: Captain Jojo Rabbit -->
        <div class="media-card">
          <h4>🫡 Captain Jojo Rabbit</h4>
          <div class="tenor-gif-embed" data-postid="16355851" data-share-method="host" data-aspect-ratio="1.79775" data-width="100%">
            <a href="https://tenor.com/view/captain-jojo-rabbit-coat-wooh-you-may-call-me-captain-k-gif-16355851">Captain Jojo Rabbit GIF</a> from <a href="https://tenor.com/search/captain-gifs">Captain GIFs</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildTemplateF(s) {
  return `
    <div class="slide-container glass-panel">
      <span class="slide-kicker">${s.kicker}</span>
      <h1 class="slide-title">${s.title}</h1>
      ${s.subtitle ? `<p class="slide-subtitle">${s.subtitle}</p>` : ''}

      <div class="tpl-f-grid">
        ${s.mediaItems.map(item => `
          <div class="media-card">
            <h4>${item.title}</h4>${item.type === 'video' ? `
              <div class="media-frame">
                <video controls preload="metadata" poster="${item.poster || ''}">
                  <source src="${item.src}" type="video/mp4" />
                </video>
              </div>
            ` : renderImageFrame(item.src, item.title)}
            <p class="slide-body-text" style="margin-top:10px; font-size:0.9rem;">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   PAUSE ALL VIDEOS WHEN CHANGING SLIDES
   -------------------------------------------------------------------------- */
function pauseAllVideos() {
  document.querySelectorAll('video').forEach(v => {
    try { v.pause(); } catch (e) {}
  });
}

/* --------------------------------------------------------------------------
   RE-INITIALIZE TENOR & INSTAGRAM EMBEDS ON DYNAMIC SLIDES
   -------------------------------------------------------------------------- */
function refreshExternalEmbeds() {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
  const existingTenor = document.querySelector('script[src*="tenor.com/embed.js"]');
  if (existingTenor) {
    const newScript = document.createElement('script');
    newScript.src = 'https://tenor.com/embed.js';
    newScript.async = true;
    document.body.appendChild(newScript);
  }
}

/* --------------------------------------------------------------------------
   RENDER SLIDE & ATTACH INTERACTIVE TEMPLATE HANDLERS
   -------------------------------------------------------------------------- */
function renderSlide(index) {
  pauseAllVideos();
  currentIndex = Math.max(0, Math.min(SLIDES.length - 1, index));
  const s = SLIDES[currentIndex];

  // Update HUD Telemetry & Progress Bar
  counterEl.textContent = `${String(s.slideNum).padStart(2, '0')} / ${SLIDES.length}`;
  tplBadgeEl.textContent = `TPL-${s.template}`;
  footerMetaEl.textContent = s.footer;
  const pct = ((currentIndex + 1) / SLIDES.length) * 100;
  progressFillEl.style.width = `${pct}%`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === SLIDES.length - 1;

  // Toggle 3D Scene for Template D
  const threeCanvas = document.getElementById('three-canvas');
  if (s.template === 'D') {
    threeCanvas.classList.add('active');
    setThreeModelType(s.modelType || 'plane');
  } else {
    threeCanvas.classList.remove('active');
  }

  // Build HTML
  let html = '';
  switch (s.template) {
    case 'A': html = buildTemplateA(s); break;
    case 'B': html = buildTemplateB(s); break;
    case 'C': html = buildTemplateC(s); break;
    case 'D': html = buildTemplateD(s); break;
    case 'E': html = buildTemplateE(s); break;
    case 'E_GUESS': html = buildTemplateEGuess(s); break;
    case 'S12': html = buildSlide12Special(s); break;
    case 'HUB4': html = buildSlide16Hub(s); break;
    case 'F_MEME': html = buildTemplateFMeme(s); break;
    case 'F': default: html = buildTemplateF(s); break;
  }

  stageEl.innerHTML = html;
  stageEl.scrollTop = 0;

  // Entrance Animation
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {
    gsap.fromTo('.slide-container',
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
    );
  }

  bindTemplateInteractions(s);
  highlightDrawerItem();
}

function bindTemplateInteractions(s) {
  // Template A: Fly Button
  if (s.template === 'A') {
    const flyBtn = document.getElementById('tpl-a-fly-btn');
    const payload = document.getElementById('tpl-a-payload');
    if (flyBtn && payload) {
      flyBtn.addEventListener('click', () => {
        flyBtn.disabled = true;
        triggerPlaneFlyover(() => {
          payload.classList.add('revealed');
          if (!prefersReducedMotion && typeof gsap !== 'undefined') {
            gsap.fromTo('#tpl-a-payload .step-card',
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, stagger: 0.12, duration: 0.45, ease: 'back.out(1.3)' }
            );
          }
        });
      });
    }
  }

  // Template B: Whiteboard Drop on Ropes
  if (s.template === 'B') {
    const dropBtn = document.getElementById('tpl-b-drop-btn');
    const board = document.getElementById('wb-board');
    if (dropBtn && board) {
      dropBtn.addEventListener('click', () => {
        dropBtn.disabled = true;
        if (prefersReducedMotion || typeof gsap === 'undefined') {
          board.style.opacity = 1;
          board.style.transform = 'none';
          document.querySelectorAll('.wb-line').forEach(l => {
            l.style.opacity = 1;
            l.style.transform = 'none';
          });
          return;
        }
        const tl = gsap.timeline();
        tl.to(board, {
          y: '0%',
           opacity: 1,
          rotation: 2.5,
          duration: 0.65,
          ease: 'bounce.out'
        })
        .to(board, {
          rotation: -1.2,
          duration: 0.25,
          ease: 'sine.inOut'
        })
        .to(board, {
          rotation: 0,
          duration: 0.25,
          ease: 'sine.out'
        })
        .to('.wb-line', {
          opacity: 1,
          x: 0,
          stagger: 0.18,
          duration: 0.38,
          ease: 'power2.out'
        }, '-=0.1');
      });
    }
  }

  // Template C: Two-Button Reveal
  if (s.template === 'C') {
    const triggers = document.querySelectorAll('.tpl-c-trigger');
    triggers.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-choice');
        btn.classList.add('active');
        const card = document.getElementById(`tpl-c-card-${idx}`);
        if (!card) return;
        card.classList.add('active-card');
        triggerPlaneFlyover();

        const imgEl = card.querySelector('.c-card-img');
        const txtEl = card.querySelector('.c-card-text');

        if (prefersReducedMotion || typeof gsap === 'undefined') {
          imgEl.style.opacity = 1;
          imgEl.style.transform = 'none';
          txtEl.style.opacity = 1;
          txtEl.style.transform = 'none';
        } else {
          gsap.to(imgEl, { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(1.4)' });
          gsap.to(txtEl, { opacity: 1, y: 0, duration: 0.45, delay: 0.25, ease: 'power2.out' });
        }
      });
    });
  }

  // Template D: Staggered Letter Reveal
  if (s.template === 'D') {
    if (prefersReducedMotion || typeof gsap === 'undefined') {
      document.querySelectorAll('.tpl-d-title .char').forEach(c => {
        c.style.opacity = 1;
        c.style.transform = 'none';
      });
    } else {
      gsap.to('.tpl-d-title .char', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        stagger: 0.03,
        duration: 0.55,
        ease: 'back.out(1.6)'
      });
    }
  }

  // Template E: Step-by-Step Reveal
  if (s.template === 'E') {
    let stepIdx = 0;
    const nextStepBtn = document.getElementById('tpl-e-next-btn');
    if (nextStepBtn) {
      nextStepBtn.addEventListener('click', () => {
        if (stepIdx < s.steps.length) {
          const card = document.getElementById(`e-step-${stepIdx}`);
          if (card) card.classList.add('step-revealed');
          stepIdx++;
          if (stepIdx < s.steps.length) {
            nextStepBtn.querySelector('span').textContent = `Next Step (${stepIdx + 1} / ${s.steps.length}) →`;
          } else {
            nextStepBtn.querySelector('span').textContent = '✓ All Steps Revealed';
            nextStepBtn.disabled = true;
          }
        }
      });
    }
  }

  // Template E_GUESS: Guess the Plane Step-by-Step + Dramatic Plane Flyover on Answer
  if (s.template === 'E_GUESS') {
    let clueIdx = 0;
    const guessBtn = document.getElementById('guess-next-btn');
    const labels = [
      'Reveal Clue 1: Silhouette →',
      'Reveal Clue 2: Specs →',
      '✈ Dramatic Answer Reveal!'
    ];
    if (guessBtn) {
      guessBtn.addEventListener('click', () => {
        const card = document.getElementById(`guess-step-${clueIdx}`);
        if (clueIdx === 2) {
          triggerPlaneFlyover(() => {
            if (card) card.classList.add('step-revealed');
          });
          guessBtn.querySelector('span').textContent = '🏆 Aircraft Identified!';
          guessBtn.disabled = true;
        } else {
          if (card) card.classList.add('step-revealed');
          clueIdx++;
          guessBtn.querySelector('span').textContent = labels[clueIdx];
        }
      });
    }
  }

  // Slide 12 Special: Reveal Formula + Instagram & Tenor Embeds
  if (s.template === 'S12') {
    refreshExternalEmbeds();
    const formulaBtn = document.getElementById('reveal-formula-btn');
    const formulaBox = document.getElementById('formula-box');
    if (formulaBtn && formulaBox) {
      formulaBtn.addEventListener('click', () => {
        formulaBox.classList.add('step-revealed');
        formulaBtn.querySelector('span').textContent = '✓ Formula Revealed';
      });
    }
  }

  // Slide 23 & 24 Tenor GIFs
  if (s.template === 'F_MEME') {
    refreshExternalEmbeds();
  }
}

/* Plane transition helper used by Slide 16's 4 big buttons */
window.flyToSlide = function(targetIndex) {
  triggerPlaneFlyover(() => {
    renderSlide(targetIndex);
  });
};

/* --------------------------------------------------------------------------
   THREE.JS LIGHTWEIGHT INTERACTIVE 3D SCENE (Template D)
   Builds procedural 3D VTOL + Quadcopter or Fixed-Wing Aircraft
   -------------------------------------------------------------------------- */
let scene, camera, renderer, rootGroup;
let targetRotX = 0.15, targetRotY = 0.4;

function initThreeScene() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 1.4, 7.5);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const ambient = new THREE.AmbientLight(0xbae6fd, 0.75);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.4);
  dirLight.position.set(5, 8, 6);
  scene.add(dirLight);

  const amberLight = new THREE.PointLight(0xf59e0b, 1.2, 15);
  amberLight.position.set(-4, -2, 4);
  scene.add(amberLight);

  rootGroup = new THREE.Group();
  scene.add(rootGroup);

  setThreeModelType('vtol_quad');

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    if (!rootGroup) return;
    if (!prefersReducedMotion) {
      rootGroup.rotation.y += 0.0045 + (targetRotY - rootGroup.rotation.y) * 0.04;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.04;
    }
    renderer.render(scene, camera);
  }
  animate();
}

function setThreeModelType(type) {
  if (!rootGroup || typeof THREE === 'undefined') return;
  while (rootGroup.children.length > 0) {
    rootGroup.remove(rootGroup.children[0]);
  }

  const wireMat = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    emissive: 0x072a4f,
    metalness: 0.6,
    roughness: 0.25,
    wireframe: false
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    emissive: 0x451a03,
    metalness: 0.5,
    roughness: 0.3
  });
  const gridWire = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });

  if (type === 'vtol_quad') {
    // Left: Hybrid VTOL Aircraft | Right: Quadcopter
    const vtol = createAirplaneMesh(wireMat, accentMat, true);
    vtol.position.set(-2.1, 0, 0);
    vtol.scale.set(0.78, 0.78, 0.78);
    rootGroup.add(vtol);

    const quad = createQuadcopterMesh(wireMat, accentMat);
    quad.position.set(2.1, 0, 0);
    quad.scale.set(0.85, 0.85, 0.85);
    rootGroup.add(quad);
  } else if (type === 'avionics_drone') {
    const quad = createQuadcopterMesh(wireMat, accentMat);
    quad.scale.set(1.25, 1.25, 1.25);
    rootGroup.add(quad);
  } else {
    const plane = createAirplaneMesh(wireMat, accentMat, type === 'airframe');
    if (type === 'airframe') {
      const shell = createAirplaneMesh(gridWire, gridWire, true);
      shell.scale.set(1.06, 1.06, 1.06);
      rootGroup.add(shell);
    }
    rootGroup.add(plane);
  }
}

function createAirplaneMesh(bodyMat, accentMat, addVTOLBooms) {
  const g = new THREE.Group();
  // Fuselage
  const fuse = new THREE.Mesh(new THREE.ConeGeometry(0.32, 3.2, 12), bodyMat);
  fuse.rotation.x = Math.PI / 2;
  g.add(fuse);

  // Main Wing
  const wing = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.06, 0.55), bodyMat);
  wing.position.set(0, 0, 0.15);
  g.add(wing);

  // Tail Stabilizers
  const hTail = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.05, 0.32), accentMat);
  hTail.position.set(0, 0.05, -1.35);
  g.add(hTail);

  const vTail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.38), accentMat);
  vTail.position.set(0, 0.28, -1.35);
  g.add(vTail);

  if (addVTOLBooms) {
    [-1.1, 1.1].forEach(xPos => {
      const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.8, 8), accentMat);
      boom.rotation.x = Math.PI / 2;
      boom.position.set(xPos, -0.04, 0.1);
      g.add(boom);

      [-0.75, 0.95].forEach(zPos => {
        const rotor = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.02, 8, 24), accentMat);
        rotor.rotation.x = Math.PI / 2;
        rotor.position.set(xPos, 0.04, zPos);
        g.add(rotor);
      });
    });
  }
  return g;
}

function createQuadcopterMesh(bodyMat, accentMat) {
  const g = new THREE.Group();
  const core = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.22, 0.75), bodyMat);
  g.add(core);

  const arm1 = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.07, 0.12), bodyMat);
  arm1.rotation.y = Math.PI / 4;
  g.add(arm1);

  const arm2 = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.07, 0.12), bodyMat);
  arm2.rotation.y = -Math.PI / 4;
  g.add(arm2);

  const offsets = [
    [0.9, 0.9], [-0.9, 0.9], [0.9, -0.9], [-0.9, -0.9]
  ];
  offsets.forEach(([x, z]) => {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.36, 0.03, 10, 28), accentMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, 0.08, z);
    g.add(ring);
  });
  return g;
}

/* --------------------------------------------------------------------------
   NAVIGATION, PARALLAX, SWIPE, FULLSCREEN & DRAWER
   -------------------------------------------------------------------------- */
function buildDrawer() {
  drawerGridEl.innerHTML = SLIDES.map((s, idx) => `
    <button class="drawer-item" data-idx="${idx}">
      <div style="font-family:var(--font-mono); font-size:0.72rem; color:var(--amber-400);">
        SLIDE ${String(s.slideNum).padStart(2, '0')} // TPL-${s.template}
      </div>
      <div style="font-weight:700; font-size:0.88rem; margin-top:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
        ${s.title}
      </div>
    </button>
  `).join('');

  drawerGridEl.querySelectorAll('.drawer-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-idx'));
      drawerEl.classList.remove('open');
      renderSlide(idx);
    });
  });
}

function highlightDrawerItem() {
  drawerGridEl.querySelectorAll('.drawer-item').forEach((btn, idx) => {
    btn.classList.toggle('current', idx === currentIndex);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
  buildDrawer();
  renderSlide(0);

  // Prev / Next buttons
  prevBtn.addEventListener('click', () => renderSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => renderSlide(currentIndex + 1));

  // Progress bar scrub
  progressTrackEl.addEventListener('click', (e) => {
    const rect = progressTrackEl.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const target = Math.floor(ratio * SLIDES.length);
    renderSlide(target);
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      renderSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      renderSlide(currentIndex - 1);
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'g' || e.key === 'G') {
      drawerEl.classList.toggle('open');
    } else if (e.key === 'Escape') {
      drawerEl.classList.remove('open');
    }
  });

  // Touch Swipe navigation (Mobile/Tablet)
  let touchStartX = 0;
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) renderSlide(currentIndex + 1);
      else renderSlide(currentIndex - 1);
    }
  }, { passive: true });

  // Mouse & Touch Parallax for Clouds + 3D Model rotation
  window.addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth) - 0.5;
    const ny = (e.clientY / window.innerHeight) - 0.5;
    targetRotY = nx * 1.6;
    targetRotX = ny * 0.9;

    if (!prefersReducedMotion) {
      document.querySelectorAll('.cloud-layer').forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-parallax')) || 0.03;
        layer.style.transform = `translate(${-nx * 100 * speed}px, ${-ny * 100 * speed}px)`;
      });
    }
  });

  // Slide Drawer & Fullscreen buttons
  document.getElementById('slide-index-btn').addEventListener('click', () => {
    drawerEl.classList.toggle('open');
  });
  document.getElementById('close-drawer-btn').addEventListener('click', () => {
    drawerEl.classList.remove('open');
  });
  document.getElementById('fullscreen-btn').addEventListener('click', toggleFullscreen);
});

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}