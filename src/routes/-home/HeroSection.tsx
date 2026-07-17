import { RESUME_URL } from "#/routes/-data/portfolio";
import { useHeroParallax } from "#/routes/-hooks/useHeroParallax";
import { Stat } from "#/routes/-ui/Stat";

export function HeroSection() {
	const ghostRef = useHeroParallax();

	return (
		<section className="hero">
			<div className="hero-main">
				<div className="hero-ghost" aria-hidden="true" ref={ghostRef}>
					Surya
				</div>

				<div className="hero-meta">
					<div className="hero-meta-l">
						<span className="hero-meta-mark">suriya.xyz</span>
						<span className="hero-meta-dot" aria-hidden="true" />
						<span className="hero-meta-dim">Portfolio · 2026</span>
					</div>
					<div className="hero-meta-r">
						<span className="hero-meta-dim">Status</span>
						<span className="hero-meta-mark">Open to Full-Stack &amp; Systems roles</span>
					</div>
				</div>

				<div className="hero-center">
					<div className="hero-tag">
						<div className="hero-tag-line" />
						<span className="hero-tag-text">
							Full-Stack &amp; Systems Developer · Vijayawada, India
						</span>
					</div>
					<h1 className="hero-name">
						Kokkiligadda
						<br />
						<em>Surya Prakash</em>
					</h1>
					<p className="hero-kicker">
						<span className="hero-kicker-aka">l.k.</span>{" "}
						<span className="hero-kicker-name">Suriya</span>
						<span className="hero-kicker-dot" aria-hidden="true">
							&nbsp;·&nbsp;
						</span>
						<span className="hero-kicker-exp">
							1.5+ yrs production backend experience
						</span>
					</p>
				</div>
			</div>
			<div className="hero-bottom">
				<div className="hb-left">
					<p className="hb-desc">
						Full-stack and systems developer specializing in <strong>Go, Rust, Node.js, and Python</strong>. 
						Currently pursuing a B.Tech in Artificial Intelligence &amp; Machine Learning and working 
						as an R&amp;D Engineer. Experienced in building high-performance backend systems, tools, 
						and integrating AI/ML models.
					</p>
					<div className="hb-actions">
						<a className="btn-s" href="#work">
							See the work
						</a>
						<a
							className="btn-g"
							href={RESUME_URL}
							target="_blank"
							rel="noreferrer"
						>
							Read résumé ↗
						</a>
					</div>
				</div>
				<div className="hb-right">
					<Stat target={1.5} decimals={1} suffix="+" label="yrs prod backend" />
					<Stat target={5} suffix="+" label="projects built" />
					<Stat target={3} suffix="rd" label="year B.Tech" />
				</div>
			</div>
			<div className="scroll-cue" aria-hidden="true">
				<span className="sc-text">scroll</span>
				<div className="sc-line" />
			</div>
		</section>
	);
}
