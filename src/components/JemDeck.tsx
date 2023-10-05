"use client"
import { CSSProperties } from "react"



import styles from "./JemDeck.module.scss"

// TODO infinity card

export default function JemDeck(props: { cardCount: number, gap: number, art: React.ReactNode, children: React.ReactNode }) {


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
                                        {props.art}
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