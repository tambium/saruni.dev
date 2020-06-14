export interface IPrevOrNext {
  title: string;
  link?: string;
}

export interface IPrevNext {
  prev: IPrevOrNext;
  next: IPrevOrNext;
}
