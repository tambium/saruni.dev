import React from "react";
import { SidebarContext } from "../../context/sidebar";

export const useSidebar = () => React.useContext(SidebarContext);
