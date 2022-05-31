import { React, useState } from 'react'
import Navbar from '../Navbar/index'
import { HeroContainer, HeroContent, HeroItems, HeroHead, HeroPara, HeroBtn } from '../Hero/HeroElemnt'
import SideBar from '../SideBar'


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeroContainer>
      <  Navbar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <HeroContent>
        <HeroItems>
          <HeroHead>Great food Ever. </HeroHead>
          <HeroPara>
            Ready in 30 minutes.
          </HeroPara>
          <HeroBtn>
            Place Order.
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero