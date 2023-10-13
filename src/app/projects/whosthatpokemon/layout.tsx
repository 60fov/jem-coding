export default function WTPLayout(props: { children: React.ReactNode }) {
  return <main className="w-full h-full flex items-center justify-center">{props.children}</main>
}