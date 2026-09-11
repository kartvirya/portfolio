import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Trophy } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Achievements
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Highlights & milestones
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A selection of milestones across security research, freelance
              delivery, academics, and modern development practice.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 max-w-[800px] mx-auto w-full">
          {DATA.achievements.map((achievement, index) => {
            const content = (
              <div className="flex items-start gap-x-3 justify-between w-full group">
                <div className="flex items-start gap-x-3 flex-1 min-w-0">
                  <div className="size-8 md:size-10 p-1.5 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
                    <Trophy className="size-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <div className="font-semibold leading-none flex items-center gap-2">
                      {achievement.title}
                      {"href" in achievement && achievement.href ? (
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
                <div className="text-xs tabular-nums text-muted-foreground text-right flex-none pt-0.5">
                  {achievement.date}
                </div>
              </div>
            );

            return (
              <BlurFade
                key={achievement.title}
                delay={BLUR_FADE_DELAY * 12 + index * 0.05}
              >
                {"href" in achievement && achievement.href ? (
                  <Link
                    href={achievement.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
