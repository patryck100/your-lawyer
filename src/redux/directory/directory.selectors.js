import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

//gives access to the images to be displayed in the homepage for the clients
export const selectDirectoryClient = createSelector(
    [selectDirectory],
    directory => directory.client
);

//gives access to the images to be displayed in the enquiries page for the lawyers
export const selectDirectoryLawyer = createSelector(
    [selectDirectory],
    directory => directory.lawyer
);