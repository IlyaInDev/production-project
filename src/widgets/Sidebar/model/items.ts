import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePaths.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePaths.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutePaths.articles,
        Icon: ArticlesIcon,
        text: 'Статьи',
        authOnly: true,
    },
];