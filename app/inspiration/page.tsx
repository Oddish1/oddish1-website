import Header from '@components/Header';
import Footer from '@components/Footer';
import Interest from '@components/Interest';

export default function Gallery() {

    // define an array of objects
    const inspirations = [
        { name: "Luvstarkei", site: "https://luvstarkei.com", displayName: "LuvstarKei", description: "A cool website, lots of art and minecraft stuff." },
        { name: "Phillip Choi", site: "https://youtube.com/@letphil", displayName: "Phillip Choi", description: "A coding YouTuber who actually builds apps and talks about the process." },
        { name: "reverse-interview", site: "https://github.com/viraptor/reverse-interview", displayName: "Reverse Interview", description: "Questions to ask interviewers at the end of your interview." },
        { name: "Avatar the Last Airbender", site: "https://www.themoviedb.org/tv/246-avatar-the-last-airbender?language=en-US", displayName: "Avatar: The Last Airbender", description: "One of my favorite shows that I generally rewatch every year." },
        { name: "Neon Genisis Evangelion", site: "https://www.themoviedb.org/tv/890-neon-genesis-evangelion?language=en-US", displayName: "Neon Genesis: Evangelion", description: "Recently watched for the first time, but absoloutely love it!" },
        { name: "Sleepyhead", site: "https://open.spotify.com/album/6l8EXrFMXWeHaEutYhwl98", displayName: "Sleepyhead", description: "My favorite album from Cavetown." },
    ]

    return (
        <>
            <Header />
            <main className="content">
                    <h1 className="title">Inspiration</h1>
                    <img className="gif" src="/images/inspired-by-myself.gif" alt="'I am big enough to admit that I am often inspired by myself.' GIF from Parks and Rec."></img>
                    <p className="text blurb">
                        LOL, Feeling inspired yet?
                    </p>
                    <br />
                    <div className="flex flex-wrap gap-16 m-8 justify-center">
                        {inspirations.map((item) => (
                            <Interest key={item.site} item={item} />
                        ))}
                    </div>
            </main>
            <Footer />
        </>
    )
}