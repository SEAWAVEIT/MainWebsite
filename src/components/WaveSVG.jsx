import { useEffect } from "react";
import gsap from "gsap";

function applyGlowEffect() {
    const svg = document.getElementById("glow-svg");

    // Hover animation using GSAP
    const hoverAnimation = gsap.to(svg, {
        duration: 0.5,
        boxShadow: "0 0 20px rgba(0,255,0,0.5)", // Soft glowing effect with green shadow
        stroke: "#00FF00", // Green stroke color
        paused: true, // Initially paused
    });

    svg.addEventListener("mouseenter", () => {
        hoverAnimation.play();
    });

    svg.addEventListener("mouseleave", () => {
        hoverAnimation.pause();
        gsap.to(svg, {
            duration: 0.5,
            boxShadow: "none", // Reset box-shadow on mouse leave
            stroke: "currentColor", // Reset stroke color
        });
    });
}

function GlowingSVG() {
    useEffect(() => {
        applyGlowEffect();
    }, []);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="md:size-6 size-4"
            id="glow-svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
        </svg>
    );
}

export default GlowingSVG;
