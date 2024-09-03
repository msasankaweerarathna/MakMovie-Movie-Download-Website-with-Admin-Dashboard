import Movie from "@/components/Movie";
import { useSession } from "next-auth/react";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

export default function Addmovie() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loading />;
  }

  // Chack if there's no active session and redirect to login page
  if (!session) {
    router.push("/auth");
    return null; // return null or any loading indicator while redirecting
  }

  if (session) {
    return (
      <>
        <div className="addblogpage container">
          <div className="blogsadd">
            <div className="titledashboard w-100 flex flex-sb">
              <div>
                <h2>Add movie</h2>
                <h3>ADMIN PANEL</h3>
              </div>
            </div>
            <Movie />
          </div>
        </div>
      </>
    );
  }
}
