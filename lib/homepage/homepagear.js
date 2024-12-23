export const images = [
    { src: "/main/Aesthetic.jpeg", alt: "Aesthetic image 1" },
    { src: "/main/Aesthetic.jpeg", alt: "Aesthetic image 2" },
    { src: "/main/Aesthetic.jpeg", alt: "Aesthetic image 3" },
    { src: "/main/Aesthetic.jpeg", alt: "Aesthetic image 4" },
  ];
  
  export const saltCaveCards = [
    {
      id: "1",
      image: "/main/SaltCave.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
    {
      id: "2",
      image: "/main/SaltCaveItems.jpg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
    {
      id: "3",
      image: "/main/StaffSaltCave.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
  ];
  
  export const poolCards = [
    {
      id: "1",
      image: "/main/PoolWide.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
    {
      id: "2",
      image: "/main/poolLandscape.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
    {
      id: "3",
      image: "/main/poolLandscape.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
  ];
  
  export const gameAreaCards = [
    {
      id: "1",
      image: "/main/BunjeeJumping.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
    {
      id: "2",
      image: "/main/BunjeeJumpingCustomer.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
    {
      id: "3",
      image: "/main/bunjeeStaff.jpeg",
  
      message:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
    },
  ];
  
  export const ourProjects = {
    heading: "مشاريعنا",
    cards: [
      { heading: "كهف الملح", card: saltCaveCards },
      { heading: "مسابح", card: poolCards },
      { heading: "منطقة الألعاب", card: gameAreaCards },
    ],
  };
  
  export const newsImages = ["/image.jpg", "/image2.jpg", "/image3.jpg"];
  
  export const facilities = [
    {
      id: "salt-cave",
      heading: "كهف الملح",
      description:
        "استعادة الحيوية والطاقة لأجسامكم من خلال جلسة العلاج بالملح",
      mainImage: "/main/SaltCave.jpeg",
      gallery: [
        "/main/SaltCaveItems.jpg",
        "/main/SaltCaveItems.jpg",
        "/main/StaffSaltCave.jpeg",
        "/main/poolLandscape.jpeg",
        "/main/poolLandscape.jpeg",
        "/main/poolLandscape.jpeg",
      ],
      href: "http://localhost:3000/saltcave"
    },
    {
      id: "pools",
      heading: "مسابح",
      description:
        "استرخِ وجدد نشاطك في حمامات الكبريت العلاجية لدينا وجاكوزي فاخر.",
      mainImage: "/main/PoolWide.jpeg",
      gallery: [
        "/main/PoolWide.jpeg",
        "/main/poolLandscape.jpeg",
        "/poolarea/training.jpg",
        "/main/poolLandscape.jpeg",
        "/poolarea/gym.jpg",
      ],
        href: "http://localhost:3000/poolarea"
    },
    {
      id: "game-area",
      heading: "منطقة الألعاب",
      description:
        "استمتع بمغامرات مثيرة مع لعبة زيبلاين و بانجي ترامبولين وأنشطة القطار مليئة بالمتعة.",
      mainImage: "/gamearea/zipline.jpeg",
      gallery: [
        "/gamearea/bunjee.png",
        "/gamearea/Tramp.png",
        "/gamearea/train.png",
      ],
        href: "http://localhost:3000/gamearea"
    },
    {
      id: "ladies-pool-area",
      heading: "مسبح للنساء",
      description:
        "استمتع بفوائد المياه الكبريتية, الصحة والجمال في مكان واحد!",
      mainImage:       "/poolarea/parlour.jpeg",
      gallery: [
        "/poolarea/parlour.jpeg",
        "/poolarea/parlour.jpeg",
        "/main/poolLandscape.jpeg",
      ],
        href: "http://localhost:3000/poolarea"
    },
    {
      id: "ayurvedic-pool-area",
      heading: "مساج أيورفيدي",
      description:
        "استمتع بتجربة مساج أيورفيدي لأن صحتك تستحق الأفضل",
      mainImage: "/wellness/massageEntrance.jpeg",
      gallery: [
        "/wellness/massageRoom.jpeg",
        "/wellness/massageRoom2.jpeg",
        "/wellness/lamp.jpeg",
      ],
        href: "http://localhost:3000/poolarea"
    },
    {
      id: "fitness-pool-area",
      heading: "الصالة الرياضية",
      description:
        "افرغ طاقتك و حقق اهداف اللياقة البدنية",
      mainImage: "/main/gym.jpeg",
      gallery: [
        "/main/gym.jpeg",
        "/main/gym.jpeg",
        "/main/gym.jpeg",
      ],
        href: "http://localhost:3000/wellness"
    },
  ];
  
  export const aboutUs = {
    heading: "نبذة عن الشركة",
    description:
      "روز حفيت هي شركة رائدة في مجال إدارة الفعاليات وخدمات الترفيه. روز حفيت، وهي شركة تابعة لمجموعة بن حريز القابضة، متخصصة في تنظيم الفعاليات وخدمات الترفيه وإنشاء أنواع مختلفة من الأنشطة الترفيهية. تمتد خبرتنا إلى إعداد وتقديم وجبات صحية، فضلاً عن إدارة وتشغيل حمامات السباحة الكبريتية الساخنة في حديقة المبزرة الخصبة في العين. توفر هذه المسابح، التي يتم الحصول عليها من ينابيع الكبريت الطبيعية، ملاذًا للاسترخاء وتسكين الآلام وتحسين صحة الجلد. بالإضافة إلى ذلك، نفخر بامتلاك أكبر كهف ملحي من صنع الإنسان، والذي يشتهر بخصائصه العلاجية الطبيعية. في روز حفيت، نحن ملتزمون بتقديم تجارب استثنائية وتعزيز الرفاهية من خلال مجموعة متنوعة من الخدمات.",
  };
  
  export const navigationTabs = [
    {
      displayname: "الصفحة الرئيسية",
      path: "/",
    },
    {
      displayname: "كهف الملح",
      path: "/saltcave",
    },
    {
      displayname: "مسابح كبريتية",
      path: "/poolarea",
    },
    {
      displayname: "فعاليات ممتعة",
      path: "/gamearea",
    },
    {
      displayname: "العافية والسبا",
      path: "/wellness",
    },
    {
      displayname: "نبذة عن الشركة",
      path: "/about",
    },
    {
      displayname: "تواصل معنا",
      path: "/contact",
    },
    {
      displayname: "وظائفنا",
      path: "/careers",
    },
  ];
  
  export const heroSectionSlides = [
    {
      image: "/homepage/hero/1.jpeg",
      title: "كهف الملح الهادئ",
      description: "استمتع بالاسترخاء المطلق في كهف الملح الهادئ لدينا.",
      color: "white",
    },
    {
      image: "/homepage/hero/2.jpeg",
      title: "جو الشفاء",
      description: "تنفس الهواء العلاجي من كهف الملح .",
      color: "white",
    },
    {
      image: "/homepage/hero/3.jpeg",
      title: "التخلص من السموم بشكل طبيعي",
      description:
        "استمتع بإزالة السموم بشكل طبيعي في البيئة الهادئة من بلورات الملح.",
      color: "white",
    },
    {
      image: "/homepage/hero/4.jpeg",
      title: "الهروب المتجدد",
      description: "قم بتجديد عقلك وجسدك بزيارة كهف الملح لدينا.",
      color: "white",
    },
    {
      image: "/homepage/hero/5.jpeg",
      title: "منطقة اللعبة: زيبلاين",
      description: "ارتقِ إلى آفاق جديدة في تحدٍ نهائي لعبة الزيبلاين!",
      color: "white",
    },
    {
      image: "/homepage/hero/6.jpeg",
      title: "ملاذ هادئ",
      description: "استرخِ في الأجواء الهادئة داخل كهف الملح.",
      color: "white",
    },
  ];
  