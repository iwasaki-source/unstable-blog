export type SiteConfig = {
  siteTitle: string;
  siteDesc: string;
  siteUrl: string;
  siteType: string;
  siteLocale: string;
  siteIcon: string;
  siteImg: string;

  background: {
    src: string;
  };
};

export type HeaderLink = {
  name: string;
  url: string;
};

export type ProfileConfig = {
  avatar: string;
  name: string;
  bio: string;
  links: {
    name: string;
    icon: string;
    url: string;
  }[];
};

export type Category = {
  name: string;
  slug: string;
};

export type Tags = {
  name: string;
  slug: string;
};
