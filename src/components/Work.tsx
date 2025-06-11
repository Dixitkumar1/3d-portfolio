import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [projects, setProjects] = useState(
    Array(6).fill({
      name: "Project Name",
      category: "Category",
      tools: "Javascript, TypeScript, React, Threejs",
      isEditing: false, // For inline editing
    })
  );

  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const boxes = document.querySelectorAll(".work-box");
      if (!boxes.length) return;
      const rectLeft = document.querySelector(".work-container")!.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      let padding: number = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  const toggleEdit = (index: number) => {
    setProjects((prev) =>
      prev.map((proj, i) =>
        i === index ? { ...proj, isEditing: !proj.isEditing } : proj
      )
    );
  };

  const handleChange = (index: number, field: string, value: string) => {
    setProjects((prev) =>
      prev.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      )
    );
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    {project.isEditing ? (
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => handleChange(index, "name", e.target.value)}
                      />
                    ) : (
                      <h4>{project.name}</h4>
                    )}
                    {project.isEditing ? (
                      <input
                        type="text"
                        value={project.category}
                        onChange={(e) => handleChange(index, "category", e.target.value)}
                      />
                    ) : (
                      <p>{project.category}</p>
                    )}
                  </div>
                </div>
                <h4>Tools and features</h4>
                {project.isEditing ? (
                  <input
                    type="text"
                    value={project.tools}
                    onChange={(e) => handleChange(index, "tools", e.target.value)}
                  />
                ) : (
                  <p>{project.tools}</p>
                )}
                <button onClick={() => toggleEdit(index)}>
                  {project.isEditing ? "Save" : "Edit"}
                </button>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
