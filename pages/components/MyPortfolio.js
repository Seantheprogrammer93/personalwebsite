import React from 'react'

const MyPortfolio = () => {
    return (
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h2 class="text-3xl font-bold sm:text-4xl">My Portfolio</h2>
                </div>

                <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        class="block rounded-xl border border-black p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                        href="https://joinzinc.com"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-wallet2" viewBox="0 0 16 16">
                            <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                        </svg>

                        <h2 class="mt-4 text-xl font-bold">Zinc Wallet</h2>
                        <p class="mt-1 text-sm">
                            Zinc is a non-custodial cryptocurrency wallet that I built using ReactJS, TailwindCSS, Magic.link SDK and deployed on Vercel. It currently uses the Goerli testnet.
                        </p>
                    </a>
                    <a
                        class="block rounded-xl border border-black p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                        </svg>

                        <h2 class="mt-4 text-xl font-bold">More to come...</h2>
                        <p class="mt-1 text-sm">
                            I'm always learning and building, so I'll be adding more projects to this page soon. You may want to check out my
                            {' '}
                            <a class="text-blue-700 underline" href='https://github.com/Seantheprogrammer93'>
                                GitHub
                            </a>
                            {' '}
                            profile in the meantime.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default MyPortfolio