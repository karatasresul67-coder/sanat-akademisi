create extension if not exists "pgcrypto";

create type application_status as enum ('new','contacted','closed');

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  phone text not null,
  age_group text not null,
  course text not null,
  message text,
  kvkk_consent boolean not null default false,
  status application_status not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null, category text not null,
  description text, age_group text, duration text, image_url text, is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.instructors (
  id uuid primary key default gen_random_uuid(), name text not null, role text not null, bio text, image_url text,
  created_at timestamptz not null default now()
);
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(), title text not null, type text not null, event_date date,
  description text, image_url text, created_at timestamptz not null default now()
);
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(), title text, category text, media_url text not null, media_type text not null default 'image',
  created_at timestamptz not null default now()
);

alter table public.applications enable row level security;
alter table public.courses enable row level security;
alter table public.instructors enable row level security;
alter table public.events enable row level security;
alter table public.gallery_items enable row level security;

create policy "public can read active courses" on public.courses for select using (is_active = true);
create policy "public can read instructors" on public.instructors for select using (true);
create policy "public can read events" on public.events for select using (true);
create policy "public can read gallery" on public.gallery_items for select using (true);
create policy "authenticated admins read applications" on public.applications for select to authenticated using (auth.jwt() ->> 'role' = 'admin');
create policy "authenticated admins manage content" on public.courses for all to authenticated using (auth.jwt() ->> 'role' = 'admin') with check (auth.jwt() ->> 'role' = 'admin');
create policy "authenticated admins manage instructors" on public.instructors for all to authenticated using (auth.jwt() ->> 'role' = 'admin') with check (auth.jwt() ->> 'role' = 'admin');
create policy "authenticated admins manage events" on public.events for all to authenticated using (auth.jwt() ->> 'role' = 'admin') with check (auth.jwt() ->> 'role' = 'admin');
create policy "authenticated admins manage gallery" on public.gallery_items for all to authenticated using (auth.jwt() ->> 'role' = 'admin') with check (auth.jwt() ->> 'role' = 'admin');
