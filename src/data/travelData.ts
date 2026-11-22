export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  startingPrice: string;
  duration: string;
  departureAirport: string;
  airline: string;
  makkahHotel: string;
  makkahDistance: string;
  madinaHotel: string;
  madinaDistance: string;
  sharingTypes: string[];
  inclusions: string[];
  exclusions: string[];
  availability: 'Open' | 'Fast Filling' | 'Limited';
  featured?: boolean;
}

export interface ScheduleItem {
  id: string;
  onwardDate: string;
  returnDate: string;
  route: string;
  airline: string;
  price: string;
  status: 'Limited' | 'Fast Filling' | 'Open';
  seatsLeftText: string;
  makkahHotel: string;
  madinaHotel: string;
}

export const AGENCY_DETAILS = {
  name: "New Roshan Tours & Travels",
  legalName: "NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.",
  mottoArabic: "لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ",
  mottoUrdu: "ہماری ذمہ داری، آپ کا اعتماد",
  mottoEnglish: "Hamari Zimmedari, Aapka Aitmaad",
  prayerDuah: "Allah Aapki Umrah Ko Maqbool Farmaye (Aameen)",
  establishedDate: "3rd July 2026",
  chiefGuest: "Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari",
  address: "13/403-1, Rahmatullah Street, YV Street, Ganagapeta, Kadapa, Andhra Pradesh - 516001",
  landmark: "Near YV Street & Ganagapeta",
  serviceAreas: "Kadapa, Rayalaseema, Andhra Pradesh & Telangana",
  phones: [
    { display: "+91 90590 57239", raw: "919059057239" },
    { display: "+91 99595 78900", raw: "919959578900" },
    { display: "+91 98493 19776", raw: "919849319776" }
  ],
  whatsapp: "919059057239",
  instagramUrl: "https://www.instagram.com/newroshantoursandtravels/",
  instagramHandle: "@newroshantoursandtravels",
  googleRating: 5.0,
  googleReviewCount: "5.0 Rating on Google (Verified Reviews)",
  googleMapsUrl: "https://maps.google.com/?q=NEW+ROSHAN+TOURS+%26+TRAVELS+UMRAH+%26+ZIYARAT+INDIA+Pvt+Ltd+Kadapa",
  developer: {
    name: "MOMO IT TECHNOLOGIES",
    tagline: "Empowering Local Businesses with World-Class Digital Solutions",
    url: "https://github.com/momoittechnologies-spec"
  }
};

export const FEATURED_PACKAGES: PackageTier[] = [
  {
    id: "deluxe-saudia-umrah",
    name: "Deluxe Saudia Umrah Package",
    tagline: "Our most popular fixed group batch with walking distance hotels",
    startingPrice: "₹1,15,000",
    duration: "14 - 15 Days",
    departureAirport: "Hyderabad (HYD) Direct",
    airline: "Saudia Airlines (Direct)",
    makkahHotel: "Dlyar Alnada Hotel",
    makkahDistance: "Approx. 400m from Masjid al-Haram",
    madinaHotel: "Al Marjan International",
    madinaDistance: "Approx. 150m from Masjid an-Nabawi courtyard",
    sharingTypes: ["Quad Sharing (Standard)", "Triple Sharing", "Double Sharing"],
    inclusions: [
      "Direct roundtrip flights on Saudia Airlines (HYD - JED - HYD)",
      "Saudi Umrah e-Visa and mandatory health insurance",
      "5-Star walking distance hotels in Makkah & Madinah",
      "Authentic Indian / Hyderabadi buffet (Breakfast, Lunch, Dinner & Tea)",
      "Air-conditioned luxury coach transfers in Saudi Arabia",
      "Guided historic Ziyarath in both Makkah and Madinah with Muallim",
      "Complimentary 8-piece pilgrim amenity kit & 5L Zamzam",
      "Dedicated Kadapa coordinator support from start to finish"
    ],
    exclusions: [
      "Room service and individual laundry requests",
      "Personal shopping and excess baggage fees beyond airline allowance",
      "Internal transfers outside the designated itinerary"
    ],
    availability: "Fast Filling",
    featured: true
  },
  {
    id: "classic-economy-umrah",
    name: "Classic Group Umrah Package",
    tagline: "Affordable spiritual journey without compromising cleanliness and comfort",
    startingPrice: "₹1,05,000",
    duration: "14 Days",
    departureAirport: "Hyderabad (HYD)",
    airline: "Confirmed Connecting Flight",
    makkahHotel: "Comfort Hotel Makkah",
    makkahDistance: "Approx. 600m - 700m (Frequent shuttle / walk)",
    madinaHotel: "Markaziya Star Hotel",
    madinaDistance: "Approx. 350m from Masjid an-Nabawi",
    sharingTypes: ["Quad Sharing", "Quint Sharing"],
    inclusions: [
      "Confirmed roundtrip international flights with baggage",
      "Umrah e-Visa and medical insurance processing",
      "Hygiene-certified hotel accommodation in Makkah & Madinah",
      "Daily Indian buffet meals with tea",
      "AC luxury coach for all transfers and city Ziyarat",
      "Complimentary pilgrim accessories and Zamzam handling"
    ],
    exclusions: [
      "Private room supplements",
      "Personal expenses and individual medical care"
    ],
    availability: "Open",
    featured: false
  },
  {
    id: "executive-family-umrah",
    name: "Executive VIP Family Package",
    tagline: "Customized luxury and privacy tailored for elderly parents and private families",
    startingPrice: "Custom Quote",
    duration: "10 - 21 Days (Flexible)",
    departureAirport: "Hyderabad / Bangalore",
    airline: "Saudia Airlines / Emirates",
    makkahHotel: "Clock Tower / Swissotel / Pullman",
    makkahDistance: "Directly in Haram Courtyard (0m)",
    madinaHotel: "Dar Al Taqwa / Oberoi / Frontel",
    madinaDistance: "Directly facing Prophet's Green Dome",
    sharingTypes: ["Private Double", "Private Suite", "Family Connecting"],
    inclusions: [
      "Business / Economy Flex flights as requested",
      "VIP private GMC / Luxury SUV transfers throughout Saudi Arabia",
      "Front-row luxury hotels directly on Haram courtyards",
      "International / Indian fine dining arrangements",
      "Private personal Muallim guide for Umrah and exclusive Ziyarat",
      "24/7 concierge assistance"
    ],
    exclusions: [
      "Government visa fee variations for multiple entry"
    ],
    availability: "Open",
    featured: false
  }
];

