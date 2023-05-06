import React from 'react'
import { useMediaQuery } from '@/functions/useMediaQuery'
import SideNavDesktop from './SideNavDesktop'
import SideNavMobile from './SideNavMobile'

const SideNav = () => {
  const isMWeb = useMediaQuery('(max-width: 767px)');
  if(isMWeb===true)
  {
    return<SideNavMobile />
  }
    return<SideNavDesktop/>
  
}

export default SideNav