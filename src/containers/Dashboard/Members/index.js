import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
    Button,
    Container,
    FluidContainer,
} from "../../../components/CommonComponents";


import { addBook } from "../../../api/booksAPI";

const Members = ({ members }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [showAddMemberDialog, setShowAddMembersDialog] = useState(false);

    const handleTableRowClick = (id) => {
        setSelectedId(id);
    };

    const handleMemberViewBackClick = () => {
        setSelectedId(null);
    };

    const handleAddMember = (confirmed, data) => {
        if (confirmed) {
            console.log(data);
            // addBook(data)
        }
        setShowAddMembersDialog(false);
    };

    return selectedId === null ? (
        <>
            <FluidContainer>
                <Container
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >
                    <Button rounded onClick={() => setShowAddMembersDialog(true)}>
                        <IoAddSharp />
                    </Button>
                </Container>
                <Table
                    data={members}
                    handleRowClick={handleTableRowClick}
                />
            </FluidContainer>
            {/* <AddBookDialog
                show={showAddMemberDialog}
                handleClose={handleAddMember}
            /> */}
        </>
    ) : (
        "<Book id={selectedId} handleBackClick={handleMemberViewBackClick} />"
    );
};

export default Members;
