import React from 'react'

const AboutMe = () => {
    return (
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div class="max-w-3xl">
                    <h1 class="text-3xl font-bold sm:text-4xl">
                        <small>The personal site of</small> Sean McLin
                    </h1>
                    <h2 class="m-4">
                        <span
                            class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500"
                        >
                            👨‍💻 Software Developer
                        </span>
                    </h2>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt="Code on a computer screen"
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                            class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-16">
                        <article class="space-y-4">
                            <p>I'm a motivated software developer with education in Software Development and experience building and maintaining websites and applications.</p>
                        </article>
                        <ul class="list-disc list-inside mt-4 space-y-4">
                            <li>Languages:{' '} 
                                <span class="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-500">HTML</span>
                                <span class="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-500">CSS</span>
                                <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-500">JavaScript</span>
                                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-500">C++</span>
                            </li>
                            <li>Dev Tools:{' '} 
                                <span class="whitespace-nowrap rounded-full bg-yellow-100 px-2.5 py-0.5 text-sm text-yellow-500">TailwindCSS</span>
                                <span class="whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-sm text-orange-500">GitHub</span>
                                <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-500">Vercel</span>
                                <span class="whitespace-nowrap rounded-full bg-cyan-100 px-2.5 py-0.5 text-sm text-cyan-500">Bootstrap</span>
                                <span class="whitespace-nowrap rounded-full bg-stone-100 px-2.5 py-0.5 text-sm text-stone-500">VS Code</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutMe