/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { HeaderWithRouter as Header } from "./Header";
import { HomePage } from "./HomePage";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { SignInPage } from "./SignInPage";
import { NotFoundPage } from "./NotFoundPage";
import { QuestionPage } from "./QuestionPage";
import { lazy, Suspense } from "react";

const AskPage = lazy(() => import("./AskPage"));

const App: React.FC = () => {
    const rootDivStyle = css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
    `;

    const askPageFallbackStyle = css`
        margin-top: 100px;
        text-align: center;
    `;

    return (
        <BrowserRouter>
            <div css={rootDivStyle}>
                <Header />

                <Switch>
                    <Redirect from="/home" to="/" />
                    <Route exact path="/" component={HomePage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/ask">
                        <Suspense
                            fallback={
                                <div css={askPageFallbackStyle}>Loading...</div>
                            }
                        >
                            <AskPage />
                        </Suspense>
                    </Route>
                    <Route path="/signin" component={SignInPage} />
                    <Route
                        path="/questions/:questionId"
                        component={QuestionPage}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
