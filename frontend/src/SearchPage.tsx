/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Page } from "./Page";
import { QuestionList } from "./QuestionList";
import { searchQuestions, QuestionData } from "./QuestionData";

export const SearchPage: FC<RouteComponentProps> = ({ location }) => {
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("criteria") || "";

    useEffect(() => {
        const doSearch = async (criteria: string) => {
            const foundResults = await searchQuestions(criteria);
            setQuestions(foundResults);
        };
        doSearch(search);
    }, [search]);

    const searchResultsStyle = css`
        font-size: 16px;
        font-style: italic;
        margin-top: 0px;
    `;
    return (
        <Page title="Search Results">
            {search && <p css={searchResultsStyle}>for "{search}"</p>}
            <QuestionList data={questions} />
        </Page>
    );
};
