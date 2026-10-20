export interface EventItem {
  id: string;
  title: string;
  arabicTitle: string;
  dateStr: string;
  timeStr: string;
  dateIso: string;
  venue: string;
  city: string;
  address: string;
  description: string;
  mapQuery: string;
  mapsUrl?: string;
  badge: string;
}
