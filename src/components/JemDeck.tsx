"use client"

import Primitives from "@/assets/primitives.svg"
import { motion } from "framer-motion"

import styles from "./JemDeck.module.scss"
import { CSSProperties } from "react"

// TODO infinity card

export default function JemDeck(props: { cardCount: number, gap: number, children: React.ReactNode }) {


    return (
        <motion.div className={styles.jemdeck}>
            {Array
                .from({ length: props.cardCount })
                .map((_, i) => {
                    const isLastCard = i === props.cardCount - 1
                    return (
                        <motion.div
                            key={`${i}`}
                            data-jem-card
                            style={{
                                left: i * props.gap,
                                top: i * -props.gap,
                                '--jem-card-transition-delay': `${i * 25}ms`,
                            } as CSSProperties}
                        >
                            {isLastCard &&
                                <>
                                    <div className="grow flex items-center justify-center">
                                        <Primitives />
                                    </div>
                                    <p className="font-semibold text-2xl">{props.children}</p>
                                </>
                            }
                        </motion.div>
                    )
                })}
        </motion.div>
    )
}