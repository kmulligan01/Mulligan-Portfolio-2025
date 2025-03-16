import PortCard from "./PortCard";
import portPieces from "@/utils/portfolioInfo";

export default function Portfolio() {
    return (
        <section className="tw-container" id="portfolio">
            <h2>Portfolio</h2>
            <div className="flex items-center justify-between gap-8 mt-8">
                {portPieces.map((piece) => (
                    <PortCard key={piece.id} imageSrc={piece.image} title={piece.title} url={piece.url} category={piece.category} badge={piece.badge} />
                ))}
            </div>
        </section>
    )
}