import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Button from '@/components/Button';

export const metadata = {
  title: 'Privileges — Imperial Partners Club',
};

export default function PrivilegesPage() {
  return (
    <>
      <Nav />
      <main>
        <section
          className="relative min-h-[70vh] flex items-center bg-ink"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(23,26,32,.94), rgba(23,26,32,.7), rgba(23,26,32,.3)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="wrap py-24">
            <p className="text-gold-soft text-[.72rem] tracking-[.34em] uppercase mb-6">
              Coming Soon
            </p>
            <h1 className="text-gold-soft text-[clamp(2.1rem,4.8vw,3.6rem)] leading-[1.12]">
              Privileges
            </h1>
            <p className="text-white/75 max-w-[680px] mt-6 font-light leading-relaxed">
              This page will showcase the Imperial Partners Club privileges, including exclusive benefits, rewards, and special opportunities.
            </p>
            <div className="mt-10">
              <Button href="/apply" arrow>Apply As Founding Partner</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}