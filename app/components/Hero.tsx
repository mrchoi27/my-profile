export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, var(--bg-hero-from), var(--bg-hero-to))`,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6"
          style={{ color: 'var(--text-heading)' }}
        >
          안녕하세요,{' '}
          <span style={{ color: 'var(--color-primary-light)' }}>최민락</span>입니다
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          열정적인 개발자로, 혁신적인 웹 솔루션을 만듭니다
        </p>
        <div className="mt-6 sm:mt-8">
          <a
            href="#about"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 min-h-[44px] rounded-full font-medium transition-colors"
            style={{
              background: 'var(--color-primary)',
              color: '#ffffff',
            }}
          >
            더 알아보기
          </a>
        </div>
      </div>
    </section>
  );
}
