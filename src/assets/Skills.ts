import { Skill } from '../interfaces/Interfaces';

const skills: Skill[] = [
  {
    title: 'Communication',
    category: ['협업'],
    description: [
      '소통은 업무의 효율성과 직결된다고 믿기에 팀원들과 적극적으로 소통합니다.',
      '솔직함과 무례함의 차이를 인지하고 있습니다.',
      '협업을 위해 Notion, Slack, Trello를 적극적으로 사용합니다.',
      '타 직무와의 소통을 위해 항상 노력합니다.',
    ],
  },
  {
    title: 'Flutter',
    category: ['앱', '크로스플랫폼'],
    description: [
      'App과 Widget의 라이프 사이클을 이해하고 상황에 맞게 사용할 수 있습니다.',
      'GetX를 활용하여 상태관리 및 가독성을 위한 코드를 작성하려 노력합니다.',
      '효율적이고 보다 안정된 서비스를 위해 테스트 코드 활용에 대해 공부하고 있습니다.',
    ],
  },
  {
    title: 'React',
    category: ['웹', '크로스플랫폼'],
    description: [
      '컴포넌트 라이프 사이클을 이해하고 상황에 맞게 사용하려 합니다.',
      '재사용성을 위한 Custom Hook과 컴포넌트를 구성하려합니다.',
    ],
  },
  {
    title: 'Google Analytics',
    category: ['협업', '데이터시각화'],
    description: [
      'Google Analytics 및 페이스북 픽셀을 활용하여 마케팅 및 기획팀에게 서비스에 대한 데이터 제공하였습니다.',
    ],
  },
  {
    title: 'Animation',
    category: ['애니메이션', 'UX/UI'],
    description: [
      '유저 인터렉티브한 작업을 즐깁니다.',
      'flutter와 react 환경에서 적절한 애니메이션 기능을 구현할 수 있습니다.',
    ],
  },
  {
    title: 'UX/UI',
    category: ['애니메이션', 'UX/UI', '기획'],
    description: [
      '유저입장에서 기능을 고려합니다.',
      '기획, 디자인, 개발 모든 과정에 참여하여 ux/ui에 대해 고민하고 있습니다.',
      '기기 사이즈에 적절한 ui를 구현할 수 있습니다.',
    ],
  },
  {
    title: 'CSS',
    category: ['애니메이션', 'UX/UI'],
    description: [
      '유저 인터렉티브한 작업을 즐깁니다.',
      '기기 사이즈에 적절한 ui를 구현할 수 있습니다.',
    ],
  },
  {
    title: 'HTML',
    category: ['애니메이션', 'UX/UI'],
    description: [
      'sementic한 마크업을 준수합니다.',
      '웹 접근성에 대해 고민합니다.',
    ],
  },
  {
    title: 'Dart',
    category: ['앱', '정적언어'],
    description: ['정적언어인 dart와 typescript로 작업합니다.'],
  },
  {
    title: 'TypeScripts',
    category: ['정적언어'],
    description: ['정적언어인 typescript와 dart로 작업합니다.'],
  },
  {
    title: 'CI/CD',
    category: ['협업', '자동배포'],
    description: [
      '효율적인 작업을 위해 Fastlane과 Firebase App Distribution을 사용하여 자동배포 및 테스트 버전 관리를 합니다.  ',
    ],
  },
  {
    title: 'StateManagements',
    category: ['상태관리'],
    description: [
      'GetX로 상태관리합니다.',
      'recoil로 상태관리합니다.',
      '각 프로젝트에 적절한 디자인패턴에 대해 고민합니다.',
    ],
  },
  {
    title: 'GetX',
    category: ['상태관리'],
    description: [
      'Package 형태의 GetXpattern을 차용하여, Model, Providers, Repository, Contoller, UI, Binding, Routes로 나누어 data와 logic 및 UI를 분리하여 작업하였습니다.',
    ],
  },
  {
    title: 'Git',
    category: ['협업'],
    description: [' Git을 사용하며 Git Flow를 이해하고 있습니다.'],
  },

  { title: 'recoil', category: ['상태관리'], description: [] },
  {
    title: 'DataVisualization',
    category: ['협업', '데이터시각화'],
    description: [
      'Google Analytics 및 페이스북 픽셀을 활용하여 마케팅 및 기획팀에게 서비스에 대한 데이터 제공하였습니다.',
      '사내에서 사용하는 관리자 페이지 작업을 진행했습니다.',
    ],
  },
];

export default skills;
