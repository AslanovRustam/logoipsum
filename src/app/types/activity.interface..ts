import { StaticImageData } from "next/image";
import { EActivity } from "./activity.enum";

export interface ITab {
  id: number;
  type: EActivity;
}

export interface IActivity {
  id: number;
  name: string;
  avatar: StaticImageData;
  social: string;
  content: { text: string; type?: string }[];
  date: string;
}
