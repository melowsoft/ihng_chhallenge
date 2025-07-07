import styled from "styled-components";

export const ProfilePanelContainer = styled.div`
  position: relative;
  flex: 1;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 12px;
  overflow-y: auto;
  scroll-behavior: smooth;
  z-index: 10;
  background: #f9fafb;
  max-height: 100vh;
`;

export const ProfileHero = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px 12px 0 0;
  border: 1px solid #e5e7eb;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileHeader = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 12px;
`;

export const ProfileBody = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 12px;
  margin-top: 20px;
`;

export const ShowcaseSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ProfileMainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: -60px;
  z-index: 100;
  width: 100%;
`;

export const ProfileAvatarWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  box-sizing: content-box;
  border: 1px solid #e5e7eb;
`;

export const ProfileAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Badge = styled.span`
  background: #e9f3fa;
  padding: 5px;
  border-radius: 6px;
  font-size: 12px;
  color: rgb(85 85 85);
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ProfileDetails = styled.div`
  flex: 1;
  text-align: center;
`;

export const ProfileName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
`;

export const ProfileTitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 2px 0;
`;

export const ProfileDesc = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s;
  display: inline-block;
  float: right;
  color: #6b7280;

  &:hover {
    background: #f3f4f6;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  gap: 24px;
`;

export const StatItem = styled.div`
  text-align: center;
  flex: 1;
`;

export const HorizontalLine = styled.hr`
  border-left: 1px;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
`;

export const StatValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`;

export const ViewProfileButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  max-width: 400px;
`;

export const MenuButton = styled.button`
  background: none;
  border: 1px solid #d1d5db;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResumeButton = styled.button`
  width: 100%;
  padding: 10px 24px;
  background: white;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #ebf5ff;
  }
`;

export const MetricsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-bottom: 24px;
  gap: 16px;
`;

export const MetricItem = styled.div`
  background-color: #f9fafb;
  flex: 1;
  height: 110px;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;

export const MetricIcon = styled.svg`
  flex-shrink: 0;
`;

export const MetricInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MetricLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  flex: 1;
`;

export const MetricValue = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #111827;
`;

export const MetricChange = styled.div`
  font-size: 12px;
  color: #10b981;
  padding: 2px 6px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const AboutSection = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 12px 0;
  }
`;

export const AboutText = styled.p`
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
`;

export const EducationSection = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 16px 0;
  }
`;

export const EducationItem = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const EducationIcon = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: #ebf5ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EducationDetails = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 13px;
    color: #4b5563;
    margin: 0 0 2px 0;

    &:nth-child(3) {
      font-size: 12px;
      color: #6b7280;
    }

    &:nth-child(4) {
      font-size: 12px;
      color: #9ca3af;
    }
  }
`;
