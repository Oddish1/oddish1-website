export default function Project({ item }: { item: { name: string, site:string, description: string, displayName: string, status: { name: string, progress: number } } }) {

    const statusColorMap: { [key: string]: string } = {
	"planning": "text-yellow-400",
	"in progress": "text-blue-400",
	"finished": "text-green-400",
	"on pause": "text-gray-400",
    };

    const statusClass = statusColorMap[item.status.name.toLowerCase()] || "text-white";

   return (
	<a href={item.site} target="_blank" className="project">
	    <div className="project-header">
		<h4 className="subheading">{item.displayName}</h4>
		<h5 className={`font-bold ${statusClass}`}>{item.status.name.toUpperCase()} - {item.status.progress}%</h5>
	    </div>
	    <div className="project-content">
		<img src={`/previews/${item.name.toLowerCase().replace(/\s/g, "")}.webp`} alt={`${item.displayName} preview`} className="m-auto" />
		<p className="text mt-2 max-2-[300px]">{item.description}</p>
	    </div>
	</a>
   )
}
