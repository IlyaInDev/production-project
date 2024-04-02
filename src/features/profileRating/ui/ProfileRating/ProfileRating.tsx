import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useProfileRating, useRateProfile } from '../../api/profileRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProfileRatingProps {
    className?: string;
    profileId?: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;

    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useProfileRating({
        profileId: profileId ?? '',
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileMutation({
                    profileId: profileId ?? '',
                    rate: starsCount,
                    userId: userData?.id ?? '',
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [profileId, rateProfileMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback);
        },
        [handleRateProfile],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount);
        },
        [handleRateProfile],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            title={t('Оцените профиль')}
            feedbackTitle={t(
                'Ваш фидбэк очень поможет при составлении рейтинга писателей',
            )}
            hasFeedback
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
            className={className}
        />
    );
});
