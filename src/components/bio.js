/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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
      style={{
        display: `flex`,
        padding: 15,
        // backgroundColor: "#fff",
        backgroundColor: "#040404",
        color: "#fff",
        width: "100%",
        borderRadius: 10,
        boxShadow: "0px 1px 3px rgba(0,0,0,.08)",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: 15,
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <div style={{width: "100%", fontSize: 21, lineHeight: 1.6}}>
          Hi 👋 I'm <span style={{backgroundColor: "rgb(190, 36, 234)", padding: "2px 6px"}}>David Shekunts</span> and I train cyber-warriors how to build <span style={{backgroundColor: "rgb(190, 36, 234)", padding: "2px 6px"}}>
            Modern Full-stack Applications
          </span>
        </div>
      </div>
    </div>
  )
}

export default Bio
