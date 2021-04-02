import React from "react";
import Button from "../index";
import { renderSnapshot, mountComponent } from "@tests";

mountComponent(<Button></Button>);

renderSnapshot(<Button>Basic</Button>);
renderSnapshot(<Button icon={<p>2</p>}>Icon Button</Button>);
renderSnapshot(<Button className="new-class">Icon Button</Button>)