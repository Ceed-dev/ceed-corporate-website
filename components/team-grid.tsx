import Image from "next/image"

type Lang = "en" | "ja"

const members = [
  {
    id: "zach",
    photo: "/team/zach-cutout-v2.png",
    imageClass: "object-contain object-center scale-[0.90] -translate-y-[8%] origin-bottom",
    name: { ja: "高橋勇作", en: "Zach (Yusaku Takahashi)" },
    role: { ja: "共同創業者・CEO", en: "Co-founder & CEO" },
  },
  {
    id: "mia",
    photo: "/team/mia.png",
    imageClass: "object-cover object-center",
    name: { ja: "Mia Badhan", en: "Mia Badhan" },
    role: { ja: "共同創業者・COO", en: "Co-founder & COO" },
  },
  {
    id: "shungo",
    photo: "/team/shungo.jpg",
    imageClass: "object-cover object-center -translate-y-[3%]",
    name: { ja: "木村駿牙", en: "Shungo Kimura" },
    role: { ja: "リードエンジニア", en: "Lead Engineer" },
  },
  {
    id: "srijan",
    photo: "/team/srijan.jpg",
    imageClass: "object-cover scale-[1.45] translate-y-[18%] origin-bottom",
    name: { ja: "Srijan", en: "Srijan" },
    role: { ja: "事業開発", en: "Business Development" },
  },
  {
    id: "tomo",
    photo: "/team/tomo.png",
    imageClass: "object-contain object-center scale-[0.82] -translate-y-[10%] origin-bottom",
    name: { ja: "鈴田智仁", en: "Tomo Suzuta" },
    role: { ja: "クリエイティブテクノロジスト", en: "Creative Technologist" },
  },
] as const

export function TeamGrid({ lang }: { lang: Lang }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <article key={member.id} className="hairline-panel overflow-hidden">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted/30 border-b border-border-hairline">
            <Image
              src={member.photo}
              alt={`${member.name[lang]}${lang === "ja" ? "のプロフィール写真" : " profile photo"}`}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
              className={`${member.imageClass} grayscale`}
            />
          </div>
          <div className="p-5">
            <h3 className={`text-sm font-medium text-foreground ${lang === "ja" ? "text-jp" : ""}`}>{member.name[lang]}</h3>
            <p className={`mt-1 text-xs text-muted-foreground ${lang === "ja" ? "text-jp" : ""}`}>{member.role[lang]}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
