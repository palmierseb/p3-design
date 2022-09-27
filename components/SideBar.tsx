import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'

function SideBar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
     <SidebarRow Icon={BellIcon} title="Bell" /> 
     <SidebarRow Icon={HashtagIcon} title="Hashtag" /> 
     <SidebarRow Icon={BookmarkIcon} title="Bookmarkl" /> 
     <SidebarRow Icon={CollectionIcon} title="Bell" /> 


 
    </div>
  )
}

export default SideBar