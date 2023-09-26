"use client"

import Logo from "../../public/logo.svg"

export default function KotaLogo(props: { size?: number | string }) {
    const {
        size = 100
    } = props

    return (
        <div style={{ fontSize: size }}>
            <Logo />
        </div>
    )
}