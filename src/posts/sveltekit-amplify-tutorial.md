---
title: SvelteKit Amplify Tutorial
description: SvelteKit and AWS Amplify paired creates an application that is fully scalable, while leveraging the strengths of what makes SvelteKit unique.
date: '2023-6-26'
categories:
  - SvelteKit
  - Development
  - AWS Amplify
published: true
hero_image: /articles/blog/aws-sveltekit/aws-sveltekit-hero.jpg
feature_image: /articles/blog/aws-sveltekit/aws-sveltekit-feature.jpg
---

<!--? Svelte Components & Logic -->
<script lang="ts">
    import CodeBlock from '../components/UI/CodeBlock.svelte'

    const gettingStarted = `$ npm create svelte@latest my-app \n$ cd my-app \n$ npm install \n$ npm run dev`
    const installCLI = `$ npm install -g @aws-amplify/cli`
    const initAmplify = `$ npm install aws-amplify \n? Enter a name for the project: myapp \n\nThe following configureation will be applied: \n\nProject Information \n| Name: myapp \n| Environment: dev \n| Default editor: Visual Studio Code \n| App type: javascript \n| Javascript framework: none \n| Source Directory Path: src \n| Distribution Directory Path: dist \n| Build Command: npm run-script build \n| Start Command: npm run-script start \n\n? Initialize the project with the above configureation? Yes \n? Select the authentication method you want to use: AWS Profile`
</script>
<!--? /Svelte Components & Logic -->

<!--! Article Summary -->
<div class="card p-4 italic text-lg">
    The AWS Amplify <a href="https://docs.amplify.aws/" target="_blank">documentation</a> doesn't mention SvelteKit as of writing this article, May 9th, 2023. SvelteKit compiles it's custom <span class="font-bold text-primary-500">.svelte</span> to HTML, JS, and CSS. The compiler uses <span class="font-bold">Vite</span>, on top of its app-building abilities it also handles Server-Side Rendering (SSR). Configuring SvelteKit to work with AWS Amplify requires some specific steps that are documented in this article.
</div>
<!--! /Article Summary -->

<!--! Article Content -->
<h2 class="h2 font-bold font-mono">Getting Started</h2>

<p>
    Open your terminal of choice and make sure you have <a href="https://nodejs.org/en" class="link">Node.js</a> installed, 
    for installing npm packages. Then input the following into your CLI.
</p>

<CodeBlock lang="shell" code={gettingStarted}></CodeBlock>

<p>
    Svelte will render our UI we create for the application for the client. 
    However, the added layer of SvelteKit will handle all of our full-stack application needs (e.g., SSR and Router handling).
    For example, we can create custom server files that handle API fetch calls with secret keys, 
    <a href="https://kit.svelte.dev/docs/form-actions" target="_blank" class="link text-info">Form Actions</a>, and so much more 
    <a href="https://kit.svelte.dev/docs/introduction" target="_blank" class="link text-info">click here</a> to learn more. 
    If you've never used Svelte before, I recommend starting out here first <a class="link text-info" href="https://svelte.dev/docs" target="_blank">Svelte Documentation</a>.
</p>

<h2 class="h2">Configuring AWS Amplify</h2>

<section id="prerequisites" class="card variant-soft-surface p-4">
    <h4 class="h4">Prerequisites</h4>
    <ul class="list-disc ml-8 mt-2">
        <li>Node.js v14.x or later</li>
        <li>npm v6.14.4 or later</li>
        <li>Git v2.14.1 or later</li>
    </ul>
</section>

<ul class="mx-4 space-y-4">
    <li>
        <h3 class="text-lg font-bold">Step One: Create AWS Account</h3>
        <div class="mt-4">
            <p>
                To work with Amazon Web Services (AWS) you'll need to have an 
                <a class="link text-info" href="https://portal.aws.amazon.com/billing/signup?redirect_url=https://aws.amazoncom/registration-confirmation#/start/email">AWS Account</a>.
            </p>
        </div>
    </li>
    <li class="space-y-4">
        <h3 class="text-lg font-bold">Step Two: Install and Configure AWS Amplify CLI</h3>
        <CodeBlock lang="shell" code={installCLI}></CodeBlock>
        <p>
            This will install the AWS Amplify CLI tool into our global <span class="text-info">node_modules</span> folder.
            Using this tool is how will connect our created AWS account to the CLI and create ourAmplify project(s).
        </p>
        <p>
            For information on how to configure the AWS Amplify CLI tool to your AWS account, 
            follow the <a class="link text-info" href="https://docs.amplify.aws/cli/start/ins#configure-the-amplify-cli">
            AWS Amplify CLI Documentation</a>.
        </p>
    </li>
    <li class="space-y-4">
        <h3 class="text-lg font-bold">Step Three: Initialize Amplify Project</h3>
        <p>
            Now, while in our SvelteKit app's directory, we can initialize our AWS Amplify projecstart, 
            execute the following in the CLI to install the AWS Amplify package into our project.installed, we can initialize 
            our Amplify application.
        </p>
        <CodeBlock lang="shell" code={initAmplify}></CodeBlock>
        <p>
            Once the CLI prompts you to select an authentication method, choose AWS profile. Then fthe rest of the
            prompts the CLI asks you to do. You'll be connecting your user profile/creating a new IAMto the 
            Amplify CLI on your local machine.
        </p>
    </li>
    <li class="space-y-4">
        <span class="text-lg font-bold">Step Four: Configure SvelteKit for Amplify</span>
        <p>
            There is some further configuration we need to complete before we can have a functioning Amplify app.
            Open the <span>app.html</span> file of our SvelteKit project, and add the following to the head of the file.
        </p>
        <CodeBlock lang="HTML" code={"<script>\n\tvar global = global || window \n\tvar Buffer = Buffer || [] \n\tvar process = process || { env: { DEBUG: undefined }, version: [] } \n</script>"}></CodeBlock>
        <p>
            <span class="font-bold">global</span>: If the global variable is not defined, we will default to binding global twindo object.
            Global is used in NodeJS to define and reperesent the <i>global</i> object. However, this object is not found ibrowser's environment.
            So, if global isn't defined, we will default to the browser's window object.
        </p>
        <p>
            <span class="font-bold">Buffer</span>: This is a variable that is specific to NodeJS, and it reepresents binary However, just this isn't used in the browser environment. If buffer isn't defined anywhere, meaning we are in the browser environment and not server-So, we default to an empty array in the that case.
        </p>
        <p>
            <span class="font-bold">process</span>: Global object with in NodeJS, that is meant to describe the current NodeJS process. Such as, information about environment variables and/or CLI arguements. But in the browser, process isn't defined by default and needs to be set for some of our dependencies to function proper.
        </p>
    </li>
</ul>

<div class="bg-error rounded-xl space-y-3 p-4 text-error-content mt-12">
    <h2 class="font-bold font-mono text-xl">Important Note</h2>
    <p>
        AWS Amplify functions are handled client-side, this restricts us
        to using the library in client-side files (e.g., +page.svelte). Server files such as +page.js, +server.js, or +page.server<span class="italic">cannot</span> run AWS Amplify functions.
    </p>
</div>

<!--! /Article Content -->
