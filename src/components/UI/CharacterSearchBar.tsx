import React, { useEffect } from "react";
import { CharacterGQ } from "../../types";
import { Autocomplete, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCharacter, fetchAllCharacters } from "../../slices/characterSlice";
import { RootState, store } from "../../store/store";
import "./uiStyles.css";

function CharacterSearchBar() {
    const dispatch = useDispatch();

    const characters = useSelector((state: RootState) => state.characters?.list || []);
    const selectedCharacter = useSelector((state: RootState) => state.characters?.selected || null);
    const status = useSelector((state: RootState) => state.characters?.status);

    useEffect(() => {
        if (status === "idle") {
            store.dispatch(fetchAllCharacters()); // ✅ correct
        }
    }, [dispatch, status]);

    return (
        <div className="fighter-container">
            <h3 className="onePieceHeader fighter-title"><i>Choose Your Fighter!</i></h3>
            <div className="input-group mb-3">
                <div className="input-group-prepend fighter-card">
                    <Autocomplete
                        disablePortal
                        options={characters}
                        getOptionLabel={(option: CharacterGQ | null) => option?.englishName.split('(')[0] || ""} // a lot of these names have other variations 
                        sx={{ width: 300 }}
                        value={selectedCharacter}
                        onChange={(event, newValue: CharacterGQ | null) => {
                            dispatch(setSelectedCharacter(newValue));
                        }}
                        renderInput={(params) => <TextField {...params} label="Characters" />}
                    />
                </div>
                {selectedCharacter && <div className="input-group-prepend figher-avatar">
                    {<img height="75px" width="75px" src={selectedCharacter.avatarSrc} alt={selectedCharacter.englishName} className="img-fluid img-thumbnail"></img>}
                </div>}
            </div>
        </div>
    );
}

export default CharacterSearchBar;
