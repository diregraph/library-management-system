import React, { useState, useEffect } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index"

import { getBooks } from "../../api/booksAPI";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getBooks()
            .then((response) => {
                if (!response.error) {
                    setBooks(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    const contents = [
        { title: "Books", elements: <Books catalog={books}/> },
        { title: "Members", elements: <h1>Contents of members go here</h1> },
    ];

    return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
