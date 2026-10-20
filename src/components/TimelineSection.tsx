import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Download, Check, Sparkles } from 'lucide-react';
import { EventItem } from '../types';

export const TimelineSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const events: (EventItem & { badgeTag: string })[] = [
    {
      id: 'nikah',
      badgeTag: 'Nikah',
      title: 'The Sacred Nikah Ceremony',
      arabicTitle: '',
      dateStr: 'Saturday, January 30, 2027 (30.01.2027)',
      timeStr: '11:30 AM',
      dateIso: '20270130T113000',
      venue: 'Chowk Masjid',
      city: 'Pernambut',
      address: 'Chowk Masjid, Pernambut',
      description: 'Nikah Ceremony of V. Mohammed Fouzan & V. Zehra Mehar at Chowk Masjid, Pernambut.',
      mapQuery: 'Chowk+Masjid+Pernambut',
      mapsUrl: 'https://maps.app.goo.gl/DC6NwRs8gnEfUitb7',
      badge: 'The Sacred Union',
    },
    {
      id: 'valima',
      badgeTag: 'Valima',
      title: 'Dawat-e-Valima Reception',
      arabicTitle: '',
      dateStr: 'Saturday, January 30, 2027 (On Same Day)',
      timeStr: 'Following Nikah Ceremony (On Same Day)',
      dateIso: '20270130T133000',
      venue: 'Shaad Function Hall',
      city: 'Pernambut',
      address: 'Shaad Function Hall, Pernambut',
      description: 'Valima Reception of V. Mohammed Fouzan & V. Zehra Mehar at Shaad Function Hall, Pernambut.',
      mapQuery: 'Shaad+Function+Hall+Pernambut',
      mapsUrl: 'https://maps.google.com/?q=Shaad+Function+Hall+Pernambut',
      badge: 'The Sacred Feast',
    },
  ];

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownloadICS = (event: EventItem) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Fouzan and Zehra Wedding//EN',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title} - V. Mohammed Fouzan & V. Zehra Mehar Wedding`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.venue}, ${event.address}`,
      `DTSTART:${event.dateIso}`,
      `DTEND:${event.dateIso}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}_invitation.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getGoogleCalendarUrl = (event: EventItem) => {
    const text = encodeURIComponent(`${event.title} - V. Mohammed Fouzan & V. Zehra Mehar`);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(`${event.venue}, ${event.address}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${event.dateIso}/${event.dateIso}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="relative py-20 px-4 max-w-4xl mx-auto z-10 transition-all duration-700 ease-out">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-2">
        <span className="font-arabic text-2xl text-[#d4af37]">بَرَكَاتُ الزَّوَاج</span>
        <h2 className="text-3xl md:text-4xl font-serif-elegant font-bold gold-text-shimmer">
          PROGRAM OF AUSPICIOUS EVENTS
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <p className="text-xs md:text-sm font-subserif text-[#e8dfc8]/85 max-w-md">
            Please grace our Nikah and Valima ceremonies with your esteemed presence and prayers
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
      </div>

      {/* 2-Column Grid for Nikah & Valima */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#d4af37]/60 via-[#0d3525] to-[#d4af37]/30 hover:from-[#ffd700] hover:to-[#ffd700]/70 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col"
          >
            <div className="relative h-full rounded-[23px] bg-gradient-to-b from-[#072016]/95 via-[#04140d]/95 to-[#020b06]/95 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
              {/* Islamic Arch Top Decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 border-b border-[#d4af37]/30 rounded-b-full bg-[#144e37]/20" />

              <div>
                {/* Event Badge with Nikah / Valima */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase font-serif-elegant tracking-widest px-3.5 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ffd700] font-bold shadow-sm">
                    {event.badgeTag}
                  </span>
                  <span className="text-[11px] font-subserif text-[#d4af37] italic">
                    {event.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif-elegant font-bold text-white group-hover:text-[#ffd700] transition-colors text-center mb-5">
                  {event.title}
                </h3>

                {/* Date, Time & Venue Card */}
                <div className="space-y-3 p-4 rounded-xl bg-black/40 border border-[#d4af37]/25 text-xs mb-6">
                  <div className="flex items-center gap-2.5 text-[#fceba2]">
                    <Calendar className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="font-medium text-sm">{event.dateStr}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-[#e8dfc8]/90">
                    <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span className="font-medium">{event.timeStr}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-[#e8dfc8]/90 pt-2.5 border-t border-white/10">
                    <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white font-medium text-sm">{event.venue}</strong>
                      <span className="text-xs text-[#e8dfc8]/70">{event.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t border-[#d4af37]/20">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={getGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-[#0d3525] border border-[#d4af37]/40 text-[#fceba2] hover:bg-[#144e37] hover:border-[#d4af37] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Google Cal</span>
                  </a>

                  <button
                    onClick={() => handleDownloadICS(event)}
                    className="py-2.5 px-3 rounded-xl bg-black/40 border border-[#d4af37]/30 text-[#e8dfc8] hover:text-white hover:border-[#d4af37] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>iCal (.ics)</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={event.mapsUrl || `https://maps.google.com/?q=${event.mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2.5 rounded-xl bg-black/40 border border-[#d4af37]/20 text-[#e8dfc8]/90 hover:text-white hover:border-[#d4af37]/50 transition-all flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Directions</span>
                  </a>

                  <button
                    onClick={() => handleCopyAddress(event.id, `${event.venue}, ${event.address}`)}
                    className="py-2 px-2.5 rounded-xl bg-black/40 border border-[#d4af37]/20 text-[#e8dfc8]/90 hover:text-white hover:border-[#d4af37]/50 transition-all flex items-center justify-center gap-1.5"
                  >
                    {copiedId === event.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Copy Venue</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
