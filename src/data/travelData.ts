export interface ScheduleItem {
  id: string;
  onwardDate: string;
  returnDate: string;
  route: string;
  airline: string;
  price: string;
  status: 'Limited' | 'Last Seats' | 'Open' | 'Fast Filling';
  seatsLeftText: string;
  makkahHotel: string;
  madinaHotel: string;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  features: string[];
  makkahHotel: string;
  madinaHotel: string;
  airline: string;
  popular?: boolean;
}

export const AGENCY_DETAILS = {
  name: "New Roshan Tours & Travels",
  legalName: "NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.",
  mottoArabic: "لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ",
  mottoUrdu: "ہماری ذمہ داری، آپ کا اعتماد",
  mottoEnglish: "Hamari Zimmedari, Aapka Aitmaad (Allah Aapki Umrah Ko Maqbool Farmaye - Aameen)",
  establishedDate: "3rd July 2026",
  chiefGuest: "Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari",
  address: "13/403-1, Rahmatullah Street, YV Street, Ganagapeta, Kadapa, Andhra Pradesh 516001",
  landmark: "Near YV Street & Ganagapeta",
  serviceAreas: "Kadapa, Rayalaseema, All Over Andhra Pradesh & Telangana",
  phones: [
    { display: "+91 90590 57239", raw: "919059057239" },
    { display: "+91 99595 78900", raw: "919959578900" },
    { display: "+91 98493 19776", raw: "919849319776" }
  ],
  whatsapp: "919059057239",
  instagramUrl: "https://www.instagram.com/newroshantoursandtravels/",
  instagramHandle: "@newroshantoursandtravels",
  googleRating: 5.0,
  googleReviewCount: "5.0 Rating on Google",
  googleMapsUrl: "https://maps.google.com/?q=NEW+ROSHAN+TOURS+%26+TRAVELS+UMRAH+%26+ZIYARAT+INDIA+Pvt+Ltd+Kadapa",
  developer: {
    name: "MOMO IT TECHNOLOGIES",
    tagline: "Empowering Local Businesses with World-Class Digital Solutions",
    url: "#"
  }
};

export const UMRAH_SCHEDULES: ScheduleItem[] = [
  {
    id: "batch-nov-10",
    onwardDate: "10 NOV",
    returnDate: "23 NOV",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "₹1,15,000",
    status: "Limited",
    seatsLeftText: "02 Seats Left",
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
    status: "Last Seats",
    seatsLeftText: "10 Seats Left",
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
    status: "Fast Filling",
    seatsLeftText: "Early Bird Open",
    makkahHotel: "Dlyar Alnada Hotel (Approx. 400m)",
    madinaHotel: "Al Marjan International (Approx. 150m)"
  },
  {
    id: "batch-ramadan",
    onwardDate: "RAMADAN 2027",
    returnDate: "HOLY MONTH SPECIAL",
    route: "HYD - JED - HYD",
    airline: "Saudia Airlines",
    price: "Custom",
    status: "Open",
    seatsLeftText: "Pre-Booking Open",
    makkahHotel: "5-Star Near Haram",
    madinaHotel: "5-Star Near Markaziya"
  }
];

export const HOTEL_DETAILS = {
  makkah: {
    name: "Dlyar Alnada Hotel",
    distance: "Approx. 400 Meters from Haram",
    rating: "5 Star ⭐⭐⭐⭐⭐",
    city: "Makkah Al-Mukarramah",
    features: [
      "Comfortable 5 to 7 minute walking distance to Kaaba courtyard",
      "Spacious fully air-conditioned rooms with private bathrooms",
      "Complimentary high-speed Wi-Fi & elevator access",
      "Authentic Indian/Hyderabadi buffet meals (Breakfast, Lunch & Dinner)",
      "Daily room cleaning and dedicated laundry assistance"
    ]
  },
  madina: {
    name: "Al Marjan International Hotel",
    distance: "Approx. 150 Meters from Prophet's Mosque",
    rating: "5 Star ⭐⭐⭐⭐⭐",
    city: "Madinah Al-Munawwarah",
    features: [
      "Prime location — just 2 minutes leisurely walk to Masjid an-Nabawi gates",
      "Extremely convenient for elderly pilgrims and families with kids",
      "Deluxe bedding, tea/coffee maker, LCD TV with Haram live broadcast",
      "Warm Indian Muslim hospitality with tea & coffee round the clock",
      "24/7 reception desk and emergency medical assistance"
    ]
  }
};

