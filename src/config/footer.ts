interface FooterConfig {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  title: string;
  href: string;
  external: boolean;
}

export const footerConfig: FooterConfig = {
  title: "Soye Park",
  links: [
    {
      title: "Email",
      href: "mailto:stardust6653@gmail.com",
      external: false,
    },
    {
      title: "Github",
      href: "https://github.com/stardust6653",
      external: true,
    },
    {
      title: "Blog",
      href: "https://dogpoop2dev.hashnode.dev/",
      external: true,
    },
  ],
};
