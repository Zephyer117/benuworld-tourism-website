'use client';

import ServicePageTemplate from '@/components/public/ServicePageTemplate';
import { faqs, processEducation } from '@/lib/site-content';
import { useServiceLive } from '@/lib/use-service-live';

export default function TeachingCurriculumPage() {
  const live = useServiceLive('teaching-curriculum', 'Teaching Curriculum');

  return (
    <div className="flex flex-col">
      <ServicePageTemplate
        title="Teaching Curriculum"
        subtitle="Enhance your skills with our comprehensive educational programs"
        description="Our teaching curriculum services provide language training, skills development, and educational consultancy to help individuals and organizations achieve their learning objectives."
        heroImage={live.heroImage}
        heroVideo={live.heroVideo}
        gallery={live.gallery}
        contactNumber={live.contactNumber}
        features={[
          'English language training for business and academic purposes',
          'Chinese language courses (Mandarin) for business and tourism',
          'Customized corporate training programs',
          'Skills development workshops and certification courses',
          'Educational consultancy for study abroad programs',
          'Curriculum development for educational institutions',
          'Online and in-person learning options',
          'Placement assistance and career counseling',
        ]}
        posts={live.posts}
        process={processEducation}
        processTitle="How a course is designed"
        highlights={live.highlights}
        galleryHrefs={live.galleryHrefs}
        highlightsTitle="Programs on the current roster"
        faqs={faqs.education}
      />
    </div>
  );
}
