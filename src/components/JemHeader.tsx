"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./JemHeader.module.scss";
import JemLogo from "./JemLogo";
import { motion } from "framer-motion";


export default function JemHeader() {
    return (
        <div className="h-24 flex">
            <div className="flex-1">
                {/* <JemLogo size={64}/> */}
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
                        <Link href={route}>
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