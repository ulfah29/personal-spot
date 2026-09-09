import './styles.css';

function Sidebar() {
  return (
    <div className='sidebarSection'>
      <div className='ownerInfo'>
        <div className='avatar'>
          <img src="https://instagram.fcgk9-2.fna.fbcdn.net/v/t51.82787-15/764089466_18614585458029291_3334156684996304606_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzk1NjAzNjQ4NDc1ODY2Nzg5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=I_r2H1sgEMsQ7kNvwEgAoSW&_nc_oc=AdqtPH9JBwI8JPwtxnyB9d6qeWOAoJLe2ag2_kvpLRBVu_xmdHmUS4EkdqUBF7hvYp4&_nc_ad=z-m&_nc_cid=1225&_nc_zt=23&_nc_ht=instagram.fcgk9-2.fna&_nc_gid=r1jAVtr5VdDoyOQGAx_cjw&_nc_ss=7a22e&oh=00_AQIEjrQFxlmc9J6EsN8I9pDtYHXyxtG-CBqWzn9g4xPSqA&oe=6AA5D6E2" alt="Ulfah Asmaniah" />
        </div>
        <div>
          <h2>Ulfah Asmaniah</h2>
          <div>Senior Web Developer - Frontend Engineer</div>
        </div>
      </div>

      <ul className='sectionLists'>
        <li>Intro</li>
        <li>About</li>
        <li>Experience ⭐</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Sidebar;