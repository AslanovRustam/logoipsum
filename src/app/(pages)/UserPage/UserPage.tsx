import Head from "@/app/components/Head/Head";
import Information from "@/app/components/Information/Information";
import Container from "@/app/components/Container/Container";
import Causes from "@/app/components/Causes/Causes";
import SocialActivity from "@/app/components/SocialActivity/SocialActivity";

export default function UserPage() {
  return (
    <>
      <Head />
      <Container>
        <Information />
        <Causes />
        <SocialActivity />
      </Container>
    </>
  );
}
