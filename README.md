# StudyFlow — Öğrenci Görev Planlayıcı

React + Vite + Pure CSS + LocalStorage ile hazırlanmış responsive CRUD web uygulaması.

## Özellikler
- **Ekle:** Başlık, ders, tarih ve öncelik bilgileriyle yeni görev oluşturma
- **Listele:** Görevleri listeleme, arama, duruma/önceliğe göre filtreleme
- **Güncelle:** Görev düzenleme ve tamamlandı durumunu değiştirme
- **Sil:** Onay alarak görev silme
- **LocalStorage:** Yenilemeden sonra görevleri koruma
- **Dashboard:** Toplam, bekleyen, tamamlanan görevler ve ilerleme yüzdesi
- **Responsive tasarım:** Mobil ve masaüstü ekranlara uyum

## Kurulum
Node.js 18+ gereklidir.
```bash
npm install
npm run dev
```
Terminalde verilen yerel bağlantıyı açın (genellikle http://localhost:5173).

## Üretim sürümü
```bash
npm run build
npm run preview
```

## Dosya yapısı
```text
StudyFlow_Web_Projesi/
├── index.html
├── package.json
├── netlify.toml
├── src/
│   ├── main.jsx
│   ├── styles.css
│   ├── Components/
│   │   ├── TaskCard.jsx
│   │   └── TaskModal.jsx
│   ├── Pages/
│   │   └── App.jsx
│   └── Interfaces/
│       └── task.js
├── screenshots/
│   └── studyflow-ekran-goruntusu.png
└── README.md
```

## GitHub'a yükleme
GitHub'da **Public** bir repo oluşturup proje klasöründe:
```bash
git init
git add .
git commit -m "Initial commit: StudyFlow React task planner"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/REPO_ADIN.git
git push -u origin main
```

## Netlify'da yayınlama
1. https://app.netlify.com/ adresine giriş yapın.
2. **Add new project → Import an existing project** seçin.
3. GitHub deponuzu seçin.
4. Build command: `npm run build`, Publish directory: `dist`.
5. **Deploy** seçin ve oluşan site bağlantısını teslim formuna yazın.

## Notlar
- Örnek görevler ilk açılışta gösterilir; yapılan değişiklikler tarayıcıda saklanır.
- Veriler sunucuya aktarılmaz; tarayıcı temizlenirse görevler silinebilir.
- Proje bir yapay zekâ modeli içermez; verilen web geliştirme yönergesindeki CRUD uygulamasını karşılar.
- GitHub ve Netlify bağlantıları kişisel hesapla yayınlandıktan sonra oluşur.
