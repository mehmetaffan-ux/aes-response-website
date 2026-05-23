export type IconKey =
  | "activity"
  | "anchor"
  | "cable"
  | "clipboard"
  | "droplets"
  | "file"
  | "fuel"
  | "gauge"
  | "lifeBuoy"
  | "packageCheck"
  | "radio"
  | "shield"
  | "ship"
  | "truck"
  | "waves"
  | "wrench";

export type Service = {
  title: string;
  slug: string;
  icon: IconKey;
  summary: string;
  details: string[];
  operationalProblem: string;
  aesScope: string[];
  equipmentUsed: string[];
  hseControls: string[];
  typicalUseCases: string[];
  relatedLinks: {
    label: string;
    href: string;
  }[];
  imagePath?: string;
  imageAlt?: string;
};

export type EquipmentItem = {
  title: string;
  icon: IconKey;
  summary: string;
  capability: string;
  purpose?: string;
  typicalScope?: string[];
  operationalNotes?: string[];
  suggestedVisual?: string;
  imagePath?: string;
  imageAlt?: string;
};

export type ProcessStep = {
  title: string;
  summary: string;
};

export type ResponseScenario = {
  title: string;
  slug: string;
  icon: IconKey;
  situation: string;
  operationalChallenge: string;
  aesScope: string;
  equipmentConfiguration: string[];
  hseControls: string[];
  outcomeObjective: string;
  visualNote: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  intro: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  checklistTitle: string;
  checklist: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLinks: {
    label: string;
    href: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    title: "Emergency Cargo Transfer Support",
    slug: "emergency-cargo-transfer-support",
    icon: "ship",
    summary:
      "Controlled cargo removal support when vessel condition, draft, stability, grounding exposure or environmental risk requires a managed transfer option.",
    details: [
      "Cargo condition, quantity and transfer path review.",
      "Receiving vessel or barge interface planning.",
      "Operational records prepared for stakeholder review.",
    ],
    operationalProblem:
      "A distressed vessel may need cargo removed before safe movement, repair access, refloating, draft reduction or pollution risk reduction can be considered. Early decisions are often made with incomplete data on cargo behavior, tank condition, weather, access and receiving asset availability.",
    aesScope: [
      "Support initial technical assessment of cargo condition, transfer objective and receiving option.",
      "Structure transfer sequence inputs, communication discipline and stop-work considerations.",
      "Prepare service scope and documentation inputs for owners, managers, insurers, authorities and appointed stakeholders.",
    ],
    equipmentUsed: [
      "Cargo transfer hoses selected according to product, pressure, temperature and connection data.",
      "Floating pneumatic STS fenders when alongside transfer geometry is required.",
      "Manifold accessories, reducers, spool pieces and spill prevention support configured per operation.",
    ],
    hseControls: [
      "Cargo compatibility and tank atmosphere review before transfer planning.",
      "Pressure monitoring, leak watch, emergency shutdown readiness and communication protocol.",
      "Pollution prevention setup selected according to cargo type, vessel condition and site risk.",
    ],
    typicalUseCases: [
      "Disabled tanker or cargo vessel requiring draft or stress reduction.",
      "Distressed vessel where cargo exposure increases pollution or casualty management risk.",
      "Transfer preparation for receiving vessel, barge or approved receiving arrangement.",
    ],
    relatedLinks: [
      { label: "View equipment capability", href: "/equipment" },
      {
        label: "Representative cargo removal scenario",
        href: "/representative-response-scenarios#emergency-cargo-removal-disabled-tanker",
      },
      { label: "Start emergency request", href: "/contact" },
    ],
    imagePath: "/images/equipment/cargo-hose.jpg",
    imageAlt: "Large-diameter cargo transfer hoses stored with flanged ends",
  },
  {
    title: "STS Fendering & Transfer Preparation",
    slug: "sts-fendering-transfer-preparation",
    icon: "waves",
    summary:
      "STS preparation support around fendering, transfer geometry, hose routing, receiving asset interface and field coordination controls.",
    details: [
      "Fender spread and alongside interface planning.",
      "Receiving vessel suitability and transfer geometry review.",
      "Method inputs for controlled STS preparation.",
    ],
    operationalProblem:
      "Emergency STS work requires more than placing two vessels alongside. Hull geometry, freeboard, sea state, manifold position, receiving asset suitability, mooring arrangement and authority review all affect whether transfer preparation is practical.",
    aesScope: [
      "Support fendering concept, hose path and transfer interface planning.",
      "Review available vessel data, metocean constraints and deck access limitations.",
      "Coordinate preparation inputs for appointed stakeholders before on-site setup.",
    ],
    equipmentUsed: [
      "Floating pneumatic STS fenders configured according to vessel size, freeboard and expected motion.",
      "Cargo hose package, manifold accessories and connection hardware selected after technical assessment.",
      "Communications, rigging support and pollution prevention package considered for field setup.",
    ],
    hseControls: [
      "Weather, sea state, vessel movement and mooring limits defined before operation support.",
      "Deck watchkeeping, leak checks, pressure controls and emergency stop discipline.",
      "Interface planning remains subject to master, authority and appointed stakeholder approval.",
    ],
    typicalUseCases: [
      "Emergency lightering to reduce draft or relieve vessel stress.",
      "Cargo transfer preparation where receiving vessel or barge suitability must be reviewed.",
      "STS setup where fenders, hoses and communication controls require coordinated planning.",
    ],
    relatedLinks: [
      { label: "STS equipment capability", href: "/equipment" },
      {
        label: "Emergency STS preparation scenario",
        href: "/representative-response-scenarios#emergency-sts-transfer-preparation",
      },
      { label: "Confidentiality approach", href: "/confidentiality" },
    ],
    imagePath: "/images/equipment/fenders.jpg",
    imageAlt: "Floating pneumatic STS fenders positioned between tanker hulls",
  },
  {
    title: "Portable Pumping Solutions",
    slug: "portable-pumping-solutions",
    icon: "gauge",
    summary:
      "Portable pumping support for cargo, bunker, slop or water removal where vessel systems are damaged, unavailable or unsuitable.",
    details: [
      "Pump and power pack configuration by medium and access.",
      "Temporary suction/discharge route planning.",
      "Watchkeeping and discharge control inputs.",
    ],
    operationalProblem:
      "A casualty may require temporary pumping when fixed pumps cannot be used or when tank access, product viscosity, flooding, power availability or discharge routing prevents ordinary transfer methods.",
    aesScope: [
      "Support pump selection according to medium type, access, viscosity, suction condition and discharge objective.",
      "Plan hydraulic power unit or diesel power pack positioning subject to vessel condition and risk review.",
      "Structure temporary hose routing, receiving interface and pumping watchkeeping inputs.",
    ],
    equipmentUsed: [
      "Hydraulic submersible pumps selected according to product, lift, access and discharge requirements.",
      "Hydraulic power units or diesel power packs available through project-specific mobilization where appropriate.",
      "Temporary hose lines, connection accessories and containment measures configured per operation.",
    ],
    hseControls: [
      "Tank atmosphere, product hazard and access review before pump deployment planning.",
      "Pressure, temperature, discharge route and spill prevention monitoring.",
      "Emergency shutdown readiness and communication discipline during pumping support.",
    ],
    typicalUseCases: [
      "Cargo, slop, bunker or water removal from distressed vessel tanks or spaces.",
      "Salvage support where vessel systems are unavailable or unreliable.",
      "Emergency pumping to reduce secondary exposure before transfer or repair activity.",
    ],
    relatedLinks: [
      { label: "Pumping equipment categories", href: "/equipment" },
      {
        label: "Portable pumping scenario",
        href: "/representative-response-scenarios#portable-pumping-cargo-slop-tank",
      },
      { label: "Contact AES Response", href: "/contact" },
    ],
    imagePath: "/images/equipment/submerged-pump.jpg",
    imageAlt:
      "Hydraulic submersible pump and hydraulic power pack for emergency cargo removal",
  },
  {
    title: "Cargo Hose & Manifold Connection Support",
    slug: "cargo-hose-manifold-connection-support",
    icon: "cable",
    summary:
      "Connection package support for cargo hose routing, manifold interface review, reducers, spool pieces and pressure boundary checks.",
    details: [
      "Cargo hose and manifold data review.",
      "Reducers, adapters and spool piece planning.",
      "Leak check and connection sequence inputs.",
    ],
    operationalProblem:
      "Emergency transfer plans can fail at the interface. Different flange standards, damaged manifold access, restricted deck space, product pressure requirements and missing connection hardware can delay or prevent a controlled transfer.",
    aesScope: [
      "Support review of manifold standards, flange data, pressure requirements and hose compatibility.",
      "Plan adapters, reducers, spool pieces, gaskets and bolting requirements where appropriate.",
      "Provide connection sequence inputs for method statements and field coordination.",
    ],
    equipmentUsed: [
      "Cargo transfer hoses selected according to cargo type, pressure rating and connection requirement.",
      "Manifold adapters, reducers, spool pieces, gaskets, bolting and blanking arrangements configured per operation.",
      "Drip-control and spill prevention materials considered around connection and disconnection points.",
    ],
    hseControls: [
      "Pressure boundary and compatibility checks before transfer preparation.",
      "Leak check, flange integrity, hose support and emergency shutdown readiness.",
      "Connection package remains subject to vessel survey, cargo type and technical risk review.",
    ],
    typicalUseCases: [
      "Distressed vessel requiring temporary hose connection to receiving vessel or barge.",
      "Emergency transfer where manifold standards or access conditions must be resolved quickly.",
      "Bunker, slop or cargo movement requiring temporary connection hardware planning.",
    ],
    relatedLinks: [
      { label: "Manifold accessories capability", href: "/equipment" },
      { label: "View representative scenarios", href: "/representative-response-scenarios" },
      { label: "Request technical review", href: "/contact" },
    ],
    imagePath: "/images/equipment/cargo-hose.jpg",
    imageAlt: "Large-diameter cargo transfer hoses stored with flanged ends",
  },
  {
    title: "Pollution Prevention & Boom Deployment",
    slug: "pollution-prevention-boom-deployment",
    icon: "shield",
    summary:
      "Prevention-led containment and spill control planning around emergency transfer, bunker removal and portable pumping activities.",
    details: [
      "Boom, absorbent and drip-control package planning.",
      "Pollution watchkeeping structure before transfer.",
      "Escalation and emergency stop readiness inputs.",
    ],
    operationalProblem:
      "Emergency transfer and pumping operations can increase pollution exposure if containment, watchkeeping, deck drainage, transfer pressure and emergency shutdown controls are not planned before product movement begins.",
    aesScope: [
      "Support pollution prevention setup around transfer points, hose routes and receiving asset interface.",
      "Plan containment concepts according to product, vessel location, weather, current and site constraints.",
      "Structure pollution watchkeeping, escalation and close-out documentation inputs.",
    ],
    equipmentUsed: [
      "Oil spill containment boom selected according to site conditions and transfer arrangement.",
      "Absorbents, drip trays, temporary storage and deck spill prevention materials.",
      "Communications package and watchkeeping controls configured per operation.",
    ],
    hseControls: [
      "Pre-transfer containment readiness check and dedicated pollution watch.",
      "Transfer pressure, hose condition, leak watch and emergency stop protocol.",
      "Planning remains subject to local authority requirements and appointed stakeholder instructions.",
    ],
    typicalUseCases: [
      "Emergency STS or lightering where pollution exposure must be controlled before transfer.",
      "Bunker removal or slop transfer from a distressed vessel.",
      "Portable pumping where discharge route and containment require field coordination.",
    ],
    relatedLinks: [
      { label: "Pollution prevention equipment", href: "/equipment" },
      {
        label: "Pollution prevention scenario",
        href: "/representative-response-scenarios#pollution-prevention-setup-before-emergency-transfer",
      },
      { label: "Confidentiality approach", href: "/confidentiality" },
    ],
    imagePath: "/images/equipment/oil-spill-boom.jpg",
    imageAlt:
      "Workboat deploying orange oil spill containment boom during maritime response",
  },
  {
    title: "Marine Engineering Attendance / Field Coordination",
    slug: "marine-engineering-attendance-field-coordination",
    icon: "clipboard",
    summary:
      "Marine engineering attendance and field coordination support for setup, transfer monitoring, stakeholder communication and close-out records.",
    details: [
      "On-site setup and transfer monitoring support.",
      "Stakeholder communication and documentation discipline.",
      "Demobilization and reporting inputs.",
    ],
    operationalProblem:
      "Emergency transfer work requires disciplined coordination between vessel teams, owners, managers, receiving assets, authorities, insurers, class representatives and appointed specialists. Poor communication can create delays, unsafe assumptions and incomplete records.",
    aesScope: [
      "Support field coordination around setup, fendering, hose routing, pump deployment and transfer monitoring.",
      "Maintain communication structure, operational observations and completion record inputs.",
      "Coordinate documentation discipline for early review, operation support and demobilization.",
    ],
    equipmentUsed: [
      "Communications, rigging support, safety equipment and connection package inputs selected according to site conditions.",
      "Fenders, hoses, pumps and pollution prevention support coordinated with the approved transfer plan.",
      "Reporting templates and evidence capture structured for appointed stakeholder review.",
    ],
    hseControls: [
      "Toolbox briefing, watchkeeping roles, stop-work limits and escalation protocol.",
      "Field observations around weather, vessel motion, pressure behavior, leaks and pollution exposure.",
      "Documentation approach respects confidentiality and does not replace authority or class requirements.",
    ],
    typicalUseCases: [
      "Emergency transfer setup requiring marine engineering attendance.",
      "Field coordination during STS preparation, pumping or pollution prevention deployment.",
      "Close-out reporting for owners, managers, insurers or authorities where appropriate.",
    ],
    relatedLinks: [
      { label: "How operations are structured", href: "/process" },
      { label: "Confidentiality approach", href: "/confidentiality" },
      { label: "Start emergency request", href: "/contact" },
    ],
  },
];

