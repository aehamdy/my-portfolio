import { chessQueenIcon, rocketIcon } from "./icons";

export const plans = [
  {
    type: "popular",
    icon: chessQueenIcon,
    price: "22",
    features: [
      { feat: "WordPress Development", isIncluded: true, isNew: false },
      { feat: "Installation Services", isIncluded: true, isNew: false },
      { feat: "SEO AUDIT", isIncluded: true, isNew: false },
      { feat: "Hostin & Domain", isIncluded: false, isNew: false },
      { feat: "WordPress Secutiry", isIncluded: false, isNew: false },
    ],
  },
  {
    type: "pro",
    icon: rocketIcon,
    price: "48",
    features: [
      { feat: "WordPress Development", isIncluded: true, isNew: false },
      { feat: "Installation Services", isIncluded: true, isNew: false },
      { feat: "SEO AUDIT", isIncluded: true, isNew: false },
      { feat: "Hostin & Domain", isIncluded: true, isNew: true },
      { feat: "WordPress Secutiry", isIncluded: true, isNew: true },
    ],
  },
];
