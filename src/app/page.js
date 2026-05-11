import AboutSection from "@/components/shared/About"
import Banner from "@/components/shared/Banner"
import ServicesSection from "@/components/shared/Service"


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner />
      <AboutSection />
      <ServicesSection/>
    </div>
  )
}

export default Home