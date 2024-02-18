import { styled } from 'styled-components';
import theme from 'components/themeJSX';

export const Content = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 461px;
  }
`;

export const ImgContainer = styled.div`
  height: 248px;
  margin-bottom: 14px;

  border-radius: 14px;
  overflow: hidden;
`;

export const DescriptionText = styled.p`
  margin-top: 14px;
  line-height: 1.42;
`;

export const BlockTitle = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;

  line-height: 1.42;
`;

export const AdditionalTextBlock = styled.p`
  color: ${theme.colors.translucentBlack_5};

  font-size: 12px;
  // font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Condition = styled.li`
  padding: 7px 14px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.2px;

  border-radius: 35px;
  background: ${theme.colors.lightGray};
`;

export const Value = styled.span`
  font-weight: 600;
  color: ${theme.colors.primaryBlue};
`;

export const Btn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 168px;
  padding: 12px 50px;
  margin-top: 28px;

  font-weight: 600;
  line-height: 1.43;

  border-radius: 12px;
  color: ${theme.colors.primaryWhite};
  background: ${theme.colors.primaryBlue};

  cursor: pointer;

  transition: background-color ${theme.animation.duration}
    ${theme.animation.cubicBezier};

  &:hover,
  &:focus {
    background: ${theme.colors.darkBlue};
  }
`;
