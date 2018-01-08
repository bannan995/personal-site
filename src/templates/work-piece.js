import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import styled from 'styled-components'

const WorkPiece = styled.div`
  padding: 50px 0;
  margin: 0 24px;
  display: block;
  min-height: 100vh;

  @media (min-width: 768px) {
    display: flex;
  }
`

const Content = styled.div`
  width: 50%;

  @media (max-width: 768px){
    width: 100%;
  }
`

const Description = styled.div`
  width: 75%;
`

const Images = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 75%;
  }
`

class WorkPieceTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const description = post.frontmatter.description
    let descriptions = description.split('<br>')
    let descriptionTags = []
    for(var i = 0; i < descriptions.length; i++) {
      descriptionTags.push(<p key={i}>{descriptions[i]}</p>)
    }

    return (
      <WorkPiece>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Content>
          <h3>{post.frontmatter.title}</h3>
          <Description>
            {descriptionTags}
          </Description>
        </Content>
        <Content>
          <Images dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
      </WorkPiece>
    )
  }
}

export default WorkPieceTemplate

export const pageQuery = graphql`
  query WorkPieceByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