export const PILGRIM_KIT_ITEMS = [
  { name: "7 Dane Ke Tasbih", description: "Special counting prayer beads for Tawaf & Sa'ee", icon: "beads" },
  { name: "Men's Premium Ihram", description: "Two pieces of pure 100% white absorbent cotton towels", icon: "ihram" },
  { name: "Men's Sun Umbrella", description: "Durable UV-shield umbrella for daytime Haram warmth", icon: "umbrella" },
  { name: "Women's Hijab / Scarf", description: "High-grade breathable modest scarf for women pilgrims", icon: "scarf" },
  { name: "15 KG Main Luggage Bag", description: "Heavy-duty branded luggage bag with secure zip locks", icon: "bag" },
  { name: "Passport Neck Bag", description: "Anti-theft waterproof pouch to safeguard passport & currency", icon: "passport" },
  { name: "Thermal Water Bottle Bag", description: "Insulated sling holder for cold drinking water / Zamzam", icon: "bottle" },
  { name: "5-Litre Sealed Zamzam", description: "Authentic KSA certified Zamzam water provided at airport", icon: "zamzam" }
];

export const LUCKY_DRAW_DATA = {
  entryFee: 999,
  prizes: [
    { rank: "1st Prize", title: "Umrah Trip Completely FREE!", detail: "100% Free trip — You don't have to pay a single rupee. All expenses covered by company.", badge: "100% FREE" },
    { rank: "2nd Prize", title: "50% Discount on Umrah Package", detail: "50% You Pay — 50% Company Pays for your entire package.", badge: "50% OFF" },
    { rank: "3rd Prize", title: "25% Discount on Umrah Package", detail: "75% You Pay — 25% Company Pays for your entire package.", badge: "25% OFF" }
  ],
  consolationGuarantee: {
    title: "Special Gift for Members NOT Selected in the Draw",
    details: "Your ₹999 is NEVER wasted! If you decide to go for Umrah within 6 months, the ₹999 you paid will be fully adjusted into your package.",
    extraBonus: "Additionally, you will receive a SPECIAL DISCOUNT of ₹2,000 directly from New Roshan Tours & Travels.",
    totalBenefit: "₹999 + ₹2,000 = ₹2,999 Total Discount Benefit!"
  }
};

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Mohammed Asif",
    city: "Ganagapeta, Kadapa",
    rating: 5,
    date: "October 2026",
    text: "Alhamdulillah! Went with New Roshan Travels in their Saudia Airlines batch. The hotels were genuinely very close to both Harams — Al Marjan in Madina was literally 2 minutes away. Food was just like home, Hyderabadi taste. Highly recommended for everyone in Kadapa!",
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
    text: "Best decision to book through New Roshan Tours & Travels Kadapa. Direct flight on Saudia Airlines from Hyderabad without any unnecessary layovers. The guide in Makkah walked us through every ritual patiently.",
    batch: "Deluxe Group Batch"
  }
];

export const FAQS = [
  {
    q: "What documents are required to book an Umrah package from Kadapa?",
    a: "You only need an original Indian Passport with at least 6 months validity from the date of travel, 2 passport-size photographs with a white background, and a copy of your Aadhaar card. Our Kadapa office will manage your Saudi Visa, biometric slot, flight tickets, and hotel vouchers seamlessly."
  },
  {
    q: "Are the flights direct or with stopovers?",
    a: "Our prime batches operate on Saudia Airlines directly flying Hyderabad (HYD) to Jeddah (JED) and returning Jeddah (JED) to Hyderabad (HYD). This avoids strenuous layovers, which is a blessing for families, elders, and young children."
  },
  {
    q: "How close are the hotels in Makkah and Madinah to the Haram?",
    a: "In Makkah, we accommodate you at Dlyar Alnada Hotel (approximately 400 meters / 5-7 minutes walk). In Madina, we provide Al Marjan International Hotel, situated approximately 150 meters (less than 2 minutes walk) right to the Masjid an-Nabawi courtyard gates."
  },
  {
    q: "How does the ₹999 Lucky Draw Scheme work?",
    a: "You register by paying ₹999. In the lucky draw, 1st prize gets 100% Free Umrah, 2nd gets 50% discount, and 3rd gets 25% discount. If your name is not drawn, you lose NOTHING: your ₹999 is fully adjusted into any Umrah package within 6 months, plus we give you an extra ₹2,000 discount (Total benefit ₹2,999)!"
  },
  {
    q: "What is your package refund and cancellation policy?",
    a: "As clearly outlined on all our booking notices: once the Umrah Visa and non-refundable Saudia airline group tickets are issued, the package is non-refundable as per Saudi Ministry & airline rules. We advise all pilgrims to confirm their travel dates beforehand."
  },
  {
    q: "Is food and laundry included in the ₹115,000 package?",
    a: "Yes! The ₹115,000 package includes daily 3-time authentic Indian/Hyderabadi buffet meals (Breakfast, Lunch, Dinner with tea), luxury transport, 5-star hotel stay, complete complimentary pilgrim kit, guided Ziyarath in Makkah & Madina, and Zamzam handling."
  }
];
