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
	},
	{
		id: 1,
		tags: ['Development'],
		tech: [],
		path: '/blog/sveltekit-aws',
		title: 'Pairing SvelteKit with AWS',
		publish_date: '2023-05-09T19:50:25.900Z',
		read_time: 10,
		hero_image: '/articles/blog/aws-sveltekit/aws-sveltekit-hero.jpg',
		feature_image: '/articles/blog/aws-sveltekit/aws-sveltekit-feature.jpg',
		image: '',
		blurb:
			'SvelteKit and AWS Amplify paired creates an application that is fully scalable, while leveraging the strengths of what makes SvelteKit unique.',
		summary: `The AWS Amplify <a href="https://docs.amplify.aws/" target="_blank" class="link">documentation</a> 
            doesn't mention SvelteKit as of writing this article, May 9th, 2023. SvelteKit compiles it's 
            custom <span class="font-bold">.svelte</span> to HTML, JS, and CSS. 
            The compiler uses <span class="font-bold">Vite</span>, on top of its 
            app-building abilities it also handles Server-Side Rendering (SSR). Configuring SvelteKit to work with 
            AWS Amplify requires some specific steps that are documented in this article.
            `,
		html: `
            <section>
                <h2 class="text-3xl font-bold font-mono mb-2">Getting Started</h2>

                <div class="space-y-8">
                    <p>
                        Open your terminal of choice and make sure you have <a href="https://nodejs.org/en" class="link">Node.js</a> installed, 
                        for installing npm packages. Then input the following into your CLI.
                    </p>

                    <div class="mockup-code">
                        <pre data-prefix="$"><code>npm create svelte@latest my-app</code></pre> 
                        <pre data-prefix="$"><code>cd my-app</code></pre> 
                        <pre data-prefix="$"><code>npm install</code></pre> 
                        <pre data-prefix=">" class="text-warning"><code>Installing packages...</code></pre>
                        <pre data-prefix=">" class="text-success"><code>Success!</code></pre>
                        <br/>
                        <pre data-prefix="$"><code>npm run dev</code></pre>
                    </div>

                    <p>
                        Svelte will render our UI we create for the application for the client. 
                        However, the added layer of SvelteKit will handle all of our full-stack application needs (e.g., SSR and Router handling).
                        For example, we can create custom server files that handle API fetch calls with secret keys, 
                        <a href="https://kit.svelte.dev/docs/form-actions" target="_blank" class="link text-info">Form Actions</a>, and so much more 
                        <a href="https://kit.svelte.dev/docs/introduction" target="_blank" class="link text-info">click here</a> to learn more. 
                        If you've never used Svelte before, I recommend starting out here first <a class="link text-info" href="https://svelte.dev/docs" target="_blank">Svelte Documentation</a>.
                    </p>

                    <div class="space-y-4">
                        <div>
                            <h3 class="font-mono text-2xl font-bold">Configuring AWS Amplify</h3>
                            <p class="text-xs text-warning">* According to Amplify documentation</p>
                        </div>
                        
                        <section id="prerequisites" class="bg-base-300 rounded-lg p-4">
                            <h4 class="text-warning text-xl font-black">Prerequisites</h4>
                            <ul class="list-disc ml-8 mt-2">
                                <li>Node.js v14.x or later</li>
                                <li>npm v6.14.4 or later</li>
                                <li>Git v2.14.1 or later</li>
                            </ul>
                        </section>

                        <ul class="mx-4 space-y-4">
                            <li>
                                <span class="text-lg font-bold">Step One: Create AWS Account</span>

                                <div class="mt-4">
                                    <p>
                                        To work with Amazon Web Services (AWS) you'll need to have an 
                                        <a class="link text-info" href="https://portal.aws.amazon.com/billing/signup?redirect_url=https://aws.amazon.com/registration-confirmation#/start/email">AWS Account</a>.
                                    </p>
                                </div>
                            </li>

                            <li class="space-y-4">
                                <span class="text-lg font-bold">Step Two: Install and Configure AWS Amplify CLI</span>

                                <div class="mockup-code">
                                    <pre data-prefix="$"><code>npm install -g @aws-amplify/cli</code></pre>
                                </div>

                                <p>
                                    This will install the AWS Amplify CLI tool into our global <span class="text-info">node_modules</span> folder.
                                    Using this tool is how will connect our created AWS account to the CLI and create our AWS Amplify project(s).
                                </p>

                                <p>
                                    For information on how to configure the AWS Amplify CLI tool to your AWS account, 
                                    follow the <a class="link text-info" href="https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli">
                                    AWS Amplify CLI Documentation</a>.
                                </p>
                            </li>

                            <li class="space-y-4">
                                <span class="text-lg font-bold">Step Three: Initialize Amplify Project</span>

                                <p>
                                    Now, while in our SvelteKit app's directory, we can initialize our AWS Amplify project. To start, 
                                    execute the following in the CLI to install the AWS Amplify package into our project. Once installed, we can initialize 
                                    our Amplify application.
                                </p>

                                <div class="mockup-code">
                                    <pre data-prefix="$"><code>npm install aws-amplify</code></pre>
                                </div>
                                <div class="mockup-code">
                                    <pre data-prefix="$"><code>amplify init</code></pre>
                                    <pre class="text-warning"><code>Note: It is recommended to run this command from the root of your app directory</code></pre>
                                    <pre data-prefix="?"><code>Enter a name for the project: <span class="text-success">myapp</span></code></pre>
                                    <br/>
                                    <pre><code>The following configuration will be applied:</code></pre>
                                    <pre><code>Project information</code></pre>
                                    <pre data-prefix="|"><code>Name: myapp</code></pre>
                                    <pre data-prefix="|"><code>Environment: dev</code></pre>
                                    <pre data-prefix="|"><code>Default editor: Visual Studio Code</code></pre>
                                    <pre data-prefix="|"><code>App type: javascript</code></pre>
                                    <pre data-prefix="|"><code>Javascript framework: none</code></pre>
                                    <pre data-prefix="|"><code>Source Directory Path: src</code></pre>
                                    <pre data-prefix="|"><code>Distribution Directory Path: dist</code></pre>
                                    <pre data-prefix="|"><code>Build Command: npm run-script build</code></pre>
                                    <pre data-prefix="|"><code>Start Command: npm run-script start</code></pre>
                                    <br/>
                                    <pre data-prefix="?"><code>Initialize the project with the above configuration? <span class="text-success">Yes</span></code></pre>
                                    <pre data-prefix="?"><code>Select the authentication method you want to use: AWS profile</code></pre>
                                </div>

                                <p>
                                    Once the CLI prompts you to select an authentication method, choose AWS profile. Then follow the rest of the
                                    prompts the CLI asks you to do. You'll be connecting your user profile/creating a new IAM user to the 
                                    Amplify CLI on your local machine.
                                </p>
                            </li>

                            <li class="space-y-4">
                                <span class="text-lg font-bold">Step Four: Configure SvelteKit for Amplify</span>

                                <p>
                                    There is some further configuration we need to complete before we can have a functioning Amplify app.
                                    Open the <span>app.html</span> file of our SvelteKit project, and add the following to the head of the file.
                                </p>

                                <div class="mockup-code">
                                    <pre ><code lang="html">&lt;script&gt;</code></pre>
                                    <pre class="ml-8"><code lang="html">var global = global || window</code></pre>
                                    <pre class="ml-8"><code lang="html">var Buffer = Buffer || []</code></pre>
                                    <pre class="ml-8"><code lang="html">var process = process || { env: { DEBUG: undefined }, version: [] }</code></pre>
                                    <pre ><code lang="html">&lt;/script&gt;</code></pre>
                                </div>

                                <p>
                                    <span class="font-bold">global</span>: If the global variable is not defined, we will default to binding global to the windo object.
                                    Global is used in NodeJS to define and reperesent the <i>global</i> object. However, this object is not found in the browser's environment.
                                    So, if global isn't defined, we will default to the browser's window object.
                                </p>

                                <p>
                                    <span class="font-bold">Buffer</span>: This is a variable that is specific to NodeJS, and it reepresents binary data. However, just this isn't used in the
                                    browser environment. If buffer isn't defined anywhere, meaning we are in the browser environment and not server-side. So, we default to an empty 
                                    array in the that case.
                                </p>

                                <p>
                                    <span class="font-bold">process</span>:
                                </p>
                            </li>
                        </uL>
                    </div>
                </div>

                <div class="bg-error rounded-xl space-y-3 p-4 text-error-content mt-12">
                    <h3 class="font-bold font-mono text-xl">Important Note</h3>

                    <p>
                        AWS Amplify functions are handled client-side, this restricts us
                        to using the library in client-side files (e.g., +page.svelte). Server files such as +page.js, +server.js, or +page.server.js <span class="italic">cannot</span> run AWS Amplify functions.
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
