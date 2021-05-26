/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { AnswerData } from "./AnswerData";
import { gray3 } from "./Styles";

interface Props {
    data: AnswerData;
}
const outerDivStyle = css`
    padding: 10px 0px;
`;

const contentDivStyle = css`
    padding: 10px 0px;
    font-size: 13px;
`;

const answeredByDivStyle = css`
    font-size: 12px;
    font-style: italic;
    color: ${gray3};
`;

export const Answer: FC<Props> = ({ data }) => (
    <div css={outerDivStyle}>
        <div css={contentDivStyle}>{data.content}</div>
        <div css={answeredByDivStyle}>
            {`Answered by ${data.userName} on
                ${data.created.toLocaleDateString()} 
                ${data.created.toLocaleTimeString()}`}
        </div>
    </div>
);
