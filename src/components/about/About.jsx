import "./about.scss";
export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <div className="about-card.bg"></div>
        <div className="about-card">
          
          <img
            src="https://blog.wallix.com/hs-fs/hubfs/insider-threat-cyber-criminal-external-attack-psychology-privileged-user.jpg?width=498&name=insider-threat-cyber-criminal-external-attack-psychology-privileged-user.jpg"
            alt=""
            className="about-img"
          />

        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <br />
        <p className="about-sub">
          “The only way to do great work is to love what you do.” –{" "}
          <b>Steve Jobs</b>
        </p>
        <div className="about-desc">
            Something about me
        </div>
        <div className="cert">
          <img src="images/Completed.jpg" alt="" className="cert-img" />
          <div className="cert-text">
            <h4 className="cert-title">CODING DOJO GRADUATE 2022</h4>
            <p className="cert-desc">Successfully completed on Oct 21,2022.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
