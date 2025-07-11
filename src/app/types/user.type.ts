import { StaticImageData } from "next/image";

export interface IUser {
  id: string;
  name: string;
  email: string;
  createDate: string;
  avatar: StaticImageData;
  socials: { id: number; name: string; url: string }[];
}
