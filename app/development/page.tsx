import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Development() {
    return (
        <>
            <Header />
            <main className="content">
                    <h1 className="title">What's In Development?</h1>
                    <img className="gif" src="/images/dancing-bmo.gif" alt="Nothing to see here but hot singles in my area meme from Schitt's Creek"></img>
                    <p className="text blurb">
                        Wow, look at that! Another empty page!
                    </p>
                    <br />
                    <p className="text blurb">
                        It's astounding I'm putting this on the internet, I know. But eventually this will be a place for me to showcase projects I have finished and the status of projects I am working on. I really like Brandon Sanderson's updates he does on his YouTube channel where he gives updates on the current status of his books. This is going to be somewhat inspired from that.
                    </p>
            </main>
            <Footer />
        </>
    )
}