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
      avatar: file(absolutePath: { regex: "/main_1000.png/" }) {
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
        backgroundColor: "#000",
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
        <div style={{width: "100%", fontSize: 19, lineHeight: 1.7}}>
          Hi 👋 I'm <b>David Shekunts</b> and I'm training Full-stack TypeScript soldiers who understand how to create IT products.
          {/*<div style={{height: 15}}/>*/}
          {/*<div style={{display: "flex", flexWrap: "wrap", fontSize: "12px"}}>*/}
          {/*  {*/}
          {/*    author.tags.map(tag => {*/}
          {/*      return <span key={tag} style={{padding: "7px 7px", marginRight: 5, marginBottom: 5, backgroundColor: "#de14a9", borderRadius: 5}}>{ tag }</span>*/}
          {/*    })*/}
          {/*  }*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  )
}

export default Bio
