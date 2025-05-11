export default function Interest({ item }: { item: { name: string, site: string, description: string, displayName: string } }) {
    return (
        <div className="card">
            <a href={item.site} target="_blank">
                <div>
                    <h4 className="subheading max-w-[300px]">{item.displayName}</h4>
                    <div className="mt-2">
                        <img src={`/previews/${item.name.toLowerCase().replace(/\s/g, "")}.webp`} alt={`${item.name} preview` } className="m-auto" />
                    </div>
                    <p className="text mt-2 max-w-[300px]">{item.description}</p>
                </div>
            </a>
        </div>
    )
}
