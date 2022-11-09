import { atom } from "recoil";

export const resizeState = atom({
  key: "resize",
  default: "Web" || "Mid" || "Small" || "Mob",
});
export const isBigState = atom({
  key: "isBig",
  default: "Big" || "Small",
});
