"use client";

import CustomNavbar from "../components/CustomNavbar";
import technicalInterviewPic from "../../public/technical_interview.png";
import Logo from "../../public/Orbit_logo.svg";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Chip,
  Button,
  Link,
} from "@heroui/react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <CustomNavbar />

      <main className="px-6 py-16 flex justify-center w-full">
        <div className="w-full max-w-6xl flex flex-col gap-24">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center text-center gap-6 pt-16 pb-12 overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <Chip
                color="warning"
                variant="flat"
                size="sm"
                className="uppercase tracking-widest font-bold text-[10px]"
              >
                Public Beta
              </Chip>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Image
                    src={Logo}
                    alt="Orbit Logo"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4 max-w-2xl px-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Orbit
                </h1>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal">
                  The intelligent playground for technical interview mastery.
                </p>
              </div>
            </div>
          </section>

          <Divider className="my-8" />

          {/* Mission Section - Featured Card */}
          <section>
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-6">
                <Chip
                  color="primary"
                  variant="flat"
                  size="sm"
                  className="uppercase tracking-wider font-bold text-[10px]"
                >
                  Our Mission
                </Chip>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Built by engineers,
                  <br /> for engineers.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Orbit was created to bridge the gap between solitary practice
                  and real interview pressure. We combine a developer-grade code
                  editor with an adaptive AI interviewer that doesn't just grade
                  you—it guides you.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "VS Code-style editor experience",
                    "Real-time adaptive AI feedback",
                    "Patterns over rote memorization",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-medium text-base"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Card
                className="border-none shadow-2xl bg-white overflow-hidden"
                radius="lg"
              >
                <Image
                  src={technicalInterviewPic}
                  alt="Technical interview illustration"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  width={1000}
                />
              </Card>
            </div>
          </section>

          {/* Team Section */}
          <section className="flex flex-col gap-10 py-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Meet the Team
              </h2>
              <p className="text-base text-slate-500 max-w-2xl mx-auto">
                The builders behind the platform, combining expertise in AI,
                product design, and frontend engineering.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <TeamMemberCard
                name="Alexander Xie"
                role="Lead Engineer"
                description="Alex specializes in AI systems and backend architecture. He builds the scalable pipelines that power our LLM integrations and ensures our intelligent models connect seamlessly with product features."
                linkedinUrl="https://www.linkedin.com/in/alexanderxie04/"
              />
              <TeamMemberCard
                name="Phoebe Huang"
                role="Full-Stack Engineer"
                description="Phoebe focuses on crafting intuitive user experiences and developer tools. She bridges the gap between complex AI systems and user-friendly interfaces, ensuring reliable and responsive interactions."
                linkedinUrl="https://www.linkedin.com/in/phoebelhuang/"
              />
              <TeamMemberCard
                name="Matthew Cheng"
                role="Maching Learning Engineer"
                description="Matthew is passionate about building the models that power the technical interview. He trains and tests the models, ensuring the conversations seem natural and smooth."
                linkedinUrl="https://www.linkedin.com/in/matthew-cheng4/"
              />
            </div>
          </section>

          {/* Contact / Beta Section */}
          <section className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-50" />
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <Chip
                color="secondary"
                variant="shadow"
                className="uppercase tracking-widest font-bold text-[10px]"
              >
                Get In Touch
              </Chip>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Help us shape the future of interviewing.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We're currently in <strong>Public Beta</strong>. Your feedback
                is invaluable in helping us refine the platform. Encountered a
                bug? Have a feature request? Let us know.
              </p>
              <div className="pt-4">
                <Button
                  size="lg"
                  color="primary"
                  variant="shadow"
                  as={Link}
                  href="mailto:alexxie9667@gmail.com"
                  className="font-semibold"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </section>

          <footer className="text-center text-slate-400 text-sm py-12 border-t border-slate-200 mt-12">
            © {new Date().getFullYear()} Orbit. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}

function TeamMemberCard({
  name,
  role,
  description,
  linkedinUrl,
}: {
  name: string;
  role: string;
  description: string;
  linkedinUrl?: string;
}) {
  return (
    <Card
      className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white h-full"
      radius="lg"
    >
      <CardHeader className="flex flex-row items-start justify-between px-6 pt-6 pb-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full w-fit">
            {role}
          </span>
        </div>
        {linkedinUrl && (
          <Button
            isIconOnly
            variant="light"
            radius="full"
            as={Link}
            href={linkedinUrl}
            target="_blank"
            className="text-slate-400 hover:text-[#0077b5] min-w-10 w-10 h-10"
          >
            <LinkedInIcon />
          </Button>
        )}
      </CardHeader>
      <CardBody className="px-6 py-4">
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </CardBody>
    </Card>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
