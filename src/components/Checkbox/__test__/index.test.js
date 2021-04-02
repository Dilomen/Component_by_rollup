import React from "react";
import { Checkbox } from "../index.js";
import { renderSnapshot, mountComponent } from "@tests";

mountComponent(<Checkbox></Checkbox>);

renderSnapshot(<Checkbox></Checkbox>);