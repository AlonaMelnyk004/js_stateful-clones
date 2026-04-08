'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let copyState = { ...state };

  for (const k of actions) {
    if (k.type === 'addProperties') {
      copyState = {
        ...copyState,
        ...k.extraData,
      };
    }

    if (k.type === 'removeProperties') {
      for (const key of k.keysToRemove) {
        delete copyState[key];
      }
    }

    if (k.type === 'clear') {
      copyState = {};
    }

    states.push(copyState);
  }

  return states;
}

module.exports = transformStateWithClones;
