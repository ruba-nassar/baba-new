import Image from "next/image";
import { MapPin, Mail, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE – CONTACT INFO */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* JORDAN ONLY */}
            <ContactCard
              icon={<MapPin />}
              title="Jordan"
              lines={[
                "Amman",
                "Mecca Street",
                "Al Khayrat Bldg No. 47",
                "—",
                "P.O. Box 332 Amman 11118",
                "Jordan",
                "—",
                "Tel: +962 6 552 7742",
              ]}
            />

            {/* EMAIL */}
            <ContactCard
              icon={<Mail />}
              title="Email"
              lines={["info@sa-mena.com"]}
            />

            {/* LINKEDIN */}
            <ContactCard
              icon={<Linkedin />}
              title="LinkedIn"
              lines={["#sustainable-alternatives"]}
            />
          </div>

          {/* RIGHT SIDE – FORM */}
          <div className="relative overflow-hidden rounded">
            <Image
              src="/images/contact/contact-bg.jpg"
              alt="Contact"
              fill
              className="object-cover"
              priority
            />

            <div className="relative z-10 bg-black/10 p-8">
              <form className="space-y-5">
                <Input label="Your Name (required)" />
                <Input label="Your Email (required)" />
                <Input label="Subject" />
                <Textarea label="Your Message" />

                <button
                  type="submit"
                  className="mt-4 rounded bg-emerald-600 px-6 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function ContactCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-emerald-600">{title}</h3>

      <div className="mt-3 space-y-1 text-sm text-slate-600">
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-emerald-700 mb-1">
        {label}
      </label>
      <input className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" />
    </div>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-emerald-700 mb-1">
        {label}
      </label>
      <textarea
        rows={4}
        className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
      />
    </div>
  );
}
