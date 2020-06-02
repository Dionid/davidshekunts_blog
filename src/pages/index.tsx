import * as React from "react"
import "../components/global.scss"
import "../utils/typography"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles.scss"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="All posts" />
      <div className={"main--header"}>
        <div className={"main--header--bio"}>
          <Bio />
        </div>
        <div className={"main--header--contacts"}>
          <div className="main--header--contacts--item main--header--contacts--item__fw"><div className="main--header--contacts--item--content">
            mail@davidshekunts.com
          </div></div>
          <div className="main--header--contacts--item"><div className="main--header--contacts--item--content">
            Github: <a className={"link"} href="https://github.com/Dionid" target={"_blank"}>Dionid</a>
          </div></div>
          <div className="main--header--contacts--item"><div className="main--header--contacts--item--content">
            Tg: <a className={"link"} href="https://teleg.run/davidshekunts_blog" target={"_blank"}>@davidshekunts_blog</a>
          </div></div>
          <div className="main--header--contacts--item main--header--contacts--item__fw"><div className="main--header--contacts--item--content">
            Facebook: <a className={"link"} href="https://www.facebook.com/davidshekunts" target={"_blank"}>David Shekunts</a>
          </div></div>
        </div>
      </div>
      <div>
        {/*<div style={{display: "flex", fontSize: 18, flexWrap: "wrap", width: "100%", padding: "5px 15px"}}>
          <span style={{backgroundImage: "linear-gradient(0deg,#f857a6,#ff5858)", padding: "15px", marginRight: 5, marginBottom: 5, color: "#fff", backgroundColor: "#de14a9", borderRadius: 7}}>#Fullstack</span>
        </div>*/}
        <div className={"posts-list"}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} className={"posts-list--item"}>
                <article style={{position: "relative", padding: "45px 30px", backgroundColor: "#fff", width: "100%", borderRadius: 15, boxShadow: "0px 1px 3px rgba(0,0,0,.08)"}}>
                  <header style={{display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between"}}>
                    <h3
                      style={{
                        fontSize: 30,
                        fontWeight: 500,
                        marginBottom: 30,
                        lineHeight: 1.3,
                      }}
                    >
                      {title}
                    </h3>
                    <small>{node.frontmatter.date}</small>
                  </header>
                  {/*<section>*/}
                  {/*  <p*/}
                  {/*    dangerouslySetInnerHTML={{*/}
                  {/*      __html: node.frontmatter.description || node.excerpt,*/}
                  {/*    }}*/}
                  {/*  />*/}
                  {/*</section>*/}
                  <Link style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} to={node.fields.slug}/>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
