import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Content = styled.div`
  margin: 0 24px;
  padding: 50px 0;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`

const heading = {
  text: "About / Contact"
}

const paragraphs = [
  "Third year undergraduate at the University of Salford, studying Computer and Video Games.",
  " A graphic artist specialising in marketing communications for games, who enjoys designing alternative art inspired by pop culture and making minimalistic illustrations with a creative method of reduction. Technically competent in 2D and 3D software. Passionate about progressing personal development.",
  "Fanatical about TV, film, music, games and sport. Enthusiastic about design.",
  "-------",
]

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const paragraphTags = paragraphs.map((p, i) =>
      <p key={i}>{p}</p>
    )

    return (
      <div>
        <Helmet title={`About | ${siteTitle}`} />
          <Content>
            <h3>{heading.text}</h3>
            {paragraphTags}
            <a href="mailto:bannan995@ymail.com?subject=Website%20Query">Email me</a>
          </Content>
      </div>
    )
  }
}

About.propTypes = {
  route: React.PropTypes.object,
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
