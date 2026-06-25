// Single source of truth for page content. Add/edit items here.
const U = (id, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const navLinks = [
  ['About', '#about'],
  ['Ecosystem', '#ecosystem'],
  ['Benefits', '#benefits'],
  ['Intelligence', '#intelligence'],
  ['Privileges', '#privileges'],
  ['Membership', '#membership'],
  ['Contact', '#contact'],
];

export const heroImage = '/hero.jpg'; // jet, car & columns (optimized, in public/)

export const ecosystem = [
  { title: 'Global Mobility', img: U('1512453979798-5ea266f8880c') },
  { title: 'Wealth & Protection', img: U('1500627964684-141351970a7f') },
  { title: 'Investments', img: U('1486406146926-c627a92ad1ab') },
  { title: 'Imperial Intelligence', img: U('1521587760476-6c12a4b040da') },
  { title: 'Imperial Privileges', img: U('1507003211169-0a1dd7228f2d') },
  { title: 'Education & Legacy', img: U('1568992687947-868a62a9f521') },
];

export const reports = [
  { title: '2024 Global Wealth Trends', period: 'Q2 2024', img: U('1444723121867-7a241cacace9', 400) },
  { title: 'Private Markets Outlook', period: 'Q2 2024', img: U('1480714378408-67cf0d13bc1b', 400) },
  { title: 'Global Mobility Report', period: 'Q2 2024', img: U('1493397212122-2b85dda8b8b9', 400) },
  { title: 'Tax & Structuring Insights', period: 'Q2 2024', img: U('1486406146926-c627a92ad1ab', 400) },
];

export const privileges = [
  { title: 'Private Aviation Partnership', img: U('1436491865332-7a61a109cc05', 400) },
  { title: 'Global Summit Access', img: U('1517245386807-bb43f82c33c4', 400) },
  { title: 'Luxury Hospitality Benefits', img: U('1551882547-ff40c63fe5fa', 400) },
  { title: 'Art & Collectibles Program', img: U('1577083552431-6e5fd01aa342', 400) },
  { title: 'Exclusive Experiences', img: U('1530103862676-de8c9debad1d', 400) },
];

export const membership = {
  intro:
    'Imperial Partners Club is a private, invitation-based network. There is no fee to join — access is earned through your reputation and your record of successful referrals.',
  pillars: [
    { icon: 'people', title: 'By Invitation', body: 'Membership is extended to established advisors within the Imperial network. No fees, no subscriptions — only trusted professionals.' },
    { icon: 'shield', title: 'Earned Access', body: 'Access is reserved for advisors with strong client relationships and a proven record of successful referrals.' },
    { icon: 'growth', title: 'A Rewarding Partnership', body: 'Refer clients who complete with Imperial and be rewarded. Full terms are shared privately with approved partners.' },
  ],
};

export const steps = [
  { num: '01', title: 'Apply', body: 'Submit your application for review.' },
  { num: '02', title: 'Qualification', body: 'We ensure alignment and uphold our standards.' },
  { num: '03', title: 'Onboarding', body: 'Access your partner portal and resources.' },
  { num: '04', title: 'Connect', body: 'Engage with partners and opportunities.' },
  { num: '05', title: 'Grow', body: 'Scale your impact and your business globally.' },
];

export const footer = {
  cols: [
    { h: 'Quick Links', links: ['About Us', 'The Ecosystem', 'Partner Benefits', 'Intelligence', 'Privileges'] },
    { h: 'Membership', links: ['Membership Options', 'How It Works', 'Apply Now', 'Partner Portal'] },
    { h: 'Resources', links: ['Reports & Insights', 'Events', 'News & Updates', 'FAQs'] },
  ],
  contact: ['contact@imperialpartners.club', '+1 212 555 0198', 'New York · London', 'Dubai · Singapore'],
};
