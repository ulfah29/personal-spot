import { useState } from 'react';
import './styles.css';
import useIsMobile from '../../hooks/useIsMobile';
import MenuIcon from '../../assets/menu-icon.svg';
import CloseMenuIcon from '../../assets/close-menu-icon.svg';
import ProfilePicture from '../../assets/profile-picture.jpeg';
import { useParams } from 'react-router-dom';

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
}, 
{
  name: 'Project',
  content_id: 'project',
}, 
{
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
  const params = useParams();

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
          
          {!params.projectId && (
          <div className='sideMenuMobile' onClick={handleOpenSideMenuMobile}>
            <img src={MenuIcon} alt='open menu' />
          </div>
          )}
          <div className='mobileProfile'>
            <div className='mobileAvatar'>
              <img src={ProfilePicture} alt="Ulfah Asmaniah" />
            </div>
            <div>Ulfah Asmaniah</div>
          </div>
        </div>
      ) : (
        <div className='sidebarSection'>
          <div className='ownerInfo'>
            <div className='avatar'>
              <img src={ProfilePicture} alt="Ulfah Asmaniah" />
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