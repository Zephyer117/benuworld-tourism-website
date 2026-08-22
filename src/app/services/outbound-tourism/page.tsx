'use client';

import ServicePageTemplate from '@/components/public/ServicePageTemplate';
import { faqs, processOutbound } from '@/lib/site-content';
import { useServiceLive } from '@/lib/use-service-live';

export default function OutboundTourismPage() {
  const live = useServiceLive('outbound-tourism', 'Outbound Tourism');

  return (
    <div className="flex flex-col">
      <ServicePageTemplate
        title="Outbound Tourism"
        subtitle="Explore the world with our international travel expertise"
        description="Our outbound tourism services connect Bangladeshi travelers with international destinations, offering complete travel solutions from visa processing to guided tours."
        heroImage={live.heroImage}
        heroVideo={live.heroVideo}
        gallery={live.gallery}
        contactNumber={live.contactNumber}
        features={[
          'Visa processing and documentation for multiple countries',
          'International flight booking and travel coordination',
          'Guided tour packages to popular destinations in Asia, Europe, and beyond',
          'Hotel reservations and accommodation management',
          'Travel insurance and emergency assistance services',
          'Currency exchange and financial guidance for international travel',
          'Cultural orientation and destination-specific travel advice',
          'Group travel coordination for families, corporate teams, and educational tours',
        ]}
        posts={live.posts}
        process={processOutbound}
        processTitle="How outbound trips are built"
        highlights={live.highlights}
        galleryHrefs={live.galleryHrefs}
        highlightsTitle="Corridors we file most often"
        faqs={faqs.outbound}
      />
    </div>
  );
}
