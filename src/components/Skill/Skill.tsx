import React, { FC } from 'react';

interface SkillProps {
  imgSrc: string;
  text: string;
}

const Skill: FC<SkillProps> = ({ imgSrc, text }) => {
  return (
    <li>
      <img src={process.env.PUBLIC_URL + imgSrc} alt={imgSrc} />
      {text}
    </li>
  );
};

export default Skill;