export const equipment: EquipmentItem[] = [
  {
    title: "Cargo Transfer Hoses",
    icon: "cable",
    summary:
      "Transfer hose package planning for compatible cargo, bunker and selected chemical movements in emergency lightering conditions.",
    capability:
      "Hose specification is confirmed against cargo compatibility, working pressure, temperature, bend radius and end connection requirements.",
    purpose:
      "Provide a controlled temporary transfer path between a distressed vessel, receiving vessel, barge or shore-side receiving arrangement where a permanent cargo system is unavailable or unsuitable.",
    typicalScope: [
      "Large-diameter hose sections selected by cargo type, pressure rating and transfer geometry.",
      "End connections, gaskets and bolting packages reviewed against manifold standards.",
      "Hose routing, support, drip control and pressure monitoring inputs for the transfer plan.",
    ],
    operationalNotes: [
      "Final hose selection is subject to cargo compatibility, manifold survey and risk assessment.",
      "Hose handling arrangements should account for vessel motion, deck access and emergency shutdown requirements.",
    ],
    suggestedVisual:
      "Illustrative rendering or approved equipment photograph showing flanged cargo hoses staged for emergency transfer planning.",
    imagePath: "/images/equipment/cargo-hose.jpg",
    imageAlt: "Large-diameter cargo transfer hoses stored with flanged ends",
  },
  {
    title: "Floating Pneumatic STS Fenders",
    icon: "waves",
    summary:
      "High-energy fendering arrangements for emergency ship-to-ship interfaces and controlled alongside operations.",
    capability:
      "Sizing and positioning are selected by vessel size, sea state, freeboard, hull geometry and transfer configuration.",
    purpose:
      "Reduce hull contact risk during alongside STS positioning by creating a controlled separation and energy absorption interface between vessels.",
    typicalScope: [
      "Primary and secondary fender spread planning based on vessel size and freeboard.",
      "Mooring and deck access considerations for fender deployment and watchkeeping.",
      "STS interface review for receiving vessel suitability and stop-work limits.",
    ],
    operationalNotes: [
      "Fender size, number and placement are configured per operation and reviewed against metocean conditions.",
      "Fendering plans do not replace master approval, authority permission or appointed marine warranty review where required.",
    ],
    suggestedVisual:
      "Illustrative rendering or approved equipment photograph of floating pneumatic fenders positioned between tanker hulls.",
    imagePath: "/images/equipment/fenders.jpg",
    imageAlt: "Floating pneumatic STS fenders positioned between tanker hulls",
  },
  {
    title: "Hydraulic Power Units / Diesel Power Packs",
    icon: "gauge",
    summary:
      "Power package planning for hydraulic pumping and deck equipment where shipboard systems cannot support the required transfer operation.",
    capability:
      "Power pack configuration is reviewed against pump demand, fuel availability, deck location, ventilation and safe operating controls.",
    purpose:
      "Supply independent hydraulic or diesel power to temporary pumping equipment during salvage pumping, bunker removal or cargo recovery support.",
    typicalScope: [
      "Hydraulic power unit or diesel power pack selection by pump requirement and working location.",
      "Fuel, exhaust, hose run, deck support and lifting considerations.",
      "Operational monitoring inputs for pressure, temperature and emergency shutdown readiness.",
    ],
    operationalNotes: [
      "Power units are selected according to access, cargo hazard profile, ventilation and local permit controls.",
      "Final configuration remains subject to vessel condition, deck loading and HSE review.",
    ],
    suggestedVisual:
      "Illustrative rendering of a hydraulic power pack staged on deck with hose connections routed to a pump package.",
  },
  {
    title: "Hydraulic Submersible Pumps",
    icon: "gauge",
    summary:
      "Portable pump package planning for cargo, bunker, slop or water removal where fixed vessel systems are unavailable, damaged or restricted.",
    capability:
      "Pump configuration depends on medium type, viscosity, suction condition, tank access, discharge route and safe power source.",
    purpose:
      "Support controlled removal from tanks, flooded spaces or restricted access areas when emergency pumping is required for casualty management.",
    typicalScope: [
      "Hydraulic submersible pump selection by medium, flow requirement and access method.",
      "Temporary suction/discharge hose routing and receiving unit interface planning.",
      "Pump watchkeeping, pressure control and stop-work criteria inputs.",
    ],
    operationalNotes: [
      "Pump suitability is confirmed after product, tank atmosphere, access and discharge route review.",
      "Operation planning should include gas detection, communication discipline and contingency shutdown procedure.",
    ],
    suggestedVisual:
      "Illustrative rendering or approved equipment photograph of hydraulic submersible pump and power pack support equipment.",
    imagePath: "/images/equipment/submerged-pump.jpg",
    imageAlt:
      "Hydraulic submersible pump and hydraulic power pack for emergency cargo removal",
  },
  {
    title: "Pollution Prevention Equipment",
    icon: "droplets",
    summary:
      "Containment, spill prevention and response support items staged around transfer operations to reduce escalation risk.",
    capability:
      "Package planning may include containment boom, absorbents, drip control, temporary storage and response escalation interfaces.",
    purpose:
      "Create a prevention-led operating envelope around emergency transfer, bunker removal and salvage pumping activities.",
    typicalScope: [
      "Oil spill boom, absorbent materials and deck drip-control planning.",
      "Pollution watchkeeping positions and escalation contacts.",
      "Containment layout adapted to vessel position, current, weather and receiving asset arrangement.",
    ],
    operationalNotes: [
      "Pollution prevention measures are selected according to product risk, local requirements and site conditions.",
      "Containment arrangements do not replace authority approval, port permission or appointed response contractor requirements.",
    ],
    suggestedVisual:
      "Illustrative rendering or approved equipment photograph of containment boom deployed before an emergency transfer.",
    imagePath: "/images/equipment/oil-spill-boom.jpg",
    imageAlt:
      "Workboat deploying orange oil spill containment boom during maritime response",
  },
  {
    title: "Manifold & Connection Accessories",
    icon: "wrench",
    summary:
      "Connection hardware planning to bridge distressed vessel, receiving unit and temporary transfer package interfaces.",
    capability:
      "Adapters are selected after manifold survey, flange standard review, pressure boundary checks and transfer package confirmation.",
    purpose:
      "Enable compatible and controlled connections where vessel manifolds, hose packages, reducers or temporary spool pieces must be matched under emergency conditions.",
    typicalScope: [
      "Reducers, spool pieces, gaskets, bolting and blanking arrangements.",
      "Flange standard confirmation and pressure boundary review.",
      "Connection sequence, leak check and completion record inputs.",
    ],
    operationalNotes: [
      "Connection accessories are configured per operation after vessel interface review.",
      "No connection package should be assumed suitable before compatibility, pressure and access checks are complete.",
    ],
    suggestedVisual:
      "Illustrative rendering of manifold adapters, reducers and spool pieces arranged for pre-mobilization review.",
  },
];

