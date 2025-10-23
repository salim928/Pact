import Hero from '@/components/Hero'
import ValueBlocks from '@/components/ValueBlocks'
import FeaturedVentures from '@/components/FeaturedVentures'
import HowWeWork from '@/components/HowWeWork'
import TechStack from '@/components/TechStack'
import CaseStudyHighlight from '@/components/CaseStudyHighlight'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueBlocks />
      <FeaturedVentures />
      <HowWeWork />
      <TechStack />
      <CaseStudyHighlight />
      <Testimonials />
      <Newsletter />
    </>
  )
}