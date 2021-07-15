import React, { useState, useEffect } from "react";
import { IoReturnUpBack } from "react-icons/io5";

import {
    Container,
    ContainerInline,
    FlexRow,
    Button,
} from "../../components/CommonComponents";
import Spinner from "../../components/Spinner";

import { getBook } from "../../api/booksAPI";

const Books = ({ id, handleBackClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState(null);

    useEffect(() => {
        console.log("Fuck");
        setIsLoading(true);
        getBook(id)
            .then((response) => {
                if (!response.error) {
                    setBook(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return (
        <Container>
            <Button onClick={handleBackClick}>
                <IoReturnUpBack />
            </Button>
            {!isLoading && book !== null ? (
                <FlexRow>
                    <ContainerInline>
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        {book.isAvailable ? (
                            ""
                        ) : (
                            <>
                                <h4>{`Burrowed by: ${book.borrowedMemberId}`}</h4>
                                <h4>{`Burrowed date: ${book.borrowedDate}`}</h4>
                            </>
                        )}
                    </ContainerInline>
                </FlexRow>
            ) : (
                <Spinner />
            )}
        </Container>
    );
};

export default Books;
