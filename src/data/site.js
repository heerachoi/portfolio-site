/** Site-wide identity & links — single source of truth */
export const site = {
  name: "최희라",
  title: "Web Developer",
  email: "heera7722@gmail.com",
  status: "새 프로젝트 가능",
  description:
    "HTML·CSS·JavaScript·React로 웹 서비스를 만드는 프론트엔드 개발자 최희라의 포트폴리오",
  github: {
    label: "GitHub",
    href: "https://github.com/heerachoi",
    handle: "github.com/heerachoi",
  },
  blog: {
    label: "블로그",
    href: "https://codesign.tistory.com/",
    handle: "codesign.tistory.com",
  },
  nav: [
    { label: "작업", href: "#work" },
    { label: "글", href: "#blog" },
    { label: "소개", href: "#about" },
    { label: "연락", href: "#contact" },
  ],
};

export const socials = [
  {
    label: "이메일",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "깃허브",
    value: site.github.handle,
    href: site.github.href,
  },
  {
    label: "블로그",
    value: site.blog.handle,
    href: site.blog.href,
  },
];