export const responseScenarios: ResponseScenario[] = [
  {
    title: "Emergency Cargo Removal from Disabled Tanker",
    slug: "emergency-cargo-removal-disabled-tanker",
    icon: "ship",
    situation:
      "A loaded tanker is unable to continue safely due to machinery restriction, structural concern or draft limitation after an incident. Cargo removal is considered to reduce exposure and create safer response options.",
    operationalChallenge:
      "Decision-makers may have incomplete data on vessel condition, cargo behavior, weather window, receiving asset suitability and local authority expectations.",
    aesScope:
      "AES Response supports early feasibility review, controlled transfer planning, equipment category selection, stakeholder documentation and transfer preparation inputs.",
    equipmentConfiguration: [
      "Floating pneumatic STS fenders configured around the planned interface.",
      "Cargo transfer hoses and manifold connection accessories selected after compatibility review.",
      "Pollution prevention package staged around transfer watchkeeping and drip-control requirements.",
    ],
    hseControls: [
      "Stop-work limits tied to weather, vessel motion, pressure behavior and communication loss.",
      "Gas detection and deck watchkeeping planned according to cargo risk profile.",
      "Authority and appointed stakeholder review before transfer execution.",
    ],
    outcomeObjective:
      "Reduce cargo-related exposure while supporting a documented, controlled option for vessel stabilization, onward movement or further casualty management.",
    visualNote:
      "Illustrative rendering: disabled tanker and receiving vessel in an STS arrangement with fenders, hoses and containment readiness. Not a real operation photograph.",
  },
  {
    title: "Emergency STS Transfer Preparation",
    slug: "emergency-sts-transfer-preparation",
    icon: "anchor",
    situation:
      "An owner, manager or appointed stakeholder needs a practical STS preparation plan before cargo can be moved from a distressed vessel to a receiving vessel or barge.",
    operationalChallenge:
      "The operation must account for hull geometry, freeboard, manifold location, cargo compatibility, sea state, transfer pressure, communications and local permission constraints.",
    aesScope:
      "AES Response structures the preparation package around feasibility inputs, fendering concept, hose routing, transfer sequence considerations and documentation support.",
    equipmentConfiguration: [
      "Fender spread concept reviewed against vessel size and alongside geometry.",
      "Cargo hose and manifold accessory package selected according to cargo and flange data.",
      "Communications, deck watchkeeping and emergency shutdown readiness included in planning.",
    ],
    hseControls: [
      "Pre-transfer briefing and agreed communication protocol.",
      "Transfer pressure and leak-watch discipline.",
      "Weather, sea state and vessel movement limits defined before operation support.",
    ],
    outcomeObjective:
      "Create a clear, reviewable preparation basis for a controlled STS operation without implying automatic approval or guaranteed execution.",
    visualNote:
      "Illustrative rendering: two commercial vessels positioned for STS preparation with visible fenders, hose route and deck lighting. Not a disclosed client reference.",
  },
  {
    title: "Portable Pumping from Cargo / Slop Tank",
    slug: "portable-pumping-cargo-slop-tank",
    icon: "gauge",
    situation:
      "A distressed vessel requires temporary pumping from a cargo, slop, bunker or water-affected space because fixed pumping systems are restricted, damaged or unsuitable.",
    operationalChallenge:
      "Pump choice and safe routing depend on product condition, tank access, atmosphere, viscosity, discharge location, power source and deck layout.",
    aesScope:
      "AES Response supports pump package selection, hydraulic power planning, temporary hose route review, receiving interface inputs and completion record structure.",
    equipmentConfiguration: [
      "Hydraulic submersible pump selected against medium and access conditions.",
      "Hydraulic power unit or diesel power pack positioned according to deck and ventilation review.",
      "Temporary discharge hose routed to receiving asset or approved containment point.",
    ],
    hseControls: [
      "Atmosphere checks and product hazard review before pump deployment.",
      "Pressure, temperature and discharge monitoring during pumping.",
      "Emergency shutdown and spill prevention controls included in method inputs.",
    ],
    outcomeObjective:
      "Enable controlled removal of cargo, bunker, slop or water to support casualty management and reduce secondary exposure.",
    visualNote:
      "Illustrative rendering: portable hydraulic pump package, power unit and temporary hose routing on a distressed vessel deck. Not a real operation photograph.",
  },
  {
    title: "Pollution Prevention Setup Before Emergency Transfer",
    slug: "pollution-prevention-setup-before-emergency-transfer",
    icon: "shield",
    situation:
      "Before emergency cargo transfer, bunker removal or salvage pumping, stakeholders require a prevention-led setup to reduce pollution exposure around the operation.",
    operationalChallenge:
      "Containment and watchkeeping must be adapted to product type, vessel position, local current, weather, deck drainage, receiving asset interface and escalation requirements.",
    aesScope:
      "AES Response supports pollution prevention package planning, containment layout inputs, watchkeeping structure, communication plan and documentation for early review.",
    equipmentConfiguration: [
      "Oil spill boom or containment concept selected according to site conditions.",
      "Absorbents, drip-control and temporary storage considered around transfer points.",
      "Communications and escalation contacts integrated into operational preparation.",
    ],
    hseControls: [
      "Pre-transfer containment readiness check.",
      "Dedicated pollution watchkeeping during connection, transfer and disconnection.",
      "Emergency stop and escalation protocol aligned with local requirements.",
    ],
    outcomeObjective:
      "Reduce environmental exposure and support a documented prevention posture before cargo or bunker movement begins.",
    visualNote:
      "Illustrative rendering: workboat and containment boom staged around an emergency transfer area. For public explanation only, not an operation photograph.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Incident Intake",
    summary:
      "Collect vessel particulars, position, cargo, damage summary, weather, draft, trim and immediate safety constraints.",
  },
  {
    title: "Feasibility & Risk Assessment",
    summary:
      "Review transfer viability, vessel access, cargo hazards, environmental exposure, receiving asset options and stop-work criteria.",
  },
  {
    title: "Authority, P&I & Class Coordination",
    summary:
      "Prepare structured information for local authorities, club representatives, class and other appointed stakeholders.",
  },
  {
    title: "Equipment & Team Mobilization",
    summary:
      "Define equipment package, connection hardware, personnel profile, staging route and mobilization sequence.",
  },
  {
    title: "Controlled Transfer Operation",
    summary:
      "Execute the approved transfer plan with communication discipline, pressure monitoring, spill prevention and continuous watchkeeping.",
  },
  {
    title: "Completion Report & Demobilization",
    summary:
      "Close out quantities, timeline, observations, transfer records, residual risk notes and demobilization status.",
  },
];

