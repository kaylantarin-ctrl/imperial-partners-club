import Logo from '@/components/Logo';
import Button from '@/components/Button';

export default function PartnerNav() {
  return (
    <header className="sticky top-0 z-[60] bg-cream/90 backdrop-blur border-b border-gold/15">
      <div className="wrap flex items-center justify-between h-[86px]">
        <a href="#top" className="shrink-0"><Logo /></a>
        <Button href="#apply" arrow className="!py-[14px] !px-[26px] text-[.7rem]">Apply To Become A Partner</Button>
      </div>
    </header>
  );
}
