import React from 'react';

const aftercareList = [
	{
		title: 'Immediately After Your Treatment (First 24 Hours)',
		items: [
			'Gently blot the area with a clean, damp cotton pad every hour to remove any excess lymph fluid. This is crucial to prevent heavy scabbing and ensure the best pigment retention.',
			'Keep the treated area as dry as possible. Avoid washing the area directly.',
			'Do not apply any makeup, creams, or ointments to the brow area other than what is recommended by your technician.',
			'Avoid touching, picking, scratching, or peeling the treated area. Doing so can cause scarring and premature pigment loss.',
		],
	},
	{
		title: 'Daily Care (First 7-14 Days)',
		items: [
			'Starting from day 2, apply a very thin layer of the recommended aftercare ointment with a clean cotton swab once or twice a day. Use sparingly—the area should be moisturized, not greasy.',
			'When showering, avoid letting the stream of water hit your face directly. Cleanse your face carefully around the treated area.',
			'Avoid swimming, saunas, hot tubs, steam rooms, and excessive sweating from workouts. Salt and steam can pull the pigment out of the skin.',
			'No direct sun exposure or tanning beds. Wear a hat when outdoors to protect the area from UV rays, which can cause the pigment to fade.',
		],
	},
	{
		title: 'What to Expect During Healing',
		items: [
			'Your brows will appear darker and more defined for the first few days. This is a normal part of the healing process.',
			'Around day 4-7, you may experience light scabbing or flaking. Let the skin flake off naturally. Do not pick at it.',
			'After the flaking subsides, the brows may appear very light or "ghosting." The color will gradually return and bloom over the next 4-6 weeks.',
			'The true, healed result will be visible around 6 weeks after your initial appointment. A touch-up session is often required to perfect the shape and color.',
		],
	},
	{
		title: 'Long-Term Care to Maintain Your Results',
		items: [
			'Always apply a broad-spectrum SPF to the treated area when in the sun to prevent fading.',
			'Avoid using chemical exfoliants, peels, or laser treatments directly over the brow area. Inform your skincare professional about your cosmetic tattoo.',
			'Schedule a color boost or touch-up appointment every 1-3 years to keep your brows looking fresh.',
		],
	},
];

export default function Aftercare() {
	return (
		<section className="content-section aftercare-section">
			<div className="container">
				<h1 className="section-title">Aftercare Instructions</h1>
				<p className="section-subtitle">
					Following these aftercare instructions is critical for achieving the best
					possible results from your cosmetic tattoo treatment.
				</p>
				<div className="aftercare-list">
					{aftercareList.map((section, idx) => (
						<div className="aftercare-block" key={idx}>
							<h2>{section.title}</h2>
							<ul>
								{section.items.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="aftercare-contact">
					<p>
						If you have any questions or concerns during your healing process,
						please do not hesitate to{' '}
						<a href="/contact">contact us</a>.
					</p>
				</div>
			</div>
		</section>
	);
}
