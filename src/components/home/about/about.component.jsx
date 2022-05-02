import './about.styles.scss'

const About = () => {
  return (
    <div className="about-container">
      <div className="blurb-wrapper-left icon-left" style={{ paddingTop: 50 }}>
        <h2 className="lead" style={{ padding: 0 }}>
          Welcome to Careers Exposed
        </h2>
        &nbsp;
        <h4>
          <strong>
            A pipeline of information, we are in the business of exposing careers.
            <span className="text-secondary">#itispossible</span>
          </strong>
        </h4>
        <div className="blurb-info">
          <p>
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix class. We're adding quite a few meaningless phrases
            here to demonstrate how the columns interact here with the floated
            image.
            <br />
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>
          <p>
            And yet, here you are, still persevering in reading this placeholder
            text, hoping for some more insights, or some hidden easter egg of
            content. A joke, perhaps. Unfortunately, there's none of that here.
          </p>
          <a
            id="subscribe-button"
            type="button"
            href="https://www.youtube.com/channel/UC9XNxhaX1yo2vNbWbEll0Yw?sub_confirmation=1"
            target="_blank" rel="noreferrer"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="icon-right">
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/Jb255q5IVA0"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          rel="noreferrer"
        />
      </div>
    </div>
  )
}

export default About