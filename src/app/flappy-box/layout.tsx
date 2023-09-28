import Script from "next/script"

export default function FlappyBoxLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      {props.children}
      <Script src="/flappy-box.js" />
    </>
  )
}