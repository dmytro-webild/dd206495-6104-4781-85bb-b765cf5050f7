"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Trophy, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Join Team",
          id: "features",
        },
        {
          name: "Socials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="XQP ESPORTS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="XQP ESPORTS"
      description="The fastest growing gaming community. Built for playing games and chilling with friends, or building a worldwide community."
      buttons={[
        {
          text: "Join Discord",
          href: "https://discord.gg/Kn4dXsBNA",
        },
        {
          text: "Contact Us",
          href: "mailto:naidooqirauhn@gmail.com",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cyberpunk-anime-character-rainy-alley_23-2152007993.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="About XQP"
      description="XQP is a growing esports and gaming community focused on content creation, competitive gaming, tournaments, and building one of the strongest gaming communities in South Africa and beyond."
      bulletPoints={[
        {
          title: "Content Creation",
          description: "High-quality streams and videos.",
          icon: Zap,
        },
        {
          title: "Competitive Gaming",
          description: "Tournaments and ranked play.",
          icon: Trophy,
        },
        {
          title: "Community",
          description: "Building strong connections globally.",
          icon: Users,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/online-video-game-competition-league-3d-illustration_1419-2791.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Discord Server",
          subtitle: "Hang out with friends",
          category: "Community",
          value: "24/7",
          buttons: [
            {
              text: "Join",
              href: "https://discord.gg/Kn4dXsBNA",
            },
          ],
        },
        {
          id: "f2",
          title: "PEAKZZ YouTube",
          subtitle: "Daily highlights",
          category: "Media",
          value: "Live",
          buttons: [
            {
              text: "Subscribe",
              href: "https://www.youtube.com/@peakzz-v3",
            },
          ],
        },
        {
          id: "f3",
          title: "TikTok Clan",
          subtitle: "Short-form fun",
          category: "Content",
          value: "Viral",
          buttons: [
            {
              text: "Follow",
              href: "https://www.tiktok.com/@xqpclan",
            },
          ],
        },
      ]}
      title="Join The Team"
      description="Become part of the XQP legacy. Connect, play, and grow."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "10k+",
          title: "Members",
          description: "Global Discord community",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072177.jpg",
        },
        {
          id: "m2",
          value: "50+",
          title: "Tournaments",
          description: "Hosted successfully",
          imageSrc: "http://img.b2bpic.net/free-photo/lamp-design-with-fantasy-style_23-2151101661.jpg",
        },
        {
          id: "m3",
          value: "24/7",
          title: "Support",
          description: "Always ready to help",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-triangle_23-2151294146.jpg",
        },
      ]}
      title="Our Reach"
      description="Growing faster than ever."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah",
          handle: "@gamer",
          testimonial: "Best community I have joined!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-young-handsome-guy-wearing-black-t-shirt-with-headphones-playing-phone-isolated-blue-background_141793-105239.jpg",
        },
        {
          id: "2",
          name: "Mike",
          handle: "@peakzz",
          testimonial: "Incredible tournaments and support.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-young-model-listening-music_23-2151884522.jpg",
        },
        {
          id: "3",
          name: "Alex",
          handle: "@xqp",
          testimonial: "Real growth and fun atmosphere.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-viewer-changing-channels-television-set-with-remote-control_482257-92306.jpg",
        },
        {
          id: "4",
          name: "Jamie",
          handle: "@pro",
          testimonial: "Very professional and friendly.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/content-creator-playing-online-multiplayer-videogame-gaming-pc_482257-91829.jpg",
        },
        {
          id: "5",
          name: "Chris",
          handle: "@clan",
          testimonial: "Awesome daily content.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-african-american-basketball-player-sportswear-isolated-dark-background_613910-19475.jpg",
        },
      ]}
      showRating={true}
      title="Community Voices"
      description="What our members say."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Discord",
        "Twitch",
        "YouTube",
        "TikTok",
        "Steam",
        "PlayStation",
        "Xbox",
      ]}
      title="Trusted Partners"
      description="We partner with leaders in esports."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How to join?",
          content: "Join our Discord server.",
        },
        {
          id: "q2",
          title: "Are tournaments open?",
          content: "Yes, we host them regularly.",
        },
        {
          id: "q3",
          title: "Contact?",
          content: "Email naidooqirauhn@gmail.com",
        },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get In Touch"
      title="Contact Us"
      description="Have questions or want to partner? Get in touch."
      imageSrc="http://img.b2bpic.net/free-photo/couple-taking-photos-light-movie-projector_23-2149377315.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="XQP Esports"
      columns={[
        {
          title: "Socials",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Kn4dXsBNA",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@peakzz-v3",
            },
            {
              label: "TikTok",
              href: "https://www.tiktok.com/@xqpclan",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:naidooqirauhn@gmail.com",
            },
            {
              label: "Phone",
              href: "tel:0646445680",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
