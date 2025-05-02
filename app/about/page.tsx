import Header from '@components/Header';
import Footer from '@components/Footer';

export default function About() {
    return (
	<>
	    <Header />
	    <main>
		<div className="border-4 border-pink rounded-4xl p-4 mx-4">
		    <h1 className="text-green text-4xl font-karma-suture">{'>'} About Me and This Site</h1>
		    <div className="p-4">
			<h2 className="text-orange text-3xl font-karma-suture">{'>>'} Who is Oddish1?</h2>
			<p className="text-white py-2">
			I am a freshly-graduated computer science student! I'm currently looking for jobs, but am definitely enjoying being out of school with free time to devote to projects like this one!
			</p>
			<h3 className="text-yellow text-2xl font-karma-suture">{'>>>'} My Stats</h3>
			<ul className="text-white indent-4 py-2">
			    <li>* <strong>pronouns:</strong> he/him</li>
			    <li>* <strong>age:</strong> 25</li>
			    <li>* <strong>location:</strong> washington state, USA</li>
			</ul>
			<h3 className="text-yellow text-2xl font-karma-suture">{'>>>'} My Favorites</h3>
			<p className="text-white py-2">
			    These lists are by no means complete, and are really just compiled off the top of my head. Over time I will come back to refresh them, in the hopes of one day making complete lists. But for now this'll have to do.
			</p>
			<h4 className="text-pink text-xl font-karma-suture">&#128366; Books &#128366;</h4>
			<p className="text-white py-2">
			    I am generally partial to science-fiction or fantasy books. But I do like a lot of other types of books.
			</p>
			<ul className="text-white indent-4 py-2">
			    <li>* Mistborn (2006); Brandon Sanderson</li>
			    <li>* Nuclear War: A Scenario (2024); Annie Jacobsen</li>
			    <li>* The Hobbit (1937); JRR Tolkein</li>
			    <li>* The Lord of the Rings Trilogy (1954-1955); JRR Tolkein</li>
			</ul>
			<h4 className="text-pink text-xl font-karma-suture">&#9835; Music &#9835;</h4>
			<p className="text-white py-2">
			    I like basically any and all music that exists. So it's always tough to answer, "what's your favorite kind of music?" but nevertheless, here's an attempt!.
			</p>
			<ul className="text-white indent-4 py-2">
			  <li>* The entire Minecraft Soundtrack</li>
			  <li>* Pretty much all classical music</li>
			  <li>* Charlie XCX</li>
			  <li>* Troye Sivan</li>
			  <li>* Sabrina Carpenter</li>
			  <li>* Olivia Rodrigo</li>
			  <li>* Chapelle Roan</li>
			  <li>* Noah Kahan</li>
			  <li>* Billie Eilish</li>
			  <li>* The Mandalorian Soundtrack</li>
			</ul>
			<h4 className="text-pink text-xl font-karma-suture">&#128253; Movies &#128253;</h4>
			<p className="text-white py-2">
			  Fun fact: My first job was working at a movie theater in high school. I really like movies!
			</p>
			<ul className="text-white indent-4 py-2">
			  <li>* Everything Everywhere All at Once (2022)</li>
			  <li>* Big Trouble in Little China (1986)</li>
			  <li>* The Lord of the Rings Trilogy (2001-2003)</li>
			  <li>* The Big Lebowski (1998)</li>
			  <li>* The Holdovers (2023)</li>
			  <li>* Dan in Real Life (2007)</li>
			  <li>* Treasure Planet (2002)</li>
			</ul>
			<h4 className="text-pink text-xl font-karma-suture">&#127902; TV &#127902;</h4>
			<p className="text-white py-2">
			  I watch too much tv... but I also really enjoy it. I realize some of the shows on this list are objectively not very good, but we as individuals have <em>only</em> subjective opinions... so... this is what I like.
			</p>
			<ul className="text-white indent-4 py-2">
			  <li>* The Big Bang Theory (2007-2019)</li>
			  <li>* Star Trek: The Next Generation (1987-1994)</li>
			  <li>* Schitts Creek (2015-2020)</li>
			  <li>* Avatar: The Last Airbender (2005-2008)</li>
			  <li>* Chernobyl (2019)</li>
			  <li>* Rick and Morty (2013-Present)</li>
			</ul>
			<h4 className="text-pink text-xl font-karma-suture">&#128430; Video Games &#128430;</h4>
			<p className="text-white py-2">
			  I really enjoy video games, but don't play them all that much for some reason...? As a result I have a big backlog of games to play ◉_◉
			</p>
			<ul className="text-white indent-4 py-2">
			  <li>* Minecraft (2011)</li>
			  <li>* Rimworld (2013)</li>
			  <li>* Crusader Kings 3 (2020)</li>
			  <li>* Stardew Valley (2016)</li>
			</ul>

			<h2 className="text-orange">{'>>'} What is This Place?</h2>
			<p className="text-white py-2">
			  This site acts as a place for me to put whatever I want on the internet! (ᵔᴥᵔ) I have always admired websites of old with simple html/css and maybe a slight amount of php or javascript to add light functionality. That is the web that I grew up on. Then social media came around and everyone stopped making websites. Fastforward to about a year ago, and I started to realize that some people still did make their own websites. I learned about the indie web or small web or whatever people want to call it. So I decided to completely forgo social media (except youtube for now) in favor of just posting things on my own site.
			</p>
			<p className="text-white py-2">
			  I have already been more active here than I really ever have been on my own social media accounts. I never liked the lack of creative expression most social media affords it's users. This will be a place for me to nerd out on things that I like, share whatever I want, and hopefully inspire some other people to do the same.
			</p>
			<p className="text-white py-2">
			  HTML and CSS are easy to learn and I really think that everybody can and should build their own personal websites from scratch ... maybe some day I will write my own indie web manifesto. {'>_>'}
			</p>
		    </div>
		</div>
	    </main>
	    <Footer />
	</>
    );
}
