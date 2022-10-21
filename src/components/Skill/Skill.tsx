import React, { FC } from 'react';

import styles from './Skill.module.scss';

interface SkillData {
  id: number;
  imgSrc?: string;
  text: string;
}

interface SkillProps {
  skills: SkillData[];
}

const Skill: FC<SkillProps> = ({ skills }) => {
  return (
    <li>
      {skills.map((skill) => {
        return (
          <div key={skill.id} className={`skill ${styles.root}`}>
            {skill.imgSrc && (
              <i className={styles.icon}>
                <img src={process.env.PUBLIC_URL + skill.imgSrc} alt={skill.imgSrc} />
              </i>
            )}
            <span>{skill.text}</span>
          </div>
        );
      })}
    </li>
  );
};

export default Skill;
