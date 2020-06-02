import * as React from "react"
import "../components/global.scss"
import "../utils/typography"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <div style={{padding: "10px 15px", width: "66%"}}>
        <Bio />
      </div>
      <div>
        {/*<div style={{display: "flex", fontSize: 18, flexWrap: "wrap", width: "100%", padding: "5px 15px"}}>
          <span style={{backgroundImage: "linear-gradient(0deg,#f857a6,#ff5858)", padding: "15px", marginRight: 5, marginBottom: 5, color: "#fff", backgroundColor: "#de14a9", borderRadius: 7}}>#Fullstack</span>
        </div>*/}
        <div style={{display: "flex", flexWrap: "wrap", width: "100%"}}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} style={{padding: "10px 15px", width: "33%", display: "flex", minHeight: 400}}>
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
