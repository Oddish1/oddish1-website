import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Gallery() {
    return (
        <>
            <Header />
            <main className="content">
                    <h1 className="title">Inspiration</h1>
                    <img className="gif" src="/images/inspired-by-myself.gif" alt="'I am big enough to admit that I am often inspired by myself.' GIF from Parks and Rec."></img>
                    <p className="text blurb">
                        Feeling inspired yet?
                    </p>
                    <br />
                    <p className="text blurb">
                        This is where I will link to and post pictures of things that inspire me. This can be music, pictures, clothes, videos, etc. Not the kind of grind-set type of inspiration, more creative inspiration.
                    </p>
            </main>
            <Footer />
        </>
    )
}