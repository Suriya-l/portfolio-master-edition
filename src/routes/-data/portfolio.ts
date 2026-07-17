type Project = {
	idx: string;
	nameLines: string[];
	desc: string;
	tags: Array<{ label: string; highlight?: boolean }>;
	/** Opens in a new tab when the whole card is clickable */
	href?: string;
	span?: "wide" | "tall";
	minHeight?: number;
};

type ExperienceEntry = {
	role: string;
	period: string;
	company: string;
	desc: string;
};

type SkillChip = { name: string; highlight?: boolean };

export const RESUME_URL = "https://resume-xyz-main.vercel.app";

/** Canonical site origin */
export const SITE_ORIGIN = "https://suriya.xyz";

export const GITHUB_URL = "https://github.com/Suriya-l";

export const PROJECTS: Project[] = [
	{
		idx: "001",
		nameLines: ["Broken Link", "Checker"],
		desc: "Developed a high-performance Rust-based tool to detect broken and inaccessible website links. Validated internal and external URLs with fast, efficient scanning to improve website reliability and maintenance.",
		tags: [
			{ label: "Rust · Tooling", highlight: true },
			{ label: "CLI" },
			{ label: "Async Rust" },
		],
		href: GITHUB_URL,
		span: "wide",
	},
	{
		idx: "002",
		nameLines: ["AI Math Solver"],
		desc: "Built an AI-powered web application that solves mathematical problems using Google Gemini AI. Integrated text and voice input to deliver fast, accurate, and interactive step-by-step solutions.",
		tags: [
			{ label: "Gemini AI · Web App", highlight: true },
			{ label: "React" },
			{ label: "TypeScript" },
			{ label: "Voice Processing" },
		],
		href: GITHUB_URL,
		span: "tall",
	},
	{
		idx: "003",
		nameLines: ["NoteChat App"],
		desc: "Developed an AI-powered note-taking application with intelligent note management and contextual AI assistance. Integrated Firebase for secure cloud storage and real-time synchronization, delivering a fast and responsive user experience.",
		tags: [
			{ label: "Firebase · Gemini AI", highlight: true },
			{ label: "React" },
			{ label: "TypeScript" },
		],
		href: GITHUB_URL,
	},
	{
		idx: "004",
		nameLines: ["Career Builder"],
		desc: "Built an AI-powered resume analyzer that extracts PDF content and generates personalized career insights and job recommendations. Developed a FastAPI backend with Google Gemini AI integration and a responsive frontend for seamless resume analysis.",
		tags: [
			{ label: "Python · FastAPI · Gemini AI", highlight: true },
			{ label: "HTML/CSS/JS" },
			{ label: "PDF Extraction" },
		],
		href: GITHUB_URL,
		span: "wide",
	},
	{
		idx: "005",
		nameLines: ["Paper Research Agent"],
		desc: "Developed an AI-powered research assistant that retrieves academic citations from Google Scholar in multiple citation formats. Built a FastAPI-based application with web scraping and intelligent citation generation to streamline academic research.",
		tags: [
			{ label: "Python · FastAPI", highlight: true },
			{ label: "LangGraph · Agents" },
			{ label: "BeautifulSoup" },
		],
		href: GITHUB_URL,
	},
];

export const EXPERIENCE: ExperienceEntry[] = [
	{
		role: "Research & Development (R&D) Engineer",
		period: "May 2025 — Present",
		company: "Dr. RVR NRI Institute of Technology",
		desc: "Contribute to research and development projects focused on software engineering and emerging technologies. Design, develop, test, and optimize innovative software solutions for research initiatives. Collaborate with faculty members and multidisciplinary teams to solve complex technical challenges. Apply modern development practices and research methodologies to build scalable, high-quality applications. Explore and integrate emerging technologies, including AI/ML and backend systems, into research projects.",
	},
];

export const SKILLS: SkillChip[] = [
	{ name: "Go", highlight: true },
	{ name: "Rust", highlight: true },
	{ name: "TypeScript", highlight: true },
	{ name: "Python", highlight: true },
	{ name: "Node.js" },
	{ name: "Express" },
	{ name: "RESTful APIs" },
	{ name: "WebSockets" },
	{ name: "Socket.io" },
	{ name: "React" },
	{ name: "React Native" },
	{ name: "Tailwind CSS" },
	{ name: "PostgreSQL" },
	{ name: "MongoDB" },
	{ name: "MySQL" },
	{ name: "Firebase" },
	{ name: "Docker" },
	{ name: "Docker Compose" },
	{ name: "AWS" },
	{ name: "Git" },
	{ name: "GitHub" },
	{ name: "LLMs / Prompt Eng." },
	{ name: "Machine Learning" },
	{ name: "CI/CD" },
];

export const INTERESTS = [
	"Watching shin chan 📺",
	"Daily Review 🌙",
	"Sleep (a lot) 😴",
	"🎬 Movies",
	"Vim keybindings ✌️",
	"Music all day 🎧",
	"Reading (rare) 📖",
	"Phone 📱",
];

export const SETUP: Array<[string, string]> = [
	["machine", "Mac M3"],
	["editor", "Neovim"],
	["terminal", "Ghostty"],
	["shell", "Fish + Zsh"],
	["before this", "Arch Linux, Kali 6 mo"],
];

export const SOCIALS: Array<{ label: string; href: string }> = [
	{ label: "GitHub", href: GITHUB_URL },
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/surya-kokkligadda-6ab3a6357",
	},
	{ label: "Site", href: `${SITE_ORIGIN}/` },
	{ label: "Resume", href: RESUME_URL },
];

