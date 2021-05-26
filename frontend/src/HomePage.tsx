/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import { getUnansweredQuestions, QuestionData } from "./QuestionData";
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

export const HomePage = () => {
    const [questions, setQuestions] = useState<QuestionData[] | null>(null);
    const [questionsLoading, setQuestionsLoading] = useState(true);

    useEffect(() => {
        const doGetUnansweredQuestions = async () => {
            const unansweredQuestions = await getUnansweredQuestions();
            setQuestions(unansweredQuestions);
            setQuestionsLoading(false);
        };
        doGetUnansweredQuestions();
    }, []);

    const Loading = () => (
        <div
            css={css`
                font-size: 16px;
                font-style: italic;
            `}
        >
            Loading...
        </div>
    );

    const handleAskQuestionClick = () => {
        console.log("TODO - move to the AskPage");
    };

    return (
        <Page>
            <div css={outerDivStyle}>
                <div css={innerDivStyle}>
                    <PageTitle>Unanswered Questions</PageTitle>
                    <PrimaryButton onClick={handleAskQuestionClick}>
                        Ask a question
                    </PrimaryButton>
                </div>
                {questionsLoading ? (
                    <Loading />
                ) : (
                    <QuestionList data={questions || []} />
                )}
            </div>
        </Page>
    );
};
