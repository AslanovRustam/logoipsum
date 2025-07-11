import YouTube from "../../../public/icons/youtube.svg";
import Bluesky from "../../../public/icons/baterfly.svg";

export const ICON_MAP: Record<
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  youtube: YouTube,
  bluesky: Bluesky,
};
