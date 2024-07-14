import { ReactNode } from "react";
import style from '../../ui/customers/customers.module.css'
export default function Layout({ children }: {children: ReactNode}){
    return <div className={style.container}>
        {children}
    </div>
}