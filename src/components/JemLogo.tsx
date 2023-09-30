"use client"

import Logo from "../../public/jemlogo.svg"

export default function KotaLogo(props: { size?: number | string }) {
    const {
        size = 100
    } = props

    return (
        <div style={{ width: "1em", height: "1em", fontSize: size }}>
            <Logo />
        </div>
    )
}