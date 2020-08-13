import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';
import "./index.css";
import App from "./App";
import theme from "./theme/index.js";

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
