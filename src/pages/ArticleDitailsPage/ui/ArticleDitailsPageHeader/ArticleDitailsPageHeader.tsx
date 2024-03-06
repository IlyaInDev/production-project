import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticleDitailsPage/model/selectors/article';
import { getArticleDitailsData } from 'entities/Article';
import cls from './ArticleDitailsPageHeader.module.scss';

interface ArticleDitailsPageHeaderProps {
    className ?: string;
}

export const ArticleDitailsPageHeader = memo((props: ArticleDitailsPageHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article_ditails');
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDitailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePaths.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePaths.article_ditailes}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDitailsPageHeader, {}, [className])}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                    className={cls.editBtn}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});