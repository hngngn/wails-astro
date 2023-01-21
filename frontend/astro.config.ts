import solidJs from "@astrojs/solid-js"
import compress from "astro-compress"
import fonts from "astro-fonts-next"
import { defineConfig } from "astro/config"
import unocss from "unocss/astro"

// https://astro.build/config
export default defineConfig({
    integrations: [
        unocss(),
        compress(),
        solidJs(),
        fonts({
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        }),
    ],
})
