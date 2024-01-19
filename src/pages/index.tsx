import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//@ts-ignore
import { loadFull } from "tsparticles";
import Image from "next/image";

export default function Home(){
    const particlesInit = useCallback(async (engine: Engine) => {
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
      <>
        <Particles
            id="tsparticles"
            className="z-0"
            
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#111827",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 135,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 shadow-3xl">
          <div className="relative bg-white px-6 pt-10 pb-8 ring-4 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div className="mx-auto max-w-md">
              <div className="grid grid-cols-5 grid-rows-3">
                <Image src="/favicon.ico" className="h-16 w-16 row-span-3" alt="codiium" width={100} height={100}/>
                <h1 className="text-4xl font-semibold col-span-4 row-span-2 text-left py-3">👋 Hi, I&apos;m fisher</h1>
                <span className="italic col-span-3 row-span-1">Or codiium if you want</span>
              </div>
              <div className="divide-y divide-gray-300/50">
                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                  <p>Proficient software developer working in multiple areas</p>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-blue-100 stroke-blue-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">
                        Node.js Typescript development for 
                        <span className="font-bold text-gray-900"> websites and discord bots</span>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-blue-100 stroke-blue-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">
                        Lua scripting for
                        <span className="font-bold text-red-600"> Roblox</span>
                      </p>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-blue-100 stroke-blue-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">
                        Java programming for my 
                        <span className="font-bold text-blue-500"> FIRST Robotics</span> team.
                      </p>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-6 w-6 flex-none fill-blue-100 stroke-blue-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="11" />
                        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                      </svg>
                      <p className="ml-4">Knowledge of <span className="font-bold text-green-600">MongoDB</span> databases and <span className="font-bold text-gray-900">Git</span> version control</p>
                    </li>
                  </ul>
                  <p>I&apos;m not perfect, but i&apos;m learning new things every day in order to improve software in the future.</p>
                </div>
                <div className="p-4">
                  <a href="https://github.com/fisherjacobc/">
                      <img className="w-full" src="https://github-readme-stats.vercel.app/api?username=fisherjacobc&count_private=true&show_icons=true&hide=contribs&theme=vue-dark" alt="Github"/>
                  </a>
                </div>
                <div className="pt-4 text-base font-semibold leading-7">
                  <p className="text-gray-900">Want to get in contact?</p>
                  <p>
                    <a href="mailto:fisher@codiium.me" className="text-blue-500 hover:text-blue-600">Email me &rarr;</a>
                    <br></br>
                    <span className="italic font-normal">or <a href="https://discord.com/users/756614666066591836" className="text-blue-500 hover:text-blue-600 font-semibold">Message me on Discord &rarr;</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
