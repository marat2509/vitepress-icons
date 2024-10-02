import { socialMediaIcons } from "./socialmedia";

export type Icon = {
    svg: string;
};

export type Icons = {
    [key: string]: Icon;
};

export type socialMedia = {
    [key in keyof typeof socialMediaIcons]: Icon;
};
