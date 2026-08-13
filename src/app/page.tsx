import HeroSection from "../sections/HeroSection";
import BookingSection from "../sections/BookingSection";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <main>
            <section className="min-h-screen">
                <HeroSection />
            </section>
            <section className="min-h-screen">
                <BookingSection />
            </section>
            <Footer />
        </main>        
    );
}

export default Home;