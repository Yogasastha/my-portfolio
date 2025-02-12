import React from "react";
import { Section, SectionTitle } from "./GlobalComponents";
import { CertificationsContainer, CertificationCard } from "./CertificationsStyledComponent";
import { certifications } from "../../data/constants";

const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <CertificationsContainer>
        {certifications.map((cert, index) => (
          <CertificationCard key={index} href={cert.link} target="_blank">
            <h3>{cert.title}</h3>
            <p>{cert.date}</p>
          </CertificationCard>
        ))}
      </CertificationsContainer>
    </Section>
  );
};

export default Certifications;
