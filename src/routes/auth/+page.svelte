<section id="loginPage" class="h-full flex justify-center items-center">
	<div class="card w-96 h-full max-h-[28em] flex flex-col">
		<header class="card-header">
			<h2 class="h2">Admin Login</h2>
		</header>
		<section class="p-4 h-full">
			<form action="?/adminLogin" method="POST" class="flex flex-col justify-between h-full">
				<div class="space-y-8">
					<label class="label" for="email">
						<span>Email</span>
						<input autocomplete="off" class="input" type="email" name="email" />
					</label>

					<label class="label" for="password">
						<span>Password</span>
						<input autocomplete="off" class="input" type="password" name="password" />
					</label>
				</div>

				<button type="submit" class="btn variant-glass-primary">Sign In</button>
			</form>
		</section>
		<footer class="card-footer flex p-4 flex justify-end">
			<a href="/" class="underline underline-offset-2">Return to Home</a>
		</footer>
	</div>
</section>
