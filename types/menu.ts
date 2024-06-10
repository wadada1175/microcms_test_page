// types/menu.ts

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface MenuItem {
  fieldId: string;
  title: string;
  price: string;
  image?: Image;
}

export interface Menu {
  id: string;
  title: string;
  menu: MenuItem[];
  menu_noeye: MenuItem[];
}

export interface ApiResponse {
  contents: Menu[];
  totalCount: number;
  offset: number;
  limit: number;
}
