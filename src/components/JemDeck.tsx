"use client"
import { CSSProperties } from "react"

import Primitives from "@/assets/primitives.svg"

import styles from "./JemDeck.module.scss"

// TODO infinity card

export default function JemDeck(props: { cardCount: number, gap: number, children: React.ReactNode }) {


    return (
        <div className={styles.jemdeck}>
            {Array
                .from({ length: props.cardCount })
                .map((_, i) => {
                    const isLastCard = i === props.cardCount - 1
                    return (
                        <div data-jem-card
                            key={`${i}`}
                            style={{
                                left: i * props.gap,
                                top: i * -props.gap,
                                '--jem-card-transition-delay': `${i * 25}ms`,
                            } as CSSProperties}
                        >
                            {isLastCard &&
                                <>
                                    <div data-card-art>
                                        <Primitives />
                                    </div>
                                    <p data-card-label>{props.children}</p>
                                </>
                            }
                        </div>
                    )
                })}
        </div>
    )
}