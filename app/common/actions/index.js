import { createAction, actionTypeCreatorWithNameSpace } from '../utils/action';

const actionTypeCreator = actionTypeCreatorWithNameSpace('common');

export const refreshBreadcrumb = createAction(actionTypeCreator('refreshBreadcrumb'));
