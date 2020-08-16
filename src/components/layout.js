/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* header layout */}
      <Header className="bg-secondary" siteTitle={data.site.siteMetadata.title} />
    

    {/* contenido personalizable */}
        <main className="col-12">{children}</main>
        
        
        {/* footer layout */}
        <footer className="bg-secondary">
          © Geotrans  , developed by Fmarcosdv
        </footer>


    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
