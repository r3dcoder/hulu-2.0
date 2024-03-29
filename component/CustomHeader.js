import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

import Image from "next/image";
import HeaderItem from './HeadeItems'
function Header() {
  return (
    <header className="flex  flex-col sm:flex-row m-5  justify-between items-center h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title='Home' Icon={HomeIcon}/>
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
          <HeaderItem title='VERIFIEID' Icon={BadgeCheckIcon}/>
          <HeaderItem title='COLEECTIONS' Icon={CollectionIcon}/>
          <HeaderItem title='SEARCH' Icon={SearchIcon}/>
          <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
       
      </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
      
    </header>
  );
}

export default Header;
