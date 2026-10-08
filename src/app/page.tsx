import HeroSection from '../components/homepage/HeroSection';
import StoryScrollNarrative from '../components/homepage/StoryScrollNarrative';
import FeaturedHardwareGrid from '../components/homepage/FeaturedHardwareGrid';
import ChallengeContextBanner from '../components/homepage/ChallengeContextBanner';
import NASADataToExperienceMap from '../components/data/NASADataToExperienceMap';
import WhereAreTheyNowSection from '../components/explorer/WhereAreTheyNowSection';
import WhyThisMattersSection from '../components/homepage/WhyThisMattersSection';

export default function HomePage() {
  return (
    <div className="relative space-y-12 pb-16">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Scroll-Based Core Narrative */}
      <StoryScrollNarrative />

      {/* 3. Featured Moon & Mars Hardware Registry */}
      <FeaturedHardwareGrid />

      {/* 4. Where Are They Now? Hardware Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhereAreTheyNowSection />
      </div>

      {/* 5. NASA Data → Story → Experience Mapping */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NASADataToExperienceMap />
      </div>

      {/* 6. Why Space Graveyard Matters (Impact & Outcomes) */}
      <WhyThisMattersSection />

      {/* 7. Challenge Context & NASA Data Provenance Banner */}
      <ChallengeContextBanner />
    </div>
  );
}
