import * as React from "react";
import * as ReactDOM from "react-dom";

import { CommentBox } from "./components/CommentBox/CommentBox";

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000}/>,
    // <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
