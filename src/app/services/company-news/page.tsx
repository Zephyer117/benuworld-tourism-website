'use client';

import ServicePageTemplate from '@/components/public/ServicePageTemplate';
import { useServiceLive } from '@/lib/use-service-live';

export default function CompanyNewsPage() {
  const live = useServiceLive('company-news', 'Company News');

  return (
    <div className="flex flex-col">
      <ServicePageTemplate
        title="Company News"
        subtitle="Stay updated with our latest announcements and updates"
        description="Our company news section keeps you informed about the latest developments, achievements, and initiatives at BenuWorld. From new service launches to partnerships and corporate milestones."
        heroImage={live.heroImage}
        heroVideo={live.heroVideo}
        gallery={live.gallery}
        contactNumber={live.contactNumber}
        features={[
          'Latest company announcements and press releases',
          'New service launches and feature updates',
          'Partnership and collaboration announcements',
          'Corporate milestones and achievements',
          'Industry insights and market analysis',
          'Event coverage and company activities',
          'Leadership updates and team news',
          'Newsletter subscription for regular updates',
        ]}
        posts={live.posts}
        highlightsTitle="What we publish"
        highlights={live.highlights}
        galleryHrefs={live.galleryHrefs}
      />
    </div>
  );
}
