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
      <footer style={{padding: 15, textAlign: "center"}}>
        © 2014-{new Date().getFullYear()}, David Shekunts
      </footer>
    </div>
  )
}

export default Layout