export const UMRAH_SCHEDULES: ScheduleItem[] = [
  {
    id: "batch-nov-10",
    onwardDate: "10 NOV",
    returnDate: "23 NOV",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "₹1,15,000",
    status: "Limited",
    seatsLeftText: "02 Seats Remaining",
    makkahHotel: "Dlyar Alnada Hotel (Approx. 400m)",
    madinaHotel: "Al Marjan International (Approx. 150m)"
  },
  {
    id: "batch-nov-18",
    onwardDate: "18 NOV",
    returnDate: "02 DEC",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "₹1,15,000",
    status: "Fast Filling",
    seatsLeftText: "10 Seats Remaining",
    makkahHotel: "Dlyar Alnada Hotel (Approx. 400m)",
    madinaHotel: "Al Marjan International (Approx. 150m)"
  },
  {
    id: "batch-nov-26",
    onwardDate: "26 NOV",
    returnDate: "09 DEC",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "₹1,15,000",
    status: "Open",
    seatsLeftText: "Seats Open",
    makkahHotel: "Dlyar Alnada Hotel (Approx. 400m)",
    madinaHotel: "Al Marjan International (Approx. 150m)"
  },
  {
    id: "batch-dec-10",
    onwardDate: "10 DEC",
    returnDate: "23 DEC",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "₹1,15,000",
    status: "Open",
    seatsLeftText: "Seats Open",
    makkahHotel: "Dlyar Alnada Hotel (Approx. 400m)",
    madinaHotel: "Al Marjan International (Approx. 150m)"
  },
  {
    id: "batch-jan-special",
    onwardDate: "12 JAN",
    returnDate: "26 JAN",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "₹1,15,000",
    status: "Open",
    seatsLeftText: "Advance Booking Open",
    makkahHotel: "Dlyar Alnada Hotel (Approx. 400m)",
    madinaHotel: "Al Marjan International (Approx. 150m)"
  },
  {
    id: "batch-ramadan-2027",
    onwardDate: "RAMADAN 2027",
    returnDate: "HOLY MONTH SPECIAL",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "Custom",
    status: "Open",
    seatsLeftText: "Pre-Registration Open",
    makkahHotel: "Haram Proximity Hotel",
    madinaHotel: "Central Markaziya Hotel"
  }
];

export const SCHEDULE_METADATA = {
  lastUpdated: "November 2026",
  source: "Verified New Roshan Tours & Travels Kadapa Office Schedule",
  policyNote: "Once Umrah Visa and non-refundable Saudia Airlines group tickets are issued, the total package is non-refundable per airline & Ministry guidelines."
};

