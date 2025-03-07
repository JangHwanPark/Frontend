import {ReactNode} from "react";
import Aside from "@/layout/AsideNav/Aside";
import TeamHeader from "@/components/Team/TeamHeader";

const Layout = async ({
  children,
  params,
} : {
  children: ReactNode,
  params: Promise<{ type: string; id: string; }>;
}) => {
  const { type, id } = await params;
  const navItems = [
    {label: '대시보드', path: `/team/${type}/${id}/dashboard`},
    {label: '멤버', path: `/team/${type}/${id}/member`},
    {label: '게시글', path: `/team/${type}/${id}/post`},
  ];

  return (
      <div className='w-full min-h-[calc(100vh-72px-62px)] py-10 flex flex-col items-center max-w-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto md:mx-auto'>
        {/*<Aside navigation={navItems}/>*/}
        <TeamHeader navigation={navItems}/>
        <section className="w-2/3 h-full min-h-full p-6 mx-auto">
          {children}
        </section>
      </div>
  );
};

export default Layout;