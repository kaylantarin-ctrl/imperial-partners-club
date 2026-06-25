import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import Ecosystem from '@/components/Ecosystem';
import Benefits from '@/components/Benefits';
import Intelligence from '@/components/Intelligence';
import Privileges from '@/components/Privileges';
import Membership from '@/components/Membership';
import HowItWorks from '@/components/HowItWorks';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ValueProps />
        <Ecosystem />
        <Benefits />
        <Intelligence />
        <Privileges />
        <Membership />
        <HowItWorks />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
