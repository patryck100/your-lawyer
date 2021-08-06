import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDirectoryClient = createSelector(
    [selectDirectory],
    directory => directory.client
);

export const selectDirectoryLawyer = createSelector(
    [selectDirectory],
    directory => directory.lawyer
);