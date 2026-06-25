import Logo from '@/components/Logo';
import ApplicationForm from '@/components/partner/ApplicationForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Apply — Imperial Partners Club',
  description:
    'Apply to join Imperial Partners Club. Complete the founding partner application and our team will be in touch to arrange a private introduction.',
};

export default function ApplyPage() {
  return (
    <>
      {/* minimal, distraction-free header for the application flow */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-gold/15">
        <div className="wrap flex items-center justify-between h-[86px]">
          <a href="/" className="shrink-0"><Logo /></a>
          <a href="/" className="text-[.72rem] tracking-[.15em] uppercase font-medium text-body hover:text-gold transition-colors">
            ← Back to Home
          </a>
        </div>
      </header>

      <main>
        {/* intro */}
        <section className="relative overflow-hidden bg-cream text-center pt-20 pb-12 md:pt-24 md:pb-14">
          <img src="/ipc-logo.png" alt="" aria-hidden="true"
               className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] max-w-none opacity-[.045]" />
          <div className="wrap relative z-10">
            <p className="text-gold text-[.72rem] tracking-[.34em] uppercase font-medium mb-5">Imperial Partners Club</p>
            <h1 className="text-gold text-[clamp(1.9rem,4vw,3rem)] capitalize leading-tight">Founding Partner Application</h1>
            <div className="w-20 h-px bg-gold mx-auto my-7" />
            <p className="mx-auto max-w-[600px] text-body font-light leading-relaxed">
              Imperial Partners Club is a private, invitation-based network. Applications are reviewed personally by our
              partnerships team — tell us about your practice and your clients, and we will be in touch to arrange a
              private introduction.
            </p>
          </div>
        </section>

        {/* form */}
        <section className="bg-cream pb-24">
          <div className="wrap">
            <ApplicationForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
