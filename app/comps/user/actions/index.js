import { createAction, actionTypeCreatorWithNameSpace } from '../../../common/utils/action';

const actionTypeCreator = actionTypeCreatorWithNameSpace('user');

export const info = createAction(actionTypeCreator('info'), () => {
  return {};
}, { fetch: { processing: true } });
