import React from "react";
import Icon from "../index";
import { renderSnapshot, mountComponent } from "@tests";

mountComponent(
  <Icon icon="search" />
);

renderSnapshot(
  <Icon icon="search" />
);
