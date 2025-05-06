import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
    return (
	<>
	    <Header />
		<main className="content">
		    <h1 className="title">Welcome, Cyber-Traveller</h1>
		    <img className="my-avatar" src="/images/oddish1-avatar.png" alt="Oddish1 Avatar" />
		    <h2 className="subtitle">here you can find everything i have to share</h2>
			<p className="text blurb">
				From images sealed within my gallery, musings scrawled out on my blog, or a look into the machinations of my mind... I'm sure there is something here to interest you. Feel free to look around! This place is teeming with code I have yet to subdue. Be warned...
			</p>	    
		    <br />
		</main>
	    <Footer />
	</>
    )
}
