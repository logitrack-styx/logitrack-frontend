import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-1 flex items-center justify-center">
        <div className="flex items-center justify-between gap-0.5 text-gray-500">
          <Copyright className="h-4 w-4" />
          <h1 className="text-xs">
              Logitrack - Styx
          </h1>
        </div>
    </footer>
  )
}