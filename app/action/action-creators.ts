import {
  OPEN_EDITOR,
  DELETE_DRAFT,
  FLAG_DRAFT,
  ADD_DRAFT,
  GET_DRAFTS,
  RECEIVE_DRAFTS,
  FILTER_FLAGGED
} from './action-constants';

export const actionCreators = {
  openEditor: data => ({
    type: OPEN_EDITOR,
    data
  }),

  deleteDraft: id => ({
    type: DELETE_DRAFT,
    data: id
  }),

  flagDraft: id => ({
    type: FLAG_DRAFT,
    data: id
  }),

  addDraft: draft => ({
    type: ADD_DRAFT,
    data: draft
  }),

  getDrafts: action => ({ type: GET_DRAFTS }),

  receiveDrafts: drafts => ({
    type: RECEIVE_DRAFTS,
    data: drafts
  }),

  filterFlagged: () => ({ type: FILTER_FLAGGED })
};
