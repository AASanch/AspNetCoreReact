/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { FC } from "react";
import { QuestionData } from "./QuestionData";
import { gray2, gray3 } from "./Styles";
import { Link } from "react-router-dom";

interface Props {
    data: QuestionData;
    showContent?: boolean;
}

const outerDivStyle = css`
    padding: 10px 0px;
`;

const titleDivStyle = css`
    padding: 10px 0px;
    font-size: 19px;
`;

const contentDivStyle = css`
    padding-bottom: 10px;
    font-size: 15px;
    color: ${gray2};
`;

const footerStyle = css`
    font-size: 12px;
    font-style: italic;
    color: ${gray3};
`;

export const Question: FC<Props> = ({ data, showContent = true }) => (
    <div css={outerDivStyle}>
        <Link to={`questions/${data.questionId}`} css={titleDivStyle}>
            {data.title}
        </Link>
        {showContent && (
            <div css={contentDivStyle}>
                {data.content.length > 50
                    ? `${data.content.substring(0, 50)}...`
                    : data.content}
            </div>
        )}
        <div css={footerStyle}>
            {`Asked by ${data.userName} on
          ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
        </div>
    </div>
);
