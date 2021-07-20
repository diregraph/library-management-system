import React, { useState, useEffect } from "react";

import { Button, FlexRow, Select } from "../../../components/CommonComponents";
import { Modal, DialogBox } from "../../../components/Modal";

import { getMembers } from "../../../api/memberAPI";
import Spinner from "../../../components/Spinner";

export default function LendDialog({ handleClose, show }) {
    const [memberId, setMemberId] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [members, setMembers] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getMembers()
            .then((response) => {
                if (!response.error) {
                    setMembers(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    const sendConfirm = () => {
        if (memberId !== "") {
            handleClose(true, memberId);
        }else{
            window.alert("Please select a member first.")
        }
    };

    const sendCancel = () => handleClose(false, null);

    return (
        <Modal show={show}>
            <DialogBox>
                <h2>Lend book</h2>
                <p>Select member to continue and confirm</p>
                {!isLoading && members !== null ? (
                    <>
                        <Select
                            id="member-select"
                            onChange={(e) => setMemberId(e.target.value)}
                            value={memberId}
                        >
                            <option value="">
                                --Please choose an option--
                            </option>
                            {members.map((member, index) => (
                                <option key={index} value={member.id}>
                                    {member.name}
                                </option>
                            ))}
                        </Select>
                        <FlexRow>
                            <Button
                                onClick={sendConfirm}
                            >
                                Confirm
                            </Button>
                            <Button onClick={sendCancel} color="secondary">
                                Cancel
                            </Button>
                        </FlexRow>
                    </>
                ) : (
                    <Spinner />
                )}
            </DialogBox>
        </Modal>
    );
}
