import { useState } from 'react';
import './styles.css';
import useIsMobile from '../../hooks/useIsMobile';
import MenuIcon from '../../assets/menu-icon.svg';
import CloseMenuIcon from '../../assets/close-menu-icon.svg';

const listMenu = [{
  name: 'Intro',
  content_id: 'intro',
}, {
  name: 'About',
  content_id: 'about',
}, {
  name: 'Experience ⭐',
  content_id: 'experience',
}, {
  name: 'Skills',
  content_id: 'skills',
}, {
  name: 'Project',
  content_id: 'project',
}, {
  name: 'Education',
  content_id: 'education',
}, {
  name: 'Contact',
  content_id: 'contact',
}];

function Sidebar() {
  const [currentActiveMenu, setCurrentActiveMenu] = useState(0);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (content_id: string) => {
    document.getElementById(content_id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  
  const handleClickMenu = (idx: number, content_id: string) => {
    if (idx !== currentActiveMenu) {
      setCurrentActiveMenu(idx);
      scrollToSection(content_id);
      setIsOpenMobileMenu(false);
    }
  }

  const handleOpenSideMenuMobile = () => {
    if (!isOpenMobileMenu) {
      setIsOpenMobileMenu(true);
      return;
    } 

    setIsOpenMobileMenu(false);
  }

  const renderListMenu = () => {
    return listMenu.map((items, idx) =>{
      return (
        <li 
          key={idx} 
          className={currentActiveMenu === idx ? 'active' : ''} 
          onClick={() => handleClickMenu(idx, items.content_id)} >
            {items.name}
        </li>
      );
    })
  }

  return (
    <>
      {isMobile ? (
        <div className='mobileHeaderWrapper'>
          <div className={`mobileSideMenu ${isOpenMobileMenu ? 'opened' : ''}`}>
            <div className='closeMenuButton' onClick={() => setIsOpenMobileMenu(false)}>
              <img src={CloseMenuIcon} alt='close' />
            </div>
            <ul className='sectionLists'>
              {renderListMenu()}
            </ul>
          </div>
          <div className='sideMenuMobile' onClick={handleOpenSideMenuMobile}>
            <img src={MenuIcon} alt='open menu' />
          </div>
          <div className='mobileProfile'>
            <div className='mobileAvatar'>
              <img src="https://instagram.fcgk42-1.fna.fbcdn.net/v/t51.82787-15/764089466_18614585458029291_3334156684996304606_n.heic?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=106&ig_cache_key=Mzk1NjAzNjQ4NDc1ODY2Nzg5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DtpozDO_aEUQ7kNvwHu-DHf&_nc_oc=AdoGwx9PafLuDkc0W9CFSuB4RzV4LTplgskkOh28SDQpUBIIrBiDIUlP_JT8yD0W4O9gX5nK_XpiN7aOxpebvAiX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk42-1.fna&_nc_gid=iU2cC8u8pBE78-1kQDqUag&_nc_ss=7a22e&oh=00_AQJu8jIs8FEU9r0P8tBlQsY407bC4q7gfiuTDr_1AbdCjA&oe=6AAED922" alt="Ulfah Asmaniah" />
            </div>
            <div>Ulfah Asmaniah</div>
          </div>
        </div>
      ) : (
        <div className='sidebarSection'>
          <div className='ownerInfo'>
            <div className='avatar'>
              <img src="https://instagram.fcgk42-1.fna.fbcdn.net/v/t51.82787-15/764089466_18614585458029291_3334156684996304606_n.heic?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=106&ig_cache_key=Mzk1NjAzNjQ4NDc1ODY2Nzg5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DtpozDO_aEUQ7kNvwHu-DHf&_nc_oc=AdoGwx9PafLuDkc0W9CFSuB4RzV4LTplgskkOh28SDQpUBIIrBiDIUlP_JT8yD0W4O9gX5nK_XpiN7aOxpebvAiX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fcgk42-1.fna&_nc_gid=iU2cC8u8pBE78-1kQDqUag&_nc_ss=7a22e&oh=00_AQJu8jIs8FEU9r0P8tBlQsY407bC4q7gfiuTDr_1AbdCjA&oe=6AAED922" alt="Ulfah Asmaniah" />
            </div>
            <div>
              <h2>Ulfah Asmaniah</h2>
              <div>Senior Web Developer - Frontend Engineer</div>
            </div>
          </div>

          <ul className='sectionLists'>
            {renderListMenu()}
          </ul>
        </div>
      )}
    </>
  )
}

export default Sidebar;