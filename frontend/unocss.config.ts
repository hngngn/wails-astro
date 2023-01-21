import { defineConfig, presetUno, transformerVariantGroup } from "unocss"

export default defineConfig({
    presets: [presetUno()],
    transformers: [transformerVariantGroup()],
    shortcuts: [
        {
            img: "h-80px transition-all duration-200 ease-linear hover:filter-drop-shadow-lg",
            "center-screen": "flex justify-center items-center min-h-screen",
            center: "flex justify-center items-center",
            input: "border py-2.5 px-4 rounded-3 transition-all outline-none duration-100 ease-linear focus:(outline-none ring ring-orange-500) text-sm",
        },
    ],
    preflights: [
        {
            getCSS: () => `
                html,
                body {
                    font-family: "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
                        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    font-weight: 400;
                    user-select: none;
                    height: 100%;
                    overflow: hidden;
                }
                `,
        },
    ],
})
