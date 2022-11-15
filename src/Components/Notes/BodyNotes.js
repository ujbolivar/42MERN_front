import React from "react";

import { Link } from "react-router-dom";

import Card from "../Common/Card";

export default function BodyNotes({ data, user }) {
	return (
		<div
		style={{
			backgroundColor: "#30af99",
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
		}}
		>
		{data
			.filter((d) => d.userId === user)
			.map((d) => {
				return (
					<Link
					to={`/notes/${d.id}`}
					style={{
						textDecoration: "none",
						color: "black",
					}}
					>
					<Card
					key={d.id}
					id={d.id}
					userId={d.userId}
					title={d.title}
					body={d.body}
					/>
					</Link>
					);
				})}
				</div>
				);
			}
			