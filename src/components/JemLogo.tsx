"use client"

import Logo from "../../public/jemicon.svg"

export default function KotaLogo(props: { width?: number | string, height?: number | string }) {
    const {
        width,
        height
    } = props

    return (
        <div style={{ width, height }}>
            <Logo width={width} height={height} />
        </div>
    )
}