import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        virtualized = true,
    } = props;

    const { t } = useTranslation('articles');
    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={`str${i}`}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        // @ts-ignore
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                isScrolling,
                onChildScroll,
                scrollTop,
            }) => (
                <div
                    // @ts-ignore
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            // @ts-ignore
                            <List
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRender}
                                width={width ? width - 80 : 700}
                                autoHeight
                                scrollTop={scrollTop}
                                isScrolling={isScrolling}
                                onScroll={onChildScroll}
                            />
                        )
                        : (
                            articles.map((article) => (
                                <ArticleListItem
                                    className={cls.card}
                                    article={article}
                                    view={view}
                                    target={target}
                                    key={article.id}
                                />
                            ))
                        )}

                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});