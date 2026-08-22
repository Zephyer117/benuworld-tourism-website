'use client';

import ServicePageTemplate from '@/components/public/ServicePageTemplate';
import { faqs, processInbound } from '@/lib/site-content';
import { useServiceLive } from '@/lib/use-service-live';

export default function InboundTourismPage() {
  const live = useServiceLive('inbound-tourism', 'Inbound Tourism');

  return (
    <div className="flex flex-col">
      <ServicePageTemplate
        title="Inbound Tourism"
        subtitle="Discover the beauty of Bangladesh with expert guidance"
        description="Our inbound tourism services offer comprehensive travel experiences across Bangladesh, from historical sites to natural wonders, with certified guides and personalized itineraries."
        heroImage={live.heroImage}
        heroVideo={live.heroVideo}
        gallery={live.gallery}
        contactNumber={live.contactNumber}
        features={[
          'Certified local guides with fluent English and Chinese language support',
          'Customized tour packages for individuals and groups',
          'Visa assistance and travel documentation support',
          'Comfortable transportation and premium accommodation arrangements',
          'Cultural immersion experiences and local cuisine tours',
          '24/7 travel support and emergency assistance',
          "Historical site tours including Sundarbans, Cox's Bazar, and Sylhet",
          'Business tourism and corporate travel planning',
        ]}
        posts={live.posts}
        process={processInbound}
        processTitle="From first email to airport farewell"
        highlights={live.highlights}
        galleryHrefs={live.galleryHrefs}
        highlightsTitle="Signature Bangladesh routes"
        faqs={faqs.inbound}
      />
    </div>
  );
}
