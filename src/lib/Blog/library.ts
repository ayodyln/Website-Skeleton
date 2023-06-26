export interface Post {
	id: number // post ID
	tags: string[] // tags
	tech: string[]
	path: string // /{{path}}
	title: string // article title
	publish_date: string // ISO String
	read_time: number // minutes
	hero_image: string // path
	feature_image: string
	image: string // card image
	blurb: string // blurb of article
	summary: string
	html: string // html content
}

export const library: Post[] = [
	{
		id: 0,
		tags: ['Development', 'Testing'],
		tech: [],
		path: '/blog/ghostlab',
		title: 'Responsive Development w/ Ghostlab',
		publish_date: '2022-11-12T07:00:00.000Z',
		read_time: 8,
		hero_image: '/articles/blog/ghostlab/GL-outline.png',
		feature_image: '',
		image: '/articles/blog/ghostlab/GL-outline.png',
		blurb:
			'Testing responsive designs accross devices is a key for quality assurance of your product.',
		summary:
			'This article is for developers who are interested in improving their responsive web designs and need to integrate quality assurance into their workflow via Ghostlab. Which was developed with the goal in mind to make a tool that provides tangible evidence of how one’s responsive web design functions across devices. The software enables someone to test on any device, as long as they have a computer, internet, and devices that they want to test with. So, I’ll be detailing how to quickly set up this amazing tool and kickstart your path down perfecting the practice of responsive web design.',
		html: `
            <section>
                <h2 class="text-3xl font-bold font-mono mb-2">Development Workflow</h2>
                <div class="space-y-3">
                    <p>
                        Developers will know or have a sense of what I’m talking about here, but for those who don’t
                        know about a typical development workflow, I’ll summarize this process for you. As a developer,
                        you may start with creating a folder and opening that in a text editor of choice—typically
                        Visual Studio
                        Code is used, but there are plenty of other text editors out there. In VS Code, we can pretty
                        much write code in any language you want. Also, there are tools that developers can utilize to
                        run a live server, which is how we as developers can see how code looks in the browser and
                        debug. This is done via visually looking at the design and using the inspect tool with browsers.
                    </p>
                    <p>
                        What I just described is a common workflow among developers, especially web development
                        students. It gets the job done and helps a developer code to make something from scratch. I
                        admit, I even still follow this process and it works great! Until you start talking about
                        building a responsive web design. Browsers can open the inspect tool which contains a set of
                        tools that are important to a developer, the tool I’ll be highlighting here is a tool that
                        simulates a device. The issue is that with this method, the browser doesn’t accurately represent
                        how your design looks on screen since it is simulating that device. It is possible to see visual
                        errors pop up or not have a true representation of how the overall design looks and functions on
                        a smaller device.
                    </p>
                </div>
            </section>

            <section>
                <h2 class="text-3xl font-bold font-mono mb-2">Ghostlab</h2>
                
                <div class="space-y-3">
                    <p>
                        To remedy this issue and have full assurance that your responsive web design is functioning
                        perfectly across any device, you can use GhostLab&#8722;opensource software. This tool that I
                        think
                        any developer should
                        be using is incredibly helpful when you are building for smaller than desktop screen sizes.
                        Because Ghostlab enables a developer to run a local server on a computer that is exposed to any
                        device on the same wifi network. While Ghostlab is doing this, it can also watch a URL or a
                        local file directory that contains an index.html file and display that code to the browser on
                        any device you want to test. Keep in mind that is a stark difference from simulating a device in
                        a browser, because this actual testing happens on a real device.
                    </p>
                    <p>
                        At this point, I hope you the reader are realizing how cool this tool is. But you may be
                        thinking that this is an extra step in the development workflow. Which is true, but this extra
                        step
                        is worth it since it is a form of quality assurance and the product of adding this to your
                        workflow is better—if not perfect—responsive web design.
                    </p>


                    <figure id="imageWrapper" class="p-4 bg-neutral rounded-lg shadow-lg max-w-[90%] w-full m-auto my-2">
                        <img 
                            src="/articles/blog/ghostlab/ghostLabScreenshot.png"
                            alt="Research Document Title Page Image" 
                            loading="lazy"
                            class="rounded-xl"
                        >

                        <figcaption class="text-center italic mt-2 text-base-content">
                            Ghostlab application screen capture
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section>
                <h2 class="text-3xl font-bold font-mono mb-2">Getting Started with Ghostlab</h2>

                <ul class="space-y-4 p-2">
                    <li class="space-y-2">
                        <h3 class="text-xl font-medium">Step One: Download/Install Ghostlab</h3>
                        <p>
                            Ghostlab was produced by <a href="https://andi.io/portfolio/ghostlab-app/" target="_blank" class="link">Vanamco</a> and
                            has become open
                            source.
                            Meaning anyone can download this software and integrate it into their workflow. The link
                            will be provided in this article to download this software, but I want to note that their
                            current website is very bare-bones and may look suspicious. But it is not and it’s directly
                            from the developers of the application. Something happened to their website, and it's been
                            under construction ever since it seems.
                        </p>
                        <p>
                            Download the correct version for your device and follow the installation instructions.
                        </p>
                    </li>

                    <li class="space-y-2">
                        <h3 class="text-xl font-medium">Step Two: Creating a Ghostlab Server</h3>
                        <p>
                            Ghostlab saves as many local server instances you want, but only one server can run at a
                            time. Developers can input a URL or a local file directory and Ghostlab will run a
                            server once you click the play icon, Ghostlab is now <i>watching</i> that URL/Directory.
                            What is happening here is essentially a Node.js
                            development server is being created and exposed to the local network. This is awesome
                            because Ghostlab will respond to any changes and the browsers will be refreshed to display
                            the most recent version of the code you’ve created.
                        </p>

                        <div class="bg-neutral p-2 aspect-video rounded-lg">
                            <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/G3ZkJ5iXZoE"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        </div>
                    </li>

                    <li class="space-y-2">
                        <h3 class="text-xl font-medium">Step Three: Connecting to Ghostlab on a device</h3>
                        <p>
                            Once you have a Ghostlab server running, it’ll generate an IP address for you. It is
                            important to note that the private IP address option is going to be the best IP address type
                            to use. To ensure that you’re using this address type, go to Ghostlabs Preferences setting
                            (CTRL + , or Command + ,) and scroll down the Networking section and select the Network IP
                            type to the one like this: 10.0.0.XXX—the last three numbers will differ sometimes. Once the
                            Ghostab’s server is running, any device can connect to that IP address as long as it's on
                            the same network as the computer running Ghostlab. Simply, scan the QR code that can be
                            generated to scan on a mobile device or input that IP address into a browser on the device.
                        </p>

                        <div class="bg-neutral p-2 aspect-video rounded-lg">
                            <iframe class="w-full h-full" src="https://www.youtube-nocookie.com/embed/G3ZkJ5iXZoE"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        </div>
                    </li>
                </ul>
            </section>

            <section>
                <h2 class="text-3xl font-bold font-mono mb-2">Ghostlab's Unique Tools</h2>

                <div class="space-y-3"> 
                    <p>
                        Ghostlab can run on a server with multiple connections to its server. This is helpful because
                        you can have the three primary device types (mobile, tablet, and desktop) displaying your
                        website at
                        once to test its responsiveness. Here are some more tools that Ghostlab has for development:
                    </p>

                    <ul class="space-y-3 my-2 p-4 bg-base-100 rounded-lg">
                        <li>
                            <b>Sync/Async Scrolling:</b> You can sync scrolling on every device, what this means is that
                            if
                            you scroll on one device, each other device will respond to that scroll—this behavior is
                            also present upon refreshes or other interactions.
                        </li>
                        <li>
                            <b>Screenshot:</b> It’s possible to screenshot on any device via the screenshot tool in
                            GhostLab.
                        </li>
                        <li>
                            <b>Inspect tool:</b> In Ghostlab you can open an inspect tool of any device that is
                            connected to
                            that IP address, this is incredibly helpful for mobile devices.
                        </li>
                    </ul>

                    <p>
                        There is so much more and I encourage you to explore GhostLab just as I did but take note
                        of how your default settings are. This is just in case you change a setting and completely
                        break the Ghostlab application. That is probably the most important piece of advice I can
                        offer. Since there aren’t many documentation or troubleshooting guides out there—I’ll work
                        on developing one as I learn about Ghostlab myself.
                    </p>
                </div>
            </section>

            <section>
                <h2 class="text-3xl font-bold font-mono mb-2">Conclusion</h2>

               <div class="space-y-3">
                    <p>
                        This was a very quick overview of Ghostlab and why you should be using this software. But to
                        conclude this article, it is important to mention the importance of actually testing rather than
                        simulating a responsive web design in a browser. When you test something, it is to discover any
                        errors and to improve it until there are hopefully no errors left. This can be interpreted as
                        Quality Assurance, which is the practice of finding mistakes in a product—or a website in the
                        theme of this article—and preventing those mistakes from being released to the public version of
                        the product.
                    </p>
                    <p>
                        With Ghostlab you have the utmost assurance that your project is running
                        effectively in terms of functionality and design across any browser on any device. With that
                        said, give Ghostlab a shot and try building a responsive web design such as a navbar system
                        across a mobile phone, tablet, and laptop. I believe a project like that can help you learn how
                        to use Ghostlab and see the importance of it as well.
                    </p>
               </div>
            </section>
        `
	}
]

