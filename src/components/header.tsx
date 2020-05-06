import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
      query HeaderQuery {
          icon: file(absolutePath: { regex: "/LogoWhiteBG.png/" }) {
              childImageSharp {
                  fixed(width: 131, height: 40) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)

  const {icon} = data

  console.log(icon)

  return (
    <div style={{width: "100%", padding: "15px 15px 10px 15px", justifyContent: "center"}}>
      <div style={{
        maxWidth: "1170px",
        display: "flex",
        justifyContent: "space-between",
        margin: "auto",
        borderRadius: "10px",
        backgroundColor: "#fff",
        padding: "10px 30px 10px 15px",
        alignItems: "center",
        boxShadow: "0px 1px 3px rgba(0,0,0,.04)"
      }}>
        <a href="/">
          <Image
            fixed={icon.childImageSharp.fixed}
            alt={"David Shekunts icon"}
            style={{
              // marginRight: rhythm(1 / 2),
              // marginBottom: 0,
              // minWidth: 100,
              // borderRadius: `100%`,
            }}
            // imgStyle={{
            //   borderRadius: `50%`,
            // }}
          />
        </a>
        <div style={{display: "flex"}}>
          <a style={{marginRight: 20}} href="/posts">Posts</a>
          <a style={{marginRight: 20}} href="/posts">Courses</a>
          <a style={{}} href="/posts">Contacts</a>
        </div>
      </div>
    </div>
  )
}

export default Header
