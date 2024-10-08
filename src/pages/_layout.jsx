// src/pages/_layout.jsx
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main style={{ minHeight: "75vh" }}>
                {children}
            </main>
            <Footer />
        </>
    )
}