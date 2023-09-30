"use client"

import Logo from "../../public/jemcodinglogo.svg"

export default function KotaLogo(props: { size?: number | string }) {
    const {
        size = 100
    } = props

    return (
        <div style={{  display: 'flex', alignItems: "center", justifyContent: "center", width: "1em", height: "1em", fontSize: size }}>
            <Logo />
        </div>
    )
}