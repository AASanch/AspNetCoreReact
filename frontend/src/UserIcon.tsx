/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import user from "./user.svg";

export const UserIcon = () => {
    const imgStyle = css`
        width: 12px;
        opacity: 0.6;
    `;

    return <img src={user} alt="User" width="12px" css={imgStyle} />;
};
