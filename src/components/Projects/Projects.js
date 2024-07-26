import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import "./Projects.css"; // Import the CSS file

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="project-card">
            <div className="scrollable-card-container">
              <ProjectCard
                //imgPath={chatify}
                isBlog={false}
                title="Sales Connect"
                description="Project Overview: Developed a custom login page and custom data table within Salesforce environment to facilitate CRUD 
                            operations (Create, Read, Update, Delete) for leads and opportunities, mimicking standard Data-Table functionality. 
                            Implemented a Lightning Web Component (LWC) to handle user authentication and session management, ensuring 
                            seamless login experience and persistent sessions. Designed and created a custom record details page for leads and 
                            opportunities, offering comprehensive views and editing capabilities for lead and opportunity details, enhancing user 
                            interaction and data management efficiency. Developed a specialized Lightning Web Component (LWC) to streamline the 
                            lead conversion process, simplifying the conversion of leads into opportunities within the Salesforce platform."
                ghLink="https://github.com/officialaddyrana/Chatify"
                demoLink="https://chatify-49.web.app/"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="scrollable-card-container">
              <ProjectCard
               // imgPath={bitsOfCode}
                isBlog={false}
                title="Salesforce-You tube Integration"
                description="Project Overview: Developed a Lightning Web Component (LWC) within the Salesforce platform to seamlessly integrate with 
                            YouTube using API keys, providing a user-friendly interface for accessing YouTube data directly within Salesforce. Utilized HTML, 
                            CSS, and JavaScript to build the LWC, implementing responsive design principles and Salesforce's Lightning Design System (SLDS) 
                            for consistent and intuitive user experience. Integrated YouTube Data API calls within the LWC using JavaScript Fetch API or 
                            Salesforce's Apex HTTP classes, enabling retrieval of video metadata, analytics, and engagement metrics. Configured API keys 
                            securely within the LWC's JavaScript code or stored them in Salesforce Custom Metadata Types for centralized management and 
                            enhanced security. Implemented features such as searching for YouTube videos, displaying video thumbnails and titles, and 
                            retrieving video statistics within the LWC's user interface, providing users with real-time access to relevant YouTube content. 
                            Leveraged Salesforce's Lightning Message Service (LMS) or Custom Events for inter-component communication, allowing 
                            seamless integration of the YouTube LWC with other Salesforce components or applications. Ensured compliance with YouTube 
                            API usage policies and best practices, including adhering to API rate limits, handling authentication and authorization securely, 
                            and optimizing API calls for performance and efficiency. Conducted thorough testing of the LWC across different browsers and 
                            devices, addressing any compatibility issues and ensuring consistent functionality and performance. Documented the LWC's 
                            functionality, including API integration methods, usage instructions, and troubleshooting guidelines, for reference by 
                            administrators and developers. Provided training and support to users and stakeholders on utilizing the YouTube LWC within 
                            Salesforce, empowering them to leverage YouTube data effectively for their business needs."
                ghLink="https://github.com/officialaddyrana/Bits-0f-C0de"
                demoLink="https://officialaddyrana.tech/"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="scrollable-card-container">
              <ProjectCard
                //imgPath={editor}
                isBlog={false}
                title="Salesforce Chat GPT Integration"
                description="Project Overview: Developed a Lightning Web Component (LWC) within the Salesforce platform to seamlessly integrate with Chat 
                            GPT API, enabling intelligent conversational capabilities directly within Salesforce. Utilized HTML, CSS, and JavaScript to build the 
                            LWC, adhering to Salesforce's Lightning Design System (SLDS) guidelines for a cohesive user interface. Integrated Chat GPT API calls 
                            within the LWC's JavaScript code using JavaScript Fetch API or Salesforce's Apex HTTP classes, allowing for real-time generation of 
                            AI-powered responses based on user inputs. Configured API keys securely within the LWC, following best practices for 
                            authentication and authorization to ensure data privacy and security. Implemented features such as initiating conversations, 
                            receiving AI-generated responses, and handling user interactions within the LWC's interface, providing users with an intuitive and 
                            interactive chat experience. Leveraged Salesforce's event-driven architecture, such as Lightning Message Service (LMS) or Custom 
                            Events, for seamless communication between the Chat GPT LWC and other Salesforce components or applications. Adhered to 
                            Chat GPT API usage policies and guidelines, including rate limits and data usage restrictions, to ensure compliance and optimize 
                            performance. Conducted comprehensive testing of the Chat GPT LWC across various browsers and devices, ensuring compatibility 
                            and functionality across different environments. Documented the functionality of the Chat GPT LWC, including usage instructions, 
                            API integration methods, and troubleshooting guidelines, to facilitate its adoption and usage by administrators and developers. 
                            Provided training and support to users and stakeholders on leveraging the Chat GPT LWC within Salesforce, empowering them to 
                            utilize AI capabilities for improved productivity and customer engagement"
                ghLink="https://github.com/officialaddyrana/Editor.io"
                demoLink="https://officialaddyrana.tech/"              
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="scrollable-card-container">
              <ProjectCard
                //imgPath={leaf}
                isBlog={false}
                title="CloudFile(Salesforce SharePoint Integration)"
                description="Project Overview: The Salesforce-SharePoint Integration project aims to enhance document management by 
                            enabling users to upload files from Salesforce to SharePoint, delete files from Salesforce, and create or delete 
                            folders in SharePoint. This integration leverages APIs and middleware solutions to ensure seamless 
                            communication and secure data transfer between the platforms. By automating file and folder management 
                            tasks, the project enhances workflow efficiency, ensures organized and centralized document storage, and 
                            provides robust security measures. The integration will streamline processes, reduce manual effort, and 
                            improve collaboration, ultimately leading to better business outcomes and user satisfaction."
                ghLink="https://github.com/officialaddyrana/Plant_AI"
                demoLink="https://officialaddyrana/"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="scrollable-card-container">
              <ProjectCard
               // imgPath={suicide}
                isBlog={false}
                title="AGD"
                description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                ghLink="https://github.com/officialaddyrana/AI_For_Social_Good"
                demoLink="https://"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="scrollable-card-container">
              <ProjectCard
                //imgPath={emotion}
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
                Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                ghLink="https://github.com/officialaddyrana/Face_And_Emotion_Detection"
                demoLink="https://officialaddyrana.tech/" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
