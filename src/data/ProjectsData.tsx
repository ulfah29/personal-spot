const ProjectsData = [{
  title: 'GoPay Payment Integration',
  overview: "An end-to-end payment integration project that introduced GoPay as a payment method across Tokopedia's purchase experience. The project covered the GoPay dashboard, payment-method selection, and partialpayment flows involving multiple payment methods.",
  myrole: 'Senior Frontend Engineer',
  detailrole: 'Worked closely with Product and Design to build and integrate the frontend experience while ensuring the new payment flow worked consistently with Tokopedia’s existing payment methods and business rules.',
  jobdesk: 
    `<ul>
      <li>Built the frontend experience for the GoPay dashboard.</li>
      <li>Integrated GoPay into the payment-method selection experience.</li>
      <li>Implemented the frontend flow for using GoPay as a partial payment method alongside other payment methods.</li>
      <li>Integrated APIs and handled different payment states and UI conditions across the flow.</li>
      <li>Worked with existing payment-method logic and business rules to ensure the GoPay integration did not negatively affect other payment methods.</li>
      <li>Handled different combinations and edge cases resulting from the interaction between GoPay and other payment methods.</li>
      <li>Collaborated with Product and Design to translate complex payment requirements into clear and consistent user experiences.</li>
    </ul>`
  ,
  challenge:[
    'Adding a new payment method was more than simply adding another option to the payment page. Each existing payment method had its own rules, limitations, and behavior.',
    'The partial payment flow made this particularly challenging because GoPay needed to work together with other payment methods while preserving the rules of each individual method.',
    'The implementation therefore required careful consideration of how the new business logic interacted with the existing payment flow, while minimizing the risk of affecting existing payment experiences.',
  ],
  highlight: 'The project required working across multiple parts of the payment experience rather than treating GoPay as an isolated feature. I focused on keeping the new logic compatible with existing payment-method behavior, handling different payment states and combinations, and making sure the frontend accurately reflected the business rules behind each flow.',
  outcome: 'Successfully integrated GoPay into Tokopedia’s payment experience, including support for GoPay as both a standalone and partial payment method, while maintaining compatibility with the existing paymentmethod ecosystem.',
  tech: 'React · TypeScript · REST APIs · WebView · Payment Systems',
}, {
  title: 'Tokopedia Official Store',
  overview: "The Official Store initiative introduced a new experience on Tokopedia for official brand stores. At the time, Tokopedia did not yet have an Official Store feature, and our team was responsible for initiating the product and working toward its first launch. The project evolved beyond the initial customer-facing experience. As the Official Store ecosystem developed, we also worked on a CMS that allowed shop administrators to manage their store layout through a drag-and-drop interface.",
  myrole: 'Team Captain · Frontend Engineer',
  detailrole: 'I had a dual role in the project. Alongside contributing as a frontend engineer, I acted as the Team Captain for the team, helping coordinate frontend and UI/UX members, manage workload, and keep the team aligned throughout the project. I also worked with Product and other stakeholders involved in preparing stores for launch and later collaborated with the frontend team on the CMS experience for shop administrators.',
  jobdesk: 
  `<h5>Official Store Experience</h5>
  <ul>
    <li>Built the desktop version of the Official Store landing page.</li>
    <li>Translated UI/UX designs into the frontend experience.</li>
    <li>Worked with the team to ensure the implementation aligned with product requirements and launch needs.</li>
  </ul>
  <h5>Shop CMS</h5>
  <p>As the Official Store experience evolved, we developed a CMS that allowed shop administrators to manage their storefront layout without requiring frontend changes for every update.</p>
  <ul>
    <li>Collaborated with the frontend team to build the shop CMS experience.</li>
    <li>Worked on creating some content layout for shop admin to choose the shop layout by themshelf.</li>
    <li>Considered how the CMS configuration would translate into the customer-facing shop experience.</li>
  </ul>
  <h5>Team Coordination</h5>
  <ul>
    <li>Coordinated frontend and UI/UX team members throughout the project.</li>
    <li>Helped distribute and manage workloads based on project needs and team capacity.</li>
    <li>Followed up on progress and helped identify areas that needed attention to keep the project moving.</li>
    <li>Supported team members when they encountered implementation or coordination issues.</li>
  </ul>
  <h5>Stakeholder Collaboration</h5>
  <ul>
    <li>Participated in meetings with Product and other stakeholders involved in the Official Store launch.</li>
    <li>Communicated requirements and updates between the team and stakeholders.</li>
    <li>Worked with stakeholders representing stores that were preparing to launch on the platform.</li>
    <li>Helped ensure frontend work stayed aligned with changing requirements and launch needs.</li>
  </ul>
  `,
  challenge:[
    `This was one of the team's early initiatives to establish the Official Store experience on Tokopedia. Because the feature was new to the platform, the project involved building a new experience while coordinating the needs of multiple teams and stakeholders.`,
    'As the product evolved, another challenge emerged: official stores needed flexibility to manage their storefronts without depending on engineers for every layout change.',
    'This led to the development of a CMS with a drag-and-drop interface, creating a bridge between how a shop administrator configured their storefront and how customers would eventually see it.',
    'This combination gave me experience in balancing individual technical contribution with team coordination, stakeholder communication, and product ownership.',
  ],
  highlight: 'The project gave me an opportunity to take ownership beyond my individual frontend tasks. As Team Captain, I helped coordinate the frontend and UI/UX team, manage workload, communicate with stakeholders, and keep the project moving toward launch. I also remained hands-on with the product itself, contributing to both the customer-facing Official Store experience and the CMS that enabled shop administrators to manage their storefronts. This combination gave me experience in balancing individual technical contribution with team coordination, stakeholder communication, and product ownership.',
  outcome: `The team successfully worked toward the first launch of Tokopedia's Official Store experience and continued to expand the product with tools that allowed official stores to manage their own storefront layouts. The project gave me experience across multiple sides of product development: building the customer-facing experience, creating tools for internal or business users, coordinating a frontend/UI/UX team, and working with stakeholders throughout the product lifecycle.`,
  tech: 'React · JavaScript · HTML · CSS',
}];

export default ProjectsData;
