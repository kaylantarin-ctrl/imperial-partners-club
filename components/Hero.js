import Button from './Button';
import { heroImage } from '@/lib/content';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[calc(100dvh_-_90px)] flex items-center bg-cream">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="wrap relative z-[2] w-full">
        <div className="max-w-[720px] py-16">
          <h1 className="text-gold capitalize text-[clamp(1.9rem,4.2vw,3.3rem)] leading-[1.13] break-words">
            The Global<br />Partnership Ecosystem<br />For Trusted Advisors
          </h1>

          <div className="w-20 h-px bg-gold my-7" />

          <p className="font-display text-gold text-[1.12rem] tracking-[.08em]">Connect. Collaborate. Elevate.</p>

          <p className="text-body font-light mt-5 max-w-[500px] leading-relaxed">
            Imperial Partners Club unites the world&apos;s most trusted advisors in a private ecosystem of opportunity, insight, and global influence.
          </p>

          <div className="mt-8">
            <Button href="/apply" arrow>Apply as Founding Partner</Button>
          </div>
          <p className="mt-[18px] text-[.64rem] tracking-[.22em] uppercase text-muted">Limited founding partnerships available</p>
        </div>
      </div>
    </section>
  );
}
