import React from 'react';
import { StyledCard, StyledLocation, StyledTitle } from './styles';

interface CardProps {
	jobTitle: String;
	companyName: String;
	jobDesc: String;
}

export default function Card({ jobTitle, companyName, jobDesc }: CardProps) {
	return (
		<StyledCard>
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