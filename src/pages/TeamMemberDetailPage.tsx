import { useParams, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { getTeamMemberById } from "../components/team/teamData";
import TeamDetail from "../components/team/TeamDetail";

export default function TeamMemberDetailPage() {
  const { id } = useParams<{ id: string }>();
  const member = id ? getTeamMemberById(id) : undefined;

  if (!member) {
    return (
      <div className="min-h-screen">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">
              Member Not Found
            </h1>
            <Link to="/team" className="text-primary underline">
              Back to Team
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <TeamDetail member={member} />
      <Footer />
    </div>
  );
}
