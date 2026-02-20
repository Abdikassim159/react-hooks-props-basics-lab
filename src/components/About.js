import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <section id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <Links github={github} linkedin={linkedin} />
    </section>
  );
}

export default About;