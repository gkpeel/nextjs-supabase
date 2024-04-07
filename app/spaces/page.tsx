import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Spaces({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  let { data: parking_spot, error } = await supabase
    .from("parking_spot")
    .select("*");

  return (
    <div>
      <h1>Spaces</h1>
      <ul>
        {parking_spot && parking_spot.map((spot) => <li>{spot.name}</li>)}
      </ul>
    </div>
  );
}
