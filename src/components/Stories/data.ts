import colors from "../../assets/card_images/stories/colors.png";
import splash from "../../assets/card_images/stories/splash.png";
import decor from "../../assets/card_images/stories/decor.png";
import flowers from "../../assets/card_images/stories/flowers.png";

import avatar1 from "../../assets/card_images/avatars/avatar1.png";
import avatar2 from "../../assets/card_images/avatars/avatar2.png";
import avatar3 from "../../assets/card_images/avatars/avatar3.png";
import avatar4 from "../../assets/card_images/avatars/avatar4.png";

export interface CardStories {
  id: number;
  imageUrl: string;
  tittle: string;
  authorName: string;
  authorAvatar: string;
  isPromoted: boolean;
}

export const cardStories: CardStories[] = [
  {
    id: 1,
    imageUrl: flowers,
    tittle: "Flower Decorations",
    authorName: "Melvina Spring",
    authorAvatar: avatar1,
    isPromoted: true,
  },
  {
    id: 2,
    imageUrl: decor,
    tittle: "Flower Decorations",
    authorName: "Melvina Spring",
    authorAvatar: avatar2,
    isPromoted: false,
  },
  {
    id: 3,
    imageUrl: splash,
    tittle: "Splash",
    authorName: "Rwanda Melflor",
    authorAvatar: avatar3,
    isPromoted: false,
  },
  {
    id: 4,
    imageUrl: colors,
    tittle: "Colorful Face",
    authorName: "Melvina Spring",
    authorAvatar: avatar4,
    isPromoted: false,
  },
];
