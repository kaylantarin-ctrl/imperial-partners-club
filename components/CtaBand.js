import Button from './Button';

const bg = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=70';

export default function CtaBand() {
  return (
    <section className="relative text-white text-center py-[84px] bg-ink bg-cover bg-center"
             style={{ backgroundImage: `linear-gradient(rgba(15,16,20,.84),rgba(15,16,20,.9)), url(${bg})` }}>
      <div className="wrap">
        <h2 className="text-gold-soft capitalize text-[clamp(1.7rem,3.4vw,2.4rem)] tracking-[.04em]">Become a Founding Partner</h2>
        <p className="my-3.5 mb-[30px] font-light text-white/80">Shape the future of global advisory. Join a legacy of trust, influence, and opportunity.</p>
        <Button href="/apply" arrow>Apply as Founding Partner</Button>
        <p className="mt-5 text-[.64rem] tracking-[.22em] uppercase text-white/50">Limited founding partnerships available</p>
      </div>
    </section>
  );
}
