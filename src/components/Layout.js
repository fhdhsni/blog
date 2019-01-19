import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Image from 'gatsby-image'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <StaticQuery
        query={logoQuery}
        render={data => {
          let logoImgPng = (
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              <Image
                fixed={data.logo.childImageSharp.fixed}
                alt={`logo`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            </Link>
          )

          return (
            <div
              style={{
                ...scale(0.12),
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
            >
              {location.pathname === rootPath ? '' : logoImgPng}
              {children}
              <footer style={{ marginTop: rhythm(2.5) }}>
                <a
                  href={`https://twitter.com/${
                    data.site.siteMetadata.social.twitter
                  }`}
                >
                  twitter
                </a>
                {` `}·{` `}
                <a
                  href={`https://github.com/${
                    data.site.siteMetadata.social.twitter
                  }`}
                >
                  github
                </a>
                {` `}·{` `}
                <a href="https://stackoverflow.com/users/2576218/fhdhsni">
                  stack overflow
                </a>
                {` `}·{` `}
                <a href="https://linkedin.com/in/farhad-hasani-122b3a119">
                  linkedin
                </a>
              </footer>
            </div>
          )
        }}
      />
    )
  }
}

const logoQuery = graphql`
  query LogoQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
  }
`
export default Layout
