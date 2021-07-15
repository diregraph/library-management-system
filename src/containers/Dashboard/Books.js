import React from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

const Books = ({ catalog }) => {
    const handleTableRowClick = (id) => {
        console.log(id);
    };
    return (
        <FluidContainer>
            <Table
                data={catalog}
                handleRowClick={handleTableRowClick}
                instruction="Click row to view book"
            />
        </FluidContainer>
    );
};

export default Books;