export interface Project {
	id: number
	tags: string[] // MAX 3 Featured Projects
	tech: techTag[]
	path: string
	blogURI: string
	URI: string
	github_URI: string
	title: string
	publish_date: string
	read_time: number
	hero_image: string
	feature_image: string
	image: string
	blurb: string
	summary: string
	html: string
}

export interface techTag {
	name: string
	URI: string
}

export const projects: Project[] = [
	{
		id: 0,
		tags: ['Project', 'Work', 'Featured', 'Star'],
		tech: [
			{
				name: 'NextJS',
				URI: 'https://nextjs.org/'
			}
		],
		path: '/projects/dgm-inventory-manager',
		blogURI: ``,
		URI: '',
		github_URI: '',
		title: 'UVU Digital Media Inventory Manager',
		publish_date: '2023-05-10T19:20:40.909Z',
		read_time: NaN,
		hero_image: '/articles/projects/dgm-checkout-app/DGM-Checkout-hero.jpg',
		feature_image: '/articles/projects/dgm-checkout-app/DGM-Checkout-feature.jpg',
		image: '/articles/projects/dgm-checkout-app/DGM-Checkout-image.jpg',
		blurb: `This application is being developed for my college's Digital Media department. This application manages
        department assets and allows for equipment to be checked out to students for their studies.`,
		summary: '',
		html: ``
	},
	{
		id: 1,
		tags: ['Project', 'School', 'Featured'],
		tech: [
			{
				name: 'SvelteKit',
				URI: 'https://kit.svelte.dev/'
			},
			{
				name: 'AWS Amplify',
				URI: 'https://docs.amplify.aws/'
			}
		],
		path: `/work/aws-sveltekit-demo`,
		blogURI: `/blog/sveltekit-aws`,
		URI: 'https://sveltekit4790.dylan-portfolio.dev/',
		github_URI: 'https://github.com/ayodyln/4790-Project/tree/master',
		title: 'AWS Amplify // SvelteKit Demo App',
		publish_date: `2023-05-02T19:20:40.909Z`,
		read_time: NaN,
		hero_image: '/articles/projects/aws-sveltekit/aws-sveltekit-hero.jpg',
		feature_image: '/articles/projects/aws-sveltekit/aws-sveltekit-feature.jpg',
		image: '',
		blurb: `SvelteKit and AWS Amplify paired together creates powerful web applications a reality. This app demonstrates the
        capabilities of both tools and and my overall comprehension as well.`,
		summary: '',
		html: ``
	},
	{
		id: 2,
		tags: ['Project', 'School', 'Featured'],
		tech: [
			{
				name: 'NextJS',
				URI: 'https://nextjs.org/'
			},
			{
				name: 'TailWindCSS',
				URI: 'https://tailwindcss.com/'
			}
		],
		path: `/work/nextjs-pokedex-demo`,
		blogURI: ``,
		URI: `http://next-pokedex.dylan-portfolio.dev/`,
		github_URI: 'https://github.com/ayodyln/next-pokeapi',
		title: 'NextJS Pokedex Demo',
		publish_date: `2023-04-10T19:20:40.909Z`,
		read_time: NaN,
		hero_image: '/articles/projects/nextjs-pokedex/nextjs-pokedex-hero.jpg',
		feature_image: '/articles/projects/nextjs-pokedex/nextjs-pokedex-feature.jpg',
		image: '',
		blurb: `NextJS is built upon the ReactJS library, but with the added benefits of server-side capabilities. Recently, I
        was tasked to create a Pokedex App Demo with ReactJS and this app was the result.`,
		summary: '',
		html: ``
	}
]
