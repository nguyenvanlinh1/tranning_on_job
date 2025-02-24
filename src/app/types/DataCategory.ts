export interface FourthMenu {
  fourthMenuName: string;
}

export interface ThirdMenu {
  thirdMenuName: string;
  thirdMenu?: FourthMenu[];
}

export interface SecondMenu {
  secondMenuName: string;
  secondMenu?: ThirdMenu[];
}

export interface Category {
  firstMenu: SecondMenu[];
  firstMenuName: string;
  icon: string;
}
