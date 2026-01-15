import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ImageSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(5); // Start with the last card (visible at front)

  const images = [
    { src: "/images/desarrolloweb/web3.png", title: "EQUILIBRIO CLINIC", url: "https://equilibrioclinic.com.co" },
    { src: "/images/desarrolloweb/web1.png", title: "ACB FIT", url: "https://acbfit.com" },
    { src: "/images/desarrolloweb/web2.png", title: "ARISMENDY ANDRADE", url: "https://arismendyandrade.com" },
    { src: "/images/desarrolloweb/04.jpg", title: "TRADICION CARIBE", url: "https://tradicioncaribe.com" },
    { src: "/images/desarrolloweb/05.jpg", title: "ROBERTO CASANOVA", url: "https://robertcasanova.com" },
    { src: "/images/desarrolloweb/CF.png", title: "COBRAFLOW", url: "https://www.cobraflow.co" },
  ];

  const splitTextIntoSpans = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0\u00A0" : char}
      </span>
    ));
  };

  const initializeCards = () => {
    if (!sliderRef.current) return;
    const cards = Array.from(sliderRef.current.querySelectorAll(".slider-card"));

    gsap.to(cards, {
      y: (i) => -15 + 15 * i + "%",
      z: (i) => 15 * i,
      opacity: 1,
      duration: 1,
      ease: "cubic-bezier(0.83, 0, 0.17, 1)",
      stagger: -0.1,
    });

    // Show button only on last card
    gsap.set(".slider-button", { opacity: 0 });
    gsap.set(".slider-card:last-child .slider-button", { opacity: 1 });
  };

  const handleScroll = () => {
    if (isAnimatingRef.current || !sliderRef.current) return;
    isAnimatingRef.current = true;

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(".slider-card"));
    const lastCard = cards[cards.length - 1] as HTMLElement;
    const nextCard = cards[cards.length - 2] as HTMLElement;

    gsap.to(lastCard.querySelectorAll("h2 span"), {
      y: 200,
      duration: 0.75,
      ease: "cubic-bezier(0.83, 0, 0.17, 1)",
    });

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "cubic-bezier(0.83, 0, 0.17, 1)",
      onComplete: () => {
        slider.prepend(lastCard);
        initializeCards();
        gsap.set(lastCard.querySelectorAll("h2 span"), { y: -200 });

        // Update active index - move to previous image
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 1000);
      },
    });

    if (nextCard) {
      gsap.to(nextCard.querySelectorAll("h2 span"), {
        y: 0,
        duration: 1,
        ease: "cubic-bezier(0.83, 0, 0.17, 1)",
        stagger: 0.05,
      });
    }
  };

  useEffect(() => {
    initializeCards();

    if (sliderRef.current) {
      gsap.set(".slider-card h2 span", { y: -200 });
      gsap.set(".slider-card:last-child h2 span", { y: 0 });
      gsap.set(".slider-button", { opacity: 0 });
      gsap.set(".slider-card:last-child .slider-button", { opacity: 1 });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && !isAnimatingRef.current) {
        e.preventDefault();
        handleScroll();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (isAnimatingRef.current) return;
      isDraggingRef.current = true;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        handleScroll();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (isAnimatingRef.current) return;
      isDraggingRef.current = true;
      e.preventDefault();
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false;
        handleScroll();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart as any);
      slider.addEventListener("touchend", handleTouchEnd);
      slider.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart as any);
        slider.removeEventListener("touchend", handleTouchEnd);
        slider.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, []);

  return (
    <section id="webs-portafolio" className="relative w-full h-[42vh] md:h-screen overflow-hidden bg-black flex flex-col">
      {/* Title */}
      <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 z-10 space-y-1 md:space-y-2 w-full px-4">
        <h2 className="text-lg md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          Webs que <span className="gradient-text">convierten</span>
        </h2>
        <p className="text-[10px] md:text-lg lg:text-xl text-neutral-400 text-center max-w-2xl mx-auto px-2 md:px-4">
          Proyectos que generan resultados medibles
        </p>
      </div>

      <div
        ref={sliderRef}
        className="absolute top-[10vh] md:top-[15vh] w-full h-[calc(100%-12vh)] md:h-[calc(100%-200px)] overflow-hidden"
        style={{
          perspective: "200px",
          perspectiveOrigin: "50% 100%",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slider-card absolute top-1/2 left-1/2 w-[60%] sm:w-[55%] md:w-1/2 aspect-video md:aspect-auto md:h-[500px] rounded-lg overflow-hidden bg-black cursor-grab active:cursor-grabbing select-none"
            style={{
              transform: "translate3d(-50%, -50%, 0px)",
              opacity: 0,
            }}
            data-index={index}
          >
            <img
              src={image.src}
              alt={image.title}
              className="absolute w-full h-full object-cover object-top opacity-75"
              draggable={false}
            />
            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex flex-col items-center gap-1.5 md:gap-6">
              <h2 className="text-center text-[3.2vw] sm:text-[2.8vw] md:text-[4vw] font-sans font-bold tracking-tight uppercase text-white px-2">
                {splitTextIntoSpans(image.title)}
              </h2>
              <Button className="bg-white text-black hover:bg-white/90 group slider-button opacity-0 text-[8px] md:text-base px-2 py-0.5 md:px-6 md:py-2 h-auto" asChild>
                <a
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:gap-2"
                >
                  Ver Proyecto
                  <ExternalLink className="w-2.5 h-2.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
