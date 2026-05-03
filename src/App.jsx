const activities = [
  "初心者歓迎の釣行イベント",
  "釣果や思い出の記録",
  "道具選び・釣り場情報の共有",
];

function App() {
  return (
    <div className="site">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Fishing Memory</div>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#activities">Activities</a>
            <a href="#join">Join</a>
          </div>
        </nav>

        <section className="heroContent">
          <p className="eyebrow">Official Website</p>
          <h1>釣りの記憶を、仲間と残す。</h1>
          <p className="lead">
            Fishing Memory App は、釣行の思い出・釣果・活動情報をまとめるための
            釣りサークル公式ウェブサイトです。
          </p>
          <a className="button" href="#join">入会・お問い合わせ</a>
        </section>
      </header>

      <main>
        <section id="about" className="section">
          <p className="sectionLabel">About</p>
          <h2>サークル紹介</h2>
          <p>
            私たちは、初心者から経験者まで一緒に釣りを楽しむサークルです。
            海釣り・川釣り・釣行記録の共有を通して、自然と仲間との時間を大切にしています。
          </p>
        </section>

        <section id="activities" className="section cardsSection">
          <p className="sectionLabel">Activities</p>
          <h2>活動内容</h2>
          <div className="cards">
            {activities.map((activity) => (
              <article className="card" key={activity}>
                <h3>{activity}</h3>
                <p>活動の詳細は今後ここに追加していきます。</p>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="section join">
          <p className="sectionLabel">Join</p>
          <h2>新歓・お問い合わせ</h2>
          <p>
            入会希望、見学希望、質問がある方は、公式SNSまたはメールからご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
