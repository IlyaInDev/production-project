import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { RoutePaths } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/AppLink';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className ?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;

    const { t } = useTranslation('articles');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => (
            block.type === ArticleBlockType.TEXT
        )) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePaths.article_ditailes + article.id}
                        >
                            <Button
                                theme={ButtonTheme.OUTLINE}
                            >
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={RoutePaths.article_ditailes + article.id}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});