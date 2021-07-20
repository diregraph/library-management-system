import React, { useState, useEffect } from "react";

import Tabs from "../../components/Tabs";
import Spinner from "../../components/Spinner";

import Books from "./Books/index"

import { getBooks } from "../../api/booksAPI";
import Members from "./Members";
import { getMembers } from "../../api/memberAPI";

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState(null);
    const [members, setMembers] = useState(null)

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
    const contents = [
        { title: "Books", elements: <Books catalog={books}/> },
        { title: "Members", elements: <Members members={members}/> },
    ];

    return isLoading ? <Spinner /> : <Tabs contents={contents} />;
};

export default Dashboard;
