import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="">
      <div className="">
        <div className="py-6 font-bold bg-purple-950 text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <nav className="">
          <div className="">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="">
        <main className=""></main>
      </div>

      <footer className=""></footer>
    </div>
  );
}
