import { Routes } "../node_modules/routes";
const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'loopback',
        component: LoopbackComponent
    }, {
        path: 'heroparent',
        component: HeroParentComponent
    }, {
        path: 'version',
        component: VersionParentComponent
    }, {
        path: '**',// **代表该路由是一个通配符路径。如果当前URL无法匹配上我们配置过的任何一个路由中的路径，路由器就会匹配上这一个。当需要显示404页面或者重定向到其它路由时，该特性非常有用。
        component: DashboardComponent,
    }
];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes)