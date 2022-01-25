declare module "*.module.css";
declare module "*.module.scss";
declare type Game = {
    appid: number
    name: string
    playtime_forever?: number
    img_icon_url?: string
    img_logo_url?: string
    has_community_visible_stats?: boolean
    playtime_windows_forever?: number
    playtime_mac_forever?: number
    playtime_linux_forever?: number
};
declare type gameList = {
    _id?: string;
    name: string;
    games?: Game[];
    ordered: boolean;
  }
