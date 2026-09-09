function Skills() {
  return (
    <div className="contentSection">
      <div className="sectionTitle mb-12">Skills</div>
      <div className="row">
        <div className="col-4">
          <h6><strong>Languages</strong></h6>
          <ul className="skillsList">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
        <div className="col-4">
          <h6><strong>Frontend</strong></h6>
          <ul className="skillsList">
            <li>React.js</li>
            <li>React Native (basic)</li>
            <li>Responsive Web Development</li>
            <li>WebView</li>
            <li>REST API Integration</li>
            <li>GraphQL Integration</li>
            <li>Testing (Jest)</li>
          </ul>
        </div>
        <div className="col-4">
          <h6><strong>Design & Workflow</strong></h6>
          <ul className="skillsList">
            <li>Figma</li>
            <li>Zeplin</li>
            <li>Git</li>
            <li>Jira & Trello</li>
            <li>Google Tag Manager</li>
            <li>New Relic</li>
            <li>Datadog</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;