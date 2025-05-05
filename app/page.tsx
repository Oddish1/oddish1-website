import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
    return (
	<>
	    <Header />
		<main className="content">
		    <h1 className="title">The Oddish Arcanum</h1>
		    <h2 className="subtitle">my personal grimoire</h2>
		    <img className="my-avatar" src="/images/oddish1-avatar.png" alt="Oddish1 Avatar" />
		    <br />
		    <p className="text text-center">
			Feel free to look around! The site is a work in progress though ... so be warned!
		    </p>		    
		    <br />
		</main>
	    <Footer />
	</>
    )
}
