import './styles.css';
import ProjectDetailData from '../../data/ProjectsData';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import useIsMobile from '../../hooks/useIsMobile';

function ProjectDetailPage() {
  const params = useParams();
  const projectId = params?.projectId || 0;
  const content = ProjectDetailData[Number(projectId)];

  const isMobile = useIsMobile();

  const renderChallenges = () => {
    return content?.challenge?.map((item, idx) => {
      return <p key={idx}>{item}</p>
    })
  }

  return (
    <div className='container projectDetailContainer'>
      {isMobile && <Sidebar />}
      <div className='breadcrumb'>
        <span><Link to={`/`}>Home</Link></span>
        <span className='separator'>&gt;</span>
        <span>{content.title}</span>
      </div>

      <div className='detailContentWrapper'>
        <h1>{content.title}</h1>

        <div className='contentSeparator'>
          <h4>Overview</h4>
          <p>{content.overview}</p>
        </div>

        <div className='contentSeparator'>
          <h4>My Role</h4>
          <h6>{content.myrole}</h6>
          <p>{content.detailrole}</p>
        </div>

        <div className='contentSeparator'>
          <h4>What I Worked On</h4>
          <div
            dangerouslySetInnerHTML={{ __html: content.jobdesk }}
          />
        </div>

        <div className='contentSeparator'>
          <h4>The Challenges</h4>
          <div>{renderChallenges()}</div>
        </div>

        <div className='contentSeparator'>
          <h4>Engineering Focus</h4>
          <p>{content.highlight}</p>
        </div>

        <div className='contentSeparator'>
          <h4>Outcome</h4>
          <p>{content.outcome}</p>
        </div>

        <div className='contentSeparator'>
          <h4>Tech</h4>
          <p>{content.tech}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage;

//next phase
//need to create empty state if project id doesnt match