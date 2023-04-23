const React = require('react');


// function Default(html)
const Default = (html) => {
    return(
        <html>
            <head>
                <title>Default</title>
                <body>
                    <h1>
                        HTML Rendered!
                    </h1>
                    <div className="container">
                        {html.children}
                    </div>
                </body>
            </head>
        </html>
    );
};

module.exports = Default;