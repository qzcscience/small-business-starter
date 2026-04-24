export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductApplication {
  name: string;
  image: string;
  href?: string;
}

export interface Product {
  slug: string;
  pageHref: string;
  name: string;
  title: string;
  description: string;
  images: { src: string; alt?: string }[];
  videoSrc?: string;
  specs: ProductSpec[];
  applications: ProductApplication[];
  ctaLabel: string;
  ctaHref: string;
}

export const products: Record<string, Product> = {
  'helium-leak-detector': {
    slug: 'helium-leak-detector',
    pageHref: '/products/helium-leak-detector-SFJ-231',
    name: 'SFJ-231',
    title: 'Helium Leak Detector SFJ-231',
    description: '面对行业对微米级泄漏的检测需求，海瑞思全新推出HM-400氦质谱检漏仪，深度融合磁偏转技术与质谱分析法，以5×10⁻¹³Pa・m³/s级超高精度灵敏度，构建"密封性检测+漏点定位"密封质量防护网，全方位覆盖动力电池及正负压多场景检测需求，让安全隐患在技术突破中无处遁形。',
    images: [
      { src: 'https://picsum.photos/600/450?random=11', alt: 'HM-400 正面视图' },
      { src: 'https://picsum.photos/600/450?random=12', alt: 'HM-400 操作面板' },
      { src: 'https://picsum.photos/600/450?random=13', alt: 'HM-400 侧面视图' },
      { src: 'https://picsum.photos/600/450?random=14', alt: 'HM-400 检测中' },
    ],
    videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1',
    specs: [
      { label: '高敏精准', value: '最小可检漏率 5*10⁻¹³Pa·m³/s，极致灵敏' },
      { label: '双压兼容', value: '正压负压皆可检，全面覆盖需求' },
      { label: '智能稳定', value: '自动跟踪背景，算法快速可靠' },
      { label: '长效防护', value: '双铱丝离子源，超快防大气冲击' },
    ],
    applications: [
      { name: '电子与半导体', image: 'https://picsum.photos/200/200?random=20' },
      { name: '航空航天', image: 'https://picsum.photos/200/200?random=21' },
      { name: '核工业', image: 'https://picsum.photos/200/200?random=22' },
      { name: '金属制造', image: 'https://picsum.photos/200/200?random=23' },
      { name: '空调制冷', image: 'https://picsum.photos/200/200?random=24' },
      { name: '能源行业', image: 'https://picsum.photos/200/200?random=25' },
      { name: '汽车行业', image: 'https://picsum.photos/200/200?random=26' },
      { name: '医疗器械', image: 'https://picsum.photos/200/200?random=27' },
    ],
    ctaLabel: 'Get a Free Quote',
    ctaHref: '/contact',
  },
};
