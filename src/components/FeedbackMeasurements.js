import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Grid, CircularProgress } from '@material-ui/core';

import Header from 'components/Header';
import mainStyles from 'styles/mainStyles';
import { getRoomMeasurements } from 'data/api';
import GradientGauge from "components/GradientGauge/GradientGauge";

const FeedbackMeasurements = () => {
	const classes = mainStyles();
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const [measurements, setMeasurements] = useState(null);

	const uuid = location.state.uuid;
	const room = location.state.room;

	useEffect(() => {
		async function fetchData() {
			let data = await getRoomMeasurements(uuid);
			console.log(data);
			if (data) {
				setMeasurements(data);
				setLoading(false);
			}
		}

		if (uuid) {
			fetchData();
		}
	}, [uuid]);

	return (
		<div className={classes.background}>
			{!loading && measurements ?
				<>
					<Header roomName={room.name} />
					<Grid container>
						{Object.keys(measurements).map(key => {
							let minValue = 0;
							let maxValue = 0;
							let topLabel = '';
							let unitLabel = '';
							if (key === 'temperature') {
								minValue = 10;
								maxValue = 30;
								topLabel = 'Temperatur';
								unitLabel = '°C';
							} else if (key === 'co2') {
								minValue = 0;
								maxValue = 2500;
								topLabel = 'Luftkvalitet';
								unitLabel = 'ppm';
							} else if (key === 'humidity') {
								minValue = 0;
								maxValue = 100;
								topLabel = 'Luftfugtighed';
								unitLabel = '%';
							}

							return (
								<Grid item xs={12} align="center" key={key}>
									<GradientGauge
										type={key}
										ringWidth={7}
										maxSegmentLabels={5}
										segments={1}
										minValue={minValue}
										maxValue={maxValue}
										value={measurements[key]}
										valueTextFontSize="35"
										width={250}
										height={240}
										topLabel={topLabel}
										unitLabel={unitLabel}
										colorConfig={{
											temperature: {
												"ben1": 19,
												"ben2": 20,
												"ben3": 21,
												"ben4": 23,
												"ben5": 24.5,
												"ben6": 26,
											},
											co2: {
												"ben1": 800,
												"ben2": 1000,
												"ben3": 1200,
											},
											humidity: {
												"ben1": 15,
												"ben2": 25,
												"ben3": 30,
												"ben4": 65,
												"ben5": 75,
												"ben6": 85,
											}
										}
										}
									/>
								</Grid>
							)
						})}
					</Grid>
				</>
				: <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></div>}
		</div>
	)
}

export default FeedbackMeasurements;