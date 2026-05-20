import React from "react";
import { useParams } from "react-router-dom";
import Contact from "./Contact";
import AnimatedText from "./AnimatedText";
import { FaReact } from "react-icons/fa";
import { SiShopify, SiSanity, SiAlgolia, SiFigma, SiNextdotjs, SiFirebase, SiSwift, SiKotlin, SiAndroid, SiOpenai, SiStripe, SiApple, SiMongodb, SiNodedotjs, SiCss3, SiHtml5, SiJavascript } from "react-icons/si";
import "./ProjectDetails.css";
import image1 from "../assets/mockup-1.png";
import image2 from "../assets/common-life.png";
import commonLife from "../assets/common-life.png";
import commonLife2 from "../assets/common-life2.png";
import commonLife3 from "../assets/common-life3.png";
import commonLifeRBG from "../assets/common-life-removebg.png";
import before_after from "../assets/before-after.png";
import txlcHeader from "/tx-laser-combat/txlc-header.png";
import txlc1 from "/tx-laser-combat/txlc-1.png";
import txlc2 from "/tx-laser-combat/txlc-2.png";
import mmi from "/mmi/mmi-header.png";
import mmi1 from "/mmi/mmi-1.png";
import m2m1 from "/m2m/m2m-1.png";
import m2m2 from "/m2m/m2m-2.png";

