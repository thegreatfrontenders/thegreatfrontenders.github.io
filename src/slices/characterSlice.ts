import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GET_CHARACTERS } from '../services/graphql/queries'
import { CharacterGQ } from '../types'
import { apolloClient } from '../services/graphql/apolloClient'

interface CharacterState {
  list: CharacterGQ[];
  status: string;
  error?: string;
  selected: CharacterGQ | null;
}

const initialState: CharacterState = {
    list: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    selected: null
  };


const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setSelectedCharacter(state, action: PayloadAction<CharacterGQ | null>){
        state.selected = action.payload;
    }
  },
   extraReducers:(builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchAllCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }); 
  }, 
})

export const fetchAllCharacters = createAsyncThunk(
  'characters/fetchAll',
  async (_, { rejectWithValue }) => {
    let currentPage = 1;
    let allResults: CharacterGQ[] = [];

    while (true) {
      const { data } = await apolloClient.query({
        query: GET_CHARACTERS,
        variables: { page: currentPage },
      });

      allResults = [...allResults, ...data.characters.results];

      if (!data.characters.info.next) break;
      currentPage++;
    }
    return allResults;
  }
)

export const { setSelectedCharacter } = characterSlice.actions;
export default characterSlice.reducer;