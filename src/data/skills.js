/** Top-level: 개발 / 그 외 — each with comfort levels */
export const skillCategories = [
  {
    id: "dev",
    title: "개발",
    levels: [
      {
        id: "comfortable",
        title: "편해요",
        skills: ["HTML", "CSS", "JavaScript", "React"],
      },
      {
        id: "familiar",
        title: "어느정도 사용할 수 있어요",
        skills: ["React Native", "Firebase", "Redux"],
      },
      {
        id: "tried",
        title: "사용해봤어요",
        skills: ["PHP"],
      },
    ],
  },
  {
    id: "other",
    title: "디자인·기타",
    levels: [
      {
        id: "comfortable",
        title: "편해요",
        skills: ["Figma"],
      },
      {
        id: "familiar",
        title: "어느정도 사용할 수 있어요",
        skills: ["Adobe Illustrator", "Adobe XD", "Unreal Engine 4"],
      },
      {
        id: "tried",
        title: "사용해봤어요",
        skills: ["Adobe Photoshop", "Adobe After Effects", "Maya"],
      },
    ],
  },
];

/**
 * Flattened skill names for the decorative marquee.
 * Order follows category → level so the strip mirrors the Skills section.
 */
export const marqueeTools = skillCategories.flatMap((category) =>
  category.levels.flatMap((level) => level.skills)
);
