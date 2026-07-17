import { SOCIALS } from "#/routes/-data/portfolio";
import { SectionLabel } from "#/routes/-home/SectionLabel";
import { Reveal } from "#/routes/-ui/Reveal";

export function ContactSection() {
	return (
		<>
			<SectionLabel n="04" title="Contact" id="contact" />
			<section className="contact">
				<Reveal className="cbox">
					<div className="cbox-l">
						<div className="c-lede">get in touch</div>
						<h2 className="c-h">
							Currently looking for
							<br />
							<em>my next role.</em>
						</h2>
						<div className="c-sub">
							Full-Stack &amp; Systems Developer. Based in Vijayawada (IST). 
							Email is the fastest way to reach me.
						</div>
					</div>
					<div className="cbox-r">
						<a className="c-btn" href="mailto:ksp20056@gmail.com">
							ksp20056@gmail.com ↗
						</a>
						<div className="c-links">
							{SOCIALS.map((s) => (
								<a
									key={s.label}
									className="c-lnk"
									href={s.href}
									target="_blank"
									rel="noreferrer"
								>
									<span>{s.label}</span>
									<span aria-hidden="true">↗</span>
								</a>
							))}
						</div>
					</div>
				</Reveal>
			</section>
		</>
	);
}
