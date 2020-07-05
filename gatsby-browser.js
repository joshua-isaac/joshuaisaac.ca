import "./src/styles/styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import dracula from "prism-react-renderer/themes/dracula"
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"

const components = {
  pre: props => {
    const className = props.children.props.className || ""
    const matches = className.match(/language-(?<lang>.*)/)
    return (
      <Highlight
        theme={dracula}
        {...defaultProps}
        code={props.children.props.children.trim()}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ""
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
