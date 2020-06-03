import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./styles.scss"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className={"article-wr"}>
        <article className={"article"}>
          <header>
            <h1
              style={{
                marginTop: 15,
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <p
              style={{
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className={"footer"}>
            <Bio />
          </footer>
        </article>
        {/* POSTS NAVIGATION */}
        <nav>
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className={"link link__prev"}>
              <div className={"link--subtitle"}>Previous post</div>
              <div>
                {previous.frontmatter.title}
              </div>
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next" className={"link link__next"}>
              <div className={"link--subtitle"}>Next post</div>
              <div>
                {next.frontmatter.title} {"->"}
              </div>
            </Link>
          )}
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
