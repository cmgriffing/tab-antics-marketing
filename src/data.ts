export interface Feature {
	title: string;
	slug: string;
	description: string;
	exampleImage: string;
	icon: string;
}

export const features: Feature[] = [
	{
		title: 'Remove Tab',
		slug: 'remove-tab',
		description: `A tab is chosen at random and silently discarded. Good luck getting it back. Ctrl+Shift+T won't save you. Hope you bookmarked it.`,
		exampleImage: '',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>`
	},
	{
		title: 'Shuffle Tabs',
		slug: 'shuffle-tabs',
		description:
			'This action invokes a beautiful symphony of your tabs rearranging themselves. Like sands through the hourglass of your web browser. Where did that last article go to? Time to find out.',
		exampleImage: '',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>`
	},
	{
		title: 'Windows from Tabs',
		slug: 'windows-from-tabs',
		description:
			'Remember those times you beat solitaire back in the day. Yeah, kind of like that. But worse and better at the same time depending on perspective.',
		exampleImage: '',
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>`
	},
	{
		title: 'Flatten Tabs',
		slug: 'flatten-tabs',
		description:
			'This fixes the windows thing, or really messes up the day of someone who is particular about grouping tabs by window. Bonus points for pairing with a shuffle directly after.',
		exampleImage: '',
		icon: ``
	},
	{
		title: 'Rick Roll',
		slug: 'rick-roll',
		description: `Witness the all of the Astley glory in freshly crafted farm to desktop window. The dance moves will dazzle you if the ads don't catch you first. There is also a stealth option that changes a random tab to the glorious one without any grand warnings.'`,
		exampleImage: '',
		icon: ``
	},
	{
		title: 'Focus Random Tab',
		slug: 'focus-random-tab',
		description: `Oh were you reading that? Too bad, check out this tab you left open from 3 days ago. I'm sure it was important or you wouldn't have left it there. Right?`,
		exampleImage: '',
		icon: ``
	},
	{
		title: 'Go Back',
		slug: 'go-back',
		description:
			'You missed something. Or did you? Chat thinks you did. Or maybe they are just messing with you. The world may never know. At least you can just click the forward button. This can be configured for the current tab or a random tab.',
		exampleImage: '',
		icon: ``
	},
	{
		title: 'Resize Window',
		slug: 'resize-window',
		description: `It could be big or small. It could even be bigger than your screen. Who knows? It's fully random within reason and that's half the fun.`,
		exampleImage: '',
		icon: ``
	}
];

export interface Testimonial {
	author: string;
	quote: string;
	extra: string;
	authorImage: string;
}

export const testimonials: Testimonial[] = [];

export enum LinkType {
	internal = 'internal',
	external = 'external'
}

export interface GettingStartedLink {
	type: LinkType;
	href: string;
	newTab: boolean;
}

export interface GettingStartedStep {
	title: string;
	description: string;
	links: GettingStartedLink[];
	icon: string;
	image: string;
}

export const gettingStartedSteps: GettingStartedStep[] = [
	{
		title: 'Get the Browser Extension',
		description: `It's easy. It's on the Chrome Extension marketplace right now! What are you waiting for?`,
		links: [],
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>`,
		image: ''
	},
	{
		title: 'Install the Twitch Extension',
		description: `You then need to navigate to the Twitch Extension marketplace. Install TabFoolery.
    <br />
    <br />
      Ham hock biltong rump, salami kielbasa turkey pancetta beef. T-bone chuck alcatra chicken andouille. Jerky boudin pork chicken, tri-tip salami corned beef turkey. Pastrami andouille bresaola pig landjaeger strip steak burgdoggen short ribs salami beef ribs doner biltong swine picanha beef. Landjaeger sausage t-bone strip steak, salami kielbasa ground round venison corned beef.
      <br />
      <br />
Shankle brisket kevin buffalo leberkas pork short ribs bresaola porchetta ham cupim hamburger corned beef chislic. Porchetta tail sausage, corned beef filet mignon short ribs shoulder pork loin ham hock landjaeger kevin biltong pork. Pancetta shoulder ham hock, chicken filet mignon pork doner swine cupim capicola frankfurter. Swine andouille corned beef, t-bone alcatra meatball meatloaf tail drumstick.`,
		links: [],
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>`,
		image: ''
	},
	{
		title: 'Configure the Twitch Extension',
		description:
			'You will need to enable and set the price for all the shenanigans you want to allow chat to induce.',
		links: [],
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>`,
		image: ''
	},
	{
		title: 'Log in with the Browser Extension',
		description:
			'You are almost there. The Browser Extension just needs to be activated. You will occasionally see the extension update its icon if it loses connection and requires user interaction to fix itself.',
		links: [],
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
  </svg>`,
		image: ''
	},
	{
		title: 'Profit!',
		description: `Get them Bits! Collect a cut of chat's intended suffering to soften the blow.`,
		links: [],
		icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>`,
		image: ''
	}
];
