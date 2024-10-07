import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Icon } from "@iconify/react";

const Hero: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx {
        frontmatter {
          title
          authors
          institution
          pdfLink
          arxivLink
          videoLink
          sourceCodeLink
          dataLink
        }
      }
    }
  `);

  const {
    title,
    authors,
    institution,
    pdfLink,
    arxivLink,
    videoLink,
    sourceCodeLink,
    dataLink,
  } = data.mdx.frontmatter;

  return (
    <div className="hero-body">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column has-text-centered">
            <h1 className="title is-1 publication-title">{title}</h1>
            <AuthorList authors={authors} institution={institution} />
            <div className="publication-links">
              {pdfLink && (
                <LinkButton
                  href={pdfLink}
                  icon="fa-solid:file-pdf"
                  label="Paper"
                />
              )}
              {arxivLink && (
                <LinkButton
                  href={arxivLink}
                  icon="academicons:arxiv"
                  label="arXiv"
                />
              )}
              {videoLink && (
                <LinkButton href={videoLink} icon="bi:youtube" label="Video" />
              )}
              {sourceCodeLink && (
                <LinkButton
                  href={sourceCodeLink}
                  icon="fa-brands:github"
                  label="Source Code"
                />
              )}
              {dataLink && (
                <LinkButton
                  href={dataLink}
                  icon="fa-solid:database"
                  label="Data"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AuthorListProps {
  authors: [string, string | null][];
  institution: string;
}

const AuthorList: React.FC<AuthorListProps> = ({ authors, institution }) => (
  <>
    <div className="is-size-5 publication-authors">
      {authors.map(([name, link], index) => (
        <span className="author-block" key={index}>
          {link ? <a href={link}>{name}</a> : name}
          {index < authors.length - 1 && ", "}
        </span>
      ))}
    </div>
    <div className="is-size-5 publication-authors">
      <span className="author-block">{institution}</span>
    </div>
  </>
);

interface LinkButtonProps {
  href: string;
  icon: string;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, icon, label }) => (
  <a href={href} className="external-link button is-normal is-rounded is-dark">
    <span className="icon">
      <Icon icon={icon} />
    </span>
    <span>{label}</span>
  </a>
);

export default Hero;
