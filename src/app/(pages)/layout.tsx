import Header from "@/components/header"

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Header />
            {children}
        </main>
    )
}