const projectData = [
  {
    id: 1,
    title: "Spend a Year With Jesus",
    description: [
      "Spend a Year With Jesus is a native mobile app that showcases a walk-along journey through Jesus’s life before crucifixion. This was an end-to-end process for our client with development, design, and product management involvement.",
      "The clients mission is to connect people with Jesus’s experience to enhance their relationship with him, and in doing so affirm and strengthen experiences which build healthy relationships among all people of the world.",
    ],
    image: image1,
    image2: before_after,
    strategy:
      "Example product strategy for Project 1.This is a placeholder project description for Project 2.This is a placeholder project description for Project 2.This is a placeholder project description for Project 2.This is a placeholder project description for Project 2.",
    design:
      "The client had a website which provided some guardrails and inspiration for the visual theme of the project. Multiple iterations were supplied for feedback from the client and we landed on a simplistic design that draws inspiration from the desert in and around the time and place of the events documented in Jesus’s life.",
    testimonial: {
      quote:
        "Before hiring these developers, our website was held together with duct tape and good intentions. Now it’s so smooth, even our intern can’t break it (and trust me, they’ve tried). Highly recommend!",
      author: "Author",
      position: "CEO, Example Corp",
    },
    services: [
      "Discovery",
      "Strategy",
      "Product Mangement",
      "iOS Development",
      "Android Development",
      "UI/UX Design",
      "CI/CD Pipeline",
      "Notifications"
    ],
    tools: [
      "Figma",
      "MongoDB",
      "React",
      "Node.js",
    ],
  },
  {
    id: 2,
    title: "Common Life",
    description: [
      "A Bible companion app that leverages a custom ChatGPT model and Artificial Intelligence to provide seminary-level resources in an accessible format for everyday believers. Designed to assist users in deepening their understanding of Scripture, the app offers AI-driven sermon preparation, theological insights, and guided devotionals.",
      "Whether for pastors, small group leaders, or individuals seeking structured study tools, this platform makes advanced biblical knowledge more approachable and interactive through modern technology.",
    ],
    image: commonLifeRBG,
    image2: commonLife2,
    image3: commonLife3,
    story: [
      "I was raised in a Christian home. My parents put me and my siblings into a private Christian school that was also our church. We had Bible class, we sang Bible songs, and growing up I spent just about every day of the week inside our church building. While I appreciate the strong foundation and lived examples of faith I received, my personal spiritual practice eventually took a backseat. That changed dramatically, however, with the arrival of my kiddo during the pandemic.",
      "Becoming a parent made me see that while faith was firm in my heart, I wasn't actively living for God. I needed to start showing my child a lived example of Christ like my parents did for me. My wife and I were blessed to quickly discover a supportive church family where we could share life's experiences and learn together. But life is busy, so I still found there were many times I was trying to go deeper into the Word on my own.",
      "My career has put me in the same space as AI, which eventually lead to an idea of learning the Bible using AI to help me piece things together I might not have otherwise. I was connected with Adonai Innovations through our church family, and we began a dialogue about how technology can help us learn more about the Word. After a lot of prayers and a few meetings, we concluded that our mutual desire for Kingdom work aligned well with each other, and initial work began on what is now CommonLife.",
      "I believe that God is moving mountains throughout the world right now. For the first time in history, we have the tools and technology to access, learn, and share the Word anytime and anywhere. Through CommonLife, I hope to empower others to deepen their understanding of Scripture and inspire them to be an example of Christ for all generations to see.",
    ],
    testimonial: {
      quote:
        "Before hiring these developers, our website was held together with duct tape and good intentions. Now it’s so smooth, even our intern can’t break it (and trust me, they’ve tried). Highly recommend!",
      author: "Jane Doe",
      position: "CTO, Example Corp",
    },
    // services: [
    //   "Discovery",
    //   "Strategy",
    //   "Market analysis",
    //   "Front-end engineering",
    //   "UI/UX Design",
    //   "Product management",
    //   "Delivery management",
    // ],
    tools: [
      "Figma",
      "Firebase",
      "Swift",
      "SwiftUI",
      "Firebase Analytics",
      "Open AI",
      "RevenueCat",
      "Apple Search Ads",
    ],
  },
  {
    id: 3,
    title: "TX Laser Combat",
    description: [
      "Texas Laser Combat needed a digital experience that matched the energy of its in-person brand while also supporting day-to-day operations. We partnered with their team to design and build a custom website that better presents the business, highlights the experience, and gives customers a clearer view of what makes the venue unique. The public-facing site positions Texas Laser Combat as a high-adrenaline tactical laser tag destination in Plano, emphasizing immersive gameplay, modern equipment, and group experiences.",
      "Beyond the website, we also built an internal employee app tailored to their operational needs. The app was created to help staff run safety briefings more consistently and provide a simple way to showcase laser tag weapons and equipment during onboarding and guest preparation. Together, the website and employee tool gave Texas Laser Combat a more cohesive digital presence across both customer experience and internal operations.",
    ],
    image: txlcHeader,
    image2: txlc1,
    image3: txlc2,
    story: [
      "The product design work started with creating a clear brand foundation for the business. We developed a brand guide that defined the company’s visual identity, including logo usage, color direction, and the core design elements needed to create a more cohesive and recognizable experience across digital touch points.",
      "From there, we designed mockups for the full website experience in Figma, mapping out each page and reviewing the designs closely with the client before development began. This helped ensure alignment early in the process and gave the team confidence that the final product would reflect their vision. In addition to the website, we also designed a native iOS employee app to support internal operations, including safety brief workflows and equipment education for staff. The result was a connected design system spanning both the customer-facing brand and the internal tools used to run the business."
    ],
    testimonial: {
      quote:
        "In progress",
      author: "Person",
      position: "CTO, TX Laser Combat",
    },
    services: [
      "Branding",
      "Design",
      "UX/UI",
      "Front-end Engineering",
      "Web Development"
    ],
    tools: [
      "Figma",
      "MongoDB",
      "React",
      "Node.js",
    ],
  },
  {
    id: 4,
    title: "MMI Building Services",
    description: [
      "MMI Building Services needed a modern digital presence that could introduce the company clearly, communicate its range of services, and position the brand as a dependable construction partner across the Dallas/Fort Worth area. We partnered with their team to design and build a clean, professional website that presents MMI as a solutions-driven building services company focused on quality, communication, and long-term results. The site gives potential clients a simple way to understand who MMI is, what they offer, and how to start a project.",
      "The website highlights MMI’s core service areas, including insurance restoration, home services, multifamily work, and commercial construction. It also establishes the company’s brand foundation through dedicated sections for their mission, values, background, and contact flow. The final experience gives MMI Building Services a polished public-facing platform that reflects their small-business accountability, construction expertise, and commitment to serving clients throughout the DFW Metroplex.",
    ],
    image: mmi,
    image2: mmi1,
    story: [
      "The product design work started with creating a clear brand foundation for the business. We developed a brand guide that defined the company’s visual identity, including logo usage, color direction, and the core design elements needed to create a more cohesive and recognizable experience across digital touch points.",
      "From there, we designed mockups for the full website experience in Figma, mapping out each page and reviewing the designs closely with the client before development began. This helped ensure alignment early in the process and gave the team confidence that the final product would reflect their vision. In addition to the website, we also designed a native iOS employee app to support internal operations, including safety brief workflows and equipment education for staff. The result was a connected design system spanning both the customer-facing brand and the internal tools used to run the business."
    ],
    testimonial: {
      quote:
        `Working with this team to build our website was an outstanding experience from start to finish. Their professionalism was evident in every interaction—they were organized, responsive, and truly took pride in delivering high-quality work.
        <br /> <br /> What stood out the most was their clear and consistent communication. We were kept informed throughout the entire process, with timelines, updates, and expectations always clearly outlined. Any questions or changes we had were handled quickly and thoroughly, which made the entire project feel seamless and stress-free.
        <br /> <br />Most importantly, they didn’t take a one-size-fits-all approach. They took the time to understand our business, our goals, and our vision, and delivered a custom-built solution that fit our needs perfectly. The final product not only looks great but functions exactly how we envisioned.
        <br /> <br />We couldn’t be happier with the result and would highly recommend them to anyone looking for a team that combines professionalism, transparency, and truly tailored solutions.`,
      // author: "Person",
      position: "CEO, MMI Building Services",
    },
    services: [
      "Prototyping",
      "Web Development"
    ],
    tools: [
      "React",
      "CSS",
      "HTML",
      "Javascript",
      "Node.js"
    ],
  },
  {
    id: 5,
    title: "Made 2 Move Sports Medicine Website",
    description: [
      "Made2Move Sports Medicine & Physical Therapy needed a digital presence that reflected both the credibility of its care and the flexibility of its service model. Serving the Dallas–Fort Worth area, the practice offers physical therapy, sports medicine, rehabilitation, performance support, and concierge care, so the website needed to clearly communicate a broader and more modern experience than a traditional clinic. We partnered with their team to design and build a custom website that introduces the business clearly, builds trust quickly, and helps potential clients understand the full scope of services.",
      "The final website positions Made 2 Move as a professional, performance-focused brand while making it easier for visitors to learn about the practice, explore services, and take the next step. Through a clean structure, strong service organization, and a more polished visual presence, the site gives Made 2 Move a stronger public-facing platform that better reflects its expertise, personalized approach, and commitment to helping clients recover, move well, and perform at a high level.",
    ],
    image: m2m1,
    image2: m2m2,
    story: [
      "The product design work started with creating a clear brand foundation for the business. We developed a brand guide that defined the company’s visual identity, including logo usage, color direction, and the core design elements needed to create a more cohesive and recognizable experience across digital touch points.",
      "From there, we designed mockups for the full website experience in Figma, mapping out each page and reviewing the designs closely with the client before development began. This helped ensure alignment early in the process and gave the team confidence that the final product would reflect their vision. In addition to the website, we also designed a native iOS employee app to support internal operations, including safety brief workflows and equipment education for staff. The result was a connected design system spanning both the customer-facing brand and the internal tools used to run the business."
    ],
    testimonial: {
      quote:
        `Working with Adonai Innovations on my website was an outstanding experience from start to finish. They brought a high level of professionalism, clear communication, and a creative vision to the entire project. They took the time to truly understand our goals and translated them into a design that exceeded my expectations. Their attention to detail and ability to balance aesthetics with a focus on user experience really set them apart. Not only are they incredibly talented, but they were also reliable, responsive, and easy to collaborate with. The entire process was smooth and stress-free.
        <br /> <br />I would absolutely recommend them to anyone looking for top-tier web design work. Their expertise and dedication made a real difference in bringing the Made2Move website to life.`,
      position: "CEO, M2M Sports Medicine",
    },
    services: [
      "Front End Web Development",
    ],
    tools: [
      "React",
      "CSS",
      "HTML",
      "Javascript",
      "Node.js",
      "Figma"
    ],
  }
];

