import { INTERESTS, SETUP } from "#/routes/-data/portfolio";
import { SectionLabel } from "#/routes/-home/SectionLabel";
import { Reveal } from "#/routes/-ui/Reveal";

export function AboutSection() {
	return (
		<>
			<SectionLabel n="03" title="About" id="about" />
			<section className="about">
				<div className="about-inner">
					<Reveal className="about-l">
						<div className="about-pull">
							Started with systems development.
							<br />
							Now building in <em>Go &amp; Rust.</em>
						</div>
						<div className="about-body">
							<p>
								I'm Surya, based in Vijayawada. I'm currently pursuing a B.Tech in Artificial 
								Intelligence &amp; Machine Learning at NRI Institute of Technology, Agiripalli 
								(Expected Graduation: 2028). I also contribute as a member of the Research 
								&amp; Development (R&amp;D) Club.
							</p>
							<p>
								Most of my work is focused on backend systems and systems programming. I build 
								high-performance utilities like my Rust broken link checker, write APIs using Go 
								and FastAPI, and design full-stack applications with React. I also focus on Android 
								development, building and publishing applications on the Play Store.
							</p>
							<p>
								I work extensively with Linux, with a strong focus on security and penetration testing 
								using distributions like Kali Linux and Parrot OS. I'm customising my Neovim setup, 
								exploring AI/ML models and LLMs, and reading research papers on emerging tech.
							</p>
						</div>
					</Reveal>
					<Reveal className="about-r" delay={120}>
						<div className="acard">
							<div className="acard-l">current setup</div>
							{SETUP.map(([k, v]) => (
								<div className="srow" key={k}>
									<span className="sk2">{k}</span>
									<span className="sv">{v}</span>
								</div>
							))}
						</div>
						<div className="acard">
							<div className="acard-l">off the clock</div>
							<div className="ints">
								{INTERESTS.map((item) => (
									<span className="int" key={item}>
										{item}
									</span>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</section>
		</>
	);
}
