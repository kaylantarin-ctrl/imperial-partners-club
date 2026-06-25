const P = {
  people: <><circle cx="9" cy="8" r="3" /><circle cx="16" cy="9" r="2.2" /><path d="M4 19c0-3 2.5-5 5-5s5 2 5 5M14 19c0-2 1.5-3.5 3-3.5s3 1.2 3 3" /></>,
  opportunity: <><circle cx="12" cy="12" r="2" /><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.5 6.5l2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  network: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /><path d="M12 4v4M12 16v4M4 12h4M16 12h4" /></>,
  shield: <path d="M12 3l7 3v6c0 5-3 7-7 9-4-2-7-4-7-9V6z" />,
  chart: <path d="M4 19V9l5-3 5 4 6-4v13z" />,
  leader: <><circle cx="12" cy="8" r="4" /><path d="M5 21c0-4 3-6 7-6s7 2 7 6" /></>,
  nodes: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M7.5 8l3.5 8M16.5 8l-3.5 8" /></>,
  doc: <><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M16 16l4 4" /></>,
  group: <><circle cx="8" cy="9" r="3" /><circle cx="16" cy="9" r="3" /><path d="M3 19c0-3 2-4 5-4s5 1 5 4M11 19c0-3 2-4 5-4s5 1 5 4" /></>,
  growth: <><path d="M4 20L9 13l4 4 7-9" /><path d="M20 8v5M20 8h-5" /></>,
  coin: <><circle cx="12" cy="12" r="9" /><path d="M14.5 9c-.7-.7-1.6-1-2.5-1-1.4 0-2.5.8-2.5 2s1.1 1.8 2.5 2 2.5.9 2.5 2-1.1 2-2.5 2c-1 0-1.9-.4-2.5-1M12 6.5v11" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>,
  link: <><path d="M10 13a3 3 0 004 0l3-3a3 3 0 00-4-4l-1 1" /><path d="M14 11a3 3 0 00-4 0l-3 3a3 3 0 004 4l1-1" /></>,
  headset: <><path d="M5 13v-1a7 7 0 0114 0v1" /><rect x="3" y="13" width="3" height="6" rx="1" /><rect x="18" y="13" width="3" height="6" rx="1" /><path d="M18 19a3 3 0 01-3 3h-2" /></>,
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />,
  badge: <><circle cx="12" cy="9" r="5" /><path d="M9 13l-1 7 4-2 4 2-1-7" /></>,
  crown: <path d="M4 18h16M4 18l-1-9 5 4 4-7 4 7 5-4-1 9" />,
  passport: <><rect x="5" y="3" width="14" height="18" rx="1.5" /><circle cx="12" cy="10" r="3" /><path d="M9 16h6" /></>,
  building: <><path d="M4 21V5l8-2v18M12 21V9l8 2v10M4 21h16" /><path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 17h2" /></>,
  bell: <><path d="M6 16V11a6 6 0 1112 0v5l2 2H4z" /><path d="M10 20a2 2 0 004 0" /></>,
  trophy: <><path d="M8 4h8v5a4 4 0 01-8 0z" /><path d="M8 5H5v2a3 3 0 003 3M16 5h3v2a3 3 0 01-3 3" /><path d="M12 13v3M9 20h6l-1-4h-4z" /></>,
  check: <path d="M5 13l4 4L19 7" />,
};
export default function Icon({ name, size = 28, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      {P[name]}
    </svg>
  );
}
