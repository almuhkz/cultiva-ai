export default function Landing() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-white to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-95 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards", color: "#66BB6A" }}
        >
          <div style={{ textAlign: "center" }}>
            Meet CultivaAI,
            <br />
            Your intelligent farming companion
          </div>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity- md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Powered by advanced AI. Get personalized advice, real-time weather data, and optimize your agricultural practices for maximum crop yields and profitability.
        </p>
      </div>
    </>
  );
}
