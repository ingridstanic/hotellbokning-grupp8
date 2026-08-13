import Image from "next/image";

export default function WeatherSection() {
    return (
        <>
            <h1 className="font-display text-center text-5xl py-10 text-black">
                Stockholm
            </h1>

            <h2 className="font-display text-center text-3xl py-5 text-black">
                Idag
            </h2>

            <div className="flex justify-center">
                <Image
                    src="/images/sol.png"
                    alt="Väder"
                    width={600}
                    height={600}
                />
            </div>
        </>
    );
}