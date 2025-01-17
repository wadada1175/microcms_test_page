import { GetStaticProps, NextPage } from "next";
import { client } from "@/libs/client";
import { Menu, ApiResponse } from "@/types/menu";

interface Props {
  menulist: Menu[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await client.get<ApiResponse>({
    endpoint: "food",
    queries: { limit: 50 },
  });
  return {
    props: {
      menulist: response.contents,
    },
  };
};

const ListPage: NextPage<Props> = ({ menulist }) => {
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
                <p>{item.price}円</p>
              </li>
            ))}
          </ul>
          <ul>
            {menu.menu_noeye.map((item) => (
              <li key={item.title}>
                <p>{item.title}</p>
                <p>{item.price}円</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListPage;
