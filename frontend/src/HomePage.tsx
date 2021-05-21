/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions } from "./QuestionData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";

const outerDivStyle = css`
    margin: 50px auto 20px auto;
    padding: 30px 20px;
    max-width: 600px;
`;

const innerDivStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HomePage = () => (
    <Page>
        <div css={outerDivStyle}>
            <div css={innerDivStyle}>
                <PageTitle>Unanswered Questions</PageTitle>
                <PrimaryButton>Ask a question</PrimaryButton>
            </div>
            <QuestionList data={getUnansweredQuestions()} />
        </div>
    </Page>
);