export const articles: Article[] = [
  {
    slug: "what-is-emergency-ship-to-ship-cargo-transfer",
    title: "What is emergency ship-to-ship cargo transfer?",
    excerpt:
      "A practical overview of how emergency STS cargo transfer helps reduce draft, relieve stress and support casualty response.",
    category: "Emergency STS",
    publishedAt: "2026-05-20",
    readingTime: "8 min read",
    intro: [
      "Emergency ship-to-ship cargo transfer is the controlled movement of cargo, bunker or other liquid product from a distressed vessel to a receiving vessel or suitable receiving unit. In a casualty scenario, the goal is not routine logistics. The goal is to reduce exposure, improve response options and support a documented decision process for owners, authorities, class and insurers.",
      "The work normally begins with incomplete information. Vessel condition, draft, trim, cargo behavior, weather, sea room, receiving asset availability and local authority expectations all need to be assessed before equipment and personnel are mobilized.",
    ],
    sections: [
      {
        heading: "Emergency STS in plain terms",
        body: [
          "An emergency STS operation may be considered after grounding, collision, hull damage, machinery failure, excessive draft, cargo system restrictions or a developing pollution risk. The transfer can help remove weight from the casualty, reduce draft, change trim or reduce the quantity of pollutant remaining on board.",
          "A receiving vessel is brought into a controlled interface with the casualty using suitable fendering, mooring arrangements and communication procedures. The cargo path is then established through compatible hoses, manifolds, pumps or vessel systems, depending on the vessel condition and cargo characteristics.",
        ],
      },
      {
        heading: "How emergency STS differs from routine STS",
        body: [
          "Routine STS is usually planned around known schedules, prepared vessels and established transfer locations. Emergency STS is different because the casualty may have structural damage, limited deck access, uncertain cargo status or a narrowing weather window.",
          "The planning emphasis therefore shifts to feasibility, risk controls and documentation. A response team needs enough information to judge whether the operation can be performed safely, what equipment should be mobilized and which assumptions must be confirmed before pumping begins.",
        ],
      },
      {
        heading: "What makes the transfer controlled",
        body: [
          "Control comes from defining the transfer path before cargo movement begins. That includes fendering, hose route, manifold compatibility, mooring, communication protocol, pressure limits, watchkeeping, emergency stop criteria and spill prevention measures.",
          "A controlled operation also depends on staged decision points. If weather, vessel motion, pressure, connection integrity or deck conditions move outside agreed limits, the transfer can be paused while the situation is reassessed.",
        ],
      },
      {
        heading: "Documentation for owners and stakeholders",
        body: [
          "Owners should expect a clear file that records the casualty condition, transfer method, equipment basis, risk controls, quantities moved and completion observations. This does not replace instructions from authorities, class or appointed surveyors, but it helps the incident file stay organized.",
          "Authority and insurer-ready documentation can also support later review of why the transfer was considered, what information was available and how the response team managed operational controls.",
        ],
      },
      {
        heading: "When to request an early feasibility review",
        body: [
          "Early review is useful when the vessel is aground, listing, unable to enter port due to draft, carrying pollutant quantities close to a damaged area or likely to need cargo removal before towage, refloating or repair access.",
          "The first call does not need to solve every technical detail. It should establish vessel particulars, current position, cargo type and quantity, damage summary, weather, sea state, crew status and the owner or operator contact chain.",
        ],
      },
    ],
    checklistTitle: "Owner preparation checklist",
    checklist: [
      "Vessel name, IMO number, flag and present status.",
      "Current position, nearest port or anchorage and available sea room.",
      "Cargo type, quantity on board, tank allocation and any known cargo restrictions.",
      "Damage summary, draft, trim, list and immediate pollution exposure.",
      "Weather, sea state, visibility and expected operating window.",
      "Crew status, access limitations and current authority or class involvement.",
      "Primary contact person with phone and email for rapid clarification.",
    ],
    faqs: [
      {
        question: "Is emergency STS only used after a grounding?",
        answer:
          "No. It may be considered after grounding, collision, hull damage, draft restrictions, machinery failure, cargo system limitations or any situation where cargo removal can reduce risk or create response options.",
      },
      {
        question: "Does the first call require a complete transfer plan?",
        answer:
          "No. The first call should provide enough facts for a feasibility review: vessel identity, position, cargo, quantity, damage, weather, sea state, crew status and contact details.",
      },
      {
        question: "Who normally reviews the proposed operation?",
        answer:
          "The review commonly involves the owner or operator, local authorities, class, insurers or their representatives, receiving asset interests and the response team preparing the transfer method.",
      },
    ],
    relatedLinks: [
      {
        label: "Emergency Cargo Transfer",
        href: "/services#emergency-cargo-transfer",
        description: "Review the core emergency cargo transfer service scope.",
      },
      {
        label: "Response Process",
        href: "/process",
        description: "See the sequence from intake to completion reporting.",
      },
      {
        label: "Equipment Capability",
        href: "/equipment",
        description: "Understand the fenders, hoses, pumps and safety equipment involved.",
      },
      {
        label: "Emergency Request",
        href: "/contact",
        description: "Prepare the first incident details for AES Response.",
      },
    ],
  },
  {
    slug: "minimum-equipment-package-for-emergency-lightering",
    title: "Minimum equipment package for emergency lightering",
    excerpt:
      "The core categories owners should expect when planning a lightering package for a distressed vessel.",
    category: "Equipment",
    publishedAt: "2026-05-20",
    readingTime: "7 min read",
    intro: [
      "A minimum emergency lightering package is best understood as a planning baseline. It identifies the equipment categories that are usually reviewed before mobilization, while leaving final selection to the cargo, vessel interface, sea state, manifold geometry and authority requirements.",
      "The objective is to arrive with a package that can establish a controlled transfer path, manage vessel interface risk and support pollution prevention without adding unnecessary complexity to the incident.",
    ],
    sections: [
      {
        heading: "Core package categories",
        body: [
          "A minimum emergency lightering package usually starts with fendering, transfer hoses, connection hardware, portable pumping capability where needed, mooring and rigging support, communications, spill prevention materials and safety monitoring equipment.",
          "The exact configuration depends on the cargo, vessel interface, freeboard, sea state, access restrictions and receiving asset. The minimum package is therefore a planning baseline, not a universal shopping list.",
        ],
      },
      {
        heading: "Fenders, mooring and vessel interface",
        body: [
          "Pneumatic STS fenders protect the vessel interface and help maintain separation during alongside operations. Fender sizing and position should be reviewed against vessel size, freeboard, expected motion and the intended transfer geometry.",
          "Mooring and rigging support must match the vessel condition and available deck arrangements. Damaged fittings, restricted access, crew limitations or weather exposure can change the practical interface plan.",
        ],
      },
      {
        heading: "Transfer hoses and connection hardware",
        body: [
          "Hose specification should be checked against cargo compatibility, pressure, temperature, bend radius and end connection requirements. In emergency lightering, spare adapters, reducers, gaskets and spool pieces can prevent delays when vessel drawings do not match the actual manifold condition.",
          "Connection planning also considers deck routing, support points, drip control, manifold access and the receiving vessel interface. The safest equipment is the equipment that fits the actual incident, not the equipment that looked acceptable on a generic list.",
        ],
      },
      {
        heading: "Portable pumping and power",
        body: [
          "Portable pumps and hydraulic power packs may be needed when ship systems are damaged, unavailable or unsuitable for the cargo movement. Pump selection depends on cargo type, viscosity, suction lift, discharge route and safe power placement.",
          "The pumping package should be reviewed with the hose route and receiving arrangement. A pump that can move the cargo is only useful if the full path can be monitored, controlled and stopped when needed.",
        ],
      },
      {
        heading: "Spill prevention and safety monitoring",
        body: [
          "A minimum package should include spill prevention materials appropriate to the exposure. Depending on the operation, that may include drip trays, absorbents, boom planning, temporary storage, deck watchkeeping and escalation contacts.",
          "Safety equipment can include gas detection, communications, lighting and personal protective equipment selected for the cargo and vessel condition. The package should support safe observation as much as transfer execution.",
        ],
      },
      {
        heading: "Why compatibility checks matter",
        body: [
          "Emergency pressure often creates a temptation to mobilize generic equipment. Compatibility checks reduce the chance of delays at the vessel. Hose rating, cargo compatibility, flange standards, gasket material, pump type and power source should be reviewed before dispatch.",
          "A documented compatibility review also helps owners and appointed stakeholders understand why a specific equipment package was chosen and what assumptions still need confirmation on board.",
        ],
      },
    ],
    checklistTitle: "Minimum package review checklist",
    checklist: [
      "Pneumatic fenders sized for vessel interface and sea state.",
      "Cargo, bunker or chemical hoses checked for compatibility and rating.",
      "Adapters, reducers, gaskets and spool pieces matched to manifold data.",
      "Portable pumps and power packs reviewed against cargo and suction conditions.",
      "Mooring, rigging and communications plan aligned with deck access.",
      "Oil spill response materials staged around the transfer exposure.",
      "Gas detection and safety equipment selected for cargo hazards.",
    ],
    faqs: [
      {
        question: "Is there one universal emergency lightering package?",
        answer:
          "No. The core categories are consistent, but final equipment depends on cargo, vessel condition, manifold interface, weather, receiving asset and authority expectations.",
      },
      {
        question: "Why are adapters and spool pieces important?",
        answer:
          "They help bridge differences between planned drawings and actual vessel connections. In an emergency, missing connection hardware can delay an otherwise feasible transfer.",
      },
      {
        question: "When are portable pumps required?",
        answer:
          "Portable pumps may be required when ship systems are unavailable, damaged, unsuitable for the cargo or unable to provide the controlled transfer path needed for the response.",
      },
    ],
    relatedLinks: [
      {
        label: "Equipment Capability",
        href: "/equipment",
        description: "Review the equipment categories used for emergency STS planning.",
      },
      {
        label: "STS & Lightering Operations",
        href: "/services#sts-lightering-operations",
        description: "See how the lightering service scope is structured.",
      },
      {
        label: "Response Process",
        href: "/process",
        description: "Understand where package selection fits in the response sequence.",
      },
      {
        label: "Request Capability Statement",
        href: "/capability-statement",
        description: "Review the capability statement for owners, insurers or authorities.",
      },
    ],
  },
  {
    slug: "how-cargo-removal-protects-the-vessel-owner-and-coastline",
    title: "How cargo removal protects the vessel, owner and coastline",
    excerpt:
      "Why controlled cargo removal can reduce structural, commercial and environmental exposure after a casualty.",
    category: "Risk Reduction",
    publishedAt: "2026-05-20",
    readingTime: "7 min read",
    intro: [
      "Controlled cargo removal can be one of the most practical ways to reduce risk after a maritime casualty. It can reduce draft, relieve load on damaged structure, lower pollution exposure and create options for towage, refloating, port entry or repair access.",
      "The value is not only operational. A structured transfer plan gives owners and appointed stakeholders a clearer basis for decisions during a fast-moving incident, especially when the vessel, coastline and commercial file are all exposed.",
    ],
    sections: [
      {
        heading: "Reducing pressure on the casualty",
        body: [
          "Cargo removal can reduce draft, change trim, relieve load on damaged sections and create more response options. In some cases, removing bunker or cargo also reduces the consequence of a worsening hull condition.",
          "The value is not only physical. A documented transfer plan gives owners, authorities and insurers a clearer basis for decision-making during a fast-moving incident.",
        ],
      },
      {
        heading: "Creating more response options",
        body: [
          "A lighter vessel may have more options for towage, refloating, anchorage movement or controlled port entry. These options still require authority, class and technical review, but cargo removal can change the decision space.",
          "The operation should be planned around a defined objective. Removing a small quantity from a critical tank may be more valuable than pursuing maximum discharge without a clear risk reduction target.",
        ],
      },
      {
        heading: "Reducing commercial uncertainty",
        body: [
          "A casualty creates uncertainty for the owner, charterer, cargo interests and insurers. A structured cargo removal plan helps establish what is being moved, why it is being moved, how it will be controlled and how the operation will be documented.",
          "Records from the transfer can support later review of quantities, timing, receiving asset details, interruptions, observations and completion condition. That continuity matters after the urgent phase has passed.",
        ],
      },
      {
        heading: "Protecting the coastline",
        body: [
          "Pollution prevention is strongest when it starts before a release. Removing fuel, isolating transfer risks and staging containment around the operation can reduce the chance that a vessel casualty becomes a shoreline response.",
          "Coastline protection also depends on monitoring. Weather, sea state, vessel motion, hose movement, deck observations and pressure changes should be watched throughout the operation so the team can pause before a minor issue becomes a release.",
        ],
      },
      {
        heading: "Supporting authority and insurer review",
        body: [
          "Cargo removal is easier to review when the file explains the incident facts, transfer objective, risk controls, equipment selection and completion observations. The file should be written for commercial and technical stakeholders, not as marketing language.",
          "Careful wording matters. AES Response frames documentation as prepared for authority and insurer review, without implying certification, approval or endorsement unless those are formally issued by the relevant party.",
        ],
      },
      {
        heading: "When early action matters",
        body: [
          "Early action can matter when weather is changing, pollutant tanks are exposed, the vessel is taking the ground, structural condition is uncertain or draft limits are preventing movement. Early feasibility review does not force a transfer, but it can preserve options.",
          "Owners can help by preparing vessel identity, current position, cargo quantity, tank plan, damage summary, draft, trim, weather and contact details before the first technical call.",
        ],
      },
    ],
    checklistTitle: "Risk reduction checklist",
    checklist: [
      "Define the operational objective: draft reduction, trim change, pollutant removal or access improvement.",
      "Identify cargo and bunker quantities by tank or hold where available.",
      "Confirm damage location relative to cargo, bunker and ballast spaces.",
      "Review weather, sea state and available operating window.",
      "Prepare receiving asset options and expected transfer route.",
      "Record authority, class, insurer and surveyor contacts already involved.",
      "Keep transfer records aligned with commercial and incident file needs.",
    ],
    faqs: [
      {
        question: "Does cargo removal always mean discharging all cargo?",
        answer:
          "No. The objective may be targeted risk reduction, such as removing cargo from exposed tanks, reducing draft or changing trim enough to support another response option.",
      },
      {
        question: "How does cargo removal help the owner commercially?",
        answer:
          "It can reduce uncertainty by creating a documented plan, preserving options and recording quantities, timings and controls for later stakeholder review.",
      },
      {
        question: "Can cargo removal prevent pollution by itself?",
        answer:
          "It can reduce exposure, but it is only one part of pollution prevention. Containment readiness, monitoring, transfer controls and authority coordination remain important.",
      },
    ],
    relatedLinks: [
      {
        label: "Emergency Cargo Transfer",
        href: "/services#emergency-cargo-transfer",
        description: "See how cargo removal support is positioned.",
      },
      {
        label: "Pollution Prevention",
        href: "/services#pollution-prevention",
        description: "Review prevention controls around emergency transfer operations.",
      },
      {
        label: "Bunker Removal",
        href: "/services#bunker-removal",
        description: "Understand fuel and lubricant removal planning.",
      },
      {
        label: "Contact AES Response",
        href: "/contact",
        description: "Share vessel and incident facts for a feasibility review.",
      },
    ],
  },
  {
    slug: "sts-operation-documents-owners-should-prepare-before-an-emergency",
    title: "STS operation documents owners should prepare before an emergency",
    excerpt:
      "A concise document checklist that helps owners speed up technical review when an emergency transfer is being considered.",
    category: "Documentation",
    publishedAt: "2026-05-20",
    readingTime: "6 min read",
    intro: [
      "Emergency STS decisions become faster and clearer when the owner can provide a structured document package at the first call. The package does not need to be perfect, but it should reduce uncertainty around vessel identity, cargo, stability, tank layout, manifold interface and current condition.",
      "Good preparation supports technical feasibility, authority communication and insurer-ready documentation. It also helps avoid delays caused by missing drawings, unclear quantities or incomplete contact chains.",
    ],
    sections: [
      {
        heading: "Useful documents at the first call",
        body: [
          "Owners can accelerate the first technical review by preparing the vessel particulars, cargo manifest, tank plan, general arrangement, manifold details, stability information, damage summary, latest position, weather condition, draft and trim.",
          "Photographs, sounding records and class or surveyor observations are also valuable when available. The aim is to reduce uncertainty before equipment and people are moved.",
        ],
      },
      {
        heading: "Cargo and tank information",
        body: [
          "Cargo type, quantity, tank allocation, compatibility concerns and transfer restrictions should be identified as early as possible. For bunker removal, fuel oil, diesel, lubricants and waste oil locations should be separated where records allow.",
          "Soundings, ullages, temperatures and recent cargo system observations can help the response team assess pump selection, hose compatibility and receiving arrangements.",
        ],
      },
      {
        heading: "Vessel access and interface records",
        body: [
          "Manifold drawings, flange standards, deck layout, access restrictions, freeboard, mooring arrangements and photographs of relevant deck areas can all affect equipment selection.",
          "If drawings are unavailable or potentially outdated, clear photographs and measurements from the vessel can reduce the risk of mobilizing the wrong adapters, reducers or hose configuration.",
        ],
      },
      {
        heading: "Incident and stakeholder records",
        body: [
          "The incident file should include the timeline, damage summary, current status, authority notifications, class involvement, surveyor observations and any instructions already received from local parties.",
          "A single contact list for owner, operator, master, technical manager, insurer representative, class contact and local agent helps reduce duplicated communication during the first response window.",
        ],
      },
      {
        heading: "Commercial records after transfer",
        body: [
          "During and after the operation, records should capture transfer start and stop times, quantities, receiving asset details, key communications, incidents, stoppages and completion observations. These records support the owner and appointed stakeholders after demobilization.",
          "Completion reporting should be factual and restrained. It should identify what was done, what was observed and what residual items remain for the owner, authority or appointed representatives to review.",
        ],
      },
      {
        heading: "How to keep the package practical",
        body: [
          "The document package should be easy to transmit and review. Large drawing sets are useful, but the first response team also needs a concise summary that captures current facts and unknowns.",
          "Where information is missing, say so clearly. A known gap is easier to manage than an assumption that later proves wrong at the vessel.",
        ],
      },
    ],
    checklistTitle: "Document package checklist",
    checklist: [
      "Vessel particulars, IMO number, flag, type, dimensions and contact chain.",
      "Cargo manifest, tank plan, bunker quantities and latest soundings where available.",
      "General arrangement, manifold details, flange standards and deck access photos.",
      "Draft, trim, list, stability information and any class or surveyor observations.",
      "Damage summary, incident timeline, weather, sea state and current position.",
      "Authority notifications, local agent details and appointed stakeholder contacts.",
      "Preferred format for transfer records, completion note and supporting evidence.",
    ],
    faqs: [
      {
        question: "What if the owner cannot provide every drawing immediately?",
        answer:
          "The review can begin with available facts. Missing documents should be identified clearly, then supplemented with vessel photographs, measurements and observations where possible.",
      },
      {
        question: "Are documents needed before equipment is mobilized?",
        answer:
          "Yes, enough documentation is needed to reduce avoidable equipment mismatches and support a credible feasibility review. Some details can still be confirmed on board.",
      },
      {
        question: "Should the package include insurer or class contacts?",
        answer:
          "Yes. A clear contact chain helps keep authority, class and insurer communication organized while the technical response is being planned.",
      },
    ],
    relatedLinks: [
      {
        label: "Documentation Support",
        href: "/services#documentation-support",
        description: "Review the documentation support service scope.",
      },
      {
        label: "Response Process",
        href: "/process",
        description: "See where documentation fits in the response workflow.",
      },
      {
        label: "Emergency Request",
        href: "/contact",
        description: "Use the contact form structure to prepare first details.",
      },
      {
        label: "Request Capability Statement",
        href: "/capability-statement",
        description: "Review the capability statement for stakeholder review.",
      },
    ],
  },
  {
    slug: "bunker-removal-from-distressed-vessels-practical-overview",
    title: "Bunker removal from distressed vessels: practical overview",
    excerpt:
      "How bunker removal is planned when fuel oil, diesel or lubricants create pollution exposure on a damaged vessel.",
    category: "Bunker Removal",
    publishedAt: "2026-05-20",
    readingTime: "7 min read",
    intro: [
      "Bunker removal is the controlled removal of fuel oil, diesel, lubricants or related oils from a distressed vessel. It is often considered when fuel tanks are damaged, exposed to grounding pressure, near a fracture zone or likely to complicate salvage and pollution prevention.",
      "The work is commercial and safety-focused. It requires tank identification, product understanding, safe access, pump selection, receiving arrangements, spill prevention and documented completion records.",
    ],
    sections: [
      {
        heading: "When bunker removal is prioritized",
        body: [
          "Bunker removal is often prioritized when fuel tanks are damaged, exposed to grounding pressure, near a fracture zone or likely to complicate salvage. Removing fuel can reduce environmental risk and improve response flexibility.",
          "The work starts with tank identification, access review, fuel characteristics, pump selection, receiving route and spill prevention planning.",
        ],
      },
      {
        heading: "Tank identification and product condition",
        body: [
          "The response team needs to understand which tanks hold fuel oil, diesel, lubricants, waste oil or other residues. Soundings, tank plans, transfer records and crew observations can help identify quantities and access points.",
          "Product condition affects pump choice and hose planning. Viscosity, temperature, water content and debris can influence whether vessel systems, portable pumps or temporary arrangements are appropriate.",
        ],
      },
      {
        heading: "Transfer path and receiving arrangement",
        body: [
          "A bunker removal plan should define the route from tank to receiving asset. That may involve vessel pumps, portable pumps, temporary hoses, manifold connections, deck routing and safe receiving capacity.",
          "The receiving arrangement must be able to accept the product safely and document quantities. Interface planning should consider connection compatibility, deck access, hose support and communication between the vessel and receiving unit.",
        ],
      },
      {
        heading: "Operational controls",
        body: [
          "Controls should include atmosphere checks where relevant, transfer watchkeeping, hose and connection inspection, stop-work criteria, containment readiness and a clear communications protocol between vessel, receiving unit and response supervisors.",
          "The control plan should be practical for the vessel condition. A damaged vessel may have limited lighting, power, access or crew availability, so the transfer sequence should be staged around what can be observed and controlled.",
        ],
      },
      {
        heading: "Pollution prevention around bunker work",
        body: [
          "Bunker removal usually carries direct pollution exposure. Drip control, absorbents, containment planning, deck watchkeeping and escalation contacts should be considered before pumping starts.",
          "Prevention should remain active throughout the operation. Hose movement, pressure changes, vessel motion, deck observations and weather shifts can all change the risk profile.",
        ],
      },
      {
        heading: "Completion records and residual risk",
        body: [
          "Completion records should identify tanks addressed, estimated or measured quantities removed, receiving asset details, transfer times, stoppages, observations and remaining quantities where known.",
          "If product remains on board, the record should state that clearly. Residual risk notes help owners, authorities and appointed stakeholders understand what remains after demobilization.",
        ],
      },
    ],
    checklistTitle: "Bunker removal checklist",
    checklist: [
      "Identify bunker, diesel, lubricant and waste oil tanks with quantities where available.",
      "Confirm tank access, soundings, product condition and transfer restrictions.",
      "Review pump selection against viscosity, suction lift and safe power placement.",
      "Define hose routing, connection hardware and receiving asset interface.",
      "Stage spill prevention controls before pumping starts.",
      "Set communication protocol, watchkeeping and stop criteria.",
      "Record quantities removed, residual product and completion observations.",
    ],
    faqs: [
      {
        question: "Is bunker removal the same as cargo transfer?",
        answer:
          "The transfer principles are similar, but bunker removal focuses on fuel, diesel, lubricants or residues that may create direct pollution exposure and may require different pumps, hoses and controls.",
      },
      {
        question: "Can bunker removal use the vessel's own pumps?",
        answer:
          "Sometimes. Vessel systems may be used when they are available and suitable, but portable pumps may be needed if systems are damaged, unavailable or unsuitable for the product condition.",
      },
      {
        question: "What records matter after bunker removal?",
        answer:
          "Useful records include tanks addressed, quantities removed, receiving asset details, transfer times, stoppages, observations and any remaining product or residual risk.",
      },
    ],
    relatedLinks: [
      {
        label: "Bunker Removal",
        href: "/services#bunker-removal",
        description: "Review the bunker removal service scope.",
      },
      {
        label: "Portable Pumps & Power Packs",
        href: "/equipment",
        description: "See pump, hose and connection capability categories.",
      },
      {
        label: "Pollution Prevention",
        href: "/services#pollution-prevention",
        description: "Understand prevention controls around bunker handling.",
      },
      {
        label: "Contact AES Response",
        href: "/contact",
        description: "Share bunker, vessel and damage details for review.",
      },
    ],
  },
  {
    slug: "pollution-prevention-during-emergency-cargo-transfer",
    title: "Pollution prevention during emergency cargo transfer",
    excerpt:
      "Practical controls that help keep emergency cargo transfer focused on prevention rather than cleanup.",
    category: "Pollution Prevention",
    publishedAt: "2026-05-20",
    readingTime: "7 min read",
    intro: [
      "Pollution prevention during emergency cargo transfer begins before pumping starts. The response team must understand the cargo, vessel condition, hose route, connection points, weather, sea state, receiving arrangement and stop criteria before product movement begins.",
      "The purpose is to reduce the chance that a casualty response becomes a wider environmental incident. That requires prevention controls, monitoring and documentation that are practical for the actual operating environment.",
    ],
    sections: [
      {
        heading: "Prevention before pumping",
        body: [
          "Pollution prevention begins before the first transfer. Teams should review cargo behavior, hose condition, connection integrity, transfer pressure, communication protocol, weather limits and emergency shutdown steps.",
          "Containment resources should be staged according to the exposure and operational environment. The correct package may vary from absorbents and drip control to boom planning and escalation contacts.",
        ],
      },
      {
        heading: "Connection and hose controls",
        body: [
          "Hose and connection integrity are central to prevention. The plan should consider hose compatibility, pressure rating, bend radius, support points, gasket condition, manifold access and drip control.",
          "Connection checks should be repeated after movement, weather changes or any operational pause that may have changed the hose position or manifold loading.",
        ],
      },
      {
        heading: "Monitoring during transfer",
        body: [
          "During pumping, watchkeeping should focus on hose movement, manifold condition, pressure changes, vessel motion, deck observations and weather. Clear stop criteria help the team pause before a minor issue becomes a release.",
          "Monitoring should be assigned, not assumed. The team should know who is watching the hose, who is monitoring pressure, who is communicating with the receiving asset and who can call a stop.",
        ],
      },
      {
        heading: "Spill response package readiness",
        body: [
          "A prevention package may include drip trays, absorbents, temporary storage, deck containment, boom planning and escalation contacts. The package should reflect the cargo and the exposure, rather than a generic checklist.",
          "Readiness means the materials are accessible, assigned and understood. Equipment staged in the wrong location or without a clear use plan can create delay when minutes matter.",
        ],
      },
      {
        heading: "Authority and stakeholder communication",
        body: [
          "Authorities and appointed stakeholders often need a concise explanation of the prevention controls around the transfer. That explanation should identify the cargo, transfer method, monitoring plan, containment readiness and stop criteria.",
          "Careful communication supports trust without overstating the response. The goal is transparent, factual reporting for review by the parties responsible for the incident.",
        ],
      },
      {
        heading: "Completion observations",
        body: [
          "After transfer, the record should document quantities moved, observations, incidents, stoppages, remaining product and any cleanup or demobilization notes. If no release occurred, the file should still record prevention controls and completion condition.",
          "These records help connect operational action to the broader incident file, including owner review, authority communication and insurer-ready documentation.",
        ],
      },
    ],
    checklistTitle: "Pollution prevention checklist",
    checklist: [
      "Review cargo behavior, hazards and compatibility before transfer.",
      "Check hose condition, pressure rating, bend radius and connection integrity.",
      "Stage spill prevention materials around the actual exposure.",
      "Assign watchkeeping for hose movement, manifold condition and deck observations.",
      "Define pressure limits, communication protocol and stop criteria.",
      "Track weather, sea state and vessel motion throughout the operation.",
      "Record quantities, observations, stoppages and completion condition.",
    ],
    faqs: [
      {
        question: "Is pollution prevention only about spill cleanup equipment?",
        answer:
          "No. Cleanup equipment is only one layer. Prevention also includes transfer planning, hose control, communication, monitoring, stop criteria and documentation.",
      },
      {
        question: "When should containment materials be staged?",
        answer:
          "They should be staged before pumping starts and positioned around the actual exposure, with clear responsibility for use and escalation if conditions change.",
      },
      {
        question: "Why does documentation matter if no release occurs?",
        answer:
          "Documentation records the controls used, observations made and completion condition. That supports the owner, authority and insurer review after the response.",
      },
    ],
    relatedLinks: [
      {
        label: "Pollution Prevention",
        href: "/services#pollution-prevention",
        description: "Review prevention support around transfer operations.",
      },
      {
        label: "Oil Spill Response Package",
        href: "/equipment",
        description: "See the equipment categories used for containment readiness.",
      },
      {
        label: "Response Process",
        href: "/process",
        description: "Understand the controlled sequence for transfer planning.",
      },
      {
        label: "Emergency Request",
        href: "/contact",
        description: "Share incident facts for a prevention-focused review.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
