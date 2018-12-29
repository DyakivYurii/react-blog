import { CONTENT } from '../constans/typesAction';

export const getArticles = (listOfArticles = [], amountNumber = 10) => {
  return { type: CONTENT.GET_ARTICLES_REQUEST, listOfArticles, amountNumber };
};
