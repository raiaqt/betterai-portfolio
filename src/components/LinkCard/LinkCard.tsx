import React from "react";
import GithubSvg from "../../assets/icons/GithubSvg";
import LinkSvg from "../../assets/icons/LinkSvg";
import "./LinkCard.scss";

interface LinkCardProps {
  card: {
    title: string;
    text: string;
    link: string;
    year: string;
    github: boolean;
    image?: string;
  };
}

const LinkCard: React.FC<LinkCardProps> = ({ card }) => {
  return (
    <a className="link-card" href={card.link} target="_blank">
      <div className="link-card-image">
        <img src={`${import.meta.env.VITE_PUBLIC_URL}/images/${card.image || "placeholder.png"}`} />
      </div>
      <div className="link-card-content">
        <div className="link-card-text">
          <span className="item-title">{card.title}</span>
          <span className="item-text">
            {card.text}
            {card.title === "Kattis submissions" ? (
              <a href="https://open.kattis.com/" target="_blank">
                Kattis
              </a>
            ) : null}
            {card.title === "OnlineJudge submissions" ? (
              <a href="https://onlinejudge.org/" target="_blank">
                OnlineJudge
              </a>
            ) : null}
          </span>
          <span className="item-text muted-text">Created {card.year}</span>
        </div>
        <div className="link-card-icon">
          {card.github ? <GithubSvg /> : <LinkSvg />}
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
