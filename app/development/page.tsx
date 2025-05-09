import Header from '@components/Header';
import Footer from '@components/Footer';
import Project from '@components/Project';

export default function Development() {

    const projects = [
	{ name: "oddish1.com", site: "https://oddish1.com", displayName: "Oddish1.com", description: "This website! There is quite a bit of development happening here. I am currently working on the base pages, getting the hang of the tech stack that I chose since a lot of it is new to me. Once that is done, I will probably be working on setting up the database and tying in the dynamic content on the base pages to the database. This will mostly be just the inspiration cards and project cards here. Once the database is set up and working, and I have a feel for database transactions using node js, I will start work on the blogging functionality. Very exciting!", status: { name: "in progress", progress: 10 } },
	{ name: "BookJournal", site: "https://github.com/Oddish1/book_journal", displayName: "BookJournal", description: "This was my capstone project for the last course I took at university. Users are supposed to be able to create an account, search for and add books to lists, and make journal entries and reviews for books that they have read. It's not very polished in it's current state. But it is functional. We only had 6 weeks to plan and code the project... And it was my first time taking on something of this scope. For added difficulty I also decided to use a web framework that I've never used before!", status: { name: "on pause", progress: 85 } },
    ]

    return (
        <>
            <Header />
            <main className="content">
                    <h1 className="title">What's In Development?</h1>
                    <img className="gif" src="/images/dancing-bmo.gif" alt="Dancing BMO gif."></img>
		   <div>
			{projects.map((item) => (
			    <Project key={item.site} item={item} />
			))}
		   </div>
            </main>
            <Footer />
        </>
    )
}
