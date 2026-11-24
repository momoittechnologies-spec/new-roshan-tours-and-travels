import { AGENCY_DETAILS } from '../data/travelData';

export interface WhatsAppInquiryParams {
  intent?: 'package' | 'schedule' | 'calculator' | 'luckydraw' | 'general' | 'hotel';
  packageName?: string;
  batchDates?: string;
  roomType?: string;
  adults?: number;
  children?: number;
  indicativeQuote?: string;
  name?: string;
  city?: string;
  customMessage?: string;
}

/**
 * Generates a clean, safely encoded WhatsApp URL for New Roshan Tours & Travels
 */
export function createWhatsAppUrl(params: WhatsAppInquiryParams = {}): string {
  const phone = AGENCY_DETAILS.whatsapp;
  const lines: string[] = [];

  // Salutation
  lines.push("Assalamu Alaikum New Roshan Tours & Travels Kadapa,");
  lines.push("");

  switch (params.intent) {
    case 'package':
      lines.push("*UMRAH PACKAGE INQUIRY*");
      if (params.packageName) lines.push(`• *Package:* ${params.packageName}`);
      if (params.roomType) lines.push(`• *Sharing:* ${params.roomType}`);
      if (params.batchDates) lines.push(`• *Preferred Departure:* ${params.batchDates}`);
      if (params.adults) lines.push(`• *Pilgrims:* ${params.adults} Adults${params.children ? ` + ${params.children} Children` : ''}`);
      lines.push("");
      lines.push("Please share the day-wise itinerary, confirmed inclusions, and current seat availability.");
      break;

    case 'schedule':
      lines.push("*DEPARTURE BATCH INQUIRY*");
      if (params.batchDates) lines.push(`• *Batch Dates:* ${params.batchDates}`);
      lines.push("• *Flight:* Saudia Airlines (HYD - JED Direct)");
      lines.push("");
      lines.push("Please confirm if seats are still open for this batch and share booking requirements.");
      break;

    case 'calculator':
      lines.push("*ESTIMATED UMRAH QUOTATION REQUEST*");
      if (params.batchDates) lines.push(`• *Travel Period:* ${params.batchDates}`);
      if (params.adults) lines.push(`• *Adult Travelers:* ${params.adults}`);
      if (params.children && params.children > 0) lines.push(`• *Child Travelers:* ${params.children}`);
      if (params.roomType) lines.push(`• *Room Category:* ${params.roomType}`);
      if (params.indicativeQuote) lines.push(`• *Indicative Total:* ${params.indicativeQuote}`);
      lines.push("");
      lines.push("Please verify this estimate and let me know the passport submission and advance deposit details.");
      break;

    case 'luckydraw':
      lines.push("*COMMUNITY LUCKY DRAW INQUIRY (₹999)*");
      if (params.name) lines.push(`• *Name:* ${params.name}`);
      if (params.city) lines.push(`• *City:* ${params.city}`);
      lines.push("• *Note:* Inquiring regarding official scheme rules and eligibility for the ₹999 Umrah lucky draw program.");
      lines.push("");
      lines.push("Please provide the official terms, draw schedule, and verified office verification details.");
      break;

    case 'hotel':
      lines.push("*HOTEL & ACCOMMODATION INQUIRY*");
      lines.push("• Inquiring regarding walking distance hotels in Makkah (Diyar Alnada Hotel) and Madinah (Al Marjan International).");
      lines.push("Please confirm room availability and buffet dining arrangements.");
      break;

    default:
      if (params.customMessage) {
        lines.push(params.customMessage);
      } else {
        lines.push("I would like to inquire regarding Umrah & Ziyarath packages from Kadapa. Please share your current packages and schedules.");
      }
      break;
  }

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${phone}?text=${encodedText}`;
}
