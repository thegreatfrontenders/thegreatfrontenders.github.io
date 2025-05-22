import { createAsyncThunk } from "@reduxjs/toolkit";
import { DevilFruit } from "../types";
import { apolloClient } from "../services/graphql/apolloClient";
import { GET_DEVIL_FRUITS } from "../services/graphql/queries";

const fetchAllFruits = createAsyncThunk('fruits/fetchAll',
    async(_, {rejectWithValue}) => {
        let currentPage = 1;
        let allResults: DevilFruit[] = [];
    }
);