import Snappy_Process from "../../public/icon-snappy-process.svg";
import Affordable_Prices from "../../public/icon-affordable-prices.svg";
import People_First from "../../public/icon-people-first.svg";

export const data = {
  dataMoreInfo: [
    {
      id: 1,
      urlImg: Snappy_Process,
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don't get stuck filing in tedious forms.",
    },
    {
      id: 2,
      urlImg: Affordable_Prices,
      title: "Affordable Prices",
      description:
        "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      id: 3,
      urlImg: People_First,
      title: "People First",
      description:
        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
    },
  ],
  footerItems: [
    {
      id: 1,
      menuTitle: "Our company",
      menuItems: {
        0: "how we work",
        1: "why insure?",
        2: "view plans",
        3: "reviews",
      },
    },
    {
      id: 2,
      menuTitle: "Help Me",
      menuItems: {
        0: "FAQ",
        1: "Terms of use",
        2: "Privacy policy",
        3: "cookies",
      },
    },
    {
      id: 3,
      menuTitle: "Contact",
      menuItems: {
        0: "Sales",
        1: "Support",
        2: "Live chat",
      },
    },
    {
      id: 4,
      menuTitle: "Others",
      menuItems: {
        0: "Carrers",
        1: "Press",
        2: "Licenses",
      },
    },
  ],
  plans: [
    {
      id: 1,
      type: "Basic",
      price: 19.99,
      storage: "500 GB",
      userAllowance: 2,
      capacity: "3 GB",
    },
    {
      id: 2,
      type: "Professional",
      price: 24.99,
      storage: "1 TB",
      userAllowance: 5,
      capacity: "10 GB",
    },
    {
      id: 3,
      type: "Master",
      price: 39.99,
      storage: "2 TB",
      userAllowance: 10,
      capacity: "20 GB",
    },
  ],
};
