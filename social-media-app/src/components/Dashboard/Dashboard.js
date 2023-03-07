import './Dashboard.css'
export default function Dashboard() {
	const name=localStorage.getItem('name')
	return (
		<div className='dashboard-wrapper'>
			<h2>Hello {name}! </h2>
		</div>
	);
}
