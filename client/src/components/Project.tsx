'use client'
import PlanningIcon from '../assets/images/MdiPlaylistEdit.svg?react';
import ProgressIcon from '../assets/images/MdiPlay.svg?react';
import FinishedIcon from '../assets/images/MdiCheckBold.svg?react';
import PauseIcon from '../assets/images/MdiPause.svg?react';

export default function Project({ item }: { item: { name: string, site:string, description: string, displayName: string, status: { name: string, progress: number } } }) {

    const statusSVGMap: { [key: string]: React.JSX.Element } = {
	"planning": <PlanningIcon />,
	"in progress": <ProgressIcon />,
	"finished": <FinishedIcon />,
	"on pause": <PauseIcon />,
    }

    const status = statusSVGMap[item.status.name.toLowerCase()];

   return (
	<a href={item.site} target="_blank" className="project">
	    <div className="project-header">
		<h4 className="subheading">{item.displayName}</h4>
		<h5 className="progress">{status}<progress value={item.status.progress} max="100">{item.status.progress}</progress>{item.status.progress}%</h5>
	    </div>
	    <div className="project-content">
		<img src={`/previews/${item.name.toLowerCase().replace(/\s/g, "")}.webp`} alt={`${item.displayName} preview`} className="m-auto" />
		<p className="text mt-2 max-2-[300px]">{item.description}</p>
	    </div>
	</a>
   )
}
