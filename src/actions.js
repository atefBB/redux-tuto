import * as actions from "./actionTypes";

export function addBug(bugDescription) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description: bugDescription
    }
  };
}

export function deleteBug(bugId) {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id: bugId
    }
  };
}

export function resolveBug(bugId) {
  return {
    type: actions.RESOLVE_BUG,
    payload: {
      id: bugId
    }
  };
}
