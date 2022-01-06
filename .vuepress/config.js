// config.js
module.exports = {
	title: "LDH Note", // site title
	description: "IT Note 공간입니다.",

	// 업로드 될 Repository 이름
	// base: "/BlueYellowGreen.github.io/",
	base: "/",
	// 공통적으로 들어갈 head
	// 마지막 2개의 script 는 google analytics 용
	head: [
		['meta', { name: "charset", content: "utf-8" }],
		['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32.png" }],
		['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16.png" }],
		['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
		['script', { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-23KGQVB87M" }],
		['script', {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-23KGQVB87M');"]]
	],

	plugins: [
		["sitemap", { hostname: "https://leedooho.com/"	}],
		["vuepress-plugin-code-copy"],
		["vuepress-plugin-mathjax",
			{
				target: 'svg',
				macros: {
					'*': '\\times',
				}
			}
		]
	],

	themeConfig: {
		// 왼쪽 상단 NavBar Logo
		logo: "/assets/img/logo-50.png",

		// 오른쪽 상단 NavBar Link
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Portfolio", link: "/Portfolio/" },
		],

		// 부드러운 스크롤 사용
		smoothScroll: true,
		
		// 왼쪽 폴더
		sidebar: [
			// {
			// 	title: 'test1',
			// 	// path: '/test1/',
			// 	sidebarDepth: 1,
			// 	children: [
			// 		['/test1/test2/', 'test2'],
			// 	]
			// }
			{
				title: 'CS', children: [
					{	title: 'Algorithm',	path: '/CS/Algorithm/' },
					{	title: 'APS', path: '/CS/APS/'	}
				]
			},
			{
				title: 'AI', children: [

				]
			},
			{
				title: 'Blockchain', children: [
					{
						title: 'BApp', path: '/Blockchain/BApp/', children: [
							{ title: 'About Blockchain', path:'/Blockchain/BApp/About-Blockchain/' },
						]
					},
					{
						title: 'Web 3.0 (PFP)', path: '/Blockchain/Web/', children: [
							{ title: 'Metamask 로그인', path: '/Blockchain/Web/Metamask-Login/' },
						]
					},
				]
			},
		],
	}
}