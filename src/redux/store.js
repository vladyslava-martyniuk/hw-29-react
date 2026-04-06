// Точка збору де ми збираємо повністю все що стосується редаксу

import { createStore } from "redux";
import {reducer} from "./reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

// npm install @redux-devtools/extension - для підʼєднання інструментів розробника для старих версій редаксу

// import { devToolsEnhancer } from "@redux-devtools/extension"; const enhancer = devToolsEnhancer();
 const enhancer = devToolsEnhancer();

 export const store = createStore(reducer, enhancer);