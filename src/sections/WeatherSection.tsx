import Image from "next/image";

export default function WeatherSection() {
    return (
        <>
            <h1 className="font-display text-center text-5xl py-2 pt-7 text-black">
                Stockholm
            </h1>

            <h2 className="mx-auto flex w-[80%] items-center justify-between py-10">
                <button className="text-2xl text-black">
                    ←
                </button>
                <span className="font-display text-2xl text-black">
                    Idag
                </span>
                <button className="text-2xl text-black">
                     →
                </button>
            </h2>

            <div className="mx-auto h-px w-[80%] bg-black/30" />

           <div className="pt-10 text-left text-2xl pl-40 text-black">
                <p>H: 22 grader</p>
                <p>L: 9 grader</p>
                <p>Halvklart</p>
            </div>

            <div className="flex justify-center">
                <Image
                    src="/images/sol.png"
                    alt="Väder"
                    width={400}
                    height={400}
                />
            </div>
        </>
    );
}