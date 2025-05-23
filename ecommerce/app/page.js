import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Offerings from "@/components/home/Categories";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import FeaturedTestimonial from "@/components/home/FeaturedTestimonial";
import TrustBadges from "@/components/home/TrustBadges";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Features />
        <Offerings />
        <FeaturedTestimonial />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
