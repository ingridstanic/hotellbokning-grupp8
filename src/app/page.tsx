import HeroSection from "../sections/HeroSection";
import BookingSection from "../sections/BookingSection";
import GuestSection from "../sections/GuestSection";
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
            <section className="min-h-screen">
                <GuestSection />
            </section>
            <Footer />
        </main>        
    );
}

export default Home;