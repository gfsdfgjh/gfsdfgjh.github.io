import { profile } from "@/lib/content";
import { copyText } from "@/lib/copy";
import { ArrowUp, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker text-[10px] text-paper/50">Contact</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight">
              期待与你交流合作
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <button
                onClick={() => copyText(profile.email)}
                className="story-link inline-flex items-center gap-2 text-paper/85 hover:text-paper"
              >
                <Mail size={14} />
                {profile.email}
              </button>
              <span className="text-paper/60">
                香港理工大学 · 数据科学与人工智能学系
              </span>
            </div>
            <p className="mt-3 text-xs text-paper/40">
              点击邮箱即可复制
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-fit items-center gap-2 self-start rounded-sm border border-paper/25 px-4 py-2 text-sm text-paper/85 transition-colors hover:border-paper/60 hover:text-paper md:self-end"
          >
            回到顶部
            <ArrowUp size={14} />
          </button>
        </div>

        <p className="mt-12 border-t border-paper/10 pt-6 text-xs text-paper/40">
          © {new Date().getFullYear()} {profile.name}（{profile.nameEn}）· 个人学术主页
        </p>
      </div>
    </footer>
  );
}