export const HOTEL_DETAILS = {
  makkah: {
    name: "Dlyar Alnada Hotel",
    distance: "Approx. 400 Meters from Masjid al-Haram",
    city: "Makkah Al-Mukarramah",
    rating: "5 Star Category",
    features: [
      "Convenient walking distance (approx. 5-7 minutes) across flat terrain to the Kaaba courtyard",
      "Spacious air-conditioned rooms with ensuite bathrooms and daily sanitization",
      "Authentic Indian / Hyderabadi buffet dining (Breakfast, Lunch, Dinner with tea)",
      "High-speed elevator access and 24/7 reception support",
      "Complimentary Wi-Fi for staying connected with family"
    ]
  },
  madina: {
    name: "Al Marjan International Hotel",
    distance: "Approx. 150 Meters from Prophet's Mosque",
    city: "Madinah Al-Munawwarah",
    rating: "5 Star Category",
    features: [
      "Prime location in Central Markaziya — just 2 minutes gentle walk to Masjid an-Nabawi gates",
      "Ideal for elderly family members, ladies, and children with zero bus commuting strain",
      "Air-conditioned rooms with comfortable bedding and LCD TVs broadcasting Haram audio",
      "Dedicated Indian kitchen chefs serving familiar, nutritious home-style meals",
      "Round-the-clock hot water, tea, and emergency medical assistance"
    ]
  }
};

export const PILGRIM_KIT_ITEMS = [
  { name: "7 Dane Ke Tasbih", description: "Special counting beads for Tawaf & Sa'ee rounds", icon: "beads" },
  { name: "Men's Premium Ihram", description: "Two pieces of pure 100% white absorbent cotton towels", icon: "ihram" },
  { name: "Men's Sun Umbrella", description: "UV-protective sun umbrella for daytime walks", icon: "umbrella" },
  { name: "Women's Modest Scarf", description: "Breathable, lightweight modest hijab/scarf", icon: "scarf" },
  { name: "15 KG Main Luggage Bag", description: "Heavy-duty branded luggage bag with secure zippers", icon: "bag" },
  { name: "Passport Neck Bag", description: "Anti-theft waterproof neck pouch for passport & currency", icon: "passport" },
  { name: "Thermal Water Bottle Bag", description: "Insulated sling holder for chilled water and Zamzam", icon: "bottle" },
  { name: "5-Litre Sealed Zamzam", description: "Original certified Zamzam water provided at the airport", icon: "zamzam" }
];

export const LUCKY_DRAW_DATA = {
  entryFee: 999,
  notice: "Promotional community program subject to official terms and in-office verification.",
  prizes: [
    { rank: "1st Prize", title: "Umrah Trip Completely FREE", detail: "100% Free trip — All package expenses borne by the company.", badge: "100% FREE" },
    { rank: "2nd Prize", title: "50% Discount on Umrah Package", detail: "50% You Pay — 50% Company Pays for your entire package.", badge: "50% OFF" },
    { rank: "3rd Prize", title: "25% Discount on Umrah Package", detail: "75% You Pay — 25% Company Pays for your entire package.", badge: "25% OFF" }
  ],
  consolationGuarantee: {
    title: "Special Benefit for Members Not Selected",
    details: "If your name is not drawn, your ₹999 is not wasted: it is fully credited toward an Umrah package booked within 6 months.",
    extraBonus: "Plus an additional special company discount of ₹2,000.",
    totalBenefit: "₹999 + ₹2,000 = ₹2,999 Total Value Credit!"
  }
};

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Initial Enquiry & Consultation",
    description: "Visit our Kadapa office or connect via WhatsApp to discuss your preferred travel dates, family size, and room-sharing needs."
  },
  {
    step: "02",
    title: "Package Selection",
    description: "Select from our fixed Saudia Airlines direct batches or customize a private itinerary with 5-star hotels near the Haram."
  },
  {
    step: "03",
    title: "Documentation & Visa Processing",
    description: "Submit original passports (min. 6 months validity) and photographs. We manage your Saudi Umrah e-Visa and mandatory health insurance."
  },
  {
    step: "04",
    title: "Booking Confirmation",
    description: "Receive your verified booking receipt, confirmed Saudia flight PNR, and hotel vouchers with complete price transparency."
  },
  {
    step: "05",
    title: "Pre-Departure Briefing & Kit",
    description: "Attend our orientation in Kadapa where we distribute your complimentary 8-piece luggage kit and explain Umrah rituals step-by-step."
  },
  {
    step: "06",
    title: "The Sacred Pilgrimage Journey",
    description: "Direct flight to Jeddah, executive AC coach to Makkah and Madinah, guided Ziyarath, and 24/7 assistance by experienced Muallims."
  },
  {
    step: "07",
    title: "Safe Return & Zamzam",
    description: "Return flight to Hyderabad with your complimentary 5-litre sealed Zamzam can and unforgettable memories of accepted worship."
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Mohammed Asif",
    city: "Ganagapeta, Kadapa",
    rating: 5,
    date: "October 2026",
    text: "Alhamdulillah! Traveled with New Roshan Travels in their Saudia Airlines direct batch. The hotels were genuinely very close to both Harams — Al Marjan in Madina was literally 2 minutes away. Food was just like home, Hyderabadi taste. Highly recommended for everyone in Kadapa!",
    batch: "Saudia Airlines 14-Day Batch"
  },
  {
    id: "rev-2",
    author: "Syed Nizamuddin",
    city: "YV Street, Kadapa",
    rating: 5,
    date: "September 2026",
    text: "The grand opening in Kadapa was blessed, and their service matches their promises. The visa arrived in just 48 hours, and luggage bags and ihram kit were of supreme quality. Brothers in the office treated my elderly mother with great care.",
    batch: "Family Umrah Package"
  },
  {
    id: "rev-3",
    author: "Shaik Khaja Hussain",
    city: "Proddatur / Kadapa",
    rating: 5,
    date: "November 2026",
    text: "Best decision to book through New Roshan Tours & Travels Kadapa. Direct flight on Saudia Airlines from Hyderabad without any layovers. The guide in Makkah walked us through every ritual patiently.",
    batch: "Deluxe Group Batch"
  }
];

