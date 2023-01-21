import { createSignal, Show } from "solid-js"
import { Greet } from "../../wailsjs/go/main/App"
import { BrowserOpenURL } from "../../wailsjs/runtime/runtime"

export const Home = () => {
    const [input, setInput] = createSignal("")
    const [msg, setMsg] = createSignal("")
    const handleGreet = async (e: Event) => {
        e.preventDefault()
        const msg = await Greet(input())
        setMsg(msg)
        setInput("")
    }

    return (
        <div class="center-screen">
            <div class="flex flex-col gap-7">
                <div class="center gap-10">
                    <button onClick={() => BrowserOpenURL("https://wails.io/")}>
                        <img
                            src="/images/wails.svg"
                            alt="Wails"
                            class="img hover:(filter-drop-shadow-color-red-200)"
                        />
                    </button>
                    <button onClick={() => BrowserOpenURL("https://docs.astro.build/")}>
                        <img
                            src="/images/astro.svg"
                            alt="Astro"
                            class="img hover:(filter-drop-shadow-color-orange-200)"
                        />
                    </button>
                </div>
                <div class="font-500 flex gap-5 flex-col">
                    <h1 class="text-lg">Click on the Wails and Astro logos to learn more.</h1>
                    <p>
                        Recommended IDE setup:{" "}
                        <button
                            class="c-blue-500 font-600"
                            onClick={() => BrowserOpenURL("https://code.visualstudio.com/")}>
                            VS Code
                        </button>{" "}
                        +{" "}
                        <button
                            class="c-orange-500 font-600"
                            onClick={() =>
                                BrowserOpenURL(
                                    "https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode"
                                )
                            }>
                            Astro
                        </button>{" "}
                        +{" "}
                        <button
                            class="font-600"
                            onClick={() =>
                                BrowserOpenURL(
                                    "https://marketplace.visualstudio.com/items?itemName=antfu.unocss"
                                )
                            }>
                            UnoCSS
                        </button>{" "}
                        +{" "}
                        <button
                            class="font-600 c-cyan-500"
                            onClick={() =>
                                BrowserOpenURL(
                                    "https://marketplace.visualstudio.com/items?itemName=golang.Go"
                                )
                            }>
                            Go
                        </button>
                    </p>
                </div>
                <form onSubmit={handleGreet} class="flex flex-col gap-3 w-18rem self-center">
                    <input
                        autofocus
                        class="input"
                        type="text"
                        value={input()}
                        onChange={(e) => setInput(e.currentTarget.value)}
                    />
                    <button type="submit" class="p-2.5 bg-black rounded-3 color-white">
                        Greet
                    </button>
                </form>
                <Show when={msg().length !== 0}>
                    <p class="text-center color-red-500 font-600">{msg()}</p>
                </Show>
            </div>
        </div>
    )
}
