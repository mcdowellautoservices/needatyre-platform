import type { Config } from 'tailwindcss'
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { navy:'#06172f', ink:'#0b1220', electric:'#15aaff', lime:'#c7ff2e', steel:'#eef6ff' }, boxShadow: { glow:'0 25px 80px rgba(21,170,255,.22)' } } }, plugins: [] }
export default config
