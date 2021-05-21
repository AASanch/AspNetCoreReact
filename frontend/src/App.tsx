/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { fontFamily, fontSize, gray2 } from "./Styles";

function App() {
    const rootDivStyle = css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
    `;

    return (
        <div css={rootDivStyle}>
            <Header />
            <HomePage />
        </div>
    );
}

export default App;
