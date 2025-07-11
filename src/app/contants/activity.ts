import { IActivity, ITab } from "../types/activity.interface.";
import avatar1 from "../../../public/images/causes/avatar1.png";
import avatar2 from "../../../public/images/causes/avatar2.png";
import avatar3 from "../../../public/images/causes/avatar3.png";
import { ESocial } from "../types/social.enum";
import { EActivity } from "../types/activity.enum";

export const ACTIVITY_TABS: ITab[] = [
  { id: 0, type: EActivity.ALL },
  { id: 1, type: EActivity.YOUTUBEVIDEOS },
  { id: 2, type: EActivity.YOTUBECOMMENTS },
  { id: 3, type: EActivity.XCOMMENTS },
];

export const ACTIVITY: IActivity[] = [
  {
    id: 0,
    name: "Allice B.",
    avatar: avatar1,
    social: ESocial.BLUESKY,
    content: [
      { text: "I absolutely love this idea " },
      { text: "#save_the_elephants", type: "hashtag" },
      {
        text: "\n\nSo many unique and beautiful words are quietly disappearing, and most people don’t even notice. This project feels like a museum, a revival, and a creative celebration all at once. It’s more than just saving language — it’s saving perspective.\n\n",
      },
      { text: "Can’t wait to see it come to life!" },
    ],
    date: "22.03.2025",
  },
  {
    id: 1,
    name: "James J.",
    avatar: avatar2,
    social: ESocial.YOUTUBE,
    content: [
      {
        text: "Language evolves, sure — but it’s heartbreaking how many beautiful words just vanish. This project is such a thoughtful and creative way to bring them back. Backed it without a second thought. ",
      },
      {
        text: "\n\nLet’s keep these pieces of our culture alive ",
      },
      { text: "#save_the_elephants", type: "hashtag" },
    ],
    date: "22.03.2025",
  },
  {
    id: 2,
    name: "Carol M.",
    avatar: avatar3,
    social: ESocial.BLUESKY,
    content: [
      {
        text: "Hey there! I'm a freelance creator who dabbles in all things entrepreneurship. I also happen to be a self-proclaimed coffee expert and infuriatingly humble beeraholic (I know, it's a strange combination). When I'm not working or sipping on a cold one, you can find me in the kitchen experimenting with new recipes as a proud food practitioner. ",
      },
      {
        text: "\n\nOh, and I'm a bit of a Twitter buff, so feel free to connect with me there too. Thanks for stopping by!",
      },
    ],
    date: "22.03.2025",
  },
  {
    id: 3,
    name: "Allice B.",
    avatar: avatar1,
    social: ESocial.BLUESKY,
    content: [
      { text: "I absolutely love this idea " },
      { text: "#save_the_elephants", type: "hashtag" },
      {
        text: "\n\nSo many unique and beautiful words are quietly disappearing, and most people don’t even notice. This project feels like a museum, a revival, and a creative celebration all at once. It’s more than just saving language — it’s saving perspective.\n\n",
      },
      { text: "Can’t wait to see it come to life!" },
    ],
    date: "22.03.2025",
  },
  {
    id: 4,
    name: "James J.",
    avatar: avatar2,
    social: ESocial.YOUTUBE,
    content: [
      {
        text: "Language evolves, sure — but it’s heartbreaking how many beautiful words just vanish. This project is such a thoughtful and creative way to bring them back. Backed it without a second thought. ",
      },
      {
        text: "\n\nLet’s keep these pieces of our culture alive ",
      },
      { text: "#save_the_elephants", type: "hashtag" },
    ],
    date: "22.03.2025",
  },
  {
    id: 5,
    name: "Carol M.",
    avatar: avatar3,
    social: ESocial.BLUESKY,
    content: [
      {
        text: "Hey there! I'm a freelance creator who dabbles in all things entrepreneurship. I also happen to be a self-proclaimed coffee expert and infuriatingly humble beeraholic (I know, it's a strange combination). When I'm not working or sipping on a cold one, you can find me in the kitchen experimenting with new recipes as a proud food practitioner. ",
      },
      {
        text: "\n\nOh, and I'm a bit of a Twitter buff, so feel free to connect with me there too. Thanks for stopping by!",
      },
    ],
    date: "22.03.2025",
  },
];

export const tabToSocialMap: Record<EActivity, ESocial | null> = {
  [EActivity.ALL]: null,
  [EActivity.YOUTUBEVIDEOS]: ESocial.YOUTUBE,
  [EActivity.YOTUBECOMMENTS]: ESocial.YOUTUBE,
  [EActivity.XCOMMENTS]: ESocial.X,
};
