import Image from "next/image"

type Lang = "en" | "ja"

const members = [
  {
    id: "zach",
    photo: "/team/zach.jpg",
    name: { ja: "高橋勇作", en: "Zach (Yusaku Takahashi)" },
    role: { ja: "共同創業者", en: "Co-founder" },
  },
  {
    id: "mia",
    photo: "/team/mia.png",
    name: { ja: "Mia Badhan", en: "Mia Badhan" },
    role: { ja: "共同創業者・COO", en: "Co-founder & COO" },
  },
  {
    id: "shungo",
    photo: "/team/shungo.jpg",
    name: { ja: "木村駿牙", en: "Shungo Kimura" },
    role: { ja: "エンジニア", en: "Engineer" },
  },
  {
    id: "srijan",
    photo: "/team/srijan.jpg",
    name: { ja: "Srijan", en: "Srijan" },
    role: { ja: "事業開発", en: "Business Development" },
  },
] as const

export function TeamGrid({ lang }: { lang: Lang }) {
  const pending = lang === "ja" ? "新メンバー（素材待ち）" : "New member (details pending)"
  const pendingRole = lang === "ja" ? "氏名・役職・写真を差し替え予定" : "Name, role and photo to be added"

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member) => (
        <article key={member.id} className="hairline-panel overflow-hidden">
          <div className="relative aspect-[4/3] bg-muted/30 border-b border-border-hairline">
            <Image
              src={member.photo}
              alt={`${member.name[lang]}${lang === "ja" ? "のプロフィール写真" : " profile photo"}`}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 90vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="p-5">
            <h3 className={`text-sm font-medium text-foreground ${lang === "ja" ? "text-jp" : ""}`}>{member.name[lang]}</h3>
            <p className={`mt-1 text-xs text-muted-foreground ${lang === "ja" ? "text-jp" : ""}`}>{member.role[lang]}</p>
          </div>
        </article>
      ))}
      {[1, 2].map((slot) => (
        <article key={slot} className="hairline-panel overflow-hidden border-dashed" aria-label={pending}>
          <div className="aspect-[4/3] bg-muted/20 border-b border-dashed border-border-hairline flex items-center justify-center">
            <span className="text-micro text-muted-foreground">PHOTO PENDING</span>
          </div>
          <div className="p-5">
            <h3 className={`text-sm font-medium text-muted-foreground ${lang === "ja" ? "text-jp" : ""}`}>{pending}</h3>
            <p className={`mt-1 text-xs text-muted-foreground ${lang === "ja" ? "text-jp" : ""}`}>{pendingRole}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
