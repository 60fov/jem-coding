import Script from "next/script"

export default function JordleLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      {props.children}
    </>
  )
}