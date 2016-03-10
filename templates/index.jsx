import React from 'react'

const CLOUDFLARE = "//cdnjs.cloudflare.com/ajax/libs";

// A naive whitespace stripper to help with ES6 strings.
const strip = (text) => text.replace(/^\s*|\s*$/gm, "").replace(/\n/g, "");

export default class Index extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <script src="//fonts.walmart.com/fqp0lia.js"/>
                    <script dangerouslySetInnerHtml={{__html: "try{Typekit.load();}catch(e){}"}}/>

                    {/* Polyfills before CSS */}
                    <meta name="ie-shiv-polyfill" dangerouslySetInnerHTML={{__html:
                        strip(`<!--[if lt IE 9]>
                            <script src="${CLOUDFLARE}/html5shiv/3.7.2/html5shiv-printshiv.js"></script>
                            <![endif]-->`)
                    }} />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/codemirror/5.0.0/theme/monokai.min.css"/>
                    <title>Showcase</title>
                </head>
                <body>
                    <div className="js-content"
                        dangerouslySetInnerHtml={{_html: this.props.content}} />

                    {/* Polyfills before JS */}
                    <span dangerouslySetInnerHTML={{__html:
                        strip(`<!--[if lt IE 9]>
                          <script src="${CLOUDFLARE}/jquery/1.11.3/jquery.min.js"></script>
                          <script src="${CLOUDFLARE}/es5-shim/4.1.1/es5-shim.min.js"></script>
                          <script src="${CLOUDFLARE}/es5-shim/4.1.1/es5-sham.min.js"></script>
                          <![endif]-->`)
                    }} />

                    {/* Application JS */}
                    <script src={CLOUDFLARE + "/codemirror/5.0.0/codemirror.min.js"} />
                    <script src={CLOUDFLARE + "/codemirror/5.0.0/mode/javascript/javascript.min.js"} />
                    <script src="https://cdn.polyfill.io/v1/polyfill.min.js?features=Intl.~locale.en"/>
                    {this.props.render.js ? <script src={this.props.bundles.js} /> : ""}
                </body>
            </html>
        )
    }
}

Index.propTypes = {
    bootstrap: React.PropTypes.string,
    bundles: React.PropTypes.shape({
        js: React.PropTypes.string,
        css: React.PropTypes.string
    }),
    content: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.string
    ]),
    render: React.PropTypes.shape({
        js: React.PropTypes.bool
    })
}