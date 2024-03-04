import { ArticleDitailsCommentsSchema } from './ArticleDitailsCommentsSchema';
import { ArticleDitailsRecommendationsSchema } from './ArticleDitailsRecommendationSchema';

export interface ArticleDitailsPageSchema {
    comments: ArticleDitailsCommentsSchema,
    recommendations: ArticleDitailsRecommendationsSchema,
}
