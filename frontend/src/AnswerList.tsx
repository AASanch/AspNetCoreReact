/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { AnswerData } from "./AnswerData";
import { Answer } from "./Answer";
import { gray5 } from "./Styles";

interface Props {
    data: AnswerData[];
}

const listStyle = css`
    list-style: none;
    margin: 10px 0 0 0;
    padding: 0;
`;

const listItemStyle = css`
    border-top: 1px solid ${gray5};
`;

export const AnswerList: FC<Props> = ({ data }) => (
    <ul css={listStyle}>
        {data.map((answer) => (
            <li css={listItemStyle} key={answer.answerId}>
                <Answer data={answer} />
            </li>
        ))}
    </ul>
);
