import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import sizeMe from 'react-sizeme'
import StackGrid from "react-stack-grid"

const WorkItem = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;
`

const WorkItemImg = styled(Img)`
  transition: all .2s ease-out;

  ${WorkItem}:hover & {
    opacity: .4;
  }
`

const WorkItemLink = styled(Link)`
  transition: all .2s ease-out;
`

const WorkItemName = styled.p`
  position: absolute;
  color: white;
  opacity: 0;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 10;

  & span {
    line-height: 2.5em;
  }

  ${WorkItem}:hover & {
    opacity: 1;
  }
`

class Work extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const work = get(this, 'props.data.allWorkJson.edges')
    const images = get(this, 'props.data.allImageSharp.edges')
    const { width, height } = this.props.size;

    let colWidth
    if (width <= 450) {
      colWidth = '100%'
    } else if (width <= 768) {
      colWidth = '50%'
    } else {
      colWidth = '25%'
    }

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <StackGrid columnWidth={colWidth} gutterWidth={0} gutterHeight={0}>
          {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = get(post, 'node.frontmatter.title') || post.node.path
            return (
              <div key={post.node.frontmatter.path}>
                <WorkItem>
                  <WorkItemLink to={post.node.frontmatter.path}>
                    <WorkItemImg sizes={post.node.frontmatter.image.childImageSharp.sizes} />
                    <WorkItemName>
                      {post.node.frontmatter.title}
                      <br /><span>&#8212; View &#8212;</span>
                    </WorkItemName>
                  </WorkItemLink>
                </WorkItem>
              </div>
            )
          }
        })}
      </StackGrid>
      </div>
    )
  }
}

Work.propTypes = {
  route: React.PropTypes.object,
}

// Create the config
const config = { monitorHeight: true }

// Call SizeMe with the config to get back the HOC.
const sizeMeHOC = sizeMe(config)

// Wrap your component with the HOC.
export default sizeMeHOC(Work)

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            image {
              childImageSharp {
                sizes (maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
