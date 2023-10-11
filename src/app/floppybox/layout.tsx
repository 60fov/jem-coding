import Script from "next/script"

export default function FloppyBoxLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      {props.children}
      <Script src="/floppy-box.js" />
    </>
  )
}