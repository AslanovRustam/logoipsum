import { IUser } from "../types/user.type";
import avatar from "../../../public/images/avatar.png";

export const ACCOUNT: IUser = {
  id: "123qwe",
  name: "Vladislav V.",
  email: "zignifer@gmail.com",
  createDate: " 01.01.2025",
  avatar: avatar,
  socials: [
    { id: 0, name: "bluesky", url: "#" },
    { id: 1, name: "youTube", url: "#" },
    { id: 2, name: "youTube", url: "#" },
  ],
};
