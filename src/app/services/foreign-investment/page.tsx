'use client';

import ServicePageTemplate from '@/components/public/ServicePageTemplate';
import { faqs, processInvestment } from '@/lib/site-content';
import { useServiceLive } from '@/lib/use-service-live';

export default function ForeignInvestmentPage() {
  const live = useServiceLive('foreign-investment', 'Foreign Investment');

  return (
    <div className="flex flex-col">
      <ServicePageTemplate
        title="Foreign Investment"
        subtitle="Navigate global investment opportunities with expert guidance"
        description="Our foreign investment consultancy helps international investors identify opportunities in Bangladesh and assists Bangladeshi investors in exploring global markets, particularly in BRI partner countries."
        heroImage={live.heroImage}
        heroVideo={live.heroVideo}
        gallery={live.gallery}
        contactNumber={live.contactNumber}
        features={[
          'Market research and investment opportunity analysis',
          'Legal framework guidance and regulatory compliance support',
          'Partner identification and business matchmaking services',
          'Due diligence and risk assessment for potential investments',
          'BRI (Belt and Road Initiative) project consultation',
          'Cross-border investment structuring and tax planning',
          'Government liaison and permit acquisition assistance',
          'Ongoing investment monitoring and reporting services',
        ]}
        posts={live.posts}
        process={processInvestment}
        processTitle="A typical market-entry sequence"
        highlights={live.highlights}
        galleryHrefs={live.galleryHrefs}
        highlightsTitle="Sectors we brief most"
        faqs={faqs.investment}
      />
    </div>
  );
}
