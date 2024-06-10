import React from "react";
import { Menu } from "@/types/menu";

type Props = {
  menulist: Menu[];
};

const ListPage = ({ menulist }: Props) => {
  return (
    <div>
      <h1>メニュー</h1>
      {menulist.map((menu) => (
        <div key={menu.id}>
          <h2>{menu.title}</h2>
          <ul>
            {menu.menu.map((item) => (
              <li key={item.title}>
                {item.image && <img src={item.image.url} alt={item.title} />}
                <p>{item.title}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
          <ul>
            {menu.menu_noeye.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
