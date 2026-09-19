import React from 'react'
import { Hero } from '@/components/Home/Hero'
import { About } from '@/components/Home/About'
import { FeaturedProperties } from '@/components/Home/FeaturedProperties'
import { WhyLandmark } from '@/components/Home/WhyLandmark'
import { ProcessSection } from '@/components/Home/ProcessSection'
import { InsightsSection } from '@/components/Home/InsightSection'

const page = () => {
  return (
    <div>
     <Hero/> 
     <About/>
     <FeaturedProperties/>
     <WhyLandmark/>
     <ProcessSection/>
     <InsightsSection/>
    </div>
  )
}

export default page
