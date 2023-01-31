import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { client, urlFor } from "../../client";

import "./Skills.scss";
import Container from "../Container/Container";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const experiencesQuery = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(experiencesQuery).then((data) => setExperience(data));
    client.fetch(skillsQuery).then((data) => setSkills(data));
  }, []);

  return (
    <div className='app__skills-container'>
      <motion.div className='app__skills-list'>
        {skills?.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
            key={skill.name}>
            <div
              className='app__flex'
              style={{ backgroundColor: skill.bgColor }}>
              <img
                src={urlFor(skill.icon)}
                alt={skill.name}
              />
            </div>
            <p className='p-text'>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className='app__skills-exp'>
        {experience?.map((exp) => (
          <motion.div
            className='app__skills-exp-item'
            key={`year_${exp.year}`}>
            <div className='app__skills-exp-year'>
              <p className='bolt-text'>{exp.year}</p>
            </div>

            <motion.div className='app__skills-exp-works'>
              {exp.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-exp-work'
                    data-tooltip-content={work.name}
                    id={work.name}
                    key={work.name}>
                    <h4 className='bolt-text'>{work.name}</h4>
                    <p className='p-text'>{work.company}</p>
                  </motion.div>

                  <ReactTooltip
                    anchorId={work.name}
                    className='skills-tooltip'
                    place='left'>
                    {work.desc}
                  </ReactTooltip>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
const SkillsHeader = <h2 className='head-text'>Skills & Experience</h2>;
export default Container(Skills, "app__whitebg", "skills", SkillsHeader);
