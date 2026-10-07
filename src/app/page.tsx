import HeroSection from '../components/homepage/HeroSection';
import StoryScrollNarrative from '../components/homepage/StoryScrollNarrative';
import FeaturedHardwareGrid from '../components/homepage/FeaturedHardwareGrid';
import ChallengeContextBanner from '../components/homepage/ChallengeContextBanner';

export default function HomePage() {
  return (
    <div className="relative space-y-8 pb-16">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Scroll-Based Core Narrative */}
      <StoryScrollNarrative />

      {/* 3. Featured Moon & Mars Hardware Registry */}
      <FeaturedHardwareGrid />

      {/* 4. Challenge Context & NASA Data Provenance */}
      <ChallengeContextBanner />
    </div>
  );
}
