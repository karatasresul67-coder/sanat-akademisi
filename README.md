# Harika Sanat Akademisi

Türkçe, renkli ve animasyonlu sanat akademisi web sitesi. Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide React ve Supabase altyapısı için hazırlanmıştır.

## Kurulum

Node.js 20+ ve npm kurulu olmalıdır.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Yerel adres: `http://localhost:3000`

## Supabase kurulumu

1. Supabase projesi oluşturun.
2. Project URL ve anon key değerlerini `.env.local` içine yazın.
3. Service role key'i yalnızca sunucu tarafında kullanılan `SUPABASE_SERVICE_ROLE_KEY` değişkenine ekleyin; bu anahtarı istemciye açmayın.
4. `supabase/migrations/001_initial.sql` dosyasını Supabase SQL Editor'da çalıştırın.
5. Yönetici kullanıcısını Supabase Auth içinde oluşturun ve kullanıcı metadata'sına `role: admin` ekleyin.

Supabase değişkenleri yokken başvuru API'si kayıt başarılıymış gibi davranmaz; `503` döndürür ve form kullanıcıya bağlantının hazır olmadığını bildirir.

## Sayfalar

- `/` ana sayfa
- `/hakkimizda`
- `/egitimler` ve `/egitimler/[slug]`
- `/egitmenler`, `/galeri`, `/etkinlikler`, `/iletisim`, `/basvuru`
- `/admin/login` ve `/admin`

## Kontroller

```bash
npm run lint
npm run build
```
