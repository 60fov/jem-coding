"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import JemCodingLogo from "./JemCodingLogo";
import JemLogo from "./JemLogo";

import styles from "./JemHeader.module.scss";

export default function JemHeader() {
    return (
        <div className="flex shrink-0 grow-0 p-4 h-24">
            <div className="flex-1 flex items-center">
                <JemLogo height={"100%"} />
                {/* <JemCodingLogo size={96}/> */}
            </div>
            <div className="flex-1 flex items-center justify-center">
                <JemNav />
            </div>
            <div className="flex-1" />
        </div>
    )
}


const routes = [
    "/projects",
    "/concepts",
    "/discovery"
]


function JemNav() {
    const pathname = usePathname();

    return (
        <nav className={styles.jemnav}>
            {
                routes.map(route => {
                    const isActive = route === pathname
                    return (
                        <Link key={route} href={route}>
                            <div data-jem-nav-link data-active={isActive}>
                                {isActive && <motion.div data-active-link-indicator layoutId="active-link-indicator" />}
                                <span data-nav-label>{route.slice(1)}</span>
                            </div>
                        </Link>
                    )
                })
            }
        </nav>
    )
}