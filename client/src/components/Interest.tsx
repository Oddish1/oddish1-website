export default function Interest({ item }) {
    return (
        <div className="card">
            <a href={item.site} target="_blank">
                <div>
                    <h4 className="subheading max-w-[300px]">{item.name}</h4>
                    <div className="mt-2">
                        <img src={`${item.imageUrl}`} alt={`${item.name} preview` } className="m-auto" />
                    </div>
                    <p className="text mt-2 max-w-[300px]">{item.content}</p>
                </div>
            </a>
        </div>
    )
}