export const FAQS = [
  {
    q: "What documents are required to book an Umrah package from Kadapa?",
    a: "You need an original Indian Passport with at least 6 months validity from the travel date, 2 passport-size photographs with a white background, and a copy of your Aadhaar card. Our Kadapa office will manage your Saudi e-Visa, health insurance, flight tickets, and hotel vouchers seamlessly."
  },
  {
    q: "Are the flights direct or with stopovers?",
    a: "Our prime group batches operate on Saudia Airlines directly flying Hyderabad (HYD) to Jeddah (JED) and returning Jeddah (JED) to Hyderabad (HYD). This eliminates stressful layovers, ensuring maximum comfort for families, elderly parents, and young children."
  },
  {
    q: "How close are the hotels in Makkah and Madinah to the Haram?",
    a: "In Makkah, we accommodate you at Dlyar Alnada Hotel (approx. 400 meters / 5-7 minutes flat walk). In Madina, we provide Al Marjan International Hotel, situated approx. 150 meters (less than 2 minutes walk) directly to the Masjid an-Nabawi courtyard gates."
  },
  {
    q: "How does the ₹999 Lucky Draw Scheme work?",
    a: "The lucky draw is an in-office promotional program. If drawn, participants receive a 100%, 50%, or 25% package subsidy. If your name is not drawn, your ₹999 is fully credited towards any Umrah booking within 6 months, plus an extra ₹2,000 company discount (total ₹2,999 value benefit). Official terms are confirmed at our Kadapa office."
  },
  {
    q: "What is your package refund and cancellation policy?",
    a: "Once the Umrah Visa and non-refundable Saudia airline group tickets are issued, the package is non-refundable as per Saudi Ministry and airline regulations. In case of emergency prior to ticket issuance, advance deposits are refunded minus nominal administrative and visa charges."
  },
  {
    q: "Is Indian food and laundry included in the ₹115,000 package?",
    a: "Yes! The ₹115,000 package includes daily 3-time authentic Indian/Hyderabadi buffet meals (Breakfast, Lunch, Dinner with tea), luxury coach transport, 5-star hotel stay, complete complimentary 8-piece pilgrim kit, guided Ziyarath in Makkah & Madina, and Zamzam handling."
  }
];

export const LEGAL_POLICIES = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "November 2026",
    content: "New Roshan Tours & Travels Umrah & Ziyarath India Pvt. Ltd. respects your privacy. All passport details, Aadhaar information, and contact numbers collected during inquiry and booking are used solely for the purpose of issuing Saudi Umrah visas, health insurance, airline tickets, and hotel reservations. We do not sell, rent, or share personal data with unauthorized third parties. Information is securely retained in compliance with Indian and Saudi travel regulatory requirements."
  },
  terms: {
    title: "Terms and Conditions",
    lastUpdated: "November 2026",
    content: "1. All bookings are subject to availability of Saudia Airlines flight seats and Saudi Ministry visa approvals.\n2. Passports must have a minimum validity of 6 months from the date of journey.\n3. Advertised fares are based on standard Quad sharing unless otherwise selected.\n4. Pilgrims are required to adhere to Saudi entry guidelines, local customs, and scheduled coach departure timings.\n5. New Roshan Tours & Travels acts as an authorized travel facilitator and is not liable for airline delays, weather disruptions, or Saudi Ministry regulatory updates."
  },
  cancellation: {
    title: "Cancellation and Refund Policy",
    lastUpdated: "November 2026",
    content: "1. Once the Saudi Umrah e-Visa and confirmed Saudia Airlines group tickets are issued, the entire package becomes 100% non-refundable as per airline group booking and ministry regulations.\n2. Cancellations made prior to visa issuance and ticket issuance may receive a partial refund after deducting non-refundable processing charges.\n3. No refunds are admissible for unutilized hotel nights, missed meals, or missed Ziyarath tours due to personal delays or medical emergencies."
  }
};
