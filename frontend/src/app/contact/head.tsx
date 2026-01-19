export default function Head() {
  return (
    <>
      {/* Preload Calendly resources */}
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://calendly.com" />
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="dns-prefetch" href="https://assets.calendly.com" />
    </>
  );
}
