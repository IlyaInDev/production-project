import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDitailsPage.module.scss';

interface ArticleDitailsPageProps {
    className?: string;
}

const ArticleDitailsPage = (props: ArticleDitailsPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article');

    return (
        <div className={classNames(cls.ArticleDitailsPage, {}, [className])}>
            {t('ARTICLE DITAILS')}
        </div>
    );
};

export default memo(ArticleDitailsPage);