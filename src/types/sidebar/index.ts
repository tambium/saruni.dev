export interface ISidebarItem {
  depth: number;
  link: string;
  items?: ISidebarItem[];
  title: string;
}

export interface ISidebarList {
  isAccordionsDisabled?: boolean;
  isExpandAllDisabled?: boolean;
  items: ISidebarItem[];
}
