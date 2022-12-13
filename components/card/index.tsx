import React from 'react';
import { StyledCard, StyledLocation, StyledTitle } from './styles';

interface CardProps {
	jobKey: number;
	jobTitle: String;
	companyName: String;
	jobDesc: String;
}

export default function Card({ jobKey, jobTitle, companyName, jobDesc }: CardProps) {
	return (
		<StyledCard key={jobKey}>
			<StyledTitle>
				{jobTitle}
			</StyledTitle>
			<StyledLocation>
				{companyName}
			</StyledLocation>
			<div>
				{jobDesc}
			</div>
		</StyledCard>
	)
}