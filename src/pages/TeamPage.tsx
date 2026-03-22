import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { getTeamData } from '@/data';

export function TeamPage() {
  const teamData = getTeamData();

  if (!teamData) return <div className="text-center p-10">Loading...</div>;

  const imageMap: Record<string, string> = {
    PI: "/images/team/PI_robotics_club.jpeg",
    "Pranav": "/images/team/vice_president.jpeg",
    "Ankit Anand": "/images/team/vice_president.jpeg",
    "Adarsh Aarav": "/images/team/secretary.jpeg",
    "Shourya": "/images/team/vice_secretary.jpeg",
    "Aditya Narayan": "/images/team/coordinator.jpeg",
    "Mohd Afzal": "/images/team/coordinator2.jpeg",
    "Smita Kumari": "/images/team/content_Lead.jpeg",
    "Priyanka": "/images/team/videography_lead.jpeg"
  };

  return (
    <div className="min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="section-padding text-center">
        <h1 className="text-5xl font-bold">
          Meet Our <span className="text-primary">Team</span>
        </h1>
      </section>

      {/* PI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0 md:flex">

              <img
                src={imageMap["PI"] || teamData.pi?.image}
                alt={teamData.pi?.name}
                className="w-full md:w-1/3 h-80 object-cover object-top"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{teamData.pi?.name}</h3>
                <p className="text-primary">{teamData.pi?.role}</p>
                <p className="text-sm text-muted-foreground">
                  {teamData.pi?.department}
                </p>

                <p className="mt-3">{teamData.pi?.bio}</p>

                <div className="flex gap-3 mt-4">
                  <a href={`mailto:${teamData.pi?.email}`}><Mail /></a>

                  {teamData.pi?.social?.linkedin && (
                    <a href={teamData.pi.social.linkedin}><Linkedin /></a>
                  )}

                  {teamData.pi?.social?.twitter && (
                    <a href={teamData.pi.social.twitter}><Twitter /></a>
                  )}
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </section>

      {/* EXECUTIVES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Executive Committee
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.executives?.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4">

                  <img
                    src={imageMap[member.name] || member.image}
                    alt={member.name}
                    className={`w-full h-64 rounded-lg object-cover ${
                      member.name === "Aditya Narayan"
                        ? "object-top"
                        : "object-center"
                    }`}
                  />

                  <h3 className="text-lg font-bold mt-3">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.year}</p>
                  <p className="text-sm mt-2">{member.bio}</p>

                  <div className="flex gap-2 mt-3">
                    {member.social?.github && (
                      <a href={member.social.github}><Github size={18} /></a>
                    )}
                    {member.social?.linkedin && (
                      <a href={member.social.linkedin}><Linkedin size={18} /></a>
                    )}
                    {member.social?.twitter && (
                      <a href={member.social.twitter}><Twitter size={18} /></a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`}><Mail size={18} /></a>
                    )}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Core Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamData.coreTeam?.map((member, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-4">

                  <img
                    src={imageMap[member.name] || member.image}
                    alt={member.name}
                    className="w-20 h-20 object-cover object-top rounded-lg"
                  />

                  <div>
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="text-xs">{member.year}</p>
                    <span className="text-xs bg-primary/10 px-2 py-1 rounded">
                      {member.domain}
                    </span>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}