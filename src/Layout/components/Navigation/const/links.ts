import { routers } from "../../../../helpers/routers/routers";
import { ILinks } from "../../../../interfaces/liks.interfaces";

export const links: ILinks[] = [
  { id: 1, href: routers.home, name: "Главная" },
  { id: 2, href: routers.about, name: "О сайте" },
  { id: 3, href: routers.currencies, name: "Валюты" },
  { id: 4, href: routers.convert, name: "Конвертировать" },
];
