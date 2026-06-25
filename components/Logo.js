export default function Logo({ size = 46, stacked = false }) {
  return (
    <span className="flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ipc-logo.png"
        alt="Imperial Partners Club crest"
        width={size}
        height={size}
        style={{ height: size, width: 'auto' }}
        className="shrink-0"
      />
      <span className={stacked ? 'block' : ''}>
        <b className="block font-display text-gold text-[1.02rem] font-semibold tracking-[.16em]">IMPERIAL</b>
        <small className="block text-muted text-[.58rem] font-medium tracking-[.34em] mt-[3px]">PARTNERS CLUB</small>
      </span>
    </span>
  );
}
