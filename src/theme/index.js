import React, { memo } from "react";
import PropTypes from "prop-types"
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";


export const AppThemeProvider = memo(({children}) => {
    const theme = createMuiTheme({
        palette: {
          primary: green,
        },
        typography: {
            fontFamily: "'Comic Neue', cursive",
            h1: {
                fontSize: "4rem"
            },
            h2: {
                fontSize:  "3rem"
            },
            h3: {
                fontSize: "4rem"
            },
            h4: {
                fontSize: "1.50rem"
            },
            h5: {
                fontSize: "2rem"
            },
            h6: {
                fontSize: "3rem"
            },
            body1: {
                fontSize: "1.50rem"
            },
            body2: {
                fontSize: "1.50rem"
            },
            subtitle1: {
                fontSize: "2rem"
            },
            subtitle2: {
                fontSize: "1rem"
            }
        }
    });
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
})


AppThemeProvider.protoTypes = {
    children: PropTypes.node.isRequired
}