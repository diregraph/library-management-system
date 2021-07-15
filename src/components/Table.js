import React from "react";
import styled from "styled-components";

import { capitalizeFirstLetter } from "../shared/utils";

const StyledTable = styled.table`
    border: none;
    border-collapse: collapse;
    border-collapse: separate;

    td,
    th {
        border: 1px solid;
    }

    td {
        padding: 5px 10px;
    }

    tbody tr {
        :nth-of-type(even) {
            background-color: ${(props) => props.theme.primary.light};
        }
        :hover {
            background-color: ${(props) => props.theme.primary.dark};
        }
    }
    thead > tr {
        background-color: ${(props) => props.theme.primary.main};
    }
    tr > th {
        padding: 0.25em 0.5em;
    }
`;

const TableMarkup = ({ titles, data }) => (
    <StyledTable>
        <colgroup>
            {titles.map((title, index) => (
                <col key={index} />
            ))}
        </colgroup>
        <thead>
            <tr>
                {titles.map((title, index) => (
                    <th key={index}>{capitalizeFirstLetter(title)}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    {titles.map((title, index) => (
                        <td key={index}>
                            {typeof item[title] === "boolean"
                                ? item[title]
                                    ? "Yes"
                                    : "No"
                                : item[title]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </StyledTable>
);

const Tables = ({ data }) =>
    data ? (
        <TableMarkup titles={Object.keys(data[0])} data={data} />
    ) : (
        "No data to populate"
    );

export default Tables;
