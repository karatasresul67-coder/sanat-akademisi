export type Course = { slug: string; title: string; category: string; age: string; description: string; color: string; image: string; duration: string };
export type Application = { id: string; student_name: string; phone: string; age_group: string; course: string; message: string; status: "new" | "contacted" | "closed"; created_at: string };

export const courses: Course[] = [
  { slug:"piyano", title:"Piyano", category:"Müzik", age:"4+ yaş", description:"Notaları tanı, kendi melodini yaz ve müziğin içine gir.", color:"#6C3BFF", image:"/images/course-piano.jpg", duration:"8 hafta" },
  { slug:"gitar", title:"Gitar", category:"Müzik", age:"7+ yaş", description:"Akordan ritme, ilk şarkından sahne performansına.", color:"#FF7049", image:"/images/course-guitar.jpg", duration:"8 hafta" },
  { slug:"keman", title:"Keman", category:"Müzik", age:"6+ yaş", description:"Yayını tanı, sesini bul ve klasik müziğin zarafetini keşfet.", color:"#17C9C3", image:"/images/course-violin.jpg", duration:"8 hafta" },
  { slug:"bateri", title:"Bateri", category:"Müzik", age:"8+ yaş", description:"Ritmi bedeninde hisset, birlikte çalmanın enerjisini yaşa.", color:"#FFD65A", image:"/images/course-drums.jpg", duration:"8 hafta" },
  { slug:"resim", title:"Resim", category:"Görsel Sanatlar", age:"4+ yaş", description:"Renkleri karıştır, hayalini tuvale taşı ve üretmenin keyfini yaşa.", color:"#FF7049", image:"/images/course-painting.jpg", duration:"6 hafta" },
  { slug:"karakalem", title:"Karakalem", category:"Görsel Sanatlar", age:"10+ yaş", description:"Işık, gölge ve çizgiyle gözlem gücünü geliştir.", color:"#6C3BFF", image:"/images/course-sketch.jpg", duration:"6 hafta" },
  { slug:"seramik", title:"Seramik", category:"Görsel Sanatlar", age:"6+ yaş", description:"Ellerinle şekillendir, kendi objeni üret ve fırından çıkan sürprizi bekle.", color:"#17C9C3", image:"/images/course-ceramics.jpg", duration:"6 hafta" },
  { slug:"bale", title:"Bale", category:"Sahne Sanatları", age:"4+ yaş", description:"Duruş, denge ve müziğin içinden akan bir hareket dünyası.", color:"#FFD65A", image:"/images/course-ballet.jpg", duration:"8 hafta" },
  { slug:"modern-dans", title:"Modern Dans", category:"Sahne Sanatları", age:"8+ yaş", description:"Bedeninle anlat, kendi hareket dilini oluştur.", color:"#17C9C3", image:"/images/course-dance.jpg", duration:"8 hafta" },
  { slug:"tiyatro", title:"Tiyatro", category:"Sahne Sanatları", age:"7+ yaş", description:"Sahneye çık, birlikte üret, hikâyenin parçası ol.", color:"#FF7049", image:"/images/course-theatre.jpg", duration:"8 hafta" },
  { slug:"oyunculuk", title:"Oyunculuk", category:"Sahne Sanatları", age:"14+ yaş", description:"Karakter yarat, sesini ve bedenini sahnede özgürleştir.", color:"#6C3BFF", image:"/images/course-acting.jpg", duration:"8 hafta" },
  { slug:"drama", title:"Yaratıcı Drama", category:"Sahne Sanatları", age:"5+ yaş", description:"Oyunla keşfet, birlikte hayal et, kendini ifade et.", color:"#FFD65A", image:"/images/course-drama.jpg", duration:"6 hafta" },
  { slug:"fotografcilik", title:"Fotoğrafçılık", category:"Dijital Sanatlar", age:"12+ yaş", description:"Görmeyi öğren, kendi hikâyeni kadrajla anlat.", color:"#17C9C3", image:"/images/course-photo.jpg", duration:"6 hafta" },
  { slug:"dijital-sanatlar", title:"Dijital Sanatlar", category:"Dijital Sanatlar", age:"10+ yaş", description:"Tablet, renk ve fikirlerle yeni nesil üretim alanına gir.", color:"#6C3BFF", image:"/images/course-digital.jpg", duration:"8 hafta" },
  { slug:"sanat-korosu", title:"Şan", category:"Müzik", age:"10+ yaş", description:"Nefesini tanı, sesini güçlendir ve kendi renginle söyle.", color:"#FF7049", image:"/images/course-vocal.jpg", duration:"8 hafta" },
  { slug:"baglama", title:"Bağlama", category:"Müzik", age:"8+ yaş", description:"Anadolu ezgilerini öğren, köklerinle yeni bir bağ kur.", color:"#FFD65A", image:"/images/course-baglama.jpg", duration:"8 hafta" }
];

export const instructors = [
  { name:"Dilan Yılmaz", role:"Dans & Bale Eğitmeni", image:"/images/instructor-dilan.jpg", bio:"Hareketin ifade gücüne ve her öğrencinin kendi ritmini bulmasına inanıyor." },
  { name:"Mert Kaya", role:"Müzik Eğitmeni", image:"/images/instructor-mert.jpg", bio:"Müziği teknikten önce merak ve oyunla buluşturuyor." },
  { name:"Elif Aras", role:"Görsel Sanatlar Eğitmeni", image:"/images/instructor-elif.jpg", bio:"Renklerin ve dokuların herkes için bir hikâye taşıdığına inanıyor." }
];

export const events = [
  { title:"Bahar Sahnesi", type:"Konser", date:"18 Mayıs", image:"/images/event-concert.jpg", description:"Öğrencilerimizin dönem sonu performansları." },
  { title:"Renklerin Peşinde", type:"Sergi", date:"25 Mayıs", image:"/images/event-exhibition.jpg", description:"Atölyelerimizden seçilmiş işler ve açık stüdyo." },
  { title:"Hareket Laboratuvarı", type:"Atölye", date:"01 Haziran", image:"/images/event-workshop.jpg", description:"Her yaşa açık, ritim ve beden odaklı bir gün." }
];
