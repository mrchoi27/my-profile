export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
      style={{ background: 'var(--bg-section-light)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: 'var(--text-heading)' }}
        >
          자기소개
        </h2>
        <div
          className="rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg"
          style={{ background: 'var(--card-bg-alt)' }}
        >
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: 'var(--text-body)' }}
          >
            안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다.
            사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
          </p>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: 'var(--text-body)' }}
          >
            새로운 기술을 배우고 적용하는 것을 즐기며,
            팀과 협업하여 더 나은 결과물을 만들어내는 것에 보람을 느낍니다.
          </p>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed"
            style={{ color: 'var(--text-body)' }}
          >
            끊임없이 성장하고 발전하는 개발자가 되기 위해 노력하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
