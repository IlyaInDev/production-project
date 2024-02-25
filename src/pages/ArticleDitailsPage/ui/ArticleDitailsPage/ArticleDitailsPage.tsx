import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDitails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDitailsPage.module.scss';

interface ArticleDitailsPageProps {
    className?: string;
}

const ArticleDitailsPage = (props: ArticleDitailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article_ditailes');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDitailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDitailsPage, {}, [className])}>
            <ArticleDitails id={id} />
        </div>
    );
};

export default memo(ArticleDitailsPage);