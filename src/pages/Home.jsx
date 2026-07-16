import PageTransition from '../components/PageTransition';
import Seo            from '../components/Seo';
import Hero           from '../components/Hero';
import WorkList       from '../components/WorkList';
import ClientsStrip   from '../components/ClientsStrip';
import ProcessStrip   from '../components/ProcessStrip';
import AboutMatrix    from '../components/AboutMatrix';
import Testimonials   from '../components/Testimonials';

export default function Home() {
  return (
    <PageTransition>
      <Seo description="Mohamad Othman — independent graphic designer & creative director. Brand identity, editorial design and motion from Riyadh, KSA." />
      <Hero />
      <WorkList limit={8} />
      <ClientsStrip />
      <ProcessStrip />
      <AboutMatrix />
      <Testimonials />
    </PageTransition>
  );
}
