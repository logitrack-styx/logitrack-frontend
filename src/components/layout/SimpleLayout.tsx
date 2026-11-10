import { Outlet } from "react-router";

export default function SimpleLayout() {
  return (
    <div className="simple-layout">
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Outlet />
            </div>
        </div>
    </div>
  )
}