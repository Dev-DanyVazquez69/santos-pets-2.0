
export default function PagesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="bg-[url(/background.png)] bg-center bg-contain w-screen h-screen">
            <div className="bg-black/20 w-screen h-screen flex items-center justify-center">
                {children}
            </div>
        </main>
    )
}