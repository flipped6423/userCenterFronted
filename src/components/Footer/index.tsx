import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'Lucky出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: 'CSDN',
          href: 'https://blog.csdn.net/m0_61364659?spm=1000.2115.3001.5343',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> flipped6423 GitHub</>,
          href: 'https://github.com/flipped6423',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
