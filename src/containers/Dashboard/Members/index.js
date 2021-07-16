import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

import Table from "../../../components/Table";
import {
    Button,
    Container,
    FluidContainer,
} from "../../../components/CommonComponents";

import {} from "../../../api/memberAPI";
import AddMemberDialog from "./AddMemberDialog";

const Members = ({ members }) => {
    const [showAddMemberDialog, setShowAddMembersDialog] = useState(false);

    const handleAddMember = (confirmed, data) => {
        if (confirmed) {
            console.log(data);
            // addBook(data)
        }
        setShowAddMembersDialog(false);
    };

    return (
        <>
            <FluidContainer>
                <Container
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >
                    <Button
                        rounded
                        onClick={() => setShowAddMembersDialog(true)}
                    >
                        <IoAddSharp />
                    </Button>
                </Container>
                <Table data={members} />
            </FluidContainer>
            <AddMemberDialog
                show={showAddMemberDialog}
                handleClose={handleAddMember}
            />
        </>
    );
};

export default Members;
