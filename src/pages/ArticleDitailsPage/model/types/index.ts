import { ArticleDitailsCommentsSchema } from './ArticleDitailsCommentsSchema';
import { ArticleDitailsRecommendationsSchema } from './ArticleDitailsRecommendationsSchema';

export interface ArticleDitailsPageSchema {
    comments: ArticleDitailsCommentsSchema;
    recommendations: ArticleDitailsRecommendationsSchema;
}
