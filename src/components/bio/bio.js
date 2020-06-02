/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./style.scss"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
            tags
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      className={"bio"}
    >
      <Image
        className={"bio--img"}
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <div className={"bio--content"}>
          Hi 👋 I'm <span style={{backgroundColor: "rgb(190, 36, 234)", padding: "2px 6px"}}>David Shekunts</span> and I train cyber-warriors how to build <span style={{backgroundColor: "rgb(190, 36, 234)", padding: "2px 6px"}}>
            Modern Full-stack Applications
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bio
