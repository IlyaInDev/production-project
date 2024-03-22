import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRatingArgs {
    userId: string;
    profileId: string;
}

interface RateProfileArgs {
    userId: string;
    profileId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArgs>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateProfileArgs>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});
export const useProfileRating = articleRatingApi.useGetProfileRatingQuery;
export const useRateProfile = articleRatingApi.useRateProfileMutation;
