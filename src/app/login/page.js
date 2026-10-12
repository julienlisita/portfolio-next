// src/app/login/page.js

import { redirect } from "next/navigation";

import LoginForm from "@/components/login/LoginForm";
import PageTitle from "@/components/UI/PageTitle";
import Section from "@/components/layout/Section";
import { getAdminSession } from "@/lib/auth";

export const metadata = {
  title: "Administration",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function LoginPage({ searchParams }) {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin");
  }

  const params = await searchParams;
  const error = params?.error;

  return (
    <>
      <PageTitle>Administration</PageTitle>

      <Section>
        <div className="mx-auto max-w-md">
          <LoginForm error={error} />
        </div>
      </Section>
    </>
  );
}