// Helper function for dynamic tool icons
const getToolIcon = (tool) => {
  switch (tool) {
    case "React":
      return <FaReact size={50} color="#61DAFB" />;
    case "Shopify":
      return <SiShopify size={50} color="#95BF47" />;
    case "Sanity":
      return <SiSanity size={50} color="#F03E2F" />;
    case "Algolia":
      return <SiAlgolia size={50} color="#5468FF" />;
    case "Figma":
      return <SiFigma size={50} color="#F24E1E" />;
    case "Next.js":
      return <SiNextdotjs size={50} color="#000000" />;
    case "Firebase":
      return <SiFirebase size={50} color="#FFCA28" />;
    case "Swift":
    case "SwiftUI": // Same icon for both
      return <SiSwift size={50} color="#FA7343" />;
    case "Kotlin":
      return <SiKotlin size={50} color="#0095D5" />;
    case "Jetpack Compose":
      return <SiAndroid size={50} color="#3DDC84" />;

    case "Firebase Analytics":
      return <SiFirebase size={50} color="#FFCA28" />;
    case "Open AI":
      return <SiOpenai size={50} color="#000" />;
    case "RevenueCat":
      return <SiStripe size={50} color="#6772E5" />;
    case "Apple Search Ads":
      return <SiApple size={50} color="#A2AAAD" />;

    case "MongoDB":
      return <SiMongodb size={50} color="#47A248" />;
    case "Node.js":
      return <SiNodedotjs size={50} color="#339933" />;
    case "CSS":
      return <SiCss3 size={50} color="#1572B6" />;
    case "HTML":
      return <SiHtml5 size={50} color="#E34F26" />;
    case "Javascript":
      return <SiJavascript size={50} color="#F7DF1E" />;
    default:
      return null;
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find(
    (project) => project.id === parseInt(id, 10)
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details-page">
      {/* Hero Section */}
      <div className="project-hero-section" id="hero">
        <h1 className="project-hero-title">{project.title}</h1>
      </div>

      {/* Overview Section */}
      <div className={`project-overview-section ${(project.id === 3 || project.id === 4 || project.id === 5) ? "stacked-overview" : ""}`}>
        {(project.id === 3 || project.id === 4 || project.id === 5) ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="project-overview-images"
            />
            <div className="project-overview-description">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="project-overview-description">
              {project.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="project-overview-images"
            />
          </>
        )}
      </div>

      {/* Dynamic Services and Tools Section */}
      <div
        className={`project-services-tools ${!project.services || project.services.length === 0
          ? "center-tools"
          : ""
          }`}
      >
        {project.services && project.services.length > 0 && (
          <div className="project-services-section">
            <h3>Services</h3>
            <ul className="project-services-list">
              {project.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tools && project.tools.length > 0 && (
          <div className="tools-section">
            <h3>Tools</h3>
            <div className="tools-grid">
              {project.tools.map((tool, index) => (
                <div className="tool-item" key={index}>
                  {getToolIcon(tool)}
                  <p>{tool}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* New Middle Image Section */}
      {project.image2 && (
        <div>
          <img
            src={project.image2}
            alt="Additional visual for the project"
            className="project-other-images"
          />
        </div>
      )}

      {/* Our Story Section (Only for Project 2) */}
      {(project.id === 2 || project.id === 3) && project.story && (
        <div className="our-story-section">
          <div className="our-story-container">
            {(project.id !== 3 && project.id !== 4) && <h2 className="our-story-title">Our Story</h2>}
            <div className="our-story-description">
              {project.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Product Strategy Section
      {project.strategy && (
        <div className="product-strategy-section">
          <div className="product-strategy-container">
            <h2 className="product-strategy-title">Product Strategy</h2>
            <p className="product-strategy-description">{project.strategy}</p>
          </div>
        </div>
      )} */}

      {(project.id === 2 || project.id === 3) && project.image3 && (
        <div>
          <img
            src={project.image3}
            alt="Additional visual for the project"
            className="project-other-images"
          />
        </div>
      )}

      {/* Product Design Section */}
      {project.design && (
        <div className="product-design-section">
          <div className="product-design-container">
            <h2 className="product-design-title">Product Design</h2>
            <p className="product-design-description">{project.design}</p>
          </div>
        </div>
      )}

      {/* {project.image2 && (
        <div className="project-overview-section">
          <img
            src={project.image2}
            alt="Additional visual for the project"
            className="project-other-images"
          />
        </div>
      )} */}

      {/* Testimonial Section */}
      {(project.id === 4 || project.id === 5) && project.testimonial && (
        <div className="testimonial-section">
          <div className="testimonial-container">
            <h2 className="testimonial-title">Testimonial</h2>
            <div className="testimonial-description">
              <p className="testimonial-quote" dangerouslySetInnerHTML={{ __html: `"${project.testimonial.quote}"` }}></p>
              <div className="testimonial-author">
                <p className="author-name">{project.testimonial.author}</p>
                <p className="author-title">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <AnimatedText />
      <Contact />
    </div>
  );
};

export default ProjectDetails;
