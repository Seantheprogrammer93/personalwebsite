import React from 'react'

const NavBar = () => {
    return (
        <header aria-label="Site Header" class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="md:flex md:items-center md:gap-12">
                        <a class="block text-teal-600" href="/">
                            <span class="sr-only">Home</span>
                            <img src='/logo.svg' alt="logo" className="w-6 h-6" />

                        </a>
                    </div>

                    <div class="hidden md:block">
                        <nav aria-label="Site Nav">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="/"
                                    >
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="/portfolio"
                                    >
                                        Portfolio
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="https://github.com/Seantheprogrammer93"
                                        target="_blank"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        class="text-gray-500 transition hover:text-gray-500/75"
                                        href="mailto:srmclin93@yahoo.com"
                                    >
                                        Contact Me
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar