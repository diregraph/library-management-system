import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
    Button,
    Container,
    FluidContainer,
} from "../../../components/CommonComponents";

import Book from "./Book";
import AddBookDialog from "./AddBookDialog";

import { addBook } from "../../../api/booksAPI";

const Books = ({ catalog }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [showAddBookDialog, setShowAddBookDialog] = useState(false);

    const handleTableRowClick = (id) => {
        setSelectedId(id);
    };

    const handleBookViewBackClick = () => {
        setSelectedId(null);
    };

    const handleAddBook = (confirmed, data) => {
        if (confirmed) {
            console.log(data);
            addBook(data)
        }
        setShowAddBookDialog(false);
    };

    return selectedId === null ? (
        <>
            <FluidContainer>
                <Container
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >
                    <Button rounded onClick={() => setShowAddBookDialog(true)}>
                        <IoAddSharp />
                    </Button>
                </Container>
                <Table
                    data={catalog}
                    handleRowClick={handleTableRowClick}
                    instruction="Click row to view book"
                />
            </FluidContainer>
            <AddBookDialog
                show={showAddBookDialog}
                handleClose={handleAddBook}
            />
        </>
    ) : (
        <Book id={selectedId} handleBackClick={handleBookViewBackClick} />
    );
};

export default Books;
