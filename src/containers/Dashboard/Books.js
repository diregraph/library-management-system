import React, { useState } from "react";

import Table from "../../components/Table";
import { FluidContainer } from "../../components/CommonComponents";

import Book from "./Book";

const Books = ({ catalog }) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleTableRowClick = (id) => {
        setSelectedId(id);
    };

    const handleBookViewBackClick = () => {
        setSelectedId(null);
    };

    return selectedId === null ? (
        <FluidContainer>
            <Table
                data={catalog}
                handleRowClick={handleTableRowClick}
                instruction="Click row to view book"
            />
        </FluidContainer>
    ) : (
        <Book id={selectedId} handleBackClick={handleBookViewBackClick} />
    );
};

export default Books;
