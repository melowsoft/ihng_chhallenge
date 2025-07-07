import React from "react";
import {
  DotsThreeVertical,
  HeartBreak,
  StarHalf,
  TrendUp,
  XCircle,
} from "phosphor-react";
import { HCP } from "../../types/network.types";
import {
  ProfilePanelContainer,
  ProfileMainInfo,
  ProfileAvatar,
  ProfileDetails,
  ProfileName,
  ProfileDesc,
  CloseButton,
  ProfileStats,
  StatItem,
  StatLabel,
  StatValue,
  ViewProfileButton,
  ResumeButton,
  MetricsSection,
  MetricItem,
  MetricInfo,
  MetricLabel,
  MetricValue,
  MetricChange,
  AboutSection,
  AboutText,
  EducationSection,
  EducationItem,
  EducationIcon,
  EducationDetails,
  ProfileHero,
  ProfileAvatarWrapper,
  ProfileContent,
  ProfileHeader,
  BadgeWrapper,
  Badge,
  HorizontalLine,
  ButtonsWrapper,
  MenuButton,
  ProfileBody,
} from "./styles";

import MapImage from "../../assets/images/image_map.png";

interface ProfileViewProps {
  hcp: HCP | null;
  onClose: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ hcp, onClose }) => {
  if (!hcp) return null;

  return (
    <ProfilePanelContainer>
      <ProfileHeader>
        <ProfileHero style={{ backgroundImage: `url(${MapImage})` }}>
          <CloseButton onClick={onClose}>
            <XCircle size={24} />
          </CloseButton>
        </ProfileHero>
        <ProfileContent>
          <ProfileMainInfo>
            <ProfileAvatarWrapper>
              <ProfileAvatar
                src={
                  hcp.profileImage ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${hcp.id}`
                }
                alt={hcp.name}
              />
            </ProfileAvatarWrapper>
            <ProfileDetails>
              <ProfileName>{hcp.name}</ProfileName>
              <BadgeWrapper>
                <Badge>{hcp.title}</Badge>
                <Badge>{`${hcp.age}, ${hcp.location}`}</Badge>
              </BadgeWrapper>
              <ProfileDesc>
                {hcp.specialization ? hcp.specialization : "N/A"}
              </ProfileDesc>
            </ProfileDetails>
            <ProfileStats>
              <StatItem>
                <StatLabel>Peers</StatLabel>
                <StatValue>{hcp.peers}</StatValue>
              </StatItem>
              <HorizontalLine />
              <StatItem>
                <StatLabel>Following</StatLabel>
                <StatValue>{hcp.following}</StatValue>
              </StatItem>
            </ProfileStats>

            <ButtonsWrapper>
              <ViewProfileButton>View Profile</ViewProfileButton>
              <ResumeButton>Resume</ResumeButton>
              <MenuButton>
                <DotsThreeVertical size={24} />
              </MenuButton>
            </ButtonsWrapper>
          </ProfileMainInfo>
        </ProfileContent>
      </ProfileHeader>

      <ProfileBody>
        {hcp.patientServed && (
          <MetricsSection>
            {hcp.patientServed && (
              <MetricItem>
                <MetricInfo>
                  <HeartBreak />
                  <MetricLabel>Patient Served</MetricLabel>
                </MetricInfo>
                <MetricValue>{hcp.patientServed}</MetricValue>
                <MetricChange>
                  <TrendUp />
                  +20
                </MetricChange>
              </MetricItem>
            )}

            {hcp.successRate && (
              <MetricItem>
                <MetricInfo>
                  <StarHalf />
                  <MetricLabel>Success rate</MetricLabel>
                </MetricInfo>
                <MetricValue>{hcp.successRate}%</MetricValue>
                <MetricChange>
                  <TrendUp />
                  +15%
                </MetricChange>
              </MetricItem>
            )}
          </MetricsSection>
        )}

        <AboutSection>
          <h3>About</h3>
          <AboutText>
            {hcp.specialization
              ? `Specializing in ${hcp.specialization}. `
              : ""}
            Experienced healthcare professional with a strong background in
            patient care and medical research.
            {hcp.location ? ` Based in ${hcp.location}.` : ""}
          </AboutText>
        </AboutSection>

        {hcp.education && hcp.education.length > 0 && (
          <EducationSection>
            <h3>Education</h3>
            {hcp.education.map((edu, index) => (
              <EducationItem key={index}>
                <EducationIcon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 14L21 9L12 4L3 9L12 14Z"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14L18.16 10.58C18.69 10.29 19.34 10.52 19.57 11.06C19.68 11.31 19.69 11.59 19.6 11.85L17.44 18.27C17.21 18.94 16.59 19.4 15.89 19.4H8.11C7.41 19.4 6.79 18.94 6.56 18.27L4.4 11.85C4.21 11.29 4.49 10.69 5.05 10.5C5.31 10.41 5.59 10.42 5.84 10.53L12 14Z"
                      fill="#EBF5FF"
                    />
                  </svg>
                </EducationIcon>
                <EducationDetails>
                  <h4>{edu.institution}</h4>
                  <p>{edu.degree}</p>
                  <p>{edu.field}</p>
                  <p>{edu.year}</p>
                </EducationDetails>
              </EducationItem>
            ))}
          </EducationSection>
        )}
      </ProfileBody>
    </ProfilePanelContainer>
  );
};

export default ProfileView;
