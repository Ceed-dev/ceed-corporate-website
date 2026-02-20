export type Locale = "en" | "ja"

export const copy = {
  en: {
    nav: {
      mission: "Mission",
      product: "Product",
      careers: "Careers",
      culture: "Culture",
      about: "About",
      contact: "Contact",
      viewRoles: "View open roles",
    },
    hero: {
      headline: "Build the future of enterprise intelligence",
      subheadline: "We're assembling a world-class team to reimagine how organizations understand and act on their data.",
      ctaPrimary: "View open roles",
      ctaSecondary: "Our culture",
    },
    sections: {
      whatWeBuild: {
        title: "What we build",
        items: [
          {
            title: "Intelligence Platform",
            description: "Enterprise-grade AI that transforms complex data into actionable insights.",
          },
          {
            title: "Decision Engine",
            description: "Real-time analytics that power critical business decisions at scale.",
          },
          {
            title: "Integration Layer",
            description: "Seamless connections to your existing tools and workflows.",
          },
        ],
      },
      whyNow: {
        title: "Why now",
        description: "The convergence of advanced AI, cloud infrastructure, and enterprise demand has created a unique moment to build transformative technology.",
        bullets: [
          "AI capabilities have reached enterprise readiness",
          "Organizations are drowning in unstructured data",
          "Legacy solutions can't keep pace with modern demands",
        ],
      },
      principles: {
        title: "Our principles",
        items: [
          { title: "Craft over speed", description: "We build things that last." },
          { title: "Clarity in complexity", description: "Simple solutions to hard problems." },
          { title: "Own the outcome", description: "Autonomy with accountability." },
          { title: "Learn in public", description: "Share knowledge, embrace feedback." },
          { title: "Global by default", description: "Built for the world, not a region." },
          { title: "Long-term thinking", description: "Optimize for decades, not quarters." },
        ],
      },
      howWeWork: {
        title: "How we work",
        steps: [
          { title: "Async-first", description: "Deep work without interruption" },
          { title: "Small teams", description: "Tight collaboration, clear ownership" },
          { title: "Ship weekly", description: "Continuous delivery, rapid iteration" },
          { title: "Retreat quarterly", description: "In-person connection that matters" },
        ],
      },
      openRoles: {
        title: "Open roles",
        viewAll: "View all roles",
      },
      hiringProcess: {
        title: "Hiring process",
        steps: [
          { title: "Apply", description: "Submit your application with resume and brief intro" },
          { title: "Screen", description: "30-minute conversation with our team" },
          { title: "Deep dive", description: "Technical or portfolio review session" },
          { title: "Team meet", description: "Meet your future colleagues" },
        ],
        faq: {
          title: "Frequently asked questions",
          items: [
            {
              question: "How long does the hiring process take?",
              answer: "Typically 2-3 weeks from application to offer. We move fast but never rush important decisions.",
            },
            {
              question: "Do you offer remote work?",
              answer: "Yes, we're a distributed team with hubs in Tokyo and San Francisco. We support flexible work arrangements.",
            },
            {
              question: "What's the interview format?",
              answer: "We focus on practical exercises and real conversations over algorithmic puzzles. We want to see how you think and work.",
            },
            {
              question: "Can I apply for multiple roles?",
              answer: "Absolutely. If you're a strong fit for multiple positions, we'll discuss the best match during the process.",
            },
          ],
        },
      },
      finalCta: {
        title: "Join Ceed",
        description: "Help us build the next generation of enterprise intelligence.",
        cta: "View open roles",
      },
    },
    careers: {
      title: "Careers",
      subtitle: "Join us in building something meaningful",
      filters: {
        all: "All",
        location: "Location",
        team: "Team",
        type: "Type",
      },
      noRole: {
        title: "Don't see your role?",
        description: "We're always looking for exceptional people. Tell us about yourself.",
        cta: "General application",
      },
    },
    role: {
      apply: "Apply now",
      talkToUs: "Talk to us",
      overview: "Overview",
      responsibilities: "Responsibilities",
      requirements: "Requirements",
      niceToHaves: "Nice to haves",
      benefits: "Benefits",
      process: "Hiring process",
      equalOpportunity: "Ceed is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.",
    },
    culture: {
      title: "Culture",
      subtitle: "How we build together",
      howWeWork: "How we work",
      values: "Our values",
      benefits: "Benefits",
      faq: "Questions",
    },
    about: {
      title: "About",
      subtitle: "Our mission and team",
      mission: {
        title: "Our mission",
        description: "To empower organizations with intelligent systems that transform complexity into clarity, enabling better decisions at every level.",
      },
      facts: {
        title: "Company facts",
        items: [
          { label: "Founded", value: "2024" },
          { label: "Headquarters", value: "Tokyo & San Francisco" },
          { label: "Team size", value: "15-25" },
          { label: "Funding", value: "Series A" },
        ],
      },
      team: {
        title: "Leadership",
        members: [
          { name: "Alex Chen", role: "Co-founder & CEO" },
          { name: "Yuki Tanaka", role: "Co-founder & CTO" },
          { name: "Sarah Kim", role: "Head of Product" },
          { name: "Marcus Johnson", role: "Head of Engineering" },
        ],
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Let's talk",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message",
      },
      direct: {
        title: "Direct contact",
        email: "hello@ceed.cloud",
      },
      social: {
        title: "Follow us",
      },
    },
    footer: {
      tagline: "Building enterprise intelligence",
      copyright: "© 2024 Ceed. All rights reserved.",
    },
  },
  ja: {
    nav: {
      mission: "ミッション",
      product: "プロダクト",
      careers: "採用情報",
      culture: "カルチャー",
      about: "会社概要",
      contact: "お問い合わせ",
      viewRoles: "募集職種を見る",
    },
    hero: {
      headline: "企業インテリジェンスの未来を創る",
      subheadline: "組織がデータを理解し活用する方法を再定義するため、世界最高水準のチームを構築しています。",
      ctaPrimary: "募集職種を見る",
      ctaSecondary: "カルチャー",
    },
    sections: {
      whatWeBuild: {
        title: "プロダクト",
        items: [
          {
            title: "インテリジェンスプラットフォーム",
            description: "複雑なデータを実用的なインサイトに変換するエンタープライズAI。",
          },
          {
            title: "意思決定エンジン",
            description: "重要なビジネス判断をスケールで支えるリアルタイム分析。",
          },
          {
            title: "統合レイヤー",
            description: "既存のツールやワークフローとのシームレスな連携。",
          },
        ],
      },
      whyNow: {
        title: "今、なぜ",
        description: "高度なAI、クラウドインフラ、企業需要の収束により、変革的なテクノロジーを構築する絶好の機会が生まれました。",
        bullets: [
          "AI能力がエンタープライズレベルに到達",
          "組織は非構造化データに埋もれている",
          "レガシーソリューションは現代の需要に追いつけない",
        ],
      },
      principles: {
        title: "原則",
        items: [
          { title: "スピードより品質", description: "長く使われるものを作る。" },
          { title: "複雑さの中の明快さ", description: "難しい問題へのシンプルな解決策。" },
          { title: "結果に責任を持つ", description: "自律性と説明責任の両立。" },
          { title: "公開して学ぶ", description: "知識を共有し、フィードバックを受け入れる。" },
          { title: "グローバルがデフォルト", description: "地域ではなく世界のために。" },
          { title: "長期思考", description: "四半期ではなく、数十年を最適化。" },
        ],
      },
      howWeWork: {
        title: "働き方",
        steps: [
          { title: "非同期優先", description: "中断のない深い仕事" },
          { title: "小さなチーム", description: "密な協力、明確な責任" },
          { title: "毎週リリース", description: "継続的デリバリー、高速反復" },
          { title: "四半期ごとの合宿", description: "意味のある対面での繋がり" },
        ],
      },
      openRoles: {
        title: "募集職種",
        viewAll: "すべての職種を見る",
      },
      hiringProcess: {
        title: "採用プロセス",
        steps: [
          { title: "応募", description: "履歴書と簡単な自己紹介を提出" },
          { title: "スクリーニング", description: "30分のチームとの会話" },
          { title: "深堀り", description: "技術またはポートフォリオレビュー" },
          { title: "チーム面談", description: "将来の同僚との顔合わせ" },
        ],
        faq: {
          title: "よくある質問",
          items: [
            {
              question: "採用プロセスにはどのくらい時間がかかりますか？",
              answer: "通常、応募からオファーまで2〜3週間です。迅速に動きますが、重要な決定を急ぐことはありません。",
            },
            {
              question: "リモートワークは可能ですか？",
              answer: "はい、東京とサンフランシスコにハブを持つ分散チームです。柔軟な勤務形態をサポートしています。",
            },
            {
              question: "面接の形式は？",
              answer: "アルゴリズムパズルよりも、実践的な演習と本質的な会話を重視しています。",
            },
            {
              question: "複数の職種に応募できますか？",
              answer: "もちろんです。複数のポジションに適している場合は、プロセス中に最適なマッチを相談します。",
            },
          ],
        },
      },
      finalCta: {
        title: "Ceedに参加する",
        description: "次世代のエンタープライズインテリジェンスを一緒に構築しましょう。",
        cta: "募集職種を見る",
      },
    },
    careers: {
      title: "採用情報",
      subtitle: "意味のあるものを一緒に作りましょう",
      filters: {
        all: "すべて",
        location: "勤務地",
        team: "チーム",
        type: "雇用形態",
      },
      noRole: {
        title: "お探しの職種がない場合",
        description: "私たちは常に優秀な人材を探しています。あなたのことを教えてください。",
        cta: "一般応募",
      },
    },
    role: {
      apply: "応募する",
      talkToUs: "相談する",
      overview: "概要",
      responsibilities: "責任範囲",
      requirements: "必須要件",
      niceToHaves: "歓迎要件",
      benefits: "福利厚生",
      process: "採用プロセス",
      equalOpportunity: "Ceedは機会均等雇用主です。多様性を尊重し、すべての従業員にとって包括的な環境づくりに取り組んでいます。",
    },
    culture: {
      title: "カルチャー",
      subtitle: "共に築く方法",
      howWeWork: "働き方",
      values: "価値観",
      benefits: "福利厚生",
      faq: "質問",
    },
    about: {
      title: "会社概要",
      subtitle: "ミッションとチーム",
      mission: {
        title: "ミッション",
        description: "複雑さを明快さに変えるインテリジェントシステムで組織を支援し、あらゆるレベルでより良い意思決定を可能にします。",
      },
      facts: {
        title: "会社情報",
        items: [
          { label: "設立", value: "2024年" },
          { label: "本社", value: "東京 & サンフランシスコ" },
          { label: "チーム規模", value: "15-25名" },
          { label: "資金調達", value: "シリーズA" },
        ],
      },
      team: {
        title: "リーダーシップ",
        members: [
          { name: "Alex Chen", role: "共同創業者 & CEO" },
          { name: "田中ゆき", role: "共同創業者 & CTO" },
          { name: "Sarah Kim", role: "プロダクト責任者" },
          { name: "Marcus Johnson", role: "エンジニアリング責任者" },
        ],
      },
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご連絡ください",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        submit: "送信",
      },
      direct: {
        title: "直接連絡",
        email: "hello@ceed.cloud",
      },
      social: {
        title: "フォロー",
      },
    },
    footer: {
      tagline: "エンタープライズインテリジェンスを構築",
      copyright: "© 2024 Ceed. All rights reserved.",
    },
  },
} as const

export function getCopy(locale: Locale) {
  return copy[locale]
}
