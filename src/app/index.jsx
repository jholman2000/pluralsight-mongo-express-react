import React from "react";
import ReactDom from "react-dom";

import { store } from "./store";
import { Main } from "./components/Main";

ReactDom.render(<Main />, document.getElementById("app"));
