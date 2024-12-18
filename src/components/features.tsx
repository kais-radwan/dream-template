// import { IconMailFilled } from "@tabler/icons-react";
import AnalyticsIcon from "../icons/analytics";
import CalendarIcon from "../icons/calendar";
import CaretUpIcon from "../icons/caret-up";
import CpuIcon from "../icons/cpu";
import DrawIcon from "../icons/draw";
import MailIcon from "../icons/mail";
import TerminalIcon from "../icons/terminal";
import { cn, readH } from "../lib/utils";
import Globe from "./globe";

interface BarProps {
  className?: string;
}

function AnalyticsBar({ className }: BarProps) {
  const height = readH(className);

  return (
    <div
      className={cn(
        `w-3 ${
          height < 90
            ? "bg-accent/70 border"
            : "bg-gradient-to-b from-primary to-emerald-500"
        } backdrop-blur rounded-full z-10`,
        className
      )}
      style={
        height >= 90
          ? {
              boxShadow: "0px 0px 7px 0px hsl(var(--primary))",
            }
          : {}
      }
    ></div>
  );
}

export function Features() {
  const barsValues = [
    "h-[50%]",
    "h-[50%]",
    "h-[90%]",
    "h-[30%]",
    "h-[30%]",
    "h-[70%]",
    "h-[50%]",
    "h-[60%]",
  ];

  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden">
      {/* <div className="w-36 h-56 absolute top-24 -left-2 bg-primary rounded-full blur-2xl opacity-20"></div> */}
      <div className="h-36 w-64 absolute top-24 left-32 bg-primary rounded-full blur-3xl opacity-10 z-0"></div>
      <div className="h-36 w-64 absolute bottom-0 right-0 bg-primary rounded-full blur-3xl opacity-5 z-0"></div>
      <div className="h-96 w-96 absolute bottom-0 -right-20 bg-emerald-500 rounded-2xl blur-3xl opacity-5 z-0"></div>

      <div className="w-full h-screen p-10 max-w-5xl flex flex-col gap-6 z-10 relative">
        <div className=""></div>
        <div className="w-full h-full flex items-center gap-6 z-10">
          <div className="w-full h-full flex flex-col justify-center gap-2 p-2">
            <div
              className="max-w-max text-sm rounded-full caveat-300 text-primary"
              style={{
                textShadow: "0px 0px 10px hsl(var(--primary))",
              }}
            >
              FEATURES
            </div>
            <h2 className="playfair-300 text-4xl gradientText mt-4 mb-2">
              Unmatched Productivity
            </h2>
            <p className="text-sm text-body">
              Elevate your productivity, Manage tasks, and organize your
              calendar effortlessly using one AI-powered hub
            </p>
          </div>

          <div className="w-full h-full flex items-center justify-center gap-6">
            <div className="w-full h-full flex flex-col gap-6">
              {/** AI-Powered */}
              <div className="w-full h-full border border-primary rounded-2xl bg-gradient-to-b from-[#050505] to-black backdrop-blur p-6 flex flex-col gap-2 relative overflow-hidden">
                <div className="h-10 w-10 absolute -bottom-2 bg-primary rounded-full blur-2xl z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full z-0 inset-0 textureBg opacity-10"></div>

                <h3 className="text-sm">AI-Powered</h3>
                <div className="text-sm text-body max-w-[100%]">
                  Use AI agents to automate your entire workflow
                </div>
              </div>

              {/** Shortcuts */}
              <div className="w-full rounded-2xl p-3 py-5 flex flex-col gap-2 relative overflow-hidden items-center justify-center">
                <div className="h-full flex items-end justify-center gap-2.5">
                  <div className="w-7 h-7 border rounded-lg flex items-center justify-center text-[10px] bg-black">
                    A
                  </div>
                  <div className="w-7 h-7 border rounded-lg flex items-center justify-center text-[10px] bg-black">
                    S
                  </div>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] bg-gradient-to-r from-primary to-emerald-500"
                    style={{
                      boxShadow: "0px 0px 5px 0px hsl(var(--primary))",
                    }}
                  >
                    D
                  </div>
                  <div className="w-7 h-7 border rounded-lg flex items-center justify-center text-[10px] bg-black">
                    F
                  </div>
                </div>
                <div className="h-full flex items-start justify-center gap-2.5">
                  <div
                    className="w-14 h-7 rounded-lg flex items-center justify-center text-[10px] bg-gradient-to-r from-primary to-emerald-500"
                    style={{
                      boxShadow: "0px 0px 5px 0px hsl(var(--primary))",
                    }}
                  >
                    <CaretUpIcon />
                  </div>
                  <div className="w-7 h-7 border rounded-lg flex items-center justify-center text-[10px] bg-black">
                    Z
                  </div>
                  <div className="w-7 h-7 border rounded-lg flex items-center justify-center text-[10px] bg-black">
                    X
                  </div>
                </div>
              </div>
            </div>

            {/** Integrations section */}
            <div className="w-full h-full border border-border/80 rounded-2xl bg-accent/5 backdrop-blur p-7 flex flex-col gap-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full z-0 inset-0 textureBg opacity-10"></div>

              <div className="w-full h-full flex flex-col gap-2">
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <MailIcon className="opacity-60" />
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <DrawIcon className="opacity-60" />
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <AnalyticsIcon className="opacity-60" />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between gap-2">
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <TerminalIcon className="opacity-60" />
                  </div>
                  <div>
                    <div
                      className="w-12 h-12 bg-black border border-primary border-b-[3px] rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        boxShadow:
                          "inset 0px 0px 10px 0px hsl(var(--primary-dark)), 0px 0px 50px 0px hsl(var(--primary-dark))",
                      }}
                    >
                      <div
                        className="text-[13px] text-primary font-semibold caveat-300"
                        style={{
                          textShadow: "0px 0px 5px hsl(var(--primary))",
                        }}
                      >
                        Dream
                      </div>
                    </div>
                    <div className="w-full h-3 bg-primary-dark rounded-b-2xl -mt-2.5 blur-sm z-0"></div>
                  </div>
                  <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                    <CalendarIcon className="opacity-60" />
                  </div>
                </div>
              </div>

              <h3>Seamless integrations</h3>
              <div className="text-sm text-body max-w-[100%]">
                Connect your favorite tools & apps easily
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex items-center jusify-center gap-6">
          {/** Analytics section */}
          <div className="w-full h-full border border-border/80 rounded-2xl bg-accent/5 backdrop-blur p-7 flex flex-col gap-2 relative overflow-hidden">
            <div className="h-36 w-36 absolute -bottom-20 left-20 bg-primary rounded-full blur-3xl opacity-15 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full z-0 inset-0 textureBg opacity-10"></div>

            <h3>Advanced Analytics</h3>
            <div className="text-sm text-body max-w-[90%]">
              Unlock valuable insights and data-driven decisions with ease and
              confidence
            </div>
            <div className="w-full h-full flex items-end justify-between gap-5 relative mt-4">
              <div className="w-full h-full flex flex-col items-center justify-between gap-5 absolute z-0">
                {new Array(4).fill(0).map((_, index) => (
                  <div
                    key={`analytics-line-${index}`}
                    className="w-full border-t-1 border-dashed border-border/60"
                  ></div>
                ))}
              </div>
              {barsValues.map((value, index) => (
                <AnalyticsBar
                  key={`analytics-bar-${index}`}
                  className={value}
                />
              ))}
            </div>
          </div>

          {/** Real-time section */}
          <div className="w-full h-full border border-border/80 rounded-2xl bg-accent/5 backdrop-blur p-7 flex flex-col gap-2 relative overflow-hidden">
            <div className="h-36 w-64 absolute bottom-0 right-10 bg-primary rounded-full blur-3xl opacity-25 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full z-0 inset-0 textureBg opacity-10"></div>

            <h3>Real-Time Collaboration</h3>
            <div className="text-sm text-body max-w-[90%]">
              Stay connected with your teams and work together in real-time no
              matter where you are
            </div>
            <div className="w-full h-full flex items-end justify-between gap-5 relative mt-4 opacity-80">
              <Globe className="absolute -right-10 -top-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
