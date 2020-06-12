import React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        backgroundColor: "#f1f1f1"
      }}
    >
      <header>
        <Header/>
      </header>
      <main style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: 1200,
        width: "100%"
      }}>
        {children}
      </main>
      <footer style={{padding: "30px 15px", textAlign: "center"}}>
        © 2014-{new Date().getFullYear()}, David Shekunts, <a className={"link"} href="https://github.com/Dionid/davidshekunts_blog" target={"_blank"}>Github</a>
      </footer>
    </div>
  )
}

export default Layout
