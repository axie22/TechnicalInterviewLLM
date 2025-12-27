"use client";

import CustomNavbar from "../components/CustomNavbar"
import technicalInterviewPic from "../../public/technical_interview.png"
import Logo from "../../public/Orbit_logo.svg"
import Image from 'next/image';
import { Card, CardHeader, CardBody, Divider, Chip } from "@heroui/react";

export default function About() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <CustomNavbar />

            <main className="px-6 py-16 flex justify-center">
                <div className="max-w-5xl w-full flex flex-col gap-20">

                    {/* Hero Section */}
                    <section className="flex flex-col items-center text-center gap-6 pt-8">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <Image
                                    src={Logo}
                                    alt="Orbit Logo"
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
                            Orbit
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                            The intelligent playground for technical interview mastery.
                        </p>
                    </section>

                    <Divider className="my-4" />

                    {/* Mission Section - Featured Card */}
                    <section>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <Chip color="primary" variant="flat" size="sm" className="uppercase tracking-wider font-bold text-[10px]">
                                    Our Mission
                                </Chip>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                                    Built by engineers,<br /> for engineers.
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Orbit was created to bridge the gap between solitary practice and real interview pressure.
                                    We combine a developer-grade code editor with an adaptive AI interviewer that doesn't just grade you—it guides you.
                                </p>
                                <ul className="space-y-3 pt-2">
                                    {[
                                        "VS Code-style editor experience",
                                        "Real-time adaptive AI feedback",
                                        "Focus on patterns, not just syntax"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Card className="border-none shadow-lg bg-white overflow-hidden" radius="lg">
                                <Image
                                    src={technicalInterviewPic}
                                    alt="Technical interview illustration"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    width={800}
                                />
                            </Card>
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="flex flex-col gap-10">
                        <div className="text-center space-y-3">
                            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                                Meet the Team
                            </h2>
                            <p className="text-slate-500">
                                The builders behind the platform.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <TeamMemberCard
                                name="Alexander Xie"
                                role="Full-Stack Engineer (AI/Backend)"
                                description="Alex specializes in AI systems and backend architecture. He builds the scalable pipelines that power our LLM integrations and ensures our intelligent models connect seamlessly with product features."
                            />
                            <TeamMemberCard
                                name="Phoebe Huang"
                                role="Full-Stack Engineer (Product)"
                                description="Phoebe focuses on crafting intuitive user experiences and developer tools. She bridges the gap between complex AI systems and user-friendly interfaces, ensuring reliable and responsive interactions."
                            />
                            <TeamMemberCard
                                name="Matthew Cheng"
                                role="Full-Stack Engineer (Frontend)"
                                description="Matthew is passionate about building engaging user interfaces. He leads our frontend architecture, optimizing performance and creating the seamless, interactive experiences that define Orbit."
                            />
                        </div>
                    </section>

                    <footer className="text-center text-slate-400 text-sm py-8 border-t border-slate-200 mt-8">
                        © {new Date().getFullYear()} Orbit. All rights reserved.
                    </footer>
                </div>
            </main>
        </div>
    );
}

function TeamMemberCard({ name, role, description }: { name: string, role: string, description: string }) {
    return (
        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white" radius="lg">
            <CardHeader className="flex flex-col items-start gap-1 px-6 pt-6 pb-0">
                <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{role}</span>
            </CardHeader>
            <CardBody className="px-6 py-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                    {description}
                </p>
            </CardBody>
        </Card>
    )
}