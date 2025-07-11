import { StaticImageData } from "next/image";

export interface ICause {
  id: number;
  name: string;
  position: string;
  avatar: StaticImageData;
  bg: StaticImageData;
  title: string;
  description: string;
  raised: string[];
  links: string;
